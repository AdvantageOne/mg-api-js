export default LocalStorageMock;
/**
 * A local storage mock to be used with node. Intended to
 * be an easy solution to re-working the existing localstorage system
 * and maintaining legacy support.
 *
 * Nodejs has several libraries that create it's own localStorage
 * functionality, but all of these seem to rely on node's filesystem
 * library (fs) to make things work. This turns out to be a significant
 * issue because webpack can't compile the fs library:
 *  - No comparable function in the browser
 *  - Not supported by their (now depreciated) core module mocks
 *          https://www.npmjs.com/package/node-libs-browser
 *
 * Using the localstorage libraries in the api will work provided the
 * end user is also using webpack, and adds
 *
 *      node: {
 *          fs: 'empty'
 *      }
 *
 * to their config file, but that would break legacy support as
 * most legacy api addins will likely use gulp
 */
declare class LocalStorageMock {
    _state: {};
    getItem(key: any): any;
    setItem(key: any, value: any): void;
    removeItem(key: any): void;
    clear(): void;
}
