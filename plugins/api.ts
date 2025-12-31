import axios, { type AxiosResponse } from "axios";
import { v4 as uuidv4 } from "uuid";

export default defineNuxtPlugin({
  name: "api",
  setup() {
    const defaulToken = "";
    const loginUrl = "https://g-center.site:8888/";
    const baseUrl = "https://g-center.site:9999/";
    // const loginUrl = "https://apiv2.g-center.io.vn:8888/";
    // const baseUrl = "https://apiv2.g-center.io.vn:9999/";
    // const baseUrl = "https://apiv1.g-center.io.vn:8082/";

    const debug = true;
    let respData:
      | AxiosResponse<any, any>
      | PromiseLike<AxiosResponse<any, any>>
      | null = null;
    const { $common } = useNuxtApp();

    const defaultData = {
      url: "",
      header: {
        "Content-Type": "application/json",
        traceId: uuidv4(),
        Authorization: `Bearer ${defaulToken}`,
      },
    };

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
    const sendGetMsAuthenApi = async (url: string) => {
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
    /**
     * Send a POST api for update data
     * @param {*} url
     * @returns
     */
    const sendPostMsAuthenApi = async function (url: string, data: any) {
      const test = validateAPI(url);
      let dataAuthen = checkJwT(url, false);

      if (test.check) {
        try {
          await axios({
            method: "post",
            url: dataAuthen.url,
            responseType: "json",
            data: data,
            headers: dataAuthen.header,
          }).then(function (response) {
            respData = response;
            if (debug) {
              console.log(
                `%c >>>> Calling POST api: /${url}`,
                "color: #ff9b29"
              );
              console.log("Payload : ", data);
              console.log("response data :", respData);
            }
            return respData;
          });
        } catch (error: any) {
          if (debug) {
            console.error("Error fetching data:", error);
            console.error(url, dataAuthen.header, data);
          }
          console.log(error.response);
          $common.showError(error.response.data.message);
          return error.response;
        }
      } else {
        console.error(test.message);
      }
      return respData;
    };

    /**
     * Send a POST api for update data
     * @param {*} url
     * @returns
     */
    const sendLogin = async function (url: string, data: any) {
      const test = validateAPI(url);
      let dataAuthen = checkJwT(url, false, false);

      if (test.check) {
        try {
          await axios({
            method: "post",
            url: dataAuthen.url,
            responseType: "json",
            data: data,
            headers: dataAuthen.header,
          }).then(function (response) {
            respData = response;
            if (debug) {
              console.log(
                `%c >>>> Calling POST api: /${url}`,
                "color: #ff9b29"
              );
              console.log("Payload : ", data);
              console.log("response data :", respData);
            }
            return respData;
          });
        } catch (error: any) {
          if (debug) {
            console.error("Error fetching data:", error);
            console.error(url, dataAuthen.header, data);
          }
          console.log(error.response);
          $common.showError(error.response.data.message);
          return error.response;
        }
      } else {
        console.error(test.message);
      }
      return respData;
    };

    /**
     * Send a GET api for collecting data, pram sẽ nằm trên url
     * @param {*} url
     * @returns
     */
    const sendGetApi = async (url: string) => {
      const test = validateAPI(url);
      let dataAuthen = checkJwT(url, true);
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

    /**
     * Send a POST api for update data
     * @param {*} url
     * @returns
     */
    const sendPostApi = async function (url: string, data: any) {
      const test = validateAPI(url);
      let dataAuthen = checkJwT(url, true);
      if (test.check) {
        try {
          await axios({
            method: "post",
            url: dataAuthen.url,
            responseType: "json",
            data: data,
            headers: dataAuthen.header,
          }).then(function (response) {
            respData = response;
            if (debug) {
              console.log(
                `%c >>>> Calling POST api: /${url}`,
                "color: #ff9b29"
              );
              console.log("Payload : ", data);
              console.log("response data :", respData);
            }
            return respData;
          });
        } catch (error: any) {
          if (debug) {
            console.error("Error fetching data:", error);
            console.error(url, dataAuthen.header, data);
          }
          console.log(error.response);
          $common.showError(error.response.data.message);
          return error.response;
        }
      } else {
        console.error(test.message);
      }
      return respData;
    };

    /**
     *
     * @param {*} url
     * @returns
     */
    const sendPutApi = async function (url: string, data: any) {
      const test = validateAPI(url);
      let dataAuthen = checkJwT(url, true);
      if (test.check) {
        try {
          await axios({
            method: "put",
            url: dataAuthen.url,
            responseType: "json",
            data: data,
            headers: dataAuthen.header,
          }).then(function (response) {
            respData = response;
            if (debug) {
              console.log(
                `%c >>>> Calling POST api: /${url}`,
                "color: #ff9b29"
              );
              console.log("Payload : ", data);
              console.log("response data :", respData);
            }
            return respData;
          });
        } catch (error: any) {
          if (debug) {
            console.error("Error fetching data:", error);
            $common.showError(
              `Không lấy được thông tin api: ${url}, check log!!`
            );
          }
        }
      } else {
        console.error(test.message);
      }
      return respData;
    };

    /**
     *
     * @param {*} url
     * @returns
     */
    const sendDeleteApi = async function (url: string) {
      const test = validateAPI(url);
      let dataAuthen = checkJwT(url, true);
      if (test.check) {
        try {
          await axios({
            method: "delete",
            url: dataAuthen.url,
            responseType: "json",
            headers: dataAuthen.header,
          }).then(function (response) {
            respData = response;
            if (debug) {
              console.log(
                `%c >>>> Calling DELETE api: /${url}`,
                "color: #c93a46"
              );
              console.log("response data :", respData);
            }
            return respData;
          });
        } catch (error: any) {
          if (debug) {
            console.error("Error fetching data:", error);
            // Common.showError(`Không lấy được thông tin api: ${url}, check log!!`);
          }
          $common.showError(error.response.data);
        }
      } else {
        console.error(test.message);
      }
      return {
        status: "fail",
        message: test.message,
      };
    };

    return {
      provide: {
        api: {
          sendGetApi,
          sendPostApi,
          sendPutApi,
          sendDeleteApi,
          sendPostMsAuthenApi,
          sendGetMsAuthenApi,
          sendLogin,
        },
      },
    };
  },
});
