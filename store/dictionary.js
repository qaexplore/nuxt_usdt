let state = () => ({
  barHeight: 0,
  barWidth: 46,
  boxHeight: 0,
  boxWidth: 0,
  supportSite: {},
  mainSite: {},
  // scrollLeft: document.documentElement.scrollLeft || document.body.scrollLeft,
  // scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
  scrollLeft: 0,
  scrollTop: 0,
  isExpand: false,
  theme: 'black',
  product: [],
  contract: [],
  notice: null,
  clickData: {
    price: null,
    size: null,
    type: null
  },
  // 浏览器宽度
  // screenWidth: document.body.clientWidth,
  // screenHeight: document.body.clientHeight,
  screenWidth: 0,
  screenHeight: 0,
  navActive: null, // 合约指南中导航栏样式
  // postOnly 默认0
  placePostOnly: {
    no: 0, // 不是
    yes: 1 // 是
  },
  // timeInforce 默认1
  placeTimeInForce: {
    GTC: 1,
    IOC: 2,
    FOK: 3,
    post_Only: 4
  },
  bits: {
    price: 8,
    priceMax: 8,
    size: 3,
    deep: [8, 7, 6]
  },
  figure: {
    // 仓位
    front: {
      priceInteger: 9,
      valueFloat: 4, // 委托价值 小数点保留 4 位
      priceFloat: 2, // 开仓价格保留2位
      fairPriceFloat: 2, // 标记价格保留2位
      liquidationFloat: 1, // 强平价格 小数点保留 1 位
      marginFloat: 4, // 保证金
      realisedFloat: 4, // 未实现盈亏 小数点保留 4 位 (加上单位BTC 会有负号)
      unRealisedFloat: 4, // 已实现盈亏 小数点保留 4 位 (加上单位BTC 会有负号)
      closeInputFloat: 1, // 平仓输入框 小数点保留 1 位
      unRealisedRatioFloat: 2, // 回报率
    },
    // 持有合约
    contract: {
      size: 9, // 合约数量最大9位
      unRealisedRatioFloat: 2,
      priceFloat: 1, // 开仓价格保留1位
      liquidationFloat: 1, // 强平价格 小数点保留 1 位
    },
    // 提交委托
    entrust: {
      priceInteger: 9,
      priceFloat: 1, // 限价 最多1位小数，且只能为0或5,
      size: 7,
      sizeFloat: 0,
      costFloat: 4, // 成本4位
      valueFloat: 4, // 委托价值 小数点保留 4 位
      balanceFloat: 4 // 可用余额 小数点保留 4 位
    },
    BTC: {
      entrust: {
        priceInteger: 9,
        priceFloat: 1, // 限价 最多1位小数，且只能为0或5,
        size: 7, // 仓位小于100000000（一亿） 9位
        sizeFloat: 0,
        costFloat: 4, // 成本4位
        valueFloat: 4, // 委托价值 小数点保留 4 位
        balanceFloat: 4 // 可用余额 小数点保留 4 位
      },
      // 仓位
      front: {
        priceInteger: 9,
        valueFloat: 4, // 委托价值 小数点保留 4 位
        priceFloat: 2, // 开仓价格保留2位
        fairPriceFloat: 2, // 标记价格保留2位
        liquidationFloat: 1, // 强平价格 小数点保留 1 位
        marginFloat: 4, // 保证金
        realisedFloat: 4, // 未实现盈亏 小数点保留 4 位 (加上单位BTC 会有负号)
        unRealisedFloat: 4, // 已实现盈亏 小数点保留 4 位 (加上单位BTC 会有负号)
        closeInputFloat: 1, // 平仓输入框 小数点保留 1 位
        unRealisedRatioFloat: 2, // 回报率
      },
      // 持有合约
      contract: {
        size: 9, // 合约数量最大9位
        unRealisedRatioFloat: 2,
        priceFloat: 1, // 开仓价格保留1位
        liquidationFloat: 1, // 强平价格 小数点保留 1 位
      },
      // 深度
      entrustList: {
        priceFloat: 1, // 标记价格保留2位
        coinFloat: 8, // 切换为币时8位小数
        fairPriceFloat: 2, // 标记价格保留2位
        indexPriceFloat: 2, // 指数价格小数2位
      },
      // 实时成交
      historyList: {
        priceFloat: 1,
        sizeFloat: 4,
      },
      // K线
      kline: {
        priceFloat: 1
      }
    },
    EOS: {
      // 下单处
      entrust: {
        priceInteger: 9, // 价格整数部分
        priceFloat: 2, // 价格小数部分
        size: 9, // 没有小数最大9位
        sizeFloat: 0,
        costFloat: 4, // 成本4位
        valueFloat: 4, // 委托价值4位
        balanceFloat: 4, // 可用余额4位
      },
      // 仓位
      front: {
        priceInteger: 9,
        priceFloat: 2, // 开仓价格保留2位
        valueFloat: 4, // 委托价值 小数点保留 4 位
        fairPriceFloat: 2, // 标记价格保留2位
        liquidationFloat: 4, // 强平价格 小数点保留 4 位
        marginFloat: 4, // 保证金
        realisedFloat: 4, // 未实现盈亏 小数点保留 4 位 (加上单位BTC 会有负号)
        unRealisedFloat: 4, // 已实现盈亏 小数点保留 4 位 (加上单位BTC 会有负号)
        closeInputFloat: 1, // 平仓输入框 小数点保留 1 位
        unRealisedRatioFloat: 2, // 回报率
      },
      // 深度
      entrustList: {
        priceFloat: 2, // 标记价格保留2位
        coinFloat: 4, // 切换为币时8位小数
        fairPriceFloat: 2, // 标记价格保留2位
        indexPriceFloat: 2, // 指数价格小数2位
      },
      // 实时成交
      historyList: {
        priceFloat: 2,
        sizeFloat: 4,
      },
      // K线
      kline: {
        priceFloat: 2
      }
    },
    BCH: {
      entrustList: {
        priceFloat: 2, // 标记价格保留2位
      }
    },
    ETH: {
      entrustList: {
        priceFloat: 2, // 标记价格保留2位
      }
    },
    LTC: {
      entrustList: {
        priceFloat: 2, // 标记价格保留2位
      }
    },
    // 为币时
    coin: {
      coinFloat: 8
    },
    // K线
    kline: {}
  },
  // 下单类型 type
  placeType: {
    limitOrder: 1, // 限价单
    markOrder: 2 // 市价单
  },
  // 买入方向 side
  placeSide: {
    buy: 1,
    sell: 2
  },
  placeTimeInForceName: ['', '(IOC)', '(FOK)', '(PO)'],
  showCalculateFloat: false
})

let mutations = {
  SET_SCREENHEIGHT(state, data) {
    state.screenHeight = data
  },
  SET_BARHEIGHT(state, data) {
    state.barHeight = data
  },
  SET_BARWIDTH(state, data) {
    state.barWidth = data
  },
  SET_BOXHEIGHT(state, data) {
    state.boxHeight = data
  },
  SET_BOXWIDTH(state, data) {
    state.boxWidth = data
  },
  SAVE_MAINSITE(state, data) {
    state.mainSite = data
  },
  SAVE_SUPPOERTSITE(state, data) {
    state.supportSite = data
  },
  SAVE_SCROLLLEFT(state, data) {
    state.scrollLeft = data
  },
  SAVE_SCROLLTOP(state, data) {
    state.scrollTop = data
  },
  SAVE_SCREEN_WIDTH(state, data) {
    state.screenWidth = data
  },
  SET_THEME(state, data) {
    state.theme = data
  },
  SET_EXPAND(state, data) {
    state.isExpand = data
  },
  SET_NAV(state, data) {
    state.navActive = data
  },
  SET_NOTICE(state, data) {
    state.notice = data
  }
}

export default {
  state,
  mutations
}
