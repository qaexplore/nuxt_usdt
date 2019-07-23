<template>
  <div class="usdt-direct">
    <div class="header">
      <h2>{{ $t('message.direct.regularHandbook.headerTitle') }}</h2>
      <p>{{ $t('message.direct.regularHandbook.headerP') }}</p>
    </div>
    <div class="text-content">
      <div>
        <div class="title">
          <h3 v-html="$t('message.direct.regularHandbook.title1')"></h3>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.regularHandbook.paragraph1.p1')"></p>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.regularHandbook.paragraph1.p2')"></p>
        </div>
        <!--<direct-table :theadList="theadList1" :tbodyList="tbodyList1" :tdWidth="tdWidth1"></direct-table>-->
        <div class="paragraph">
          <p v-html="$t('message.direct.regularHandbook.paragraph1.p3')"></p>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.regularHandbook.paragraph1.p4')"></p>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.regularHandbook.paragraph1.p5')"></p>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.regularHandbook.paragraph1.p6')"></p>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.regularHandbook.paragraph1.p8')"></p>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.regularHandbook.paragraph1.p7')"></p>
        </div>
      </div>
      <div class="login">
        <div class="title">
          <h3 v-html="$t('message.direct.regularHandbook.title2')"></h3>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.regularHandbook.paragraph2.p1')"></p>
        </div>
        <!-- <div :class="['backImg1', $i18n.locale]"></div> -->
        <!-- <div> -->
        <img v-if=" $i18n.locale === 'cn'" src="../../assets/images/regularHandbook/cn-1.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'en'" src="../../assets/images/regularHandbook/en-1.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'ko'" src="../../assets/images/regularHandbook/ko-1.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'ja'" src="../../assets/images/regularHandbook/ja-1.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'ru'" src="../../assets/images/regularHandbook/ru-1.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <!-- </div> -->
        <div class="arrow"></div>
        <!-- <div :class="['backImg2', $i18n.locale]"></div> -->
        <img v-if=" $i18n.locale === 'cn'" src="../../assets/images/regularHandbook/cn-2.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'en'" src="../../assets/images/regularHandbook/en-2.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'ko'" src="../../assets/images/regularHandbook/ko-2.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'ja'" src="../../assets/images/regularHandbook/ja-2.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'ru'" src="../../assets/images/regularHandbook/ru-2.png" style="width:100%;margin-top:16px;" alt="" srcset="">
      </div>
      <div class="cashFlow">
        <div class="title">
          <h3 v-html="$t('message.direct.regularHandbook.title7')"></h3>
        </div>
        <st-row direction="row">
          <img v-if=" $i18n.locale === 'cn'" src="../../assets/images/regularHandbook/cn-3.png" style="width:49%;margin-top:16px" alt="" srcset="">
          <img v-if=" $i18n.locale === 'en'" src="../../assets/images/regularHandbook/en-3.png" style="width:49%;margin-top:16px" alt="" srcset="">
          <img v-if=" $i18n.locale === 'ko'" src="../../assets/images/regularHandbook/ko-3.png" style="width:49%;margin-top:16px" alt="" srcset="">
          <img v-if=" $i18n.locale === 'ja'" src="../../assets/images/regularHandbook/ja-3.png" style="width:49%;margin-top:16px" alt="" srcset="">
          <img v-if=" $i18n.locale === 'ru'" src="../../assets/images/regularHandbook/ru-3.png" style="width:49%;margin-top:16px" alt="" srcset="">

          <img v-if=" $i18n.locale === 'cn'" src="../../assets/images/regularHandbook/cn-4.png" style="width:49%;margin-top:16px;margin-left:2%;" alt="" srcset="">
          <img v-if=" $i18n.locale === 'en'" src="../../assets/images/regularHandbook/en-4.png" style="width:49%;margin-top:16px;margin-left:2%;" alt="" srcset="">
          <img v-if=" $i18n.locale === 'ko'" src="../../assets/images/regularHandbook/ko-4.png" style="width:49%;margin-top:16px;margin-left:2%;" alt="" srcset="">
          <img v-if=" $i18n.locale === 'ja'" src="../../assets/images/regularHandbook/ja-4.png" style="width:49%;margin-top:16px;margin-left:2%;" alt="" srcset="">
          <img v-if=" $i18n.locale === 'ru'" src="../../assets/images/regularHandbook/ru-4.png" style="width:49%;margin-top:16px;margin-left:2%;" alt="" srcset="">
        </st-row>
        <st-row direction="row" style="margin-top:40px;">
          <img v-if=" $i18n.locale === 'cn'" src="../../assets/images/regularHandbook/cn-5.png" style="width:49%;margin-top:16px" alt="" srcset="">
          <img v-if=" $i18n.locale === 'en'" src="../../assets/images/regularHandbook/en-5.png" style="width:49%;margin-top:16px" alt="" srcset="">
          <img v-if=" $i18n.locale === 'ko'" src="../../assets/images/regularHandbook/ko-5.png" style="width:49%;margin-top:16px" alt="" srcset="">
          <img v-if=" $i18n.locale === 'ja'" src="../../assets/images/regularHandbook/ja-5.png" style="width:49%;margin-top:16px" alt="" srcset="">
          <img v-if=" $i18n.locale === 'ru'" src="../../assets/images/regularHandbook/ru-5.png" style="width:49%;margin-top:16px" alt="" srcset="">

          <img v-if=" $i18n.locale === 'cn'" src="../../assets/images/regularHandbook/cn-6.png" style="width:49%;margin-top:16px;margin-left:2%;" alt="" srcset="">
          <img v-if=" $i18n.locale === 'en'" src="../../assets/images/regularHandbook/en-6.png" style="width:49%;margin-top:16px;margin-left:2%;" alt="" srcset="">
          <img v-if=" $i18n.locale === 'ko'" src="../../assets/images/regularHandbook/ko-6.png" style="width:49%;margin-top:16px;margin-left:2%;" alt="" srcset="">
          <img v-if=" $i18n.locale === 'ja'" src="../../assets/images/regularHandbook/ja-6.png" style="width:49%;margin-top:16px;margin-left:2%;" alt="" srcset="">
          <img v-if=" $i18n.locale === 'ru'" src="../../assets/images/regularHandbook/ru-6.png" style="width:49%;margin-top:16px;margin-left:2%;" alt="" srcset="">
        </st-row>
        <div class="paragraph">
          <p v-html="$t('message.direct.regularHandbook.paragraph7.p1')"></p>
        </div>
      </div>
      <div class="createPosition">
        <div class="title">
          <h3 v-html="$t('message.direct.regularHandbook.title3')"></h3>
        </div>
        <!-- <div :class="['backImg1', $i18n.locale]"></div> -->
        <img v-if=" $i18n.locale === 'cn'" src="../../assets/images/regularHandbook/cn-7.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'en'" src="../../assets/images/regularHandbook/en-7.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'ko'" src="../../assets/images/regularHandbook/ko-7.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'ja'" src="../../assets/images/regularHandbook/ja-7.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'ru'" src="../../assets/images/regularHandbook/ru-7.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <div class="paragraph">
          <p v-html="$t('message.direct.regularHandbook.paragraph3.p1')"></p>
        </div>
        <div class="arrow"></div>
        <st-row direction="row">
          <!-- <div :class="['backImg2', $i18n.locale]"></div> -->
          <img v-if=" $i18n.locale === 'cn'" src="../../assets/images/regularHandbook/cn-8.png" style="width:49%;margin-top:16px" alt="" srcset="">
          <img v-if=" $i18n.locale === 'en'" src="../../assets/images/regularHandbook/en-8.png" style="width:49%;margin-top:16px" alt="" srcset="">
          <img v-if=" $i18n.locale === 'ko'" src="../../assets/images/regularHandbook/ko-8.png" style="width:49%;margin-top:16px" alt="" srcset="">
          <img v-if=" $i18n.locale === 'ja'" src="../../assets/images/regularHandbook/ja-8.png" style="width:49%;margin-top:16px" alt="" srcset="">
          <img v-if=" $i18n.locale === 'ru'" src="../../assets/images/regularHandbook/ru-8.png" style="width:49%;margin-top:16px" alt="" srcset="">
          <!-- <div :class="['backImg3', $i18n.locale]" style="margin-left: 20px;"></div> -->
          <img v-if=" $i18n.locale === 'cn'" src="../../assets/images/regularHandbook/cn-9.png" style="width:49%;margin-top:16px;margin-left:2%;" alt="" srcset="">
          <img v-if=" $i18n.locale === 'en'" src="../../assets/images/regularHandbook/en-9.png" style="width:49%;margin-top:16px;margin-left:2%;" alt="" srcset="">
          <img v-if=" $i18n.locale === 'ko'" src="../../assets/images/regularHandbook/ko-9.png" style="width:49%;margin-top:16px;margin-left:2%;" alt="" srcset="">
          <img v-if=" $i18n.locale === 'ja'" src="../../assets/images/regularHandbook/ja-9.png" style="width:49%;margin-top:16px;margin-left:2%;" alt="" srcset="">
          <img v-if=" $i18n.locale === 'ru'" src="../../assets/images/regularHandbook/ru-9.png" style="width:49%;margin-top:16px;margin-left:2%;" alt="" srcset="">
        </st-row>
        <div class="paragraph">
          <p v-html="$t('message.direct.regularHandbook.paragraph3.p2')"></p>
        </div>
        <!-- <div :class="['backImg4', $i18n.locale]"></div> -->
        <img v-if=" $i18n.locale === 'cn'" src="../../assets/images/regularHandbook/cn-10.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'en'" src="../../assets/images/regularHandbook/en-10.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'ko'" src="../../assets/images/regularHandbook/ko-10.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'ja'" src="../../assets/images/regularHandbook/ja-10.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'ru'" src="../../assets/images/regularHandbook/ru-10.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <div class="arrow"></div>
        <!-- <div :class="['backImg5', $i18n.locale]"></div> -->
        <img v-if=" $i18n.locale === 'cn'" src="../../assets/images/regularHandbook/cn-11.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'en'" src="../../assets/images/regularHandbook/en-11.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'ko'" src="../../assets/images/regularHandbook/ko-11.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'ja'" src="../../assets/images/regularHandbook/ja-11.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'ru'" src="../../assets/images/regularHandbook/ru-11.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <div class="paragraph">
          <p style="color:#828a9a;" v-html="$t('message.direct.regularHandbook.paragraph3.p3')"></p>
          <p style="color:#828a9a;" v-html="$t('message.direct.regularHandbook.paragraph3.p4')"></p>
          <p style="color:#828a9a;" v-html="$t('message.direct.regularHandbook.paragraph3.p5')"></p>
          <p style="color:#828a9a;" v-html="$t('message.direct.regularHandbook.paragraph3.p6')"></p>
          <p style="color:#828a9a;" v-html="$t('message.direct.regularHandbook.paragraph3.p7')"></p>
          <p style="color:#828a9a;" v-html="$t('message.direct.regularHandbook.paragraph3.p8')"></p>
        </div>
      </div>
      <div class="risk">
        <div class="title">
          <h3 v-html="$t('message.direct.regularHandbook.title4')"></h3>
        </div>
        <st-row>
          <div class="leftImg">
            <!-- <div :class="['backImg1', $i18n.locale]"></div> -->
            <img v-if=" $i18n.locale === 'cn'" src="../../assets/images/regularHandbook/cn-12.png" style="width:100%;margin-top:20px; width:251px;" alt="" srcset="">
            <img v-if=" $i18n.locale === 'en'" src="../../assets/images/regularHandbook/en-12.png" style="width:100%;margin-top:20px; width:251px;" alt="" srcset="">
            <img v-if=" $i18n.locale === 'ko'" src="../../assets/images/regularHandbook/ko-12.png" style="width:100%;margin-top:20px; width:251px;" alt="" srcset="">
            <img v-if=" $i18n.locale === 'ja'" src="../../assets/images/regularHandbook/ja-12.png" style="width:100%;margin-top:20px; width:251px;" alt="" srcset="">
            <img v-if=" $i18n.locale === 'ru'" src="../../assets/images/regularHandbook/ru-12.png" style="width:100%;margin-top:20px; width:251px;" alt="" srcset="">
          </div>
          <div class="rightText">
            <div class="text-box">
              <h3></h3>
              <p v-html="$t('message.direct.regularHandbook.paragraph4.p1')"></p>
            </div>
            <div class="text-box">
              <p style="color:#828a9a;" v-html="$t('message.direct.regularHandbook.paragraph4.p2')"></p>
              <p style="color:#828a9a;" v-html="$t('message.direct.regularHandbook.paragraph4.p3')"></p>
              <p style="color:#828a9a;" v-html="$t('message.direct.regularHandbook.paragraph4.p4')"></p>
              <p style="color:#828a9a;" v-html="$t('message.direct.regularHandbook.paragraph4.p5')"></p>
              <p style="color:#828a9a;" v-html="$t('message.direct.regularHandbook.paragraph4.p6')"></p>
              <p style="color:#828a9a;" v-html="$t('message.direct.regularHandbook.paragraph4.p7')"></p>
              <p style="color:#828a9a;" v-html="$t('message.direct.regularHandbook.paragraph4.p8')"></p>
              <p style="color:#828a9a;" v-html="$t('message.direct.regularHandbook.paragraph4.p9')"></p>
              <p style="color:#828a9a;" v-html="$t('message.direct.regularHandbook.paragraph4.p10')"></p>
              <p style="color:#828a9a;" v-html="$t('message.direct.regularHandbook.paragraph4.p11')"></p>
            </div>
          </div>
        </st-row>
      </div>
      <div class="closePosition">
        <div class="title">
          <h3 v-html="$t('message.direct.regularHandbook.title5')"></h3>
        </div>
        <!-- <div :class="['backImg1', $i18n.locale]"></div> -->
        <img v-if=" $i18n.locale === 'cn'" src="../../assets/images/regularHandbook/cn-13.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'en'" src="../../assets/images/regularHandbook/en-13.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'ko'" src="../../assets/images/regularHandbook/ko-13.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'ja'" src="../../assets/images/regularHandbook/ja-13.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <img v-if=" $i18n.locale === 'ru'" src="../../assets/images/regularHandbook/ru-13.png" style="width:100%;margin-top:16px;" alt="" srcset="">
        <div class="paragraph">
          <p v-html="$t('message.direct.regularHandbook.paragraph5.p1')"></p>
        </div>
      </div>
      <div class="supplement">
        <div class="title">
          <h3 v-html="$t('message.direct.regularHandbook.title6')"></h3>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.regularHandbook.paragraph6.p1')"></p>
        </div>
        <regular-direct-table></regular-direct-table>
        <div class="paragraph">
          <p v-html="$t('message.direct.regularHandbook.paragraph6.p2')"></p>
        </div>
        <regular-table></regular-table>
        <!-- <div :class="['backImg1', $i18n.locale]"></div> -->
        <div class="paragraph">
          <p v-html="$t('message.direct.regularHandbook.paragraph6.p3')"></p>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.regularHandbook.paragraph6.p5')"></p>
          <p v-html="$t('message.direct.regularHandbook.paragraph6.p6')"></p>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.regularHandbook.paragraph6.p7')"></p>
        </div>
        <p style="margin-top:20px;margin-bottom: 25px;" v-html="$t('message.direct.regularHandbook.paragraph6.p4')"></p>
      </div>
    </div>
    <st-row class="toHistory" justify="center" align="center">
      <div class="mouse"></div>
      <p class="text1" v-html="$t('message.direct.handbook.paragraph6.p2')"></p>
      <router-link class="text2" to="/handbook/regularContract#1" v-html="$t('message.direct.navigation.secondaryTitle7')"></router-link>
    </st-row>
  </div>
