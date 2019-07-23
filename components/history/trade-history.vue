<template>
  <div :class="{'trade-history':'black' === themeValue, 'trade-history-white': 'white' === themeValue}">
    <st-row class="main" direction="column">
      <st-row class="header" justify="between">
        <st-row class="left">
          <p :class="{'active': 'done' === showType}" @click="change('done')">{{$t('message.orderDetail.done')}}</p>
          <p :class="{'active': 'cancel' === showType}" @click="change('cancel')">{{$t('message.orderDetail.cancel')}}</p>
          <p :class="{'active': 'asset' === showType}" @click="change('asset')">{{$t('message.orderDetail.asset')}}</p>
        </st-row>
        <div class="right">
          <div class="item">
            <input type="text"
                   readonly
                   unselectable="on"
                   v-model="presentContract"
                   @focus="showContractLayerTrue"
                   @blur="showContractLayerFalse"
                   :placeholder="$t('message.tradeHistory.selectContract')">
            <span :class="{'arrow1': true, 'arrowActive':showContract}"></span>
            <z-select v-if="showContract"
                      :list="allContractList"
                      @selected="changePresentContract"></z-select>
          </div>
          <!--站点查询-->
          <!--<div class="item">-->
            <!--<input type="text"-->
                   <!--readonly-->
                   <!--@focus="showSiteLayerTrue"-->
                   <!--@blur="showSiteLayerFalse"-->
                   <!--unselectable="on"-->
                   <!--:placeholder="$t('message.tradeHistory.selectSite'">-->
            <!--<span class="arrow1"></span>-->
            <!--<z-select :list="siteList" v-if="showSite"></z-select>-->
          <!--</div>-->
          <span class="label">{{$t('message.header.usdtTrade')}}:</span>
        </div>
      </st-row>
      <st-row class="content">
        <done-table :contractId="selectedContractId" v-if="'done' === showType"></done-table>
        <cancel-table :contractId="selectedContractId" v-if="'cancel' === showType"></cancel-table>
        <asset-table :currencyId="currencyId" v-if="'asset' === showType"></asset-table>
      </st-row>
    </st-row>
  </div>
</template>
<script>
  import ZSelect from '../../components/history/z-select.vue'
  import DoneTable from '../../components/history/done-table.vue'
  import CancelTable from '../../components/history/cancel-table.vue'
  import AssetTable from '../../components/history/asset-table.vue'
  import Utils from '../../assets/js/utils'
  export default {
    name: 'trade-history',
    components: {
      ZSelect,
      DoneTable,
      CancelTable,
      AssetTable
    },
    data() {
      return {
        showType: 'done',
        showContract: false,
        showSite: false,
        selectedContractId: null,
        contractStatus: '2',
        selectedSiteId: null,
        currencyId: null,
        tHeadList: [],
        asset: false,
        presentContract: null,
        siteList: [
          {id: 1, name: '永续合约'},
          {id: 2, name: 'USDT合约'},
        ],
        allList: null,
        selectIndex: ''
      }
    },
    computed: {
      // 当前合约
      contractInfo() {
        let tmp = this.$store.state.market.contract.filter(item => {
          return item.id.toString() === this.$route.params.id.toString()
        })
        return tmp[0] || {}
      },
      // 主题
      themeValue () {
        return this.$store.state.dictionary.theme
        // return 'white'
      },
      contractList() {
        return this.$store.state.market.contract
      },
      allContractList () {
        let res = Utils.deepCopy(this.$store.state.market.contract)
        let tmp = ''
        res.forEach(item => {
          tmp += item.id + ','
        })
        tmp = tmp.substr(0, tmp.length - 1)
        res.unshift({id: tmp, name: this.$t('message.tradeHistory.all')})
        // console.log(res, this.$store.state.market.contract)
        return res
      }
    },
    watch: {
     // presentContract (val) {
     //   console.log('目前币种',val)
     // }
      "$i18n.locale": {
        handler () {
          this.presentContract = this.allContractList[this.selectIndex].name
        }
      }
    },
    methods: {
      change (index) {
        switch (index) {
          case 'done':
            this.showType = 'done'
            this.contractStatus = '2'
            break;
          case 'cancel':
            this.showType = 'cancel'
            this.contractStatus = '3'
            break;
          case 'asset':
            this.showType = 'asset'
            this.asset = true
            break;
        }
      },
      showContractLayerTrue () {
        this.showContract = true
      },
      showContractLayerFalse () {
        setTimeout(() => {
          this.showContract = false
        }, 150)
      },
      showSiteLayerTrue () {
        this.showSite = true
      },
      showSiteLayerFalse () {
        setTimeout(() => {
          this.showSite = false
        }, 150)
      },
      changePresentContract (val, index) {
        // console.log('选中合约', val)
        this.selectIndex = index
        this.selectedContractId = val.id
        this.allContractList.forEach(item => {
          if (item.id === val.id) {
            this.presentContract = item.name
          }
        })
      },
    },
    mounted () {
      this.currencyId = this.contractInfo.quoteCurrencyId
      this.presentContract = this.contractInfo.name
    }
  }
