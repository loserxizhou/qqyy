import axios from "axios";
// axios.defaults.baseURL = "/proxy";

const service = axios.create({
  timeout: 10000
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(new Error("errorMsg"));
  }
);

service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      if (response.data.code === 401) {
        console.log("未登陆");
      }
      return response.data;
    } else {
      Promise.reject(new Error("errorMsg"));
    }
  },
  error => {
    console.log(error);
    return Promise.reject(new Error("errorMsg"));
  }
);

export default service;
