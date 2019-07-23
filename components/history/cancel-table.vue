<template>
  <div :class="{'cancel-table': themeValue === 'black', 'cancel-table-white': themeValue === 'white'}">
    <table>
      <thead>
      <tr>
        <th>{{$t('message.tradeHistory.contract')}}</th>
        <th>{{$t('message.tradeHistory.side')}}</th>
        <th>{{$t('message.tradeHistory.closeType')}}</th>
        <th>{{$t('message.tradeHistory.type')}}</th>
        <th>{{$t('message.tradeHistory.dealPrice')}}</th>
        <th>{{$t('message.tradeHistory.dealSize')}}</th>
        <th>{{$t('message.tradeHistory.residue')}}</th>
        <th>{{$t('message.tradeHistory.status')}}</th>
        <th>{{$t('message.tradeHistory.entrustTime')}}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in orderList" :key="item.id">
        <td>
          <span :class="[item.side === 1 ? 'buyColorBg point' : 'sellColorBg point']"></span>
          <span class="contract-name">{{item.contractName}}</span>
          <span :class="[item.side === 1 ? 'buyColor' : 'sellColor']">
              {{ item.side === 1 ? $t('message.tradeDetailList.more') : $t('message.tradeDetailList.less') }}
            </span>
          <span class="close-order-mark" style="">
                {{ item.close === 1 ? $t('message.tradeDetailList.closedMark') : '' }}
              </span>
        </td>
        <td>
          <span v-if="item.side === 1">{{$t('message.tradeHistory.more')}}</span>
          <span v-else>{{$t('message.tradeHistory.less')}}</span>
        </td>
        <td>
          <span v-if="item.close === 0">{{$t('message.tradeHistory.open')}}</span>
          <span v-else>{{$t('message.tradeHistory.close')}}</span>
          <span></span>
        </td>
        <td>
          {{getTypeName(item.priceType)}}
        </td>
        <td>{{item.price | splitFormat(4)}}</td>
        <td>{{Math.abs(item.size)}}</td>
        <td>{{Math.abs(item.size) - Math.abs(item.executedSize)}}</td>
        <td>{{getStatusName(item.status)}}</td>
        <td>{{item.createdDate | timeFormat}}</td>
      </tr>
      </tbody>
    </table>
    <div class="noData" v-if="noDataShow">
      <p>{{$t('message.common.noData')}}</p>
    </div>
    <div :class="{'buttons': true, 'mgTop200': noDataShow}" v-if="true">
      <a :class="{'button': true, 'active': false}" @click="turnPre">{{$t('message.guide.history.previous')}}</a>
      <a :class="{'button': true, 'active': false}" @click="turnNex">{{$t('message.guide.history.next')}}</a>
    </div>
  </div>
</template>

<script>
  import SwapsApi from '../../assets/js/api/swapsApi'
  export default {
    name: 'cancel-table',
    props: ['contractId'],
    data() {
      return {
        orderList: [],
        orderData: {
          contractIds: null,
          status: '3',
          page: 1,
          pageSize: 20
        },
        noDataShow: false,
        clickBoolean: true,
      }
    },
    computed: {
      // 主题
      themeValue () {
        // return 'white'
        return this.$store.state.dictionary.theme
      }
    },
    watch: {
      contractId (val) {
        this.orderData.contractIds = val
        this.getOrderList()
      },
      '$i18n.locale' (val) {}
    },
    methods: {
      // 获取订单列表
      getOrderList () {
        if (this.clickBoolean) {
          this.clickBoolean = false
          this.noDataShow = false
          SwapsApi.getOrderList(this.orderData)
            .then(res => {
              // console.log(res)
              if (res.data.orderList !== null && res.data.orderList.length !==0) {
                // console.log(1);
                this.orderList = res.data.orderList
                this.noDataShow = false
              }else {
                // console.log(2);
                this.orderList = []
                this.noDataShow = true
              }
              this.clickBoolean = true
            })
            .catch(e => {
              console.log(e)
              this.noDataShow = true
              this.clickBoolean = true
            })
          // console.log(this.noDataShow)
        }

      },
      // 更换状态
      changeStatus (status) {
        if (this.orderData.status !== status) {
          this.orderData.page = 1
          this.orderData.status = status
        }
        this.getOrderList()
      },
      // 上一页
      turnPre () {
        if (this.orderData.page > 1) {
          this.orderData.page = this.orderData.page - 1
        } else {
          return false
        }
        this.getOrderList()
      },
      // 下一页
      turnNex () {
        if (this.orderList.length === this.orderData.pageSize) {
          this.orderData.page = this.orderData.page + 1
        } else {
          return false
        }
        this.getOrderList()
      },
      // 获取订单类型名
      getTypeName (id) {
        return this.$dictionary.orderTypeList.filter(item => {
          return item.value.toString().indexOf(id.toString())!== -1
        })[0].name
      },
      // 获取订单状态
      getStatusName (id) {
        return this.$dictionary.orderStatusList.filter(item => {
          return item.value.toString().indexOf(id.toString())!== -1
        })[0].name
      },
      // 获取订单爆仓名
      getLiquidationName (id) {
        return this.$dictionary.orderLiquidationList.filter(item => {
          return item.value.toString().indexOf(id.toString())!== -1
        })[0].name
      },
    },
    mounted () {
      if (!this.contractId) {
        this.orderData.contractIds = this.$route.params.id
      } else {
        this.orderData.contractIds = this.contractId
      }
      this.getOrderList()
    },
  }
