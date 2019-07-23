<template>
  <div :class="{'asset-table': themeValue === 'black', 'asset-table-white': themeValue === 'white'}">
    <table>
      <thead>
        <tr>
          <th>{{$t('message.tradeHistory.date')}}</th>
          <!--<th style="text-align: center">{{$t('message.tradeHistory.present')}}</th>-->
          <th style="text-align: center">{{$t('message.tradeHistory.in')}}</th>
          <th>{{$t('message.tradeHistory.out')}}</th>
        </tr>
      </thead>
      <tbody>
      <!--<tr>-->
        <!--<td>2018-11-01</td>-->
        <!--<td style="text-align: center">1.234</td>-->
        <!--<td>0.234</td>-->
        <!--<td>11.234</td>-->
      <!--</tr>-->
        <tr v-for="item in orderList" :key="item.date">
          <td>{{item.createdDate | timeFormat("YMD")}}</td>
          <!--<td style="text-align: center">{{item.balance | splitFormat(2)}}</td>-->
          <td style="text-align: center">{{item.transferIn | splitFormat(2)}}</td>
          <td>{{item.transferOut | splitFormat(2)}}</td>
        </tr>
      </tbody>
    </table>
    <div class="noData" v-if="noDataShow">
      <p>{{$t('message.common.noData')}}</p>
    </div>
    <!--<div class="buttons" v-if="!noDataShow">-->
      <!--<a :class="{'button': true, 'active': false}" @click="turnPre">{{$t('message.guide.history.previous')}}</a>-->
      <!--<a :class="{'button': true, 'active': false}" @click="turnNex">{{$t('message.guide.history.next')}}</a>-->
    <!--</div>-->
  </div>
</template>

<script>
  import SwapsApi from '../../assets/js/api/swapsApi'
  export default {
    name: 'asset-table',
    props: ['currencyId'],
    data() {
      return {
        orderList: [],
        orderData: {
          contractId: this.$route.params.id,
          status: '3',
          page: 1,
          pageSize: 30
        },
        noDataShow: false
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
        // console.log('目前币种',val)
        this.orderData.contractId = val
        this.getAssetLog()
      },
      '$i18n.locale' (val) {
        // console.log('i18n', val)
        // this.getOrderList()
      }
    },
    methods: {
      a () {
        // console.log(1);
      },
      // 获取资金记录
      getAssetLog () {
        SwapsApi.getAssetLog(this.currencyId)
          .then (res => {
            // console.log(res.data.assetLog)
            if (res.data.assetLog.length) {
              this.orderList = res.data.assetLog
              this.noDataShow = false
            }else {
              this.orderList = []
              this.noDataShow = true
            }
          })
          .catch (e => {
            console.log(e)
            this.noDataShow = true
          })
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
        if (this.orderList.length === 10) {
          this.orderData.page = this.orderData.page + 1
        } else {
          return false
        }
        this.getOrderList()
      },
      // 获取订单类型名
      getTypeName (id) {
        // console.log('getTypeName',id)
        // console.log('$dictionary', this.$dictionary.orderTypeList)
        return this.$dictionary.orderTypeList.filter(item => {
          return item.value.toString().indexOf(id.toString())!== -1
        })[0].name
      },
      // 获取订单爆仓名
      getLiquidationName (id) {
        // console.log('getLiquidationName',id)
        return this.$dictionary.orderLiquidationList.filter(item => {
          return item.value.toString().indexOf(id.toString())!== -1
        })[0].name
      },
    },
    mounted () {
      if (!this.contractId) {
        this.orderData.contractId = this.$route.params.id
      } else {
        this.orderData.contractId = this.contractId
      }
      this.getAssetLog()
      // console.log('123123', this.currencyId)
    },
  }
</script>

<style lang="less" scoped="">
  @import url("../../assets/css/theme");
  .asset-table {
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
            width: 25%;
            &:first-child {
              text-align: left;
              padding-left: 10px;
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
            width: 25%;
            &:first-child {
              text-align: left;
              padding-left: 10px;
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
  .asset-table-white {
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
            width: 25%;
            &:first-child {
              text-align: left;
              padding-left: 10px;
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
            width: 25%;
            .contract-name {
              color: #24324C;
              font-weight: 400;
            }
            &:first-child {
              text-align: left;
              padding-left: 10px;
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
