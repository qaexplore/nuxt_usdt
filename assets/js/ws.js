import Utils from './utils'
class Socket {
  constructor(url, store, route) {
    this.url = url
    this.ws = {}
    this.reConnectTimer = null
    this.count = 0
    this.timer = null
    this.closeTimer = null
    this.dataId = null
    this.store = store
    this.route = route
  }
  // 连接
  connection() {
    if (process.client) {
      window.ws = this.ws = new WebSocket(this.url)
    }
    this.ws.onopen = () => {
      this.check()
      this.store.commit('market/SET_FIRSTORDER', true)
      this.store.commit('market/SET_CONNECT', true)
    }
    this.ws.onmessage = (data) => {
      if (data.data instanceof Blob) {
        this.transData(data.data)
      }
    }
    this.ws.onerror = () => {
      this.closeCheck()
      this.store.commit('market/SET_CONNECT', false)
      this.reConnection()
    }
    this.ws.onclose = () => {
      this.closeCheck()
      this.store.commit('market/SET_CONNECT', false)
      this.reConnection()
    }
  }
  // 重连
  reConnection() {
    clearTimeout(this.reConnectTimer);
    this.count += 1
    if (this.ws.readyState == 1) {
      this.count = 0;
    } else {
      if (this.ws.readyState == 3) {
        this.connection();
      }
      this.reConnectTimer = setTimeout(() => {
        this.reConnection()
      }, 2000);
    }
  }
  // 心跳检查
  check() {
    this.ws.send("{'event':'ping'}")
    clearTimeout(this.closeTimer)
    this.closeTimer = setTimeout(() => {
      this.ws.close()
    }, 1000)
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.check()
    }, 30000)
  }
  // 关闭定时器
  closeCheck() {
    clearTimeout(this.timer)
    clearTimeout(this.closeTimer)
  }
  // 接收ping返回信息
  onPong(data) {
    data.event === 'pong' && clearTimeout(this.closeTimer)
  }
  // 数据处理
  transData(data) {
    // console.log('wss',data)
    let that = this
    Utils.transData(data, function (data) {
      that.onPong(data)
      switch (data.type) {
        case 'BAR_DATA':
          that.klineCallBack(data)
          break
        case 'ORDER_BOOK':
          that.orderBookCallBack(data)
          break
        case 'TRADE_HISTORY':
          that.tradeHistory(data)
          break
        case 'TICKER':
          that.tickerCallBack(data)
          break
        case 'FUTURE_ORDER':
          that.orderCallBack(data)
          break
        case 'FUTURE_POSITION':
          that.positionCallBack(data)
          break
        case 'FUTURE_MARKET':
          that.marketCallBack(data)
          break
        case 'ALL_INDEX_PRICE':
          that.allIndexPrice(data)
      }
    })
  }
  // k线
  klineCallBack(data) {
    //console.log(data)
    window.refresh && window.refresh(data.data)
  }
  // 深度
  orderBookCallBack(data) {
    // console.log(data)
    let productId = this.route.params.id;
    if (data.product !== productId) return;
    this.dataId = data.id
    if (data.id - this.dataId !== 1 && data.id - this.dataId !== 0) {
      sub.cancelOrderBook(data.product)
      this.dataId = null
      sub.subOrderBook(data.product)
    }
    Object.keys(data.data).length > 0 && this.store.dispatch('market/saveOrder', this.orderBookData(data, data.product))
  }
  orderBookData(data, id) {
    if (this.store.state.market.firstOrder) {
      this.store.commit('market/SET_FIRSTORDER', false)
      return data
    }
    let oldData = this.store.state.market.order[id]
    let obj = {}
    obj['bids'] = this.formatOrderBook(oldData, data, 'bids')
    obj['asks'] = this.formatOrderBook(oldData, data, 'asks')
    return obj
  }

  formatOrderBook(oldData, newData, type) {
    if (newData && oldData && newData[type] && oldData[type]) {
      for (let i = newData[type].length; i--;) {
        let bl = true
        for (let j = oldData[type].length; j--;) {
          if (Number(newData[type][i][0]) > Number(oldData[type][j][0])) {
            if (Number(newData[type][i][1]) !== 0) {
              oldData[type].splice(j + 1, 0, newData[type][i])
            }
            bl = false
            break
          } else if (Number(newData[type][i][0]) === Number(oldData[type][j][0])) {
            if (Number(newData[type][i][1]) === 0) {
              oldData[type].splice(j, 1)
            } else {
              oldData[type].splice(j, 1, newData[type][i])
            }
            bl = false
            break
          }
        }
        if (bl && Number(newData[type][i][1]) !== 0) {
          oldData[type].unshift(newData[type][i])
        }
      }
      return oldData[type]
    } else if (newData) {
      return newData[type] || []
    }
  }
  // 成交历史
  tradeHistory(data) {
    //console.log(data)
    this.store.commit('market/SET_HISTORYLIST', data.data)
  }
  // 最新价
  tickerCallBack(data) {
    //console.log(data)
    this.store.commit('market/SET_TICKERS', data.data)
  }
  // 委托成功推送
  orderCallBack(data) {
    this.store.commit('market/SET_WS_ORDER', data.data)
  }
  // 暂时没用
  positionCallBack(data) {
    // console.log(data)
  }
  // 市场信息（指数价等）
  marketCallBack(data) {
    data.data.contractId = data.product
    this.store.commit('market/SET_MARKET', data.data)
  }
  // 获取全部指数
  allIndexPrice(data) {
    let datas = data.data;
    let obj = {};
    for (let k in datas) {
      let data_obj = JSON.parse(datas[k]);
      data_obj.indexPrice = data_obj.price;
      obj[k] = data_obj;
    }
    this.store.commit('market/SET_MARKET_ALL', obj);
  }
}

export default Socket
