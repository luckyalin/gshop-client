import axios from 'axios'

/* 根据webpack配置的环境的不同使用不同的请求地址 */
// switch (process.env.NODE_ENV) {
//   case 'production' :
//     axios.defaults.baseURL = 'http://localhost:4000/api'
//     break
//   case 'testing' :
//     axios.defaults.baseURL = 'http://localhost:4000/api'
//     break
//   default :
//     axios.defaults.baseURL = 'http://localhost:4000/api'
// }

/* 设置超时时间和跨域是否允许携带凭证 */
axios.defaults.timeout = 10000
axios.defaults.withCredentials = true

/* 设置请求传递数据的格式 x-www-form-urlencoded */
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.transformRequest = data => qs.stringify(data)

/* 设置请求拦截器 */
axios.interceptors.request.use(config => {
  /* 从localstorage中获取token */
  let token = localStorage.getItem('token')
  /* 如果token存在  将token设置到请求头中 */
  token && (config.headers.Authorization = token)
  /* 设置完之后return config  axios运行流程为promis传递依次运行 */
  return config
}, error => {
  /* 如果发生异常 则返回一场 */
  return error
})

/* axios默认 如果返回的状态码不是2开头的。直接执行error回调函数  */
/* 如果需要自定义校验响应状态码需要加以下配置  例：响应码为2开头或3开头 执行成功回调 */
// axios.defaults.validateStatus = status => {
//   return /^(2|3)\d{2}$/.test(status)
// }

/* 设置响应拦截器 */
axios.interceptors.response.use(response => {
  /* 如果成功 返回response对象中的data响应体 */
  return response.data
}, error => {
  let { response } = error
  if (response) {
    if (response.status) {
      switch (response.status) {
        /* 401当前请求需要用户验证  一般指未登录 */
        case 401:
          break
        case 403:
        /* 403一般指服务器已理解请求，但拒绝执行他 一般为token过期 */
          break
        case 404:
          break
      }
    }
  } else {
    /* 如果服务器没有返回结果  可能是断网了 */
    if (!window.navigator.onLine) {
      /* 如果是断网做断网处理 比如跳转到定制断网页面 */
      return
    }
    return Promise.reject(error)
  }
})

export default function ajax (url, param = {}, method = 'GET') {
  /* 判断请求方式 */
  if (method.toUpperCase() === 'GET') {
    if (Object.keys(param).length !== 0) {
      let parameter = ''
      Object.keys(param).forEach(function (key) {
        parameter += key + '=' + param[key] + '&'
      })
      parameter = parameter.substring(0, parameter.lastIndexOf('&'))
      url = url + '?' + parameter
    }
    return axios(url)
  } else {
    return axios.post(url, param)
  }
}