</script>

<style lang="less" scoped="">
  @import "../../assets/css/theme";
  .trade-history {
    .themeBlack();
    margin: 0 auto;
    width: 1200px;
    min-height: 768px;
    background: #121723;
    .header {
      width: 100%;
      height: 52px;
      // background: #eee;
      .left {
        width: 100%;
        padding-top: 7px;
        p {
          margin-left: 40px;
          height: 38px;
          line-height: 38px;
          font-size: 14px;
          color: #7889A9;
          cursor: pointer;
          &:first-child {
            margin-left: 20px;
          }
        }
        .active {
          color: #7E9EFD;
          border-bottom: 2px solid  #697FD5;
        }
      }
      .right {
        margin-top: 10px;
        width: 100%;
        padding-right: 10px;
        display: flex;
        flex-direction: row-reverse;
        text-align: right;
        .label {
          font-size: 12px;
          color: #CBD7F0;
          line-height: 32px;
        }
        .item {
          position: relative;
          input {
            width: 120px;
            height: 32px;
            background: #181E2F;
            border-radius: 3px;
            padding-left: 10px;
            border: 1px solid transparent;
            cursor: pointer;
            color: #CBD7F0;
            .placeholder({color: #7889A9; font-size: 12px;});
            &:focus {
              border: 1px solid #39425E;
              border-radius: 3px;
            }
          }
          .arrow1 {
            position: absolute;
            top: 8px;
            right: 10px;
            display: inline-block;
            margin-top: 6px;
            margin-left: 8px;
            width:0;
            height: 0;
            border-top: 4px solid @headerUserInfoPopupFontShallowColor;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            cursor: pointer;
            .transition(.5s)
          }
          .arrowActive {
            .transform(rotate(180deg));
          }
          .z-select {
            margin-top: 2px;
          }
          &:first-child {
            margin-left: 10px;
          }
          /*&:active {*/

            /*.arrow1 {*/
              /*border-top: 4px solid red;*/
            /*}*/
          /*}*/
        }
      }
    }
    .content {
      width: 100%;
    }
  }
  .trade-history-white {
    .themeWhite();
    margin: 0 auto;
    width: 1200px;
    min-height: 768px;
    background: #fff;
    .header {
      width: 100%;
      height: 52px;
      // background: #eee;
      .left {
        width: 100%;
        padding-top: 7px;
        p {
          margin-left: 40px;
          height: 38px;
          line-height: 38px;
          font-size: 14px;
          color: #5D6588;
          cursor: pointer;
          &:first-child {
            margin-left: 20px;
          }
        }
        .active {
          color: #7E9EFD;
          border-bottom: 2px solid  #697FD5;
        }
      }
      .right {
        margin-top: 10px;
        width: 100%;
        padding-right: 10px;
        display: flex;
        flex-direction: row-reverse;
        text-align: right;
        .label {
          font-size: 12px;
          color: #24324C;
          line-height: 32px;
        }
        .item {
          position: relative;
          input {
            width: 120px;
            height: 32px;background: #FFFFFF;
            border: 1px solid #DEE6F3;
            border-radius: 3px;
            padding-left: 10px;
            color: #24324C;
            cursor: pointer;
            .placeholder({color: #39425E; font-size: 12px;});
            &:focus {
              border: 1px solid #B9C7E2;
              border-radius: 3px;
            }
          }
          .arrow1 {
            position: absolute;
            top: 8px;
            right: 10px;
            display: inline-block;
            margin-top: 6px;
            margin-left: 8px;
            width:0;
            height: 0;
            border-top: 4px solid @headerUserInfoPopupFontShallowColor;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            cursor: pointer;
            .transition(.5s);
          }
          .arrowActive {
            .transform(rotate(180deg));
          }
          .z-select {
            margin-top: 2px;
          }
          &:first-child {
            margin-left: 10px;
          }
          /*&:active {*/

            /*.arrow1 {*/
              /*border-top: 4px solid red;*/
            /*}*/
          /*}*/
        }
      }
    }
    .content {
      width: 100%;
    }
  }
</style>
