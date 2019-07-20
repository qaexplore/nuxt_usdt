// axios配置
import Axios from 'axios'
import qs from 'qs'
import apiConfig from '@/assets/js/config/api.config'
import Cookie from '@/assets/js/config/cookie'
import store from '../../../store/index'

export const AxiosInit = (obj) => {
  obj = obj || {}
  const axios = Axios.create({
    baseURL: obj.url ? obj.url : apiConfig.baseURL,
    headers: {
      'Content-Type': obj.contentType ? obj.contentType : 'application/json;charset=UTF-8'
    },
    withCredentials: true
  })

  // POST传参序列化
  axios.interceptors.request.use((config) => {
    // post方法并且数据不是formData，序列化参数
    if (config.method === 'post' && config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8') {
      config.data = qs.stringify(config.data)
    }
    // 无token时，尝试重新获取token
    if (!config.headers['ACCESS_TOKEN']) {
      config.headers['ACCESS_TOKEN'] = Cookie.getCookie('token')
    }
    return config
  }, (error) => {
    console.log('错误的传参')
    return Promise.reject(error)
  })

  // code状态码200判断
  axios.interceptors.response.use((res) => {
    if (res.data.code === 10200000) {
      Cookie.clearCookie('token', apiConfig.domain)
      store.commit('SET_USERINFO', null)
      return Promise.reject(res)
    }
    if (parseInt(res.status) !== 200) return Promise.reject(res)
    if (res.data.code === 0) return res.data
    // console.log('200 进入return')
    return Promise.reject(res)
  }, (error) => {

    return Promise.reject(error)
  })

  return axios
}

let axios = AxiosInit()

export default axios
