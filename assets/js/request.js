import SwapsApi from './api/swapsApi'
import Axios from 'axios'

class WsRq {
  constructor(store) {
    this.source = Axios.CancelToken.source()
    this.timer = null
    this.store = store
  }
  // 获取仓位信息
  getFront(id, cancel) {
    SwapsApi.getFront(id, cancel ? this.source.token : '').then((res) => {
      let obj = res.data && res.data.contractPosition || {}
      this.store.commit('market/SET_POSITION', obj)
    }).catch(err => {

    })
  }
  // 交易历史
  getTradeHistory(id, cancel) {
    SwapsApi.getTradeHistory(id, cancel ? this.source.token : '').then((res) => {
      let arr = res.data.tradeHistory || []
      this.store.commit('market/SET_HISTORYLIST', arr)
    }).catch(err => {

    })
  }
  // 获取最新价
  getTickerAll(cancel) {
    SwapsApi.getTickerAll(cancel ? this.source.token : '').then((res) => {
      let arr = res.data.ticker || []
      arr.forEach((item) => {
        this.store.commit('SET_TICKERS', item)
      })
    }).catch(err => {

    })
  }
  // 获取市场信息
  getMarketAll(cancel) {
    SwapsApi.getMarketAll(cancel ? this.source.token : '').then((res) => {
      let obj = res.data.marketData || {}
      for (let i in obj) {
        this.store.commit('market/SET_MARKET', obj[i])
      }
    }).catch(err => {

    })
  }
  // 获取k线数据
  getBar(obj, cancel) {
    SwapsApi.getBar(obj, cancel ? this.source.token : '').then((res) => {
      let arr = res.data.bar_data || []
      let obj = arr.pop() || {}
      this.store.commit('SET_SPECIALLASTPRICE', obj.close)
      window.refresh && window.refresh(obj)
    }).catch(err => {

    })
  }
  // 获取深度数据
  getOrderBook(id, cancel) {
    // 如果cancel为false则表示首次打开网站，为了确保切换时深度显示不会出现--则首次加载所有ordoerbook，（否则由于切换时连接ws则中断ajax所以会出现显示延迟），切换中断为了保证数据的准确性
    if (!cancel) {
      let contracts = this.store.state.market.contract || []
      contracts.forEach(item => {
        SwapsApi.getOrderBook(item.id, item.id.toString() === id.toString() ? this.source.token : '').then((res) => {
          let obj = res.data.deth || {}
          let data = {
            data: {
              bids: obj.bids,
              asks: obj.asks
            },
            // product: obj.contractId
            product: item.id
          }
          this.store.dispatch('saveOrder', data)
        }).catch(err => {

        })
      })
    } else {
      SwapsApi.getOrderBook(id, this.source.token).then((res) => {
        let obj = res.data.deth || {}
        let data = {
          data: {
            bids: obj.bids,
            asks: obj.asks
          },
          // product: obj.contractId
          product: item.id
        }
        this.store.dispatch('saveOrder', data)
      }).catch(err => {

      })
    }
  }
  // 获取全部合约指数
  getIndexPriceAll() {
    SwapsApi.getIndexPriceAll().then((res) => {
      if (res.code !== 0) return;
      let datas = res.data.indexPriceAll;
      let obj = {};
      for (let k in datas) {
        let data_obj = JSON.parse(datas[k]);
        data_obj.indexPrice = data_obj.price;
        obj[k] = data_obj;
      }
      this.store.commit('market/SET_MARKET_ALL', obj);
    }).catch(err => {

    })
  }
  // 轮询，cancel参数为连接socket成功后是否允许中断ajax请求
  getAll(id, cancel) {
    this.clear()
    this.getTradeHistory(id, cancel)
    this.getTickerAll(cancel)
    this.getMarketAll(cancel)
    this.getOrderBook(id, cancel)
    this.getIndexPriceAll();
    this.store.state.market.kLasttime && this.getBar({
      product: id,
      type: this.store.state.market.kType,
      since: this.store.state.market.kLasttime
    }, cancel)
    this.timer = setTimeout(() => {
      this.getAll(id, cancel)
    }, 5000)
  }
  clear() {
    clearTimeout(this.timer)
    this.cancel()
  }
  // 中断未返回的请求
  cancel() {
    this.source.cancel()
    this.source = Axios.CancelToken.source()
  }
}

export default WsRq
