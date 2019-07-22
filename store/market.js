import Utils from '@/assets/js/utils'
let state = () => ({
  operatePrice: {
    value: ''
  },
  connect: false,
  historyList: [],
  wsOrder: null,
  contract: [],
  tickers: {},
  specialLastPrice: '0',
  market: {},
  kTime: '5min',
  kLasttime: '',
  kType: 2,
  kDieState: false,
  changeKtime: false,
  order: {},
  firstOrder: false,
  currentPosition: {},
  orderCloseFire: false,
  position: {},
  tradeFirst: true,
  buyOne: '',
  sellOne: '',
  positionList: null,
  batchWithdrawal: null,
  popoverStatus: false,
  popoverStatus1: false,
  popoverStatus2: false,
  popoverStatus3: false,
  unrealised: 0, // 未实现盈亏,
  market_all: {}, // 所有指数价格数组
  storePositionList: [], // 所有仓位列表
  kId: '', // 当前k线ID
  klineData: {}, // k线数据
})

let mutations = {
  SET_KID(state, data) {
    state.kId = data
  },
  // 存储k线数据
  SET_KLINEDATA(state, data) {
    // console.log('store', data.data)
    state.klineData[data.id + '_' + data.time] = data.data
  },
  // 存储k线数据
  SET_KLINEDATA_ADD(state, data) {
    state.klineData[data.id + '_' + data.time] = state.klineData[data.id + '_' + data.time].concat(data.data)
  },
  // 存储所有仓位列表
  STORE_POSITION_LIST(state, list) {
    state.storePositionList = list;
  },
  // 所有指数价格数组
  SET_MARKET_ALL(state, data) {
    state.market_all = data;
  },
  // 仓位计算未实现盈亏，供我的资产合约使用
  SET_UNREALISED(state, data) {
    state.unrealised = data;
  },
  SET_POPOVER_STATUS(state, data) {
    state.popoverStatus = data
  },
  SET_POPOVER_STATUS1(state, data) {
    state.popoverStatus1 = data
  },
  SET_POPOVER_STATUS2(state, data) {
    state.popoverStatus2 = data
  },
  SET_POPOVER_STATUS3(state, data) {
    state.popoverStatus3 = data
  },
  SET_BATCH_WITHDRAWAL(state, data) {
    state.batchWithdrawal = data
  },
  SET_POSITION_LIST(state, data) {
    state.positionList = data
  },
  SET_SELLONE(state, data) {
    state.sellOne = data
  },
  SET_BUYONE(state, data) {
    state.buyOne = data
  },
  SET_OPERATEPRICE(state, data) {
    state.operatePrice.value = data
    state.operatePrice = Utils.deepCopy(state.operatePrice)
  },
  SET_TRADEFIRST(state, data) {
    state.tradeFirst = data
  },
  SET_POSITION(state, data) {
    state.position[data.contractId] = data
    state.position = Utils.deepCopy(state.position)
  },
  SET_ORDERCLOSEFIRE(state, data) {
    state.orderCloseFire = data
  },
  SET_CURRENTPOSITION(state, data) {
    state.currentPosition = data
  },
  SET_KDIESTATE(state, data) {
    state.kDieState = data
  },
  SET_FIRSTORDER(state, data) {
    state.firstOrder = data
  },
  SET_KTYPE(state, data) {
    state.kType = data
  },
  SET_CHANGEKTIME(state, data) {
    state.changeKtime = data
  },
  SET_KTIME(state, data) {
    state.kTime = data
  },
  SET_KLASTTIME(state, data) {
    state.kLasttime = data
  },
  SET_HISTORYLIST(state, data) {
    state.historyList = data || []
  },
  SET_WS_ORDER(state, data) {
    state.wsOrder = data || null
  },
  SET_CONNECT(state, data) {
    state.connect = data
  },
  SET_TICKERS(state, data) {
    state.tickers[data.productId] = data
    state.tickers = Utils.deepCopy(state.tickers)
  },
  SET_CONTRACT(state, data) {
    state.contract = data
  },
  SET_SPECIALLASTPRICE(state, data) {
    state.specialLastPrice = data || '0'
  },
  SET_MARKET(state, data) {
    state.market[data.contractId] = data
    state.market = Utils.deepCopy(state.market)
  },
  SET_ORDER(state, data) {
    state.order[data.id] = data.data
    state.order = Utils.deepCopy(state.order)
  }
}
// 合并深度，在永续合约的基础上做了一部分修改（断线重连确保数据准确性）
let actions = {
  saveOrder(context, payload) {
    context.commit('SET_ORDER', {
      id: payload.product,
      data: orderBookData(payload.data, payload.product, context)
    })
  }
}

function orderBookData(data, id, context) {
  if (context.state.firstOrder) {
    context.commit('SET_FIRSTORDER', false)
    return data
  }
  let oldData = context.state.order[id]
  let obj = {}
  obj['bids'] = formatOrderBook(oldData, data, 'bids')
  obj['asks'] = formatOrderBook(oldData, data, 'asks')
  return obj
}

function formatOrderBook(oldData, newData, type) {
  if (newData && oldData && newData[type] && oldData[type]) {
    let newArr = newData[type].slice();
    let oldArr = oldData[type].slice();
    for (let i = newArr.length; i--;) {
      let bl = true
      for (let j = oldArr.length; j--;) {
        if (Number(newArr[i][0]) > Number(oldArr[j][0])) {
          if (Number(newArr[i][1]) !== 0) {
            oldArr.splice(j + 1, 0, newArr[i])
          }
          bl = false
          break
        } else if (Number(newArr[i][0]) === Number(oldArr[j][0])) {
          if (Number(newArr[i][1]) === 0) {
            oldArr.splice(j, 1)
          } else {
            oldArr.splice(j, 1, newArr[i])
          }
          bl = false
          break
        }
      }
      if (bl && Number(newArr[i][1]) !== 0) {
        oldArr.unshift(newArr[i])
      }
    }
    return oldArr
  } else if (newData) {
    return newArr || []
  }
}

export default {
  state,
  mutations,
  actions
}
