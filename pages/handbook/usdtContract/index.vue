<template>
  <div class="fund" id="test">
    <div class="text-content">
      <!-- usdt合约说明 -->
      <a class="title" name="1">{{ $t('message.direct.usdtContract.secondaryTitle2') }}</a>
      <p>{{ $t('message.direct.usdtContract.paragraph1') }}</p>
      <p class="comment">{{ $t('message.direct.usdtContract.tips1') }}</p>
      <direct-table :theadList="theadList" :tbodyList="tbodyList" textAlign="center"></direct-table>
      <!-- 什么是USDT合约 -->
      <div id="contract1">
        <a name="1" class="title paragraph">{{ $t('message.direct.navigation.title6Content1') }}？</a>
      </div>
      <p>{{ $t('message.direct.usdtContract.paragraph2') }}</p>
      <p>{{ $t('message.direct.usdtContract.paragraph3') }}</p>
      <p>{{ $t('message.direct.usdtContract.paragraph4') }}</p>
      <p>{{ $t('message.direct.usdtContract.paragraph5') }}</p>
      <!-- 如何交易USDT合约 -->
      <a
        id="contract2"
        name="2"
        class="title paragraph"
      >{{ $t('message.direct.navigation.title6Content2') }}</a>
      <p>{{ $t('message.direct.usdtContract.paragraph6') }}</p>
      <i>{{ $t('message.direct.usdtContract.paragraph7') }}</i>
      <st-row class="dl tab">
        <span></span>
        <p>{{ $t('message.direct.usdtContract.paragraph8') }}</p>
      </st-row>
      <i>{{ $t('message.direct.usdtContract.paragraph9') }}</i>
      <st-row class="dl tab">
        <span></span>
        <p>{{ $t('message.direct.usdtContract.paragraph10') }}</p>
      </st-row>
      <!-- ----------------------------------------- 有问题(paragraph11) ----------------------------------------- -->
      <st-row class="dl tab">
        <span></span>
        <p>{{ $t('message.direct.usdtContract.paragraph11') }}</p>
      </st-row>
      <i>{{ $t('message.direct.usdtContract.paragraph12') }}</i>
      <st-row class="dl tab">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.usdtContract.paragraph13') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph14') }}</p>
          <p class="comment">{{ $t('message.direct.usdtContract.tips2') }}</p>
        </div>
      </st-row>
      <st-row class="dl tab">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.usdtContract.paragraph15') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph16') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph17') }}</p>
        </div>
      </st-row>
      <!-- USDT合约的风控机制 -->
      <a
        id="contract3"
        name="3"
        class="title paragraph"
      >{{ $t('message.direct.usdtContract.paragraph18') }}</a>
      <i>{{ $t('message.direct.usdtContract.paragraph19') }}</i>
      <st-row class="dl tab">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.usdtContract.paragraph20') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph21') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph22') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph23') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph24') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph25') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph26') }}</p>
        </div>
      </st-row>
      <i>{{ $t('message.direct.usdtContract.paragraph27') }}</i>
      <st-row class="dl tab">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.usdtContract.paragraph28') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph29') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph30') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph31') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph32') }}</p>
        </div>
      </st-row>

      <i>{{ $t('message.direct.usdtContract.paragraph33') }}</i>
      <st-row class="dl">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.usdtContract.paragraph34') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph35') }}</p>
        </div>
      </st-row>
      <st-row class="dl tab">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.usdtContract.paragraph36') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph37') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph38') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph39') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph40') }}</p>
        </div>
      </st-row>
      <!-- 保险基金 -->
      <i>{{ $t('message.direct.usdtContract.paragraph60') }}</i>
      <st-row class="dl">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.usdtContract.paragraph61') }}</p>
          <!--<i>{{ $t('message.direct.usdtContract.paragraph62') }}</i>-->
        </div>
      </st-row>
      <st-row class="dl" style="margin-top: 20px;">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p style="color:red;">{{ $t('message.direct.usdtContract.paragraph62') }}</p>
          <!--<i>{{ $t('message.direct.usdtContract.paragraph62') }}</i>-->
        </div>
      </st-row>
      <!-- USDT合约的防爆机制 -->
      <a
        id="contract4"
        name="4"
        class="title paragraph"
      >{{ $t('message.direct.navigation.title6Content4') }}</a>
      <p>{{ $t('message.direct.usdtContract.paragraph41') }}</p>
      <p style="margin-top: 0">{{ $t('message.direct.usdtContract.paragraph42') }}</p>
      <p>{{ $t('message.direct.usdtContract.paragraph43') }}</p>
      <p>{{ $t('message.direct.usdtContract.paragraph44') }}</p>
      <p style="margin-top: 0">{{ $t('message.direct.usdtContract.paragraph45') }}</p>
      <!-- 锚定现货价格-互换补偿率 -->
      <a
        id="contract5"
        name="5"
        class="title paragraph"
      >{{ $t('message.direct.instructions.paragraph46') }}</a>
      <p>{{ $t('message.direct.usdtContract.paragraph46') }}</p>
      <p style="margin-top: 0">{{ $t('message.direct.usdtContract.paragraph47') }}</p>
      <i>{{ $t('message.direct.usdtContract.paragraph48') }}</i>
      <st-row class="dl tab">
        <span></span>
        <p>{{ $t('message.direct.usdtContract.paragraph49') }}</p>
      </st-row>
      <st-row class="dl tab">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.usdtContract.paragraph50') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph51') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph52') }}</p>
        </div>
      </st-row>
      <st-row class="dl tab">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.usdtContract.paragraph53') }}</p>
          <p style="color: red;">{{ $t('message.direct.usdtContract.paragraph502') }}</p>
        </div>
      </st-row>
      <i>{{ $t('message.direct.usdtContract.paragraph55') }}</i>
      <st-row class="dl tab">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.usdtContract.paragraph56') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph57') }}</p>
          <p>{{ $t('message.direct.usdtContract.paragraph58') }}</p>
        </div>
      </st-row>
    </div>

    <st-row class="toHistory" justify="center" align="center">
      <div class="mouse"></div>
      <p class="text1" v-html="$t('message.direct.handbook.paragraph6.p2')"></p>
      <router-link
        class="text2"
        to="/handbook/usdtCompensate/1001"
        v-html="$t('message.direct.navigation.secondaryTitle3')"
      ></router-link>
    </st-row>
  </div>
