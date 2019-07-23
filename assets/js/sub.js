import Cookie from '@/assets/js/config/cookie'
class Sub {
  constructor(contract, store) {
    this.store = store
    // 需要订阅的信息列表
    this.subDatas = [{
      type: 'BAR_DATA',
      params: {
        key: 'period',
        value: this.getKtime()
      },
      event: 'SUB'
    },
    {
      list: contract,
      type: 'TICKER',
      event: 'SUB'
    },
    {
      type: 'FUTURE_MARKET',
      event: 'SUB'
    },
    {
      type: 'TRADE_HISTORY',
      event: 'SUB'
    },
    {
      type: 'ORDER_BOOK',
      event: 'SUB'
    },
    // 获取全部指数
    {
      type: 'ALL_INDEX_PRICE',
      event: 'SUB'
    },
    {
      type: 'FUTURE_POSITION',
      params: {
        key: 'userToken',
        value: Cookie.getCookie('token')
      },
      event: 'LOGIN'
    },
    {
      type: 'FUTURE_ORDER',
      params: {
        key: 'userToken',
        value: Cookie.getCookie('token')
      },
      event: 'LOGIN'
    }
    ]
  }
  // 获取k线时间
  getKtime() {
    return !!this.store ? this.store.state.market.kTime : ''
  }
  // 取消订阅k线
  cancelK(product) {
    let val = `{'event':'CANCEL','type':'BAR_DATA','product':'${product}','params':{'period':'${this.getKtime()}'}}`
    window.ws.readyState === 1 && window.ws.send(val)
  }
  // 重新订阅k线
  subK(product) {
    let val = `{'event':'SUB','type':'BAR_DATA','product':'${product}','params':{'period':'${this.getKtime()}'}}`
    window.ws.readyState === 1 && window.ws.send(val)
  }
  // 取消订阅orderBook
  cancelOrderBook(product) {
    let val = `{'event':'CANCEL','type':'ORDER_BOOK','product':'${product}'}`
    window.ws.readyState === 1 && window.ws.send(val)
  }
  // 重新订阅orderBook
  subOrderBook(product) {
    let val = `{'event':'SUB','type':'ORDER_BOOK','product':'${product}'}`
    window.ws.readyState === 1 && window.ws.send(val)
  }
  // 订阅列表信息
  subAll(product) {
    this.subDatas.map(item => {
      if (item.list) {
        item.list.forEach(data => {
          let val = item.params ? `{'event':'${item.event}','type':'${item.type}','product':'${data.id}','params':{'${item.params.key}':'${item.params.value}'}}` : `{'event':'${item.event}','type':'${item.type}','product':'${data.id}'}`
          window.ws.readyState === 1 && window.ws.send(val)
        })
      } else {
        let val;
        if (item.type === 'ALL_INDEX_PRICE') {
          val = `{'event':'${item.event}','type':'${item.type}','product':'ALL_INDEX_PRICE'}`;
        } else {
          val = item.params ? `{'event':'${item.event}','type':'${item.type}','product':'${product}','params':{'${item.params.key}':'${item.params.value}'}}` : `{'event':'${item.event}','type':'${item.type}','product':'${product}'}`
        }
        window.ws.readyState === 1 && window.ws.send(val)
      }
    })
  }

}

export default Sub
