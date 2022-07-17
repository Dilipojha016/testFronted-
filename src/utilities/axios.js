import axios from "axios";

import { getToken } from "./common";
const url = process.env.REACT_APP_BASEPATH;
const token = getToken();

const axiosIntance = axios.create({
  baseURL: `${url}/api`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': `${url}`,
    'Access-Control-Allow-Credentials': 'true',
    Authorization: token ? token : '',
    authentication: token ? token : ''
  }
});

axiosIntance.interceptors.request.use((req) => {
  if (getToken()) {
    req.headers["authentication"] = getToken();
  }
  return req;
});

// axiosIntance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (error) => {
//     console.log(error.response);
//     const status = error.response ? error.response.status : 500;
//     if (status && status === 500) {
//       localStorage.clear();
//       store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosIntance;