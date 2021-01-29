import axios from 'axios'
// import vm from '../main'
import { Toast } from 'vant';
import errorCode from '@/JS/errorCode'

/* 全局默认配置 */
var http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
/* 请求拦截器 */
http.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    config.headers.timestamp = Math.floor(new Date().getTime() / 1000)
       // get请求映射params参数
       if (config.method === 'get' && config.params) {
        let url = config.url + '?'
        for (const propName of Object.keys(config.params)) {
          const value = config.params[propName]
          var part = encodeURIComponent(propName) + '='
          if (value !== null && typeof (value) !== 'undefined' && value !== '') {
            if (typeof value === 'object') {
              for (const key of Object.keys(value)) {
                const params = propName + '[' + key + ']'
                var subPart = encodeURIComponent(params) + '='
                url += subPart + encodeURIComponent(value[key]) + '&'
              }
            } else {
              url += part + encodeURIComponent(value) + '&'
            }
          }
        }
        url = url.slice(0, -1)
        config.params = {}
        config.url = url
      }
    return config
  },
  error => {
    // vm.$loading.hide()
    return Promise.reject(error)
  }
)
/* 响应拦截器 */
http.interceptors.response.use(
  res => {
    const code = res.data.code || 200
     // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode.default
    if (code == 500) {
      Toast({
        type: 'fail',
        message:msg,
        duration: 300
      });
      return Promise.reject(new Error(msg))
    } else if (code !== 200) {
      Toast({
        type: 'fail',
        message: msg,
        duration: 300
      });
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('error')
    }else {
      return res.data
    }
    //  vm.$loading.hide()
    //  return res
  },
  error => {
    //  vm.$loading.hide()
    let { message } = error
    if (message === 'Network Error') {
      message = '后端接口连接异常'
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时'
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.substr(message.length - 3) + '异常'
    }
    Toast({
      type: 'fail',
      message: message,
      duration: 300
    });
    return Promise.reject(error)
  }
)
export default http