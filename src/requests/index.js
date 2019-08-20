// const axios = require('axios');
import APIS from './apis';
import axios from './interceptor';

/*
* @param api: API 路径
* @param params: 参数
* @param callback: 回调
*/

function sendRequest(api, params, callback) {
  // 如果没有找到该 API，报错
  if (!APIS[api]) {
    console.error('没找到 "' + api + '". 请确保路径正确');
    return;
  }

  const options = {};
  options.method = APIS[api].method;
  options.url = APIS[api].url;

  // 如果只有两个参数，params 改为 callback
  if (!callback) {
    callback = params;
    params = null;
  }

  if (params) {
    if (options.method.toUpperCase() === 'GET') {
      options.params = params;
    } else if (options.method.toUpperCase() === 'POST') {
      options.data = params;
    }
  }

  // @todo 调试
  // 待删除
  // options.method = 'GET';
  // if (params) {
  //   options.params = params;
  // }

  axios(options)
    .then(res => {
      callback(res);
    })
    .catch(error => {
      // 无法连接接口。
      console.error('******* network error *******');
      console.error('Request URL: ' + options.url);
      console.error(error);
      console.error('******* network error *******');
    });
}

export default sendRequest;
