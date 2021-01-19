import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'

import baseUrl from './baseUrl'
import { getToken } from '@/utils/auth'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分

  baseURL: baseUrl,
  // 超时
  timeout: 10000
})
// request拦截器  // config.baseURL = 'http://' + window.location.host + '/python' // 生产环境url
service.interceptors.request.use(
  config => {
    // if (/\/api\/v1/.test(config.url)) {
    //   // config.baseURL = 'http://39.99.152.221'
    //   config.baseURL = 'http://' + window.location.host + '/python'
    // } else {
    //   // if (/http:/.test(config.url)) { // 文献下载 请求
    //   //   config.baseURL = ''
    //   //   config.headers['responseType'] = 'arraybuffer'
    //   // } else { // 普通接口请求
    //   config.baseURL = baseUrl
    //   if (getToken()) {
    //     config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    //   }
    //   // }
    // }
    config.headers.Authorization = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(res => {
  const code = res.data.code
  const success = res.data.success
  if (code === 401) {
    MessageBox.confirm(
      '登录状态已过期，您可以继续留在该页面，或者重新登录',
      '系统提示',
      {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }
    ).then(() => {
      store.dispatch('LogOut').then(() => {
        window.location.href = location.origin + '/#/login'
      })
    })
  } else if (success || res.success) {
    return res.data
  } else if (code && code !== 200) {
    Message({
      message: res.data.msg,
      type: 'error',
      duration: 5 * 1000
    })
    // Notification.error({
    //   title: res.data.msg
    // })

    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('error')
  } else {
    return res.data
  }
},
error => {
  console.log('err' + error)
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
}
)

export default service
