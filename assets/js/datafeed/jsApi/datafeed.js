import SwapsApi from '@/assets/js/api/swapsApi'
import Sub from "@/assets/js/sub"

const kLineType = [{
    id: 0,
    name: '0',
    buttonName: '分时',
    period: '1min',
    step: 60 * 1000
  },
  {
    id: 0,
    name: '1',
    buttonName: '1min',
    period: '1min',
    step: 60 * 1000
  },
  {
    id: 1,
    name: '3',
    buttonName: '3min',
    period: '3min',
    step: 3 * 60 * 1000
  },
  {
    id: 2,
    name: '5',
    buttonName: '5min',
    period: '5min',
    step: 5 * 60 * 1000
  },
  {
    id: 3,
    name: '15',
    buttonName: '15min',
    period: '15min',
    step: 15 * 60 * 1000
  },
  {
    id: 4,
    name: '30',
    buttonName: '30min',
    period: '30min',
    step: 30 * 60 * 1000
  },
  {
    id: 5,
    name: '60',
    buttonName: '1hour',
    period: '1hour',
    step: 60 * 60 * 1000
  },
  {
    id: 6,
    name: '120',
    buttonName: '2hour',
    period: '2hour',
    step: 120 * 60 * 1000
  },
  {
    id: 7,
    name: '240',
    buttonName: '4hour',
    period: '4hour',
    step: 240 * 60 * 1000
  },
  {
    id: 8,
    name: '360',
    buttonName: '6hour',
    period: '6hour',
    step: 360 * 60 * 1000
  },
  {
    id: 9,
    name: '720',
    buttonName: '12hour',
    period: '12hour',
    step: 720 * 60 * 1000
  },
  {
    id: 10,
    name: 'D',
    buttonName: '1day',
    period: '1day',
    step: 1440 * 60 * 1000
  },
  {
    id: 11,
    name: 'W',
    buttonName: '1week',
    period: '1week',
    step: 7 * 1440 * 60 * 1000
  }
]

class DataFeeds {
  constructor(product, bits, store) {
    this.product = product
    this.firstTime = ''
    this.sub = new Sub()
    this.timer = null
    this.bits = bits
    this.store = store
  }

  onReady(callback) {
    setTimeout(() => {
      callback({
        exchanges: [],
        symbolsTypes: [],
        supported_resolutions: ['1', '3', '5', '15', '30', '60', '120', '240', '360', '720', 'D', 'W'],
        supports_marks: false, // TODO: find out what this is
        supports_timescale_marks: false, // TODO: find out what this is
        supports_time: false,
        supports_search: true,
        supports_group_request: false
      })
    }, 0)
  }

  resolveSymbol(symbolName, onSymbolResolvedCallback) {
    setTimeout(() => {
      onSymbolResolvedCallback({
        'name': symbolName,
        'exchange-traded': 'CustomExchange',
        'exchange-listed': 'CustomExchange',
        'timezone': 'Asia/Hong_Kong',
        'minmov': 1,
        'minmov2': 0,
        'session-regular': '24x7',
        'has_weekly_and_monthly': true,
        'has_intraday': true,
        'has_empty_bars': false,
        'has_no_volume': false,
        'pointvalue': 1,
        'volume_precision': 3,
        'description': 'Description Inc.',
        'type': 'bitcoin',
        'supported_resolutions': ['1', '3', '5', '15', '30', '60', '120', '240', '360', '720', 'D', 'W'],
        'pricescale': Math.pow(10, this.bits),
        'ticker': symbolName
      })
    }, 0)
  }

  getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate, onDataCallback, onErrorCallback, onRealtimeCallback) {
    // console.log(onRealtimeCallback)
    let obj = kLineType.filter(item => {
      return item.name === resolution.toString()
    })[0]
    let type = obj.id
    this.store.commit('market/SET_KTYPE', type)
    this.store.commit('market/SET_KTIME', obj.period)
    // console.log(obj.period)
    let step = obj.step
    // if (this.store.state.market.changeKtime) {
    //   this.store.commit('SET_CHANGEKTIME', false)
    //   this.sub.subK(this.product)
    // }
    if (this.store.state.market.changeKtime && this.store.state.market.connect) {
      // 在追加完数据之后 在订阅 否则订阅的数据先到 导致数据混乱
      setTimeout(() => {
        this.store.commit('market/SET_CHANGEKTIME', false)
        this.sub.subK(this.product)
      }, 1500)
    }
    if (this.firstTime && this.firstTime > rangeStartDate * 1000) {
      onDataCallback([], {
        noData: true,
        nextTime: undefined
      })
    } else {
      const getBar = () => {
        // SwapsApi.getBar({product: symbolInfo.name, type: type, since: ''}).then((res) => {
        //   let bars = []
        //   let barData = res.data.bar_data
        //   if (barData && barData.length > 0) {
        //     for (let i = 0; i < barData.length; i++) {
        //       if (i < barData.length - 1 && Number(barData[i + 1].time) - Number(barData[i].time) !== step) {
        //         bars = []
        //         continue
        //       }
        //       let barValue = {
        //         time: Number(barData[i].time),
        //         open: Number(barData[i].open),
        //         close: Number(barData[i].close),
        //         high: Number(barData[i].high),
        //         low: Number(barData[i].low),
        //         volume: Number(barData[i].volume)
        //       }
        //       bars.push(barValue)
        //     }
        //     this.firstTime = bars[0].time || new Date().getTime()
        //     this.store.commit('SET_SPECIALLASTPRICE', bars[bars.length - 1].close)
        //     this.store.commit('SET_KLASTTIME', bars[bars.length - 1].time)
        //     onDataCallback(bars)
        //   } else {
        //     onDataCallback([])
        //   }
        // }).catch(err => {
        //   clearTimeout(this.timer)
        //   this.timer = setTimeout(getBar, 1000)
        // })
        let klinedata = this.store.state.market.klineData[symbolInfo.name + '_' + obj.period]
        if (klinedata && this.store.state.market.klineData) {
          console.log("缓存")
          let bars = []
          if (klinedata && klinedata.length > 0) {
            for (let i = 0; i < klinedata.length; i++) {
              // if (i < klinedata.length - 1 && Number(klinedata[i + 1].time) - Number(klinedata[i].time) !== step) {
              //   bars = []
              //   continue
              // }
              let barValue = {
                time: Number(klinedata[i].time),
                open: Number(klinedata[i].open),
                close: Number(klinedata[i].close),
                high: Number(klinedata[i].high),
                low: Number(klinedata[i].low),
                volume: Number(klinedata[i].volume)
              }
              bars.push(barValue)
            }
            this.firstTime = bars[0].time || new Date().getTime()
            // // K线数据
            this.store.commit('market/SET_SPECIALLASTPRICE', bars[bars.length - 1].close)
            // 最后的K线时间
            this.store.commit('market/SET_KLASTTIME', bars[bars.length - 1].time)
            onDataCallback(bars)
            // console.log(bars)
            SwapsApi.getBar({
                product: symbolInfo.name,
                type: type,
                since: this.store.state.market.kLasttime + 1
              })
              .then((res) => {
                let bars1 = []
                let barData = res.data.bar_data
                if (barData && barData.length > 0) {
                  for (let i = 0; i < barData.length; i++) {
                    // if (i < barData.length - 1 && Number(barData[i + 1].time) - Number(barData[i].time) !== step) {
                    //   bars = []
                    //   continue
                    // }
                    let barValue = {
                      time: Number(barData[i].time),
                      open: Number(barData[i].open),
                      close: Number(barData[i].close),
                      high: Number(barData[i].high),
                      low: Number(barData[i].low),
                      volume: Number(barData[i].volume)
                    }
                    bars1.push(barValue)
                  }
                  this.firstTime = bars1[0].time || new Date().getTime()
                  this.store.commit('market/SET_SPECIALLASTPRICE', bars1[bars1.length - 1].close)
                  // 最后的K线时间
                  this.store.commit('market/SET_KLASTTIME', bars1[bars1.length - 1].time)
                  bars1.forEach(item => {
                    // 追加K线的方法
                    window.addData(item)
                  })
                  if (barData.length > 1) {
                    barData.splice(barData.length - 1, 1)
                    // 最后的K线时间
                    this.store.commit('market/SET_KLASTTIME', barData[barData.length - 1].time)
                    this.store.commit('market/SET_KLINEDATA_ADD', {
                      id: symbolInfo.name,
                      time: obj.period,
                      data: barData
                    })
                  }

                } else {
                  onDataCallback([])
                }
              }).catch(err => {
                clearTimeout(this.timer)
                this.timer = setTimeout(getBar, 1000)
              })
          } else {
            onDataCallback([])
          }
        } else {
          console.log("没缓存")
          SwapsApi.getBar({
            product: symbolInfo.name,
            type: type,
            since: ''
          }).then((res) => {
            let bars = []
            let barData = res.data.bar_data
            // console.log(barData)
            if (barData && barData.length > 0) {
              for (let i = 0; i < barData.length; i++) {
                // if (i < barData.length - 1 && Number(barData[i + 1].time) - Number(barData[i].time) !== step) {
                //   bars = []
                //   continue
                // }
                let barValue = {
                  time: Number(barData[i].time),
                  open: Number(barData[i].open),
                  close: Number(barData[i].close),
                  high: Number(barData[i].high),
                  low: Number(barData[i].low),
                  volume: Number(barData[i].volume)
                }
                bars.push(barValue)
              }
              this.firstTime = bars[0].time || new Date().getTime()
              this.store.commit('market/SET_SPECIALLASTPRICE', bars[bars.length - 1].close)
              barData.splice(barData.length - 1, 1)
              // console.log(barData)
              // console.log(barData[barData.length - 1].time)
              this.store.commit('market/SET_KLASTTIME', barData[barData.length - 1].time)
              this.store.commit('market/SET_KLINEDATA', {
                time: obj.period,
                id: symbolInfo.name,
                data: barData
              })
              onDataCallback(bars)
            } else {
              onDataCallback([])
            }
          }).catch(err => {
            clearTimeout(this.timer)
            this.timer = setTimeout(getBar, 1000)
          })
        }


      }
      getBar()
    }
  }

  subscribeBars(symbolInfo, resolution, onRealtimeCallback, listenerGUID, onResetCacheNeededCallback) {
    window.refresh = (barData) => {
      this.store.commit('market/SET_SPECIALLASTPRICE', barData.close)
      // this.store.commit('SET_KLASTTIME', barData.time)
      // console.log(barData, symbolInfo);
      // console.log(barData.productId !== symbolInfo.name);
      if (barData.productId !== symbolInfo.name) return;
      onRealtimeCallback({
        time: Number(barData.time),
        open: Number(barData.open),
        close: Number(barData.close),
        high: Number(barData.high),
        low: Number(barData.low),
        volume: Number(barData.volume)
      })
    }
    window.addData = (barData) => {
      onRealtimeCallback({
        time: Number(barData.time),
        open: Number(barData.open),
        close: Number(barData.close),
        high: Number(barData.high),
        low: Number(barData.low),
        volume: Number(barData.volume)
      })
    }
  }

  unsubscribeBars(listenerGUID) {
    this.firstTime = ''
  }
}

export default DataFeeds
