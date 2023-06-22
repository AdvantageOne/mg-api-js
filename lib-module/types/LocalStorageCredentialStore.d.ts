export default LocalStorageCredentialStore;
/**
 * Object to interact with the localStorage for stored credentials.
 *      Can interact with localStorage (browser) or LocalStorageMock (node)
 */
declare class LocalStorageCredentialStore {
    credentials_key: string;
    server_key: string;
    localStorage: Storage | LocalStorageMock;
    get(): boolean;
    set(credentials: any, server: any): void;
    clear(): void;
}
import LocalStorageMock_1 = require("./LocalStorageMock");
import LocalStorageMock = LocalStorageMock_1.default;
