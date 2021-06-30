import axios from 'axios';
if (process.env.NODE_ENV === 'production') {
  /*第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境*/
  if (process.env.VUE_APP_FLAG === 'pro') {
    //production 生产环境
    axios.defaults.baseURL = 'https://www.fastmock.site/mock/0edf60231b300000bc5e80bfae7768f8/shop/'; //路径
  } else {
    //test 测试环境
    axios.defaults.baseURL = 'https://www.fastmock.site/mock/0edf60231b300000bc5e80bfae7768f8/shop/'; //路径
  }
} else { //dev 开发环境 
  axios.defaults.baseURL = 'https://www.fastmock.site/mock/0edf60231b300000bc5e80bfae7768f8/shop/';
}

export function getBanner(){
    return axios.get('getBanner');
}
// export function _getProduct(){
//     return axios.get('getProduct');
// }

// http://54.222.148.146:81/payment/reconfirm_by_h5






