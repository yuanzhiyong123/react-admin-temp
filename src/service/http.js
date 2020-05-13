import axios from "axios";
// import qs from "qs";
import { msgTip } from "@common/js/util";

// axios.defaults.headers.common['Authorization'] = window.localStorage.getItem('token') || '';
// axios.defaults.headers.common["Content-Type"] =
//   "application/x-www-form-urlencoded";

axios.interceptors.request.use(
  function(config) {
    if (window.localStorage.getItem("token")) {
      //判断token是否存在
      config.headers.Authorization = localStorage.token; //将token设置成请求头
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if (err.response) {
      // const status = err.response.status;
      // if (status === 401) {
      //   //登录失效拦截，跳转登录页面
      //   const loginUrl =
      //     err.response.data &&
      //     err.response.data.data &&
      //     err.response.data.data.url
      //       ? err.response.data.data.url
      //       : ""; //获取跳转登录的url
      //   window.localStorage.setItem(
      //     "loginUrl",
      //     encodeURIComponent(loginUrl),
      //     10
      //   ); // 保存到cookie
      //   // msgTip('error', '登陆失效');
      //   jumpLogin(); //跳转到登陆页面
      // }
    }
    return Promise.reject(err);
  }
);

export const post = ({ url, data = {}, config = {} }) => {
  return new Promise((reject, resolve) => {
    axios
      .post(url, data, config)
      .then(res => {
        reject(res.data);
      })
      .catch(err => {
        msgTip("error", err.message);
        resolve(err);
      });
  });
};
export const get = ({ url, data = {}, config = {} }) => {
  return new Promise((reject, resolve) => {
    axios
      .get(url, {
        params: data,
        ...config
      })
      .then(res => {
        reject(res.data);
      })
      .catch(err => {
        msgTip("error", err.message);
        resolve(err);
      });
  });
};
