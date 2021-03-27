import axios from "axios";

const service = axios.create({
  baseURL: '', // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000, // request timeout
});

service.defaults.headers.post["Content-Type"] =
  "application/json; charset=utf-8";

// request interceptor
// service.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     console.log(error); // for debug
//     return Promise.reject(error);
//   }
// );

// response interceptor
// service.interceptors.response.use(
//   (response) => {
//     const res = response.data;

//     // if the custom code is not 200, it is judged as an error.
//     if (res.code !== 200) {
//       console.log("出现错误，请稍后再试");
//     } else {
//       return res;
//     }
//   },
//   (error) => {
//     console.log("err" + error); // for debug
//     return Promise.reject(error);
//   }
// );

export default service;
