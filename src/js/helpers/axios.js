import axios from "axios";

export const AxiosFunc = (requestParams) => {
  return axios({
    data:    requestParams.data,
    method:  requestParams.method,
    url:     requestParams.url,
    headers: requestParams.headers
  });
}
