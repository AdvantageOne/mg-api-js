#!/usr/bin/env node

import fs from "node:fs";
import fsp from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const SOURCE_PACKAGE = "@advantageone/adv-mg-api-js";
const COPY_PATHS = ["src", "types", "README.md", ".editorconfig", ".yarnrc.yml", "tsconfig.json"];
const EXCLUDE_TOP_LEVEL = new Set(["node_modules", ".git", ".yarn"]);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const moduleDir = path.resolve(__dirname, "..");
const repoRoot = path.resolve(moduleDir, "..");

function log(message) {
  process.stdout.write(`${message}\n`);
}

function assertPatchVersion(version) {
  const match = version.match(/^(\d+)\.(\d+)\.(\d+)(.*)$/);
  if (!match) {
    throw new Error(`Unsupported version format: ${version}`);
  }
  return {
    major: match[1],
    minor: match[2],
    patch: Number(match[3]),
    suffix: match[4] || "",
  };
}

function bumpPatch(version) {
  const parsed = assertPatchVersion(version);
  return `${parsed.major}.${parsed.minor}.${parsed.patch + 1}${parsed.suffix}`;
}

async function run(command, args, cwd) {
  const { stdout } = await execFileAsync(command, args, { cwd });
  return stdout.trim();
}

function parseArgs(argv) {
  const options = {
    fromVersion: "latest",
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--from-version") {
      const value = argv[i + 1];
      if (!value || value.startsWith("--")) {
        throw new Error("Missing value for --from-version");
      }
      options.fromVersion = value;
      i += 1;
    }
  }

  return options;
}

async function packTarball(tempDir, fromVersion) {
  const output = await run("npm", ["pack", `${SOURCE_PACKAGE}@${fromVersion}`, "--silent"], tempDir);
  const tarballName = output.split("\n").pop()?.trim();
  if (!tarballName) {
    throw new Error("npm pack did not return a tarball name.");
  }
  const tarballPath = path.join(tempDir, tarballName);
  if (!fs.existsSync(tarballPath)) {
    throw new Error(`Packed tarball not found: ${tarballPath}`);
  }
  return tarballPath;
}

async function extractTarball(tarballPath, destination) {
  await run("tar", ["-xzf", tarballPath, "-C", destination], moduleDir);
}

async function removePath(targetPath) {
  await fsp.rm(targetPath, { recursive: true, force: true });
}

async function copyExact(sourcePath, destinationPath) {
  const stats = await fsp.stat(sourcePath);
  if (stats.isDirectory()) {
    await fsp.mkdir(destinationPath, { recursive: true });
    const entries = await fsp.readdir(sourcePath, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name === ".DS_Store") {
        continue;
      }
      const srcChild = path.join(sourcePath, entry.name);
      const dstChild = path.join(destinationPath, entry.name);
      if (entry.isDirectory()) {
        await copyExact(srcChild, dstChild);
      } else {
        await fsp.copyFile(srcChild, dstChild);
      }
    }
    return;
  }

  await fsp.mkdir(path.dirname(destinationPath), { recursive: true });
  await fsp.copyFile(sourcePath, destinationPath);
}

async function mirrorFromTarball(extractedPackageDir) {
  for (const relPath of COPY_PATHS) {
    const source = path.join(extractedPackageDir, relPath);
    const destination = path.join(moduleDir, relPath);
    if (!fs.existsSync(source)) {
      log(`Skipping missing path in source package: ${relPath}`);
      continue;
    }
    await removePath(destination);
    await copyExact(source, destination);
    log(`Synced ${relPath}`);
  }
}

async function bumpLocalVersion() {
  const packageJsonPath = path.join(moduleDir, "package.json");
  const content = await fsp.readFile(packageJsonPath, "utf8");
  const pkg = JSON.parse(content);
  const previousVersion = pkg.version;
  const nextVersion = bumpPatch(previousVersion);
  pkg.version = nextVersion;
  await fsp.writeFile(packageJsonPath, `${JSON.stringify(pkg, null, 2)}\n`, "utf8");
  log(`Version bumped ${previousVersion} -> ${nextVersion}`);
  return nextVersion;
}

async function cleanTransientFiles() {
  const entries = await fsp.readdir(moduleDir, { withFileTypes: true });
  for (const entry of entries) {
    if (!EXCLUDE_TOP_LEVEL.has(entry.name)) {
      continue;
    }
    await removePath(path.join(moduleDir, entry.name));
  }
}

async function releaseToPrivateRepo(version) {
  await run("git", ["add", "lib-module"], repoRoot);
  await run(
    "git",
    ["commit", "-m", `release(lib-module): sync from ${SOURCE_PACKAGE} and bump version to ${version}`],
    repoRoot
  );
  await run("git", ["push"], repoRoot);
  log("Private GitHub release commit pushed.");
}

async function main() {
  const { fromVersion } = parseArgs(process.argv.slice(2));
  const tempDir = await fsp.mkdtemp(path.join(os.tmpdir(), "mg-api-publish-"));
  try {
    log(`Packing ${SOURCE_PACKAGE}@${fromVersion} from npm registry`);
    const tarballPath = await packTarball(tempDir, fromVersion);
    await extractTarball(tarballPath, tempDir);

    const extractedPackageDir = path.join(tempDir, "package");
    if (!fs.existsSync(extractedPackageDir)) {
      throw new Error("Extracted package directory not found.");
    }

    await mirrorFromTarball(extractedPackageDir);
    await cleanTransientFiles();
    const nextVersion = await bumpLocalVersion();
    await releaseToPrivateRepo(nextVersion);
  } finally {
    await removePath(tempDir);
  }
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