</script>

<style lang="less" scoped="">
  @import url("../../assets/css/theme");
  .cancel-table {
    .themeBlack();
    width: 100%;
    padding: 0 10px;
    table {
      border-collapse:collapse;
      width: 100%;
      thead {
        tr {
          height: 38px;
          line-height: 38px;
          font-size: 14px;
          color: #5D6588;
          background: #181E2F;
          th {
            padding-top: 1px;
            font-weight: 400;
            text-align: right;
            &:first-child {
              text-align: left;
              padding-left: 10px;
            }
            &:nth-child(2) {
              text-align: center;
            }
            &:last-child {
              text-align: center;
            }
          }
        }
      }
      tbody {
        tr {
          height: 43px;
          border-bottom: 1px solid #181E2F;
          td {
            font-size: 14px;
            color: #CBD7F0;
            text-align: right;
            &:first-child {
              text-align: left;
              padding-left: 10px;
            }
            &:nth-child(2) {
              text-align: center;
            }
            &:last-child {
              text-align: center;
            }
          }
          &:hover {
            background: #181E2F;
          }
        }
      }
    }
    .noData {
      margin-top: 200px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      padding-top: 150px;
      background: url("../../assets/images/newUI/table-default-bg-black.png") no-repeat center 50px;
      background-size: 180px 96px;
      p {
        font-size: 12px;
        color: #676B90;
      }
    }
    .buttons {
      width: 100%;
      height: 68px;
      line-height: 68px;
      text-align: right;
      padding-right: 20px;
      .button {
        display: inline-block;
        height: 28px;
        line-height: 28px;
        padding: 0 14px;
        border: 1px solid #39425E;
        font-size: 12px;
        color: #7889A9;
        border-radius: 3px;
        &:last-child {
          margin-left: 12px;
        }
        &:hover {
          border: 1px solid #7E9EFD;
          color: #7E9EFD;
        }
      }
      .active {
        border: 1px solid #7E9EFD;
        color: #7E9EFD;
      }
    }
    .mgTop200 {
      margin-top: 200px;
    }
    .point {
      display: inline-block;
      margin-bottom: 2px;
      width: 4px;
      height: 4px;
      line-height: 18px;
      border-radius: 2px;
      background-color: #fff;
    }
    .buyColor {
      color: #0AB480!important;
    }
    .sellColor {
      color: #E12961!important;
    }
    .buyColorBg {
      background: #0AB480;
    }
    .sellColorBg {
      background: #E12961;
    }
  }
  .cancel-table-white {
    .themeWhite();
    width: 100%;
    padding: 0 10px;
    table {
      border-collapse:collapse;
      width: 100%;
      thead {
        tr {
          height: 38px;
          line-height: 38px;
          font-size: 14px;
          background: #F8F9FC;
          border-bottom: 1px solid #ECF0F7;
          th {
            color: #5D6588;
            padding-top: 1px;
            font-weight: 400;
            text-align: right;
            &:first-child {
              text-align: left;
              padding-left: 10px;
            }
            &:nth-child(2) {
              text-align: center;
            }
            &:last-child {
              text-align: center;
            }
          }
        }
      }
      tbody {
        tr {
          height: 43px;
          border-bottom: 1px solid #ECF0F7;
          td {
            font-size: 14px;
            color: #27354F;
            text-align: right;
            .contract-name {
              color: #24324C;
              font-weight: 400;
            }
            &:first-child {
              text-align: left;
              padding-left: 10px;
            }
            &:nth-child(2) {
              text-align: center;
            }
            &:last-child {
              text-align: center;
            }
          }
          &:hover {
            background: #F3F7FE;
            border-top: 1px solid #DFE7F9;
            border-bottom: 1px solid #DFE7F9;
          }
        }
      }
    }
    .noData {
      margin-top: 200px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      padding-top: 150px;
      background: url("../../assets/images/newUI/table-default-bg-white.png") no-repeat center 50px;
      background-size: 180px 96px;
      p {
        font-size: 12px;
        color: #676B90;
      }
    }
    .buttons {
      width: 100%;
      height: 68px;
      line-height: 68px;
      text-align: right;
      padding-right: 20px;
      .button {
        display: inline-block;
        height: 28px;
        line-height: 28px;
        padding: 0 14px;
        border: 1px solid #B9C7E2;
        font-size: 12px;
        color: #7889A9;
        border-radius: 3px;
        &:last-child {
          margin-left: 12px;
        }
        &:hover {
          border: 1px solid #7E9EFD;
          color: #7E9EFD;
        }
      }
      .active {
        border: 1px solid #7E9EFD;
        color: #7E9EFD;
      }
    }
    .mgTop200 {
      margin-top: 200px;
    }
    .point {
      display: inline-block;
      margin-bottom: 2px;
      width: 4px;
      height: 4px;
      line-height: 18px;
      border-radius: 2px;
      background-color: #fff;
    }
    .buyColor {
      color: #0AB480!important;
    }
    .sellColor {
      color: #E12961!important;
    }
    .buyColorBg {
      background: #0AB480;
    }
    .sellColorBg {
      background: #E12961;
    }
  }
</style>