</template>

<script>
import DirectTable from "@/components/direct-table";
export default {
  name: "usdtContract",
  components: {
    DirectTable
  },
  data() {
    return {
      theadList: [
        this.$t("message.direct.instructions.tableHeader1"),
        this.$t("message.direct.instructions.tableHeader2"),
        this.$t("message.direct.instructions.tableHeader3"),
        this.$t("message.direct.instructions.tableHeader5"),
        this.$t("message.direct.instructions.tableHeader6"),
        this.$t("message.direct.instructions.tableHeader7"),
        this.$t("message.direct.instructions.tableHeader8"),
        this.$t("message.direct.instructions.tableHeader9")
      ],
      tbodyList: [
        ["BTCUSDT", "0.002", "USDT", "T+0", "24H", "0.5%", "0.015%", "0.015%"],
        ["EOSUSDT", "2", "USDT", "T+0", "24H", "0.5%", "0.015%", "0.015%"],
        ["BCHUSDT", "0.05", "USDT", "T+0", "24H", "0.5%", "0.015%", "0.015%"],
        ["ETHUSDT", "0.05", "USDT", "T+0", "24H", "0.5%", "0.015%", "0.015%"],
        ["LTCUSDT", "0.2", "USDT", "T+0", "24H", "0.5%", "0.015%", "0.015%"],
        ["XRPUSDT", "40", "USDT", "T+0", "24H", "0.5%", "0.015%", "0.015%"],
        ["ETCUSDT", "1", "USDT", "T+0", "24H", "0.5%", "0.015%", "0.015%"],
        ["DASHUSDT", "0.1", "USDT", "T+0", "24H", "0.5%", "0.015%", "0.015%"],
        ["BSVUSDT", "0.1", "USDT", "T+0", "24H", "0.5%", "0.015%", "0.015%"]
      ]
    };
  },
  watch: {
    $route(val) {
      // console.log('instruction',val)
      if (this.$route.path === "/handbook/usdtContract") {
        this.navId = this.$route.hash.slice(1);
      }
      document.documentElement.scrollTop = document.querySelector(
        "#contract" + this.navId
      ).offsetTop;
    },
    "$i18n.locale"() {
      this.theadList = [
        this.$t("message.direct.instructions.tableHeader1"),
        this.$t("message.direct.instructions.tableHeader2"),
        this.$t("message.direct.instructions.tableHeader3"),
        this.$t("message.direct.instructions.tableHeader5"),
        this.$t("message.direct.instructions.tableHeader6"),
        this.$t("message.direct.instructions.tableHeader7"),
        this.$t("message.direct.instructions.tableHeader8"),
        this.$t("message.direct.instructions.tableHeader9")
      ];
    }
  },
  methods: {
    init() {
      if (this.$route.path === "/handbook/usdtContract") {
        this.navId = this.$route.hash.slice(1);
        if (document.querySelector("#contract" + this.navId)) {
          document.documentElement.scrollTop = document.querySelector(
            "#contract" + this.navId
          ).offsetTop;
        }
      }
    },
    scrollFunc1() {
      // console.log('scrollFunc1')
      if (this.$route.path !== "/handbook/usdtContract") {
        return;
      }
      let toTop =
        document.body.scrollTop === 0
          ? document.documentElement.scrollTop
          : document.body.scrollTop;
      let height1 = document.querySelector("#contract1").offsetTop;
      let height2 = document.querySelector("#contract2").offsetTop;
      let height3 = document.querySelector("#contract3").offsetTop;
      let height4 = document.querySelector("#contract4").offsetTop;
      let height5 = document.querySelector("#contract5").offsetTop;
      // console.log(222 ,toTop,height1,height2,height3,height4,height5)
      if (toTop > height1 && toTop < height2) {
        // console.log(1)
        this.$store.commit("dictionary/SET_NAV", 1);
      } else if (toTop > height2 && toTop < height3) {
        // console.log(2)
        this.$store.commit("dictionary/SET_NAV", 2);
      } else if (toTop > height3 && toTop < height4) {
        // console.log(3)
        this.$store.commit("dictionary/SET_NAV", 3);
      } else if (toTop > height4 && toTop < height5 - 250) {
        // console.log(4)
        this.$store.commit("dictionary/SET_NAV", 4);
      } else if (toTop > height5 - 250) {
        // console.log(5)
        this.$store.commit("dictionary/SET_NAV", 5);
      }
    },
    scrollFunc2() {
      // console.log('scrollFunc2')
      if (this.$route.path !== "/handbook/usdtContract") {
        return;
      }
      let toTop =
        document.body.scrollTop === 0
          ? document.documentElement.scrollTop
          : document.body.scrollTop;
      let height1 = document.querySelector("#contract1").offsetTop;
      let height2 = document.querySelector("#contract2").offsetTop;
      let height3 = document.querySelector("#contract3").offsetTop;
      let height4 = document.querySelector("#contract4").offsetTop;
      let height5 = document.querySelector("#contract5").offsetTop;
      // console.log(222 ,toTop,height1,height2,height3,height4,height5)
      if (toTop > height1 && toTop < height2) {
        // console.log(1)
        this.$store.commit("dictionary/SET_NAV", 1);
      } else if (toTop > height2 && toTop < height3) {
        // console.log(2)
        this.$store.commit("dictionary/SET_NAV", 2);
      } else if (toTop > height3 && toTop < height4) {
        // console.log(3)
        this.$store.commit("dictionary/SET_NAV", 3);
      } else if (toTop > height4 && toTop < height5 - 250) {
        // console.log(4)
        this.$store.commit("dictionary/SET_NAV", 4);
      } else if (toTop > height5 - 250) {
        // console.log(5)
        this.$store.commit("dictionary/SET_NAV", 5);
      }
    }
  },
  mounted() {
    // console.log('123123123 usdeConts')
    setTimeout(() => {
      if (document.addEventListener) {
        document.addEventListener("DOMMouseScroll", this.scrollFunc1, false);
      }
      window.onmousewheel = document.onmousewheel = this.scrollFunc2;
    }, 200);
    this.init();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../../assets/css/theme";
.fund {
  .text-content {
    padding-bottom: 25px;
    margin: 0 20px;
    .title {
      display: block;
      width: 100%;
      height: 50px;
      font-style: normal;
      font-size: 20px;
      color: #24324c;
      line-height: 50px;
      font-weight: normal;
      border-bottom: 1px solid #ecf0f7;
      cursor: text;
    }
    .paragraph {
      margin-top: 15px;
    }
    i {
      display: block;
      margin-top: 13px;
      margin-bottom: 4px;
      // padding: 0 20px;
      font-style: normal;
      font-size: 14px;
      font-weight: 600;
      color: #24324c;
      line-height: 20px;
    }
    p {
      margin-top: 13px;
      // padding: 0 20px;
      font-size: 14px;
      color: #24324c;
      line-height: 22px;
    }
    .comment {
      margin-top: 7px;
      color: #7889a9;
    }
    .dl {
      // padding: 0 20px;
      span {
        position: relative;
        top: 7px;
        width: 6px;
        height: 6px;
        background: rgba(31, 50, 78, 0.2);
        vertical-align: middle;
        .border-radius(@radius: 50%);
      }
      p {
        margin-top: 0;
        margin-left: 6px;
        padding: 0;
      }
    }
    .tab {
      margin-top: 10px;
    }
  }
  .toHistory {
    width: 100%;
    height: 58px;
    background: #f5f6fa;
    .mouse {
      width: 12px;
      height: 16px;
      background: url("../../../assets/images/handbook/mouse.svg");
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
