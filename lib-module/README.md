# lib-module

Do convert the mg-api-js library to an ESM module the following was done:

# Follow this typescript guide to generate a base set of types:
https://www.typescriptlang.org/docs/handbook/declaration-files/dts-from-js.html

# Modify GeotabApi declaration
The callbacks in the functions are optional but the generation ignores that.  So go make all of the callback functions an optional parameter

# Modify all code files
Go in and remove the 'exports =' and change all requires to be ESM imports

# Modify the type files
Then I added a index.d.ts file which contains all of the necessary declaration that something outside of this library would need.

# Package.json updates
Add the following to package.json:
types: "./types/index.d.ts"
main: "./src/index.js"
type: "module"

# Usage
Check out the sample project in the directory above this on how to then use it.