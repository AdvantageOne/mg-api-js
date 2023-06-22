export default ApiHelper;
/**
 * Helper method for GeotabApi.
 * Allows logic to remain somewhat encapsulated from the user
 */
declare class ApiHelper {
    constructor(authentication: any, options: any);
    options: {
        fullResponse: any;
        rememberMe: any;
        timeout: any;
        newCredentialStore: any;
    };
    credentialStore: any;
    cred: any;
    server: any;
    /**
     * Getters/Setters
     *  Helps reduce code when calling from GeotabApi
     */
    get sessionId(): any;
    get database(): any;
    get userName(): any;
    get password(): any;
    get rememberMe(): any;
    get fullResponse(): any;
    /**
     * Creates the credentialStore. Either an object provided by the user,
     *      created as a mock localStorage object (node) or a reference to
     *      the actual localStorage (browser)
     * @param {object} newStore an Override credentialStore
     */
    createStore(newStore: object): any;
    /**
     * checks the credentialStore for stored credentials
     * @returns false if no store, credentials object if there are credentials
     */
    getLocalCredentials(): any;
    /**
     * Sets the local credentials
     * @param {object} result credentials object using result of a promise
     */
    setLocalCredentials(result: object, server: any): void;
    clearLocalCredentials(): void;
    /**
     * Gets and stores authentication response using GeotabApi.authenticate()
     * @param {function} authenticate API authentication method - context binded to GeotabApi
     * @param {function} callbackError optional callback error for unsuccessful authentications
     * @param {boolean} rememberMe stores authentication once received
     */
    getAuthentication(authenticate: Function, callbackError: Function, rememberMe: boolean): Promise<undefined>;
    /**
     * When the user doesn't have fullResposne enabled, we put some promises in front of the call
     * to return only data.result to the user
     * @param {Promise} call Axios call
     */
    parseAxiosResponse(call: Promise<any>): Promise<any>;
    /**
     * Error handling - only called if fullresponse isn't enabled, and if the user hasn't provided a callback
     * @param {Promise} call Axios call
     */
    errorHandle(call: Promise<any>): Promise<any>;
    /**
     * Creates a new AxiosCall and returns it to the user. If the call fails,
     *      and the call isn't an authentication, the call will attempt to
     *      refresh the credentials
     *
     * @param {string} method method name for the API call
     * @param {Object} params method's parameters
     * @param {function} callbackSuccess Optional callback for successful calls
     * @param {function} callbackError Optional callback for unsuccessful calls
     * @param {function} authenticate authentication function. Context binded to GeotabApi
     * @param {boolean} rememberMe should store authentication results
     */
    sendAxiosCall(method: string, params: any, callbackSuccess: Function, callbackError: Function, authenticate: Function, rememberMe: boolean): Promise<any>;
}
