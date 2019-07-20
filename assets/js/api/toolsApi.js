import axios from '../axios/config'

let time = {
  offset: 8 * 60 * 1000
}
let timeFn = () => {
  return axios.get('/tools/time/zone/offset')
}
timeFn()
  .then(res => {
    time.offset = res.data.offset
  })
const ToolsActions = {
  time: time,
  // 获取合约列表
  getContractList() {
    return axios.post('/contract/list')
  },
  coin() {
    return axios.post('/tools/dict/currency/list')
  },
  product() {
    return axios.post('/tools/dict/product/list')
  },
  // 获取币种支持站点
  getCurrencyAll() {
    return axios.post('/tools/dict/site/currency/all')
  },
  // 获取主账户信息
  getMainSite() {
    return axios.post('/tools/dict/site/main')
  }
}

export default ToolsActions
