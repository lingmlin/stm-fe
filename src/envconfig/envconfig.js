/**
 * 全局配置文件
 */
let baseURL;
let homePage;
let wsURL;

let imgUrl = '//elm.cangdu.org/img/';


if (process.env.NODE_ENV === 'development') {
	baseURL = '39.108.142.194:8080';
  // wsURL = '//ecs.qlm-edu.com/qlm-websocket';
  // baseURL = '//ecs.qlm-edu.com/qlm-education';
  // homePage = 'https://uat.qlm-edu.com/scratch';
} 
else if(process.env.NODE_ENV === 'mock'){
	baseURL = '39.108.142.194:8080';
  // wsURL = '//localhost:8889';
  // baseURL = '//localhost:8090';
  // homePage = '//localhost:8090/scratch';	
}
//prod
else {
	baseURL = '39.108.142.194:8080';
  // baseURL = '//ecs.qlmcode.com/qlm-education';
  // homePage = 'https://qlmcode.com/scratch';
}

export default { imgUrl, baseURL, homePage,wsURL };
