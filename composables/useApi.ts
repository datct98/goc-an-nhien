import axios, { type AxiosResponse } from "axios";
import { v4 as uuidv4 } from "uuid";

const defaulToken = "";
const loginUrl = "https://g-center.site:8888/";
const baseUrl = "https://g-center.site:9999/";

const debug = true;
let respData:
    | AxiosResponse<any, any>
    | PromiseLike<AxiosResponse<any, any>>
    | null = null;
const { $common } = useNuxtApp();


/**
 * Validate API parameters
 * @param url 
 * @returns 
 */
const validateAPI = (url: any) => {
    let check = true;
    let message = "";

    if (!url) {
        check = false;
        message += ", url is Null!";
    }

    return {
        check: check,
        message: message,
    };
};


/**
 * Check JWT token and prepare header for API request
 * @param url 
 * @param isBaseUrl 
 * @param isAuthorized 
 * @returns 
 */
const checkJwT = (url: string, isBaseUrl = true, isAuthorized = true) => {
    const jwt = localStorage.getItem("jwt");
    var data = null;
    var prefixUrl = baseUrl;

    if (!isBaseUrl) prefixUrl = loginUrl;

    data = {
        url: prefixUrl.concat(url),
        header: {},
    };

    if (!isAuthorized) {
        data.header = {
            "Content-Type": "application/json",
            traceId: uuidv4(),
        };
    } else {
        data.header = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
            traceId: uuidv4(),
        };
    }
    return data;
};

/**
     * Send GET Authen api
     * @param {*} url
     * @returns
     */
export const useSendGetMsAuthenApi = async (url: string) => {
    const test = validateAPI(url);
    let dataAuthen = checkJwT(url, false);
    // send api
    if (test.check) {
        try {
            const response = await axios
                .get(dataAuthen.url, {
                    headers: dataAuthen.header,
                })
                .then(function (response) {
                    respData = response;
                    if (debug) {
                        console.log(
                            `%c >>>> Calling GET api: /${url}`,
                            "color: #66ad73"
                        );
                        console.log("response data :", respData);
                    }
                    return respData;
                });
            return response.data;
        } catch (error: any) {
            if (debug) {
                console.error("Error fetching data:", error);
                console.error(url, dataAuthen.header);
            }
            let check = typeof error.response.data;
            if (check === "string") {
                $common.showError(error.response.data);
            } else {
                $common.showError(error.response.data.value);
            }
        }
    } else {
        console.error(test.message);
    }
    return [];
};