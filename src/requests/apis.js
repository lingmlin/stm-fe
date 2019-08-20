import envconfig from '~src/envconfig/envconfig';
const URL = envconfig.baseURL;

// apis
const APIS = {
  '/userAccount/findPwd': { method: 'POST', url: `${URL}/userAccount/findPwd` }, // 找回密码
  '/userAccount/getStudents': {
    method: 'GET',
    url: `${URL}/userAccount/getStudents`
  }
};

export default APIS;
