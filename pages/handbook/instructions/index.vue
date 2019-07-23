<template>
  <div class="fund">
    <div class="text-content">
      <!-- 币本位合约说明 -->
      <a class="title" name="1">{{ $t('message.direct.navigation.secondaryTitle2') }}</a>
      <p>{{ $t('message.direct.instructions.paragraph1') }}</p>
      <p class="comment">{{ $t('message.direct.instructions.tips1') }}</p>
      <direct-table :theadList="theadList" :tbodyList="tbodyList" textAlign="center"></direct-table>
      <a
        name="1"
        id="instruction1"
        class="title paragraph"
      >{{ $t('message.direct.navigation.title2Content1') }}？</a>
      <p>{{ $t('message.direct.instructions.paragraph2') }}</p>
      <!-- 如何交易永续合约 -->
      <a
        name="2"
        id="instruction2"
        class="title paragraph"
      >{{ $t('message.direct.navigation.title2Content2') }}</a>
      <i>{{ $t('message.direct.instructions.paragraph3') }}</i>
      <st-row class="dl tab">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.instructions.paragraph4') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph5') }}</p>
        </div>
      </st-row>
      <i>{{ $t('message.direct.instructions.paragraph6') }}</i>
      <st-row class="dl tab">
        <span></span>
        <p>{{ $t('message.direct.instructions.paragraph7') }}</p>
      </st-row>
      <st-row class="dl tab">
        <span></span>
        <p>{{ $t('message.direct.instructions.paragraph8') }}</p>
      </st-row>
      <i>{{ $t('message.direct.instructions.paragraph9') }}</i>
      <st-row class="dl tab">
        <span></span>
        <p>{{ $t('message.direct.instructions.paragraph10') }}</p>
      </st-row>
      <st-row class="dl tab">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.instructions.paragraph11') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph12') }}</p>
        </div>
      </st-row>
      <st-row class="dl tab">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.instructions.paragraph13') }}</p>
          <p class="comment">{{ $t('message.direct.instructions.tips2') }}</p>
        </div>
      </st-row>
      <!-- 永续合约的风控机制 -->
      <a
        name="3"
        id="instruction3"
        class="title paragraph"
      >{{ $t('message.direct.navigation.title2Content3') }}</a>
      <i>{{ $t('message.direct.instructions.paragraph14') }}</i>
      <st-row class="dl tab">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.instructions.paragraph15') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph16') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph17') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph18') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph19') }}</p>
        </div>
      </st-row>
      <i>{{ $t('message.direct.instructions.paragraph20') }}</i>
      <st-row class="dl tab">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.instructions.paragraph21') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph22') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph23') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph24') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph25') }}</p>
        </div>
      </st-row>
      <i>{{ $t('message.direct.instructions.paragraph26') }}</i>
      <st-row class="dl tab">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.instructions.paragraph27') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph28') }}</p>
          <p class="comment">{{ $t('message.direct.instructions.tips3') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph29') }}</p>
        </div>
      </st-row>
      <i>{{ $t('message.direct.instructions.paragraph30') }}</i>
      <st-row class="dl tab">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.instructions.paragraph31') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph32') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph33') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph34') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph35') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph36') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph37') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph38') }}</p>
        </div>
      </st-row>
      <!-- 永续合约的防爆机制 -->
      <a
        class="title paragraph"
        name="4"
        id="instruction4"
      >{{ $t('message.direct.navigation.title2Content4') }}</a>
      <p>{{ $t('message.direct.instructions.paragraph39') }}</p>
      <p style="margin-top: 0;">{{ $t('message.direct.instructions.paragraph40') }}</p>
      <p style="margin-top: 0;">{{ $t('message.direct.instructions.paragraph41') }}</p>
      <p style="margin-top: 0;">{{ $t('message.direct.instructions.paragraph42') }}</p>
      <p>{{ $t('message.direct.instructions.paragraph43') }}</p>
      <p>{{ $t('message.direct.instructions.paragraph44') }}</p>
      <p style="margin-top: 0">{{ $t('message.direct.instructions.paragraph45') }}</p>
      <!-- 锚定现货价格-互换补偿率 -->
      <a
        class="title paragraph"
        name="5"
        id="instruction5"
      >{{ $t('message.direct.instructions.paragraph46') }}</a>
      <p>{{ $t('message.direct.instructions.paragraph47') }}</p>
      <p style="margin-top: 0">{{ $t('message.direct.instructions.paragraph48') }}</p>
      <p style="margin-top: 0">{{ $t('message.direct.instructions.paragraph49') }}</p>
      <p style="margin-top: 0">{{ $t('message.direct.instructions.paragraph50') }}</p>
      <p style="margin-top: 0;color: red;">{{ $t('message.direct.instructions.paragraph502') }}</p>
      <i>{{ $t('message.direct.instructions.paragraph51') }}</i>
      <st-row class="dl tab">
        <span></span>
        <p>{{ $t('message.direct.instructions.paragraph52') }}</p>
      </st-row>
      <i>{{ $t('message.direct.instructions.paragraph53') }}</i>
      <st-row class="dl tab">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.instructions.paragraph54') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph55') }}</p>
        </div>
      </st-row>
      <st-row class="dl tab">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.instructions.paragraph56') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph57') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph58') }}</p>
        </div>
      </st-row>
      <i>{{ $t('message.direct.instructions.paragraph59') }}</i>
      <st-row class="dl tab">
        <span></span>
        <div style="width: 100%;height: 100%;line-height: 1">
          <p>{{ $t('message.direct.instructions.paragraph60') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph61') }}</p>
          <p>{{ $t('message.direct.instructions.paragraph62') }}</p>
        </div>
      </st-row>
    </div>

    <st-row class="toHistory" id="toHistoryInstructions" justify="center" align="center">
      <div class="mouse"></div>
      <p class="text1" v-html="$t('message.direct.handbook.paragraph6.p2')"></p>
      <router-link
        class="text2"
        to="/handbook/compensate/1001"
        v-html="$t('message.direct.navigation.secondaryTitle3')"
      ></router-link>
    </st-row>
  </div>
</template>

<script>
import DirectTable from "@/components/direct-table";
export default {
  name: "instructions",
  components: {
    DirectTable
  },
  data() {
    return {
      theadList: [
        this.$t("message.direct.instructions.tableHeader1"),
        this.$t("message.direct.instructions.tableHeader2"),
        this.$t("message.direct.instructions.tableHeader3"),
        this.$t("message.direct.instructions.tableHeader4"),
        this.$t("message.direct.instructions.tableHeader5"),
        this.$t("message.direct.instructions.tableHeader6"),
        this.$t("message.direct.instructions.tableHeader7"),
        this.$t("message.direct.instructions.tableHeader8"),
        this.$t("message.direct.instructions.tableHeader9")
      ],
      tbodyList: [
        [
          "BTCUSD",
          "1",
          "USD",
          "1USD/BTCUSD",
          "T+0",
          "24H",
          "0.5%",
          "0.015%",
          "0.015%"
        ],
        [
          "EOSUSD",
          "1",
          "USD",
          "1USD/EOSUSD",
          "T+0",
          "24H",
          "0.5%",
          "0.015%",
          "0.015%"
        ],
        [
          "BCHUSD",
          "1",
          "USD",
          "1USD/BCHUSD",
          "T+0",
          "24H",
          "0.5%",
          "0.015%",
          "0.015%"
        ],
        [
          "ETHUSD",
          "1",
          "USD",
          "1USD/ETHUSD",
          "T+0",
          "24H",
          "0.5%",
          "0.015%",
          "0.015%"
        ],
        [
          "LTCUSD",
          "1",
          "USD",
          "1USD/LTCUSD",
          "T+0",
          "24H",
          "0.5%",
          "0.015%",
          "0.015%"
        ],
        [
          "XRPUSD",
          "1",
          "USD",
          "1USD/XRPUSD",
          "T+0",
          "24H",
          "0.5%",
          "0.015%",
          "0.015%"
        ],
        [
          "ETCUSD",
          "1",
          "USD",
          "1USD/ETCUSD",
          "T+0",
          "24H",
          "0.5%",
          "0.015%",
          "0.015%"
        ],
        [
          "DASHUSD",
          "1",
          "USD",
          "1USD/DASHUSD",
          "T+0",
          "24H",
          "0.5%",
          "0.015%",
          "0.015%"
        ]
      ],
      navId: null
    };
  },
  watch: {
    $route(val) {
      // console.log('instruction',val)
      if (this.$route.path === "/handbook/instructions") {
        this.navId = this.$route.hash.slice(1);
        if (document.querySelector("#instruction" + this.navId)) {
          document.documentElement.scrollTop = document.querySelector(
            "#instruction" + this.navId
          ).offsetTop;
        }
      }
      // console.log('instruction' + this.navId)
    },
    "$i18n.locale"() {
      this.theadList = [
        this.$t("message.direct.instructions.tableHeader1"),
        this.$t("message.direct.instructions.tableHeader2"),
        this.$t("message.direct.instructions.tableHeader3"),
        this.$t("message.direct.instructions.tableHeader4"),
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
      if (this.$route.path === "/handbook/instructions") {
        this.navId = this.$route.hash.slice(1);
        if (this.navId) {
          // console.log(this.navId, document.querySelector('#instruction' + this.navId))
          document.documentElement.scrollTop = document.querySelector(
            "#instruction" + this.navId
          ).offsetTop;
        }
      }
    },
    scrollFunc1() {
      // console.log('scrollFunc1');
      if (this.$route.path !== "/handbook/instructions") {
        return;
      }
      // console.log('instruction')
      let toTop =
        document.body.scrollTop === 0
          ? document.documentElement.scrollTop
          : document.body.scrollTop;
      let height1 = document.querySelector("#instruction1").offsetTop;
      let height2 = document.querySelector("#instruction2").offsetTop;
      let height3 = document.querySelector("#instruction3").offsetTop;
      let height4 = document.querySelector("#instruction4").offsetTop;
      let height5 = document.querySelector("#instruction5").offsetTop;
      // console.log(222 ,toTop)
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
      // onsole.log('scrollFunc2');
      if (this.$route.path !== "/handbook/instructions") {
        return;
      }
      // console.log('instruction')
      let toTop =
        document.body.scrollTop === 0
          ? document.documentElement.scrollTop
          : document.body.scrollTop;
      let height1 = document.querySelector("#instruction1").offsetTop;
      let height2 = document.querySelector("#instruction2").offsetTop;
      let height3 = document.querySelector("#instruction3").offsetTop;
      let height4 = document.querySelector("#instruction4").offsetTop;
      let height5 = document.querySelector("#instruction5").offsetTop;
      // console.log(222 ,toTop)
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
    setTimeout(() => {
      if (document.addEventListener) {
        document.addEventListener("DOMMouseScroll", this.scrollFunc1, false);
      }
      window.onmousewheel = document.onmousewheel = this.scrollFunc2;
    }, 200);
    this.init();
    document.querySelector("#navigation").style.height =
      document.querySelector("#toHistoryInstructions").offsetTop + "px";
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
