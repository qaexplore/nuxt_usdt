<template>
  <div class="fund" id="test">
    <div class="text-content">
      <!-- regular合约说明 -->
      <h3 id="contract1" class="title" name="1">{{ $t('message.regular.navigation.regularThirdTitle1') }}</h3>
      <!--<a id="contract1" class="title" name="1"></a>-->
      <p>{{ $t('message.regular.regularContractIntro.content1p1') }}</p>
      <p class="comment">{{ $t('message.regular.regularContractIntro.tips1') }}</p>
      <direct-table :theadList="theadList" :tbodyList="tbodyList" textAlign="center"></direct-table>
      <!-- 什么是交割合约 -->
      <h3 id="contract2" class="title" name="2">{{ $t('message.regular.navigation.regularThirdTitle2') }}？</h3>
      <p>{{ $t('message.regular.regularContractIntro.content2p1') }}</p>
      <p>{{ $t('message.regular.regularContractIntro.content2p2') }}</p>
      <p>{{ $t('message.regular.regularContractIntro.content2p3') }}</p>
      <p>{{ $t('message.regular.regularContractIntro.content2p4') }}</p>
      <p>{{ $t('message.regular.regularContractIntro.content2p5') }}</p>
      <!-- 如何交易交割合约 -->
      <h3 id="contract3" class="title" name="3">{{ $t('message.regular.navigation.regularThirdTitle3') }}</h3>
      <p>{{ $t('message.regular.regularContractIntro.content3p1') }}</p>
      <h4 class="h4">{{ $t('message.regular.regularContractIntro.content3p2') }}</h4>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content3p3') }}</p>
      </div>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content3p4') }}</p>
      </div>
      <h4 class="h4">{{ $t('message.regular.regularContractIntro.content3p5') }}</h4>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content3p6') }}</p>
      </div>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content3p7') }}</p>
      </div>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content3p8') }}</p>
      </div>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content3p9') }}</p>
      </div>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content3p10') }}</p>
      </div>
      <!-- 结算与交割 -->
      <h3 id="contract4" class="title" name="4">{{ $t('message.regular.navigation.regularThirdTitle4') }}</h3>
      <p>{{ $t('message.regular.regularContractIntro.content4p1') }}</p>
      <h4 class="h4">{{ $t('message.regular.regularContractIntro.content4p2') }}</h4>
      <div class="list-circle">
        <h5>{{ $t('message.regular.regularContractIntro.content4p3') }}</h5>
        <p>{{ $t('message.regular.regularContractIntro.content4p4') }}</p>
      </div>
      <div class="list-circle">
        <h5>{{ $t('message.regular.regularContractIntro.content4p5') }}</h5>
        <p>{{ $t('message.regular.regularContractIntro.content4p6') }}</p>
        <p>{{ $t('message.regular.regularContractIntro.content4p7') }}</p>
        <p>{{ $t('message.regular.regularContractIntro.content4p8') }}</p>
        <p>{{ $t('message.regular.regularContractIntro.content4p9') }}</p>
      </div>
      <h4 class="h4">{{ $t('message.regular.regularContractIntro.content4p10') }}</h4>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content4p11') }}</p>
      </div>
      <h4 class="h4">{{ $t('message.regular.regularContractIntro.content4p12') }}</h4>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content4p13') }}</p>
      </div>
      <!-- 交割合约的风控机制 -->
      <h3 id="contract5" class="title" name="5">{{ $t('message.regular.navigation.regularThirdTitle5') }}</h3>
      <!-- <h4 class="h4">{{ $t('message.regular.regularContractIntro.content5p1') }}</h4>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content5p2') }}</p>
      </div>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content5p3') }}</p>
      </div>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content5p4') }}</p>
      </div>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content5p5') }}</p>
      </div>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content5p6') }}</p>
      </div>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content5p7') }}</p>
      </div>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content5p8') }}</p>
      </div> -->
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content5p9') }}</p>
      </div>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content5p10') }}</p>
      </div>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content5p11') }}</p>
      </div>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content5p12') }}</p>
      </div>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content5p13') }}</p>
      </div>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content5p14') }}</p>
      </div>
      <!-- <div class="list-circle"> -->
        <p>{{ $t('message.regular.regularContractIntro.content5p15') }}</p>
      <!-- </div> -->
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content5p16') }}</p>
      </div>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content5p17') }}</p>
      </div>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content5p18') }}</p>
      </div>
      <div class="list-circle">
        <p>{{ $t('message.regular.regularContractIntro.content5p19') }}</p>
      </div>
      <!-- 爆仓流程 -->
      <h3 id="contract6" class="title" name="6">{{ $t('message.regular.navigation.regularThirdTitle6') }}</h3>
      <p>{{ $t('message.regular.regularContractIntro.content6p1') }}</p>
      <p>{{ $t('message.regular.regularContractIntro.content6p2') }}</p>
      <p>{{ $t('message.regular.regularContractIntro.content6p3') }}</p>
      <p>{{ $t('message.regular.regularContractIntro.content6p4') }}</p>
      <p>{{ $t('message.regular.regularContractIntro.content6p5') }}</p>
      <!-- 分摊计算 -->
      <h3 id="contract7" class="title" name="7">{{ $t('message.regular.navigation.regularThirdTitle7') }}</h3>
      <div class="list-circle">
        <h5>{{ $t('message.regular.regularContractIntro.content7p1') }}</h5>
        <p>{{ $t('message.regular.regularContractIntro.content7p2') }}</p>
      </div>
      <div class="list-circle">
        <h5>{{ $t('message.regular.regularContractIntro.content7p3') }}</h5>
        <p>{{ $t('message.regular.regularContractIntro.content7p4') }}</p>
        <p>{{ $t('message.regular.regularContractIntro.content7p5') }}</p>
        <p>{{ $t('message.regular.regularContractIntro.content7p6') }}</p>
        <p>{{ $t('message.regular.regularContractIntro.content7p7') }}</p>
      </div>
      <div class="list-circle">
        <h5>{{ $t('message.regular.regularContractIntro.content7p8') }}</h5>
        <p>{{ $t('message.regular.regularContractIntro.content7p9') }}</p>
        <p>{{ $t('message.regular.regularContractIntro.content7p10') }}</p>
        <p class="comment">{{ $t('message.regular.regularContractIntro.content7p11') }}</p>
      </div>
    </div>
    <st-row class="toHistory" justify="center" align="center">
      <div class="mouse"></div>
      <p class="text1" v-html="$t('message.direct.handbook.paragraph6.p2')"></p>
      <router-link class="text2" to="/handbook/regularContract/insurance/2001" v-html="$t('message.direct.navigation.secondaryTitle4')"></router-link>
    </st-row>
  </div>
