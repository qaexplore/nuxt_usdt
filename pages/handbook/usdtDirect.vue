<template>
  <div class="usdt-direct">
    <div class="header">
      <h2>{{ $t('message.direct.usdtHandbook.headerTitle') }}</h2>
      <p>{{ $t('message.direct.usdtHandbook.headerP') }}</p>
    </div>
    <div class="text-content">
      <div>
        <div class="title">
          <h3 v-html="$t('message.direct.usdtHandbook.title1')"></h3>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.usdtHandbook.paragraph1.p1')"></p>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.usdtHandbook.paragraph1.p2')"></p>
        </div>
        <!--<direct-table :theadList="theadList1" :tbodyList="tbodyList1" :tdWidth="tdWidth1"></direct-table>-->
        <div class="paragraph">
          <p v-html="$t('message.direct.usdtHandbook.paragraph1.p3')"></p>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.usdtHandbook.paragraph1.p4')"></p>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.usdtHandbook.paragraph1.p5')"></p>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.usdtHandbook.paragraph1.p6')"></p>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.usdtHandbook.paragraph1.p7')"></p>
        </div>
      </div>
      <div class="login">
        <div class="title">
          <h3 v-html="$t('message.direct.usdtHandbook.title2')"></h3>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.usdtHandbook.paragraph2.p1')"></p>
        </div>
        <div :class="['backImg1', $i18n.locale]"></div>
        <div class="arrow"></div>
        <div :class="['backImg2', $i18n.locale]"></div>
      </div>
      <div class="createPosition">
        <div class="title">
          <h3 v-html="$t('message.direct.usdtHandbook.title3')"></h3>
        </div>
        <div :class="['backImg1', $i18n.locale]"></div>
        <div class="paragraph">
          <p v-html="$t('message.direct.usdtHandbook.paragraph3.p1')"></p>
        </div>
        <div class="arrow"></div>
        <st-row direction="row">
          <div :class="['backImg2', $i18n.locale]"></div>
          <div :class="['backImg3', $i18n.locale]" style="margin-left: 20px;"></div>
        </st-row>
        <div class="paragraph">
          <p v-html="$t('message.direct.usdtHandbook.paragraph3.p2')"></p>
        </div>
        <div :class="['backImg4', $i18n.locale]"></div>
        <div class="arrow"></div>
        <div :class="['backImg5', $i18n.locale]"></div>
        <div class="paragraph">
          <p style="color:#828a9a;" v-html="$t('message.direct.usdtHandbook.paragraph3.p3')"></p>
          <p style="color:#828a9a;" v-html="$t('message.direct.usdtHandbook.paragraph3.p4')"></p>
          <p style="color:#828a9a;" v-html="$t('message.direct.usdtHandbook.paragraph3.p5')"></p>
          <p style="color:#828a9a;" v-html="$t('message.direct.usdtHandbook.paragraph3.p6')"></p>
          <p style="color:#828a9a;" v-html="$t('message.direct.usdtHandbook.paragraph3.p7')"></p>
        </div>
      </div>
      <div class="risk">
        <div class="title">
          <h3 v-html="$t('message.direct.usdtHandbook.title4')"></h3>
        </div>
        <st-row>
          <div class="leftImg">
            <div :class="['backImg1', $i18n.locale]"></div>
          </div>
          <div class="rightText">
            <div class="text-box">
              <h3></h3>
              <p v-html="$t('message.direct.usdtHandbook.paragraph4.p1')"></p>
            </div>
            <div class="text-box">
              <p style="color:#828a9a;" v-html="$t('message.direct.usdtHandbook.paragraph4.p2')"></p>
              <p style="color:#828a9a;" v-html="$t('message.direct.usdtHandbook.paragraph4.p3')"></p>
              <p style="color:#828a9a;" v-html="$t('message.direct.usdtHandbook.paragraph4.p4')"></p>
              <p style="color:#828a9a;" v-html="$t('message.direct.usdtHandbook.paragraph4.p5')"></p>
              <p style="color:#828a9a;" v-html="$t('message.direct.usdtHandbook.paragraph4.p6')"></p>
              <p style="color:#828a9a;" v-html="$t('message.direct.usdtHandbook.paragraph4.p7')"></p>
            </div>
          </div>
        </st-row>
      </div>
      <div class="closePosition">
        <div class="title">
          <h3 v-html="$t('message.direct.usdtHandbook.title5')"></h3>
        </div>
        <div :class="['backImg1', $i18n.locale]"></div>
        <div class="paragraph">
          <p v-html="$t('message.direct.usdtHandbook.paragraph5.p1')"></p>
        </div>
      </div>
      <div class="supplement">
        <div class="title">
          <h3 v-html="$t('message.direct.usdtHandbook.title6')"></h3>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.usdtHandbook.paragraph6.p1')"></p>
        </div>
        <usdt-direct-table></usdt-direct-table>
        <div class="paragraph">
          <p v-html="$t('message.direct.usdtHandbook.paragraph6.p2')"></p>
        </div>
        <div :class="['backImg1', $i18n.locale]"></div>
        <div class="paragraph">
          <p v-html="$t('message.direct.usdtHandbook.paragraph6.p3')"></p>
        </div>
        <p style="margin-top:20px;margin-bottom: 15px;" v-html="$t('message.direct.usdtHandbook.paragraph6.p4')"></p>
      </div>
    </div>
    <st-row class="toHistory" justify="center" align="center">
      <div class="mouse"></div>
      <p class="text1" v-html="$t('message.direct.handbook.paragraph6.p2')"></p>
      <router-link class="text2" to="/handbook/usdtContract#1" v-html="$t('message.direct.navigation.secondaryTitle6')"></router-link>
    </st-row>
  </div>
