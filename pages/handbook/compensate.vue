<template>
  <div class="fund">
    <h2>{{ $t(`message.direct.compensate.title1`) }}</h2>
    <p>{{ $t(`message.direct.compensate.paragraph1`) }}</p>
    <p style="margin-top: 0">{{ $t(`message.direct.compensate.paragraph2`) }}</p>
    <p style="margin-top: 0">{{ $t(`message.direct.compensate.paragraph3`) }}</p>
    <p style="margin-top: 0">{{ $t(`message.direct.compensate.paragraph4`) }}</p>
    <p style="margin-top: 0; color:red;">{{ $t(`message.direct.compensate.paragraph52`) }}</p>
    <ul>
      <li
        :class="$route.params.id === item.id.toString() ? 'active' : ''"
        v-for="(item, index) in contract"
        :key="index"
      >
        <router-link :to="'/handbook/compensate/' + item.id">{{ item.name | contractCoin }}</router-link>
      </li>
    </ul>
    <direct-table :theadList="theadList" :tbodyList="tbodyList" :tdWidth="tdWidth"></direct-table>
    <div class="buttons" v-if="false">
      <a
        :class="{'button': true, 'active': false}"
        @click="turnPre"
      >{{$t('message.guide.history.previous')}}</a>
      <a
        :class="{'button': true, 'active': false}"
        @click="turnNex"
      >{{$t('message.guide.history.next')}}</a>
    </div>
    <st-row class="toHistory" justify="center" align="center">
      <div class="mouse"></div>
      <p class="text1" v-html="$t('message.direct.handbook.paragraph6.p2')"></p>
      <router-link
        class="text2"
        to="/handbook/insurance/1001"
        v-html="$t('message.direct.navigation.secondaryTitle4')"
      ></router-link>
    </st-row>
  </div>
</template>

<script>
import DirectTable from "@/components/direct-table";
import Filter from "@/assets/js/filter";
import SwapsApi from "@/assets/js/api/swapsApi.js";
import newSwapApi from "@/assets/js/api/newSwapApi.js";
export default {
  name: "compensate",
  components: {
    DirectTable
  },
  data() {
    return {
      theadList: this.$t(`message.direct.compensate.theadList`),
      tbodyList: null,
      contract: this.$store.state.swapList,
      tdWidth: ["428px", "449px"],
      orderData: {
        contractId: 1,
        page: 1,
        pageSize: 20
      }
    };
  },
  watch: {
    $route() {
      this.getRatioList();
    },
    "$i18n.locale"() {
      this.theadList = this.$t(`message.direct.compensate.theadList`);
    }
  },
  methods: {
    // 上一页
    turnPre() {
      if (this.orderData.page > 1) {
        this.orderData.page = this.orderData.page - 1;
      } else {
        return false;
      }
      this.getRatioList();
    },
    // 下一页
    turnNex() {
      if (this.tbodyList.length === 20) {
        this.orderData.page = this.orderData.page + 1;
      } else {
        return false;
      }
      this.getRatioList();
    },
    // 获取列表
    getRatioList() {
      this.tbodyList = [];
      return;
      this.orderData.contractId = this.$route.params.id;
      let list = [];
      newSwapApi
        .getFundingRateList(this.orderData)
        .then(res => {
          // console.log(res)
          if (res.data.fundingRateList) {
            res.data.fundingRateList.forEach(item => {
              let tmp = [];
              tmp = [
                Filter.getDate(item.createdDate),
                Number(item.fundingRate) > 0
                  ? "+" + Filter.splitFormat(item.fundingRate * 100, 4) + "%"
                  : Filter.splitFormat(item.fundingRate * 100, 4) + "%"
              ];
              list.push(tmp);
              this.tbodyList = list;
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  filters: {
    contractCoin: name => {
      return name.substring(0, name.length - 3);
    }
  },
  mounted() {
    this.getRatioList();
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/css/theme";
.fund {
  h2 {
    margin: 0 20px;
    width: 100%;
    height: 50px;
    font-size: 20px;
    color: #24324c;
    line-height: 50px;
    font-weight: normal;
    border-bottom: 1px solid #ecf0f7;
  }
  p {
    margin-top: 16px;
    padding: 0 20px;
    font-size: 14px;
    color: #24324c;
    line-height: 20px;
  }
  ul {
    margin: 22px 20px 0;
    border-bottom: 1px solid #ecf0f7;
    li {
      display: inline-block;
      width: 74px;
      height: 32px;
      text-align: center;
      a {
        font-size: 16px;
        color: #7889a9;
      }
    }
    .active {
      border-bottom: 2px solid #597ab9;
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
      border: 1px solid #b9c7e2;
      font-size: 12px;
      color: #7889a9;
      border-radius: 3px;
      &:last-child {
        margin-left: 12px;
      }
      &:hover {
        border: 1px solid #7e9efd;
        color: #7e9efd;
      }
    }
    .active {
      border: 1px solid #7e9efd;
      color: #7e9efd;
    }
  }
  .toHistory {
    width: 100%;
    height: 58px;
    background: #f5f6fa;
    .mouse {
      width: 12px;
      height: 16px;
      background: url("../../assets/images/handbook/mouse.svg");
      background-size: 100% 100%;
    }
    .text1 {
      margin-top: 0;
      padding: 0;
      margin-left: 9px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #24324c;
      line-height: 22px;
    }
    .text2 {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #697fd5;
      line-height: 22px;
      text-decoration: underline;
    }
  }
}
</style>