</template>

<script>
  import DirectTable from '../../../components/direct-table'
  export default {
    name: 'regularContract',
    components: {
      DirectTable
    },
    data () {
      return {
        theadList: [
          this.$t('message.direct.instructions.tableHeader1'),
          this.$t('message.direct.instructions.tableHeader2'),
          this.$t('message.direct.instructions.tableHeader3'),
          this.$t('message.direct.instructions.tableHeader5'),
          this.$t('message.direct.instructions.tableHeader6'),
          this.$t('message.direct.instructions.tableHeader7'),
          this.$t('message.direct.instructions.tableHeader8'),
          this.$t('message.direct.instructions.tableHeader9')
        ],
        tbodyList: [
          ['BTC'+this.$t('message.regular.navigation.regularTitle1'), '0.002', 'USDT', 'T+0', '24H', '0.5%', '0.015%', '0.015%'],
          ['EOS'+this.$t('message.regular.navigation.regularTitle1'), '2', 'USDT', 'T+0', '24H', '0.5%', '0.015%', '0.015%'],
          ['ETH'+this.$t('message.regular.navigation.regularTitle1'), '0.05', 'USDT', 'T+0', '24H', '0.5%', '0.015%', '0.015%'],
          ['LTC'+this.$t('message.regular.navigation.regularTitle1'), '0.2', 'USDT', 'T+0', '24H', '0.5%', '0.015%', '0.015%'],
          ['XRP'+this.$t('message.regular.navigation.regularTitle1'), '40', 'USDT', 'T+0', '24H', '0.5%', '0.015%', '0.015%'],
          ['ETC'+this.$t('message.regular.navigation.regularTitle1'), '1', 'USDT', 'T+0', '24H', '0.5%', '0.015%', '0.015%'],
          ['TRX'+this.$t('message.regular.navigation.regularTitle1'), '400', 'USDT', 'T+0', '24H', '0.5%', '0.015%', '0.015%'],
          ['BNB'+this.$t('message.regular.navigation.regularTitle1'), '0.5', 'USDT', 'T+0', '24H', '0.5%', '0.015%', '0.015%'],
          ['HT'+this.$t('message.regular.navigation.regularTitle1'), '5', 'USDT', 'T+0', '24H', '0.5%', '0.015%', '0.015%']
        ]
      }
    },
    watch: {
      '$route' (val) {
        // console.log('instruction',val)
        if (this.$route.path === '/handbook/regularContract') {
          this.navId = this.$route.hash.slice(1)
        }
        document.documentElement.scrollTop = document.querySelector('#contract' + this.navId).offsetTop
      },
      '$i18n.locale' () {
        this.theadList = [
          this.$t('message.direct.instructions.tableHeader1'),
          this.$t('message.direct.instructions.tableHeader2'),
          this.$t('message.direct.instructions.tableHeader3'),
          this.$t('message.direct.instructions.tableHeader5'),
          this.$t('message.direct.instructions.tableHeader6'),
          this.$t('message.direct.instructions.tableHeader7'),
          this.$t('message.direct.instructions.tableHeader8'),
          this.$t('message.direct.instructions.tableHeader9')
        ]
        this.tbodyList = [
          ['BTC'+this.$t('message.regular.navigation.regularTitle1'), '0.002', 'USDT', 'T+0', '24H', '0.5%', '0.015%', '0.015%'],
          ['EOS'+this.$t('message.regular.navigation.regularTitle1'), '2', 'USDT', 'T+0', '24H', '0.5%', '0.015%', '0.015%'],
          ['BCH'+this.$t('message.regular.navigation.regularTitle1'), '0.02', 'USDT', 'T+0', '24H', '0.5%', '0.015%', '0.015%'],
          ['ETH'+this.$t('message.regular.navigation.regularTitle1'), '0.05', 'USDT', 'T+0', '24H', '0.5%', '0.015%', '0.015%'],
          ['LTC'+this.$t('message.regular.navigation.regularTitle1'), '0.2', 'USDT', 'T+0', '24H', '0.5%', '0.015%', '0.015%'],
          ['XRP'+this.$t('message.regular.navigation.regularTitle1'), '40', 'USDT', 'T+0', '24H', '0.5%', '0.015%', '0.015%'],
          ['ETC'+this.$t('message.regular.navigation.regularTitle1'), '1', 'USDT', 'T+0', '24H', '0.5%', '0.015%', '0.015%'],
          ['TRX'+this.$t('message.regular.navigation.regularTitle1'), '400', 'USDT', 'T+0', '24H', '0.5%', '0.015%', '0.015%']
        ]
      }
    },
    methods: {
      init () {
        if (this.$route.path === '/handbook/regularContract') {
          this.navId = this.$route.hash.slice(1)
          if (document.querySelector('#contract' + this.navId)) {
            document.documentElement.scrollTop = document.querySelector('#contract' + this.navId).offsetTop
          }
        }
      },
      scrollFunc1 () {
        // console.log('scrollFunc1')
        if (this.$route.path !== '/handbook/regularContract') {
          return
        }
        let toTop = document.body.scrollTop === 0 ? document.documentElement.scrollTop : document.body.scrollTop;
        let height1 = document.querySelector('#contract1').offsetTop
        let height2 = document.querySelector('#contract2').offsetTop
        let height3 = document.querySelector('#contract3').offsetTop
        let height4 = document.querySelector('#contract4').offsetTop
        let height5 = document.querySelector('#contract5').offsetTop
        let height6 = document.querySelector('#contract6').offsetTop
        let height7 = document.querySelector('#contract7').offsetTop
        // console.log(222 ,toTop,height1,height2,height3,height4,height5)
        if (toTop > height1 && toTop < height2) {
          // console.log(1)
          this.$store.commit("SET_NAV", 1)
        } else if (toTop > height2 && toTop < height3) {
          // console.log(2)
          this.$store.commit("SET_NAV", 2)
        } else if (toTop > height3 && toTop < height4) {
          // console.log(3)
          this.$store.commit("SET_NAV", 3)
        } else if (toTop > height4 && toTop < height5) {
          this.$store.commit("SET_NAV", 4)
        } else if (toTop > height5 && toTop < height6) {
          this.$store.commit("SET_NAV", 5)
        } else if (toTop > height6 && toTop < height7) {
          this.$store.commit("SET_NAV", 6)
        } else if (toTop > height7 && toTop < (height7 - 250)) {
          this.$store.commit("SET_NAV", 6)
        } else if (toTop > (height7 - 250)) {
          this.$store.commit("SET_NAV", 7)
        }
      },
      scrollFunc2 () {
        // console.log('scrollFunc2')
        if (this.$route.path !== '/handbook/regularContract') {
          return
        }
        let toTop = document.body.scrollTop === 0 ? document.documentElement.scrollTop : document.body.scrollTop;
        let height1 = document.querySelector('#contract1').offsetTop
        let height2 = document.querySelector('#contract2').offsetTop
        let height3 = document.querySelector('#contract3').offsetTop
        let height4 = document.querySelector('#contract4').offsetTop
        let height5 = document.querySelector('#contract5').offsetTop
        let height6 = document.querySelector('#contract6').offsetTop
        let height7 = document.querySelector('#contract7').offsetTop
        // console.log(222 ,toTop,height1,height2,height3,height4,height5)
        if (toTop > height1 && toTop < height2) {
          // console.log(1)
          this.$store.commit("SET_NAV", 1)
        } else if (toTop > height2 && toTop < height3) {
          // console.log(2)
          this.$store.commit("SET_NAV", 2)
        } else if (toTop > height3 && toTop < height4) {
          // console.log(3)
          this.$store.commit("SET_NAV", 3)
        } else if (toTop > height4 && toTop < height5) {
          this.$store.commit("SET_NAV", 4)
        } else if (toTop > height5 && toTop < height6) {
          this.$store.commit("SET_NAV", 5)
        } else if (toTop > height6 && toTop < height7) {
          this.$store.commit("SET_NAV", 6)
        } else if (toTop > height7 && toTop < (height7 - 250)) {
          this.$store.commit("SET_NAV", 6)
        } else if (toTop > (height7 - 250)) {
          this.$store.commit("SET_NAV", 7)
        }
      },
    },
    mounted() {
      // console.log('123123123 usdeConts')
      setTimeout(()=>{
        if(document.addEventListener){
          document.addEventListener('DOMMouseScroll',this.scrollFunc1,false);
        }
        window.onmousewheel = document.onmousewheel = this.scrollFunc2;
      },200)
      this.init()
    }
  }
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
        color: #24324C;
        line-height: 50px;
        font-weight: normal;
        border-bottom: 1px solid #ECF0F7;
        cursor: text;
      }
      .paragraph {
        margin-top: 15px
      }
      h4.h4 {
        display: block;
        margin-top: 13px;
        margin-bottom: 4px;
        // padding: 0 20px;
        font-style: normal;
        font-size: 15px;
        font-weight: 600;
        color: #24324C;
        line-height: 20px;
      }
      .list-circle {
        position: relative;
        padding-left: 12px;
        margin-top: 12px;
        margin-bottom: 4px;
        h5 {
          font-weight: bold;
          font-size: 14px;
        }
      }
      .list-circle:after {
        content: '';
        display: block;
        position: absolute;
        left: 2px;
        top: 8px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: rgba(31, 50, 78, 0.2);
      }
      p {
        margin-top: 13px;
        // padding: 0 20px;
        font-size: 14px;
        color: #24324C;
        line-height: 22px;
      }
      .comment {
        margin-top: 7px;
        color: #7889A9;
      }
      .dl {
        // padding: 0 20px;
        span {
          position: relative;
          top: 7px;
          width: 6px;
          height: 6px;
          background: rgba(31,50,78,0.20);
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
      background: #F5F6FA;
      .mouse {
        width: 12px;
        height: 16px;
        background: url('../../../assets/images/handbook/mouse.svg');
        background-size: 100% 100%;
      }
      .text1 {
        margin-top: 0;
        padding: 0;
        margin-left: 9px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #24324C;
        line-height: 22px;
      }
      .text2 {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #697FD5;
        line-height: 22px;
        text-decoration: underline;
      }
    }
  }
</style>