</template>

<script>
  import DirectTable from '@/components/direct-table'
  import UsdtDirectTable from '@/components/handbook/usdt-direct-table'
  export default {
    name: 'direct',
    components: {
      DirectTable,
      UsdtDirectTable
    },
    data () {
      return {
//        theadList1: this.$t('message.direct.usdtHandbook.theadList1'),
//        tbodyList1: this.$t('message.direct.usdtHandbook.tbodyList1'),
//        theadList2: this.$t('message.direct.usdtHandbook.theadList2'),
//        tbodyList2: this.$t('message.direct.usdtHandbook.tbodyList2'),
//        theadList3: this.$t('message.direct.usdtHandbook.theadList3'),
//        tbodyList3: this.$t('message.direct.usdtHandbook.tbodyList3'),
//        tdWidth1: ['211px', '456px', '210px'],
//        tdWidth2: ['292px']
      }
    },
    watch: {
      '$i18n.locale' () {
//        this.theadList1 = this.$t('message.direct.usdtHandbook.theadList1')
//        this.tbodyList1 = this.$t('message.direct.usdtHandbook.tbodyList1')
//        this.theadList2 = this.$t('message.direct.usdtHandbook.theadList2')
//        this.tbodyList2 = this.$t('message.direct.usdtHandbook.tbodyList2')
//        this.theadList3 = this.$t('message.direct.usdtHandbook.theadList3')
//        this.tbodyList3 = this.$t('message.direct.usdtHandbook.tbodyList3')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .direct {
    width: 100%;
  }
  .text-content {
    margin: 0 20px;
  }
  .header {
    width: 920px;
    height: 140px;
    padding-top: 42px;
    border-radius: 6px 6px 0 0;
    background: url('../../assets/images/usdtHandbook/banner.jpg');
    background-size: 100% 100%;
    box-shadow: 0 4px 10px rgba(69, 69, 133, .2);
    h2 {
      margin: 0 0 8px 60px;
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #D8E4FA;
      line-height: 1em;
    }
    p {
      margin-left: 60px;
      font-family: PingFangSC-Light;
      font-size: 18px;
      color: #BCCFFD;
      letter-spacing: 5.4px;
      line-height: 1em;
    }
  }
  .title {
    width: 100%;
    padding: 30px 0 8px 0;
    border-bottom: 1px solid #ECF0F7;
    h3 {
      font-family: PingFangSC-Regular;
      font-size: 20px;
      color: #24324C;
      line-height: 1em;
      span {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #24324C;
        line-height: 22px;
      }
    }
  }
  .paragraph {
    padding: 16px 0 0 0;
    h3 {
      margin-bottom: 7px;
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #24324C;
      letter-spacing: 0.16px;
      line-height: 1em;
    }
    p {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #24324C;
      line-height: 22px;
    }
  }
  .login {
    .backImg1 {
      width: 880px;
      height: 70px;
      margin: 16px auto 0;
      background: url('../../assets/images/usdtHandbook/cn-Bitmap1.png');
      background-size: 100% 100%;
      &.en {
        height: 70px;
        background-image: url('../../assets/images/usdtHandbook/en-Bitmap1.png');
        background-size: 100% 100%;
      }
      &.ja {
        height: 70px;
        background-image: url('../../assets/images/usdtHandbook/ja-Bitmap1.png');
        background-size: 100% 100%;
      }
      &.ko {
        height: 70px;
        background-image: url('../../assets/images/usdtHandbook/ko-Bitmap1.png');
        background-size: 100% 100%;
      }
      &.ru {
        height: 70px;
        background-image: url('../../assets/images/usdtHandbook/ru-Bitmap1.png');
        background-size: 100% 100%;
      }
    }
    .arrow {
      width: 14px;
      height: 14px;
      margin: 12px auto 16px;
      background: url('../../assets/images/handbook/arrow.svg') 100% 100%;
    }
    .backImg2 {
      width: 880px;
      height: 150px;
      margin: 0 auto;
      background: url('../../assets/images/usdtHandbook/cn-Bitmap2.png');
      background-size: 100% 100%;
      &.en {
        height: 200px;
        background-image: url('../../assets/images/usdtHandbook/en-Bitmap2.png');
        background-size: 100% 100%;
      }
      &.ja {
        height: 200px;
        background-image: url('../../assets/images/usdtHandbook/ja-Bitmap2.png');
        background-size: 100% 100%;
      }
      &.ko {
        height: 200px;
        background-image: url('../../assets/images/usdtHandbook/ko-Bitmap2.png');
        background-size: 100% 100%;
      }
      &.ru {
        height: 200px;
        background-image: url('../../assets/images/usdtHandbook/ru-Bitmap2.png');
        background-size: 100% 100%;
      }
    }
  }
  .createPosition {
    .backImg1 {
      width: 880px;
      height: 370px;
      margin: 16px auto 0;
      background: url('../../assets/images/usdtHandbook/cn-Bitmap3.png');
      background-size: 100% 100%;
      &.en {
        height: 400px;
        background-image: url('../../assets/images/usdtHandbook/en-Bitmap3.png');
        background-size: 100% 100%;
      }
      &.ja {
        height: 400px;
        background-image: url('../../assets/images/usdtHandbook/ja-Bitmap3.png');
        background-size: 100% 100%;
      }
      &.ko {
        height: 400px;
        background-image: url('../../assets/images/usdtHandbook/ko-Bitmap3.png');
        background-size: 100% 100%;
      }
      &.ru {
        height: 400px;
        background-image: url('../../assets/images/usdtHandbook/ru-Bitmap3.png');
        background-size: 100% 100%;
      }
    }
    .backImg2 {
      width: 880px;
      height: 370px;
      margin: 16px auto 0;
      background: url('../../assets/images/usdtHandbook/cn-Bitmap4.png');
      background-size: 100% 100%;
      &.en {
        height: 300px;
        background-image: url('../../assets/images/usdtHandbook/en-Bitmap4.png');
        background-size: 100% 100%;
      }
      &.ja {
        height: 300px;
        background-image: url('../../assets/images/usdtHandbook/ja-Bitmap4.png');
        background-size: 100% 100%;
      }
      &.ko {
        height: 300px;
        background-image: url('../../assets/images/usdtHandbook/ko-Bitmap4.png');
        background-size: 100% 100%;
      }
      &.ru {
        height: 300px;
        background-image: url('../../assets/images/usdtHandbook/ru-Bitmap4.png');
        background-size: 100% 100%;
      }
    }
    .backImg3 {
      width: 880px;
      height: 370px;
      margin: 16px auto 0;
      background: url('../../assets/images/usdtHandbook/cn-Bitmap5.png');
      background-size: 100% 100%;
      &.en {
        height: 300px;
        background-image: url('../../assets/images/usdtHandbook/en-Bitmap5.png');
        background-size: 100% 100%;
      }
      &.ja {
        height: 300px;
        background-image: url('../../assets/images/usdtHandbook/ja-Bitmap5.png');
        background-size: 100% 100%;
      }
      &.ko {
        height: 300px;
        background-image: url('../../assets/images/usdtHandbook/ko-Bitmap5.png');
        background-size: 100% 100%;
      }
      &.ru {
        height: 300px;
        background-image: url('../../assets/images/usdtHandbook/ru-Bitmap5.png');
        background-size: 100% 100%;
      }
    }
    .backImg4 {
      width: 880px;
      height: 160px;
      margin: 16px auto 0;
      background: url('../../assets/images/usdtHandbook/cn-Bitmap6.png');
      background-size: 100% 100%;
      &.en {
        height: 170px;
        background-image: url('../../assets/images/usdtHandbook/en-Bitmap6.png');
        background-size: 100% 100%;
      }
      &.ja {
        height: 170px;
        background-image: url('../../assets/images/usdtHandbook/ja-Bitmap6.png');
        background-size: 100% 100%;
      }
      &.ko {
        height: 170px;
        background-image: url('../../assets/images/usdtHandbook/ko-Bitmap6.png');
        background-size: 100% 100%;
      }
      &.ru {
        height: 170px;
        background-image: url('../../assets/images/usdtHandbook/ru-Bitmap6.png');
        background-size: 100% 100%;
      }
    }
    .backImg5 {
      width: 880px;
      height: 130px;
      margin: 16px auto 0;
      background: url('../../assets/images/usdtHandbook/cn-Bitmap7.png');
      background-size: 100% 100%;
      &.en {
        height: 150px;
        background-image: url('../../assets/images/usdtHandbook/en-Bitmap7.png');
        background-size: 100% 100%;
      }
      &.ja {
        height: 150px;
        background-image: url('../../assets/images/usdtHandbook/ja-Bitmap7.png');
        background-size: 100% 100%;
      }
      &.ko {
        height: 150px;
        background-image: url('../../assets/images/usdtHandbook/ko-Bitmap7.png');
        background-size: 100% 100%;
      }
      &.ru {
        height: 150px;
        background-image: url('../../assets/images/usdtHandbook/ru-Bitmap7.png');
        background-size: 100% 100%;
      }
    }
    .arrow {
      width: 14px;
      height: 14px;
      margin: 12px auto 16px;
      background: url('../../assets/images/handbook/arrow.svg') 100% 100%;
    }
  }
  .risk {
    .leftImg {
      margin: 0 26px 0 0;
      .backImg1 {
        width: 251px;
        height: 285px;
        margin: 20px auto 31px;
        background: url('../../assets/images/usdtHandbook/cn-Bitmap8.png');
        background-size: 100% 100%;
        &.en {
          height: 300px;
          background-image: url('../../assets/images/usdtHandbook/en-Bitmap8.png');
          background-size: 100% 100%;
        }
        &.ja {
          height: 300px;
          background-image: url('../../assets/images/usdtHandbook/ja-Bitmap8.png');
          background-size: 100% 100%;
        }
        &.ko {
          height: 300px;
          background-image: url('../../assets/images/usdtHandbook/ko-Bitmap8.png');
          background-size: 100% 100%;
        }
        &.ru {
          height: 300px;
          background-image: url('../../assets/images/usdtHandbook/ru-Bitmap8.png');
          background-size: 100% 100%;
        }
      }
    }
    .rightText {
      width: 100%;
      padding-right: 20px;
      .text-box {
        padding-bottom: 16px;
        border-bottom: 1px dashed #ECF0F7;
        h3 {
          margin: 16px 0 10px;
          font-family: PingFangSC-Medium;
          font-size: 16px;
          color: #24324C;
          line-height: 1em;
        }
        p {
          /*font-family: PingFangSC-Regular;*/
          font-size: 14px;
          color: #24324C;
          line-height: 22px;
        }
      }
    }
  }
  .closePosition {
    .backImg1 {
      width: 880px;
      height: 134px;
      margin: 16px auto 0;
      background: url('../../assets/images/usdtHandbook/cn-Bitmap9.png');
      background-size: 100% 100%;
      &.en {
        height: 150px;
        background-image: url('../../assets/images/usdtHandbook/en-Bitmap9.png');
        background-size: 100% 100%;
      }
      &.ja {
        height: 150px;
        background-image: url('../../assets/images/usdtHandbook/ja-Bitmap9.png');
        background-size: 100% 100%;
      }
      &.ko {
        height: 150px;
        background-image: url('../../assets/images/usdtHandbook/ko-Bitmap9.png');
        background-size: 100% 100%;
      }
      &.ru {
        height: 150px;
        background-image: url('../../assets/images/usdtHandbook/ru-Bitmap9.png');
        background-size: 100% 100%;
      }
    }
  }
  .supplement {
    .backImg1 {
      width: 880px;
      height: 100px;
      margin: 16px auto 0;
      background: url('../../assets/images/usdtHandbook/cn-Bitmap10.png');
      background-size: 100% 100%;
      &.en {
        height: 100px;
        background-image: url('../../assets/images/usdtHandbook/en-Bitmap10.png');
        background-size: 100% 100%;
      }
      &.ja {
        height: 100px;
        background-image: url('../../assets/images/usdtHandbook/ja-Bitmap10.png');
        background-size: 100% 100%;
      }
      &.ko {
        height: 100px;
        background-image: url('../../assets/images/usdtHandbook/ko-Bitmap10.png');
        background-size: 100% 100%;
      }
      &.ru {
        height: 100px;
        background-image: url('../../assets/images/usdtHandbook/ru-Bitmap10.png');
        background-size: 100% 100%;
      }
    }
  }
  .toHistory {
    width: 100%;
    height: 58px;
    background: #F5F6FA;
    .mouse {
      width: 12px;
      height: 16px;
      background: url('../../assets/images/handbook/mouse.svg');
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
</style>
