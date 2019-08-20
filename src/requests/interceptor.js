

import axios from 'axios';
import * as loginActions from '~src/store/login/actions';
import store from '~src/store/store';

// 拦截 request ，设置全局请求为 ajax 请求
axios.interceptors.request.use(config => {
  config.withCredentials = true;
  config.headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  };

  return config;
});

// 拦截响应 response，并做一些错误处理
axios.interceptors.response.use(
  response => {
    const data = response.data;

    // 根据返回的 code 值来做不同的处理
    switch (data.state.code) {
      case 2000:
        // 这一步保证数据返回，如果没有 return 则会走接下来的代码，不是未登录就是报错
        return (
          data.data || data.state.msg || '请求成功，但此接口没有 data 字段'
        );

      case 4001:
        if (data.loginBox) {
          // 表示用户未登录，需要弹出登录框
          store.dispatch(loginActions.openModal);
        }

        return data.data || null;

      // case 5000:
      //   // 登录失败
      //   return data;

      default:
        return data;
    }
    // 若不是正确的返回 code ，且已经登录，就抛出错误
    // const err = new Error(data.description);

    // err.data = data;
    // err.response = response;

    // throw err;
  },
  err => {
    // 这里是返回状态码不为 200 时候的错误处理
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误';
          break;

        case 401:
          err.message = '未授权，请登录';
          break;

        case 403:
          err.message = '拒绝访问';
          break;

        case 404:
          err.message = `请求地址出错: ${err.response.config.url}`;
          break;

        case 408:
          err.message = '请求超时';
          break;

        case 500:
          err.message = '服务器内部错误';
          break;

        case 501:
          err.message = '服务未实现';
          break;

        case 502:
          err.message = '网关错误';
          break;

        case 503:
          err.message = '服务不可用';
          break;

        case 504:
          err.message = '网关超时';
          break;

        case 505:
          err.message = 'HTTP版本不受支持';
          break;

        default:
      }
    }

    return Promise.reject(err);
  }
);

export default axios;