</template>

<script>
  import DirectTable from '@/components/direct-table'
  import RegularDirectTable from '@/components/handbook/regular-direct-table'
  import RegularTable from '@/components/handbook/regular-table'
  export default {
    name: 'direct',
    components: {
      DirectTable,
      RegularDirectTable,
      RegularTable
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
    background: url('../../assets/images/regularHandbook/banner1.png');
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
      height: 56px;
      margin: 16px auto 0;
      background: url('../../assets/images/regularHandbook/cn-1.png');
      background-size: 100% 100%;
      &.en {
        height: 70px;
        background-image: url('../../assets/images/regularHandbook/en-1.png');
        background-size: 100% 100%;
      }
      &.ja {
        height: 70px;
        background-image: url('../../assets/images/regularHandbook/ja-1.png');
        background-size: 100% 100%;
      }
      &.ko {
        height: 70px;
        background-image: url('../../assets/images/regularHandbook/ko-1.png');
        background-size: 100% 100%;
      }
      &.ru {
        height: 70px;
        background-image: url('../../assets/images/regularHandbook/ru-1.png');
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
      height: 260px;
      margin: 0 auto;
      background: url('../../assets/images/regularHandbook/cn-2.png');
      background-size: 100% 100%;
      &.en {
        height: 200px;
        background-image: url('../../assets/images/regularHandbook/en-2.png');
        background-size: 100% 100%;
      }
      &.ja {
        height: 200px;
        background-image: url('../../assets/images/regularHandbook/ja-2.png');
        background-size: 100% 100%;
      }
      &.ko {
        height: 200px;
        background-image: url('../../assets/images/regularHandbook/ko-2.png');
        background-size: 100% 100%;
      }
      &.ru {
        height: 200px;
        background-image: url('../../assets/images/regularHandbook/ru-2.png');
        background-size: 100% 100%;
      }
    }
  }
  .createPosition {
    .backImg1 {
      width: 880px;
      height: 370px;
      margin: 16px auto 0;
      background: url('../../assets/images/regularHandbook/cn-3.png');
      background-size: 100% 100%;
      &.en {
        height: 400px;
        background-image: url('../../assets/images/regularHandbook/en-3.png');
        background-size: 100% 100%;
      }
      &.ja {
        height: 400px;
        background-image: url('../../assets/images/regularHandbook/ja-3.png');
        background-size: 100% 100%;
      }
      &.ko {
        height: 400px;
        background-image: url('../../assets/images/regularHandbook/ko-3.png');
        background-size: 100% 100%;
      }
      &.ru {
        height: 400px;
        background-image: url('../../assets/images/regularHandbook/ru-3.png');
        background-size: 100% 100%;
      }
    }
    .backImg2 {
      width: 880px;
      height: 370px;
      margin: 16px auto 0;
      background: url('../../assets/images/regularHandbook/cn-4.png');
      background-size: 100% 100%;
      &.en {
        height: 300px;
        background-image: url('../../assets/images/regularHandbook/en-4.png');
        background-size: 100% 100%;
      }
      &.ja {
        height: 300px;
        background-image: url('../../assets/images/regularHandbook/ja-4.png');
        background-size: 100% 100%;
      }
      &.ko {
        height: 300px;
        background-image: url('../../assets/images/regularHandbook/ko-4.png');
        background-size: 100% 100%;
      }
      &.ru {
        height: 300px;
        background-image: url('../../assets/images/regularHandbook/ru-4.png');
        background-size: 100% 100%;
      }
    }
    .backImg3 {
      width: 880px;
      height: 370px;
      margin: 16px auto 0;
      background: url('../../assets/images/regularHandbook/cn-5.png');
      background-size: 100% 100%;
      &.en {
        height: 300px;
        background-image: url('../../assets/images/regularHandbook/en-5.png');
        background-size: 100% 100%;
      }
      &.ja {
        height: 300px;
        background-image: url('../../assets/images/regularHandbook/ja-5.png');
        background-size: 100% 100%;
      }
      &.ko {
        height: 300px;
        background-image: url('../../assets/images/regularHandbook/ko-5.png');
        background-size: 100% 100%;
      }
      &.ru {
        height: 300px;
        background-image: url('../../assets/images/regularHandbook/ru-5.png');
        background-size: 100% 100%;
      }
    }
    .backImg4 {
      width: 880px;
      height: 160px;
      margin: 16px auto 0;
      background: url('../../assets/images/regularHandbook/cn-6.png');
      background-size: 100% 100%;
      &.en {
        height: 170px;
        background-image: url('../../assets/images/regularHandbook/en-6.png');
        background-size: 100% 100%;
      }
      &.ja {
        height: 170px;
        background-image: url('../../assets/images/regularHandbook/ja-6.png');
        background-size: 100% 100%;
      }
      &.ko {
        height: 170px;
        background-image: url('../../assets/images/regularHandbook/ko-6.png');
        background-size: 100% 100%;
      }
      &.ru {
        height: 170px;
        background-image: url('../../assets/images/regularHandbook/ru-6.png');
        background-size: 100% 100%;
      }
    }
    .backImg5 {
      width: 880px;
      height: 130px;
      margin: 16px auto 0;
      background: url('../../assets/images/regularHandbook/cn-7.png');
      background-size: 100% 100%;
      &.en {
        height: 150px;
        background-image: url('../../assets/images/regularHandbook/en-7.png');
        background-size: 100% 100%;
      }
      &.ja {
        height: 150px;
        background-image: url('../../assets/images/regularHandbook/ja-7.png');
        background-size: 100% 100%;
      }
      &.ko {
        height: 150px;
        background-image: url('../../assets/images/regularHandbook/ko-7.png');
        background-size: 100% 100%;
      }
      &.ru {
        height: 150px;
        background-image: url('../../assets/images/regularHandbook/ru-7.png');
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
        background: url('../../assets/images/regularHandbook/cn-8.png');
        background-size: 100% 100%;
        &.en {
          height: 300px;
          background-image: url('../../assets/images/regularHandbook/en-8.png');
          background-size: 100% 100%;
        }
        &.ja {
          height: 300px;
          background-image: url('../../assets/images/regularHandbook/ja-8.png');
          background-size: 100% 100%;
        }
        &.ko {
          height: 300px;
          background-image: url('../../assets/images/regularHandbook/ko-8.png');
          background-size: 100% 100%;
        }
        &.ru {
          height: 300px;
          background-image: url('../../assets/images/regularHandbook/ru-8.png');
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
      background: url('../../assets/images/regularHandbook/cn-9.png');
      background-size: 100% 100%;
      &.en {
        height: 150px;
        background-image: url('../../assets/images/regularHandbook/en-9.png');
        background-size: 100% 100%;
      }
      &.ja {
        height: 150px;
        background-image: url('../../assets/images/regularHandbook/ja-9.png');
        background-size: 100% 100%;
      }
      &.ko {
        height: 150px;
        background-image: url('../../assets/images/regularHandbook/ko-9.png');
        background-size: 100% 100%;
      }
      &.ru {
        height: 150px;
        background-image: url('../../assets/images/regularHandbook/ru-9.png');
        background-size: 100% 100%;
      }
    }
  }
  .supplement {
    .backImg1 {
      width: 880px;
      height: 100px;
      margin: 16px auto 0;
      // background: url('../../assets/images/regularHandbook/cn-10.png');
      background-size: 100% 100%;
      // &.en {
      //   height: 100px;
      //   background-image: url('../../assets/images/regularHandbook/en-10.png');
      //   background-size: 100% 100%;
      // }
      // &.ja {
      //   height: 100px;
      //   background-image: url('../../assets/images/regularHandbook/ja-10.png');
      //   background-size: 100% 100%;
      // }
      // &.ko {
      //   height: 100px;
      //   background-image: url('../../assets/images/regularHandbook/ko-10.png');
      //   background-size: 100% 100%;
      // }
      // &.ru {
      //   height: 100px;
      //   background-image: url('../../assets/images/regularHandbook/ru-10.png');
      //   background-size: 100% 100%;
      // }
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
