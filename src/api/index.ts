import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
// import { ElMessage } from 'element-plus'

export interface ResponseData {
  code: string
  data?: any
  message: string
}

// console.log('import.meta.env: ', import.meta.env);

// 创建 axios 实例
let service: AxiosInstance | any
// console.log(process.env.NODE_ENV)
console.log(import.meta.env.VITE_APP_CONTEXT)
// console.log(process.env.VITE_APP_TITLE)

// if (process.env.NODE_ENV === 'production') {
//   /*第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境*/
//   if (process.env.VUE_APP_FLAG === 'pro') {
//     //production 生产环境
//     // axios.defaults.baseURL = 'http://api-cs.livchatvideo.com/' //路径
//     console.log('生产环境')
//   } else {
//     //test 测试环境
//     // axios.defaults.baseURL = 'http://54.222.148.146:47000/' //路径
//     console.log('测试环境')
//   }
// } else {
//   //dev 开发环境
//   // axios.defaults.baseURL = 'http://54.222.148.146:47000/'
//   console.log('开发环境')
// }
if (import.meta.env.MODE === 'development') {
  service = axios.create({
    baseURL:
      'https://www.fastmock.site/mock/0edf60231b300000bc5e80bfae7768f8/shop/', // api 的 base_url
    timeout: 50000 // 请求超时时间
  })
} else {
  // 生产环境下
  service = axios.create({
    baseURL:
      'https://www.fastmock.site/mock/0edf60231b300000bc5e80bfae7768f8/shop/',
    timeout: 50000
  })
}

// request 拦截器 axios 的一些配置
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: any) => {
    // Do something with request error
    console.error('error:', error) // for debug
    Promise.reject(error)
  }
)

// respone 拦截器 axios 的一些配置
service.interceptors.response.use(
  (res: AxiosResponse) => {
    // Some example codes here:
    // code == 0: success
    if (res.status === 200) {
      const data: ResponseData = res.data
      if (data.code === '0000') {
        return data.data
      } else {
        console.log('网络错误！')
      }
    } else {
      console.log('网络错误！')

      return Promise.reject(new Error(res.data.message || 'Error'))
    }
  },
  (error: any) => Promise.reject(error)
)

export default service
