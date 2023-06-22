export default AxiosCall;
declare class AxiosCall {
    constructor(method: any, server: any, params: any, callbackSuccess: any, callbackError: any);
    config: {
        headers: {
            'content-type': string;
        };
    };
    callbackSuccess: any;
    callbackError: any;
    server: any;
    body: {
        method: any;
        params: any;
    };
    getCallUrl(): string;
    encode(data: any): string;
    /**
     * Sends axios request
     * @param {int} timeout amount in milliseconds for timeout.
     *                      options.timeout * 1000 is a good start
     *                      Defaults to no timeout (0)
     * @returns {Promise} Axios promise
     */
    send(timeout: int): Promise<any>;
    request: import("axios").AxiosPromise<any>;
}
