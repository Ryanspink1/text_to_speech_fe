import axios from "axios";

export const AxiosRequest = (requestParams) => {
  return axios({
    data:    requestParams.data,
    method:  requestParams.method,
    url:     requestParams.url,
    headers: requestParams.headers
  });
}
