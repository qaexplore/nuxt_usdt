<template>
  <div class="direct">
    <div class="header">
      <h2>{{ $t('message.direct.handbook.headerTitle') }}</h2>
      <p>{{ $t('message.direct.handbook.headerP') }}</p>
    </div>
    <div class="text-content">
      <div>
        <div class="title">
          <h3 v-html="$t('message.direct.handbook.title1')"></h3>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.handbook.paragraph1.p1')"></p>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.handbook.paragraph1.p2')"></p>
        </div>
        <direct-table :theadList="theadList1" :tbodyList="tbodyList1" :tdWidth="tdWidth1"></direct-table>
        <div class="paragraph">
          <p v-html="$t('message.direct.handbook.paragraph1.p3')"></p>
        </div>
      </div>
      <div class="login">
        <div class="title">
          <h3 v-html="$t('message.direct.handbook.title2')"></h3>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.handbook.paragraph2.p1')"></p>
        </div>
        <div :class="['backImg1', $i18n.locale]"></div>
        <div class="arrow"></div>
        <div :class="['backImg2', $i18n.locale]"></div>
      </div>
      <div>
        <div class="title">
          <h3>
            {{ $t('message.direct.handbook.title2') }}
            <span v-html="$t('message.direct.handbook.subhead3')"></span>
          </h3>
        </div>
      </div>
      <st-row class="transaction">
        <div class="leftImg">
          <div :class="['backImg1', $i18n.locale]"></div>
          <div :class="['backImg2', $i18n.locale]"></div>
        </div>
        <div class="rightText">
          <div class="text-box">
            <h3 v-html="$t('message.direct.handbook.paragraph3.text1')"></h3>
            <p v-html="$t('message.direct.handbook.paragraph3.p1')"></p>
          </div>
          <div class="text-box">
            <h3 v-html="$t('message.direct.handbook.paragraph3.text2')"></h3>
            <p v-html="$t('message.direct.handbook.paragraph3.p2')"></p>
            <p v-html="$t('message.direct.handbook.paragraph3.p3')"></p>
            <p v-html="$t('message.direct.handbook.paragraph3.p4')"></p>
          </div>
          <div class="text-box">
            <h3 v-html="$t('message.direct.handbook.paragraph3.text3')"></h3>
            <p v-html="$t('message.direct.handbook.paragraph3.p5')"></p>
          </div>
          <div class="text-box">
            <h3 v-html="$t('message.direct.handbook.paragraph3.text4')"></h3>
            <p v-html="$t('message.direct.handbook.paragraph3.p6')"></p>
          </div>
          <div class="text-box">
            <h3 v-html="$t('message.direct.handbook.paragraph3.text5')"></h3>
            <p v-html="$t('message.direct.handbook.paragraph3.p7')"></p>
          </div>
          <div class="text-box">
            <h3 v-html="$t('message.direct.handbook.paragraph3.text6')"></h3>
            <p v-html="$t('message.direct.handbook.paragraph3.p8')"></p>
          </div>
        </div>
      </st-row>
      <st-row class="trade" justify="between">
        <div class="buy">
          <h3 v-html="$t('message.direct.handbook.paragraph3.text7')"></h3>
          <p v-html="$t('message.direct.handbook.paragraph3.p9')"></p>
          <div :class="['backImg1', $i18n.locale]"></div>
        </div>
        <div class="sell" :style="{'margin-left': $i18n.locale === 'ru'?'20px': ''}">
          <h3 v-html="$t('message.direct.handbook.paragraph3.text8')"></h3>
          <p v-html="$t('message.direct.handbook.paragraph3.p10')"></p>
          <div :class="['backImg2', $i18n.locale]"></div>
        </div>
      </st-row>
      <p class="congratulations" v-html="$t('message.direct.handbook.paragraph3.p11')"></p>
      <div>
        <div class="title">
          <h3>
            {{ $t('message.direct.handbook.title4') }}
            <span v-html="$t('message.direct.handbook.subhead4')"></span>
          </h3>
        </div>
      </div>
      <div class="information">
        <div :class="['backImg', $i18n.locale]"></div>
        <div class="paragraph">
          <h3 style="font-size: 14px;" v-html="$t('message.direct.handbook.paragraph4.text1')"></h3>
          <p v-html="$t('message.direct.handbook.paragraph4.p1')"></p>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.handbook.paragraph4.p2')"></p>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.handbook.paragraph4.p3')"></p>
        </div>
        <div class="paragraph">
          <h3 style="font-size: 14px;" v-html="$t('message.direct.handbook.paragraph4.text2')"></h3>
          <p v-html="$t('message.direct.handbook.paragraph4.p3')"></p>
        </div>
      </div>
      <div class="different">
        <div class="title">
          <h3>
            {{ $t('message.direct.handbook.title5') }}
          </h3>
        </div>
        <div class="paragraph">
          <p v-html="$t('message.direct.handbook.paragraph5.p1')"></p>
        </div>
        <div class="paragraph">
          <h3 v-html="$t('message.direct.handbook.paragraph5.text1')"></h3>
          <p v-html="$t('message.direct.handbook.paragraph5.p2')"></p>
        </div>
        <div style="width: 100%;height: 13px;"></div>
        <direct-table  :theadList="theadList2" :tbodyList="tbodyList2" :tdWidth="tdWidth2"></direct-table>
        <div class="line"></div>
        <div class="paragraph">
          <h3 v-html="$t('message.direct.handbook.paragraph5.text2')"></h3>
          <p v-html="$t('message.direct.handbook.paragraph5.p3')"></p>
        </div>
        <direct-table  :theadList="theadList3" :tbodyList="tbodyList3" :tdWidth="tdWidth2"></direct-table>
        <div class="paragraph">
          <p v-html="$t('message.direct.handbook.paragraph5.p4')"></p>
        </div>
      </div>
      <div class="qrcode">
        <div :class="['backImg', $i18n.locale]"></div>
        <p v-html="$t('message.direct.handbook.paragraph6.p1')"></p>
      </div>
    </div>

    <st-row class="toHistory" justify="center" align="center">
      <div class="mouse"></div>
      <p v-html="$t('message.direct.handbook.paragraph6.p2')"></p>
      <router-link to="handbook/instructions#1" v-html="$t('message.direct.navigation.secondaryTitle2')"></router-link>
    </st-row>
  </div>
</template>

<script>
  import DirectTable from '@/components/direct-table'
  export default {
    name: 'direct',
    components: {
      DirectTable
    },
    data () {
      return {
        theadList1: this.$t('message.direct.handbook.theadList1'),
        tbodyList1: this.$t('message.direct.handbook.tbodyList1'),
        theadList2: this.$t('message.direct.handbook.theadList2'),
        tbodyList2: this.$t('message.direct.handbook.tbodyList2'),
        theadList3: this.$t('message.direct.handbook.theadList3'),
        tbodyList3: this.$t('message.direct.handbook.tbodyList3'),
        tdWidth1: ['211px', '456px', '210px'],
        tdWidth2: ['292px']
      }
    },
    watch: {
      '$i18n.locale' () {
        this.theadList1 = this.$t('message.direct.handbook.theadList1')
        this.tbodyList1 = this.$t('message.direct.handbook.tbodyList1')
        this.theadList2 = this.$t('message.direct.handbook.theadList2')
        this.tbodyList2 = this.$t('message.direct.handbook.tbodyList2')
        this.theadList3 = this.$t('message.direct.handbook.theadList3')
        this.tbodyList3 = this.$t('message.direct.handbook.tbodyList3')
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
    background: url('../../assets/images/handbook/banner.png');
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
      height: 388px;
      margin: 16px auto 0;
      background: url('../../assets/images/handbook/cn-Bitmap1.jpg');
      background-size: 100% 100%;
      &.en {
        height: 300px;
        background-image: url('../../assets/images/handbook/en-Bitmap1.png');
        background-size: 100% 100%;
      }
      &.ja {
        height: 300px;
        background-image: url('../../assets/images/handbook/ja-Bitmap1.png');
        background-size: 100% 100%;
      }
      &.ko {
        height: 300px;
        background-image: url('../../assets/images/handbook/ko-Bitmap1.png');
        background-size: 100% 100%;
      }
      &.ru {
        height: 300px;
        background-image: url('../../assets/images/handbook/ru-Bitmap1.png');
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
      height: 500px;
      margin: 0 auto;
      background: url('../../assets/images/handbook/cn-Bitmap2.png');
      background-size: 100% 100%;
      &.en {
        height: 400px;
        background-image: url('../../assets/images/handbook/en-Bitmap2.png');
        background-size: 100% 100%;
      }
      &.ja {
        height: 400px;
        background-image: url('../../assets/images/handbook/ja-Bitmap2.png');
        background-size: 100% 100%;
      }
      &.ko {
        height: 400px;
        background-image: url('../../assets/images/handbook/ko-Bitmap2.png');
        background-size: 100% 100%;
      }
      &.ru {
        height: 400px;
        background-image: url('../../assets/images/handbook/ru-Bitmap2.png');
        background-size: 100% 100%;
      }
    }
  }
  .transaction {
    .leftImg {
      margin: 0 26px 0 0;
      .backImg1 {
        width: 251px;
        height: 285px;
        margin: 20px auto 31px;
        background: url('../../assets/images/handbook/cn-Bitmap3.png');
        background-size: 100% 100%;
        &.en {
          height: 400px;
          background-image: url('../../assets/images/handbook/en-Bitmap3.png');
          background-size: 100% 100%;
        }
        &.ja {
          height: 400px;
          background-image: url('../../assets/images/handbook/ja-Bitmap3.png');
          background-size: 100% 100%;
        }
        &.ko {
          height: 400px;
          background-image: url('../../assets/images/handbook/ko-Bitmap3.png');
          background-size: 100% 100%;
        }
        &.ru {
          height: 400px;
          background-image: url('../../assets/images/handbook/ru-Bitmap3.png');
          background-size: 100% 100%;
        }
      }
      .backImg2 {
        width: 251px;
        height: 289px;
        background: url('../../assets/images/handbook/cn-Bitmap4.png');
        background-size: 100% 100%;
        &.en {
          background-image: none;
          background-size: 100% 100%;
        }
        &.ja {
          background-image: none;
        }
        &.ko {
          background-image: none;
        }
        &.ru {
          background-image: none;
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
  .trade {
    margin: 30px 20px 0 0;
    h3 {
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #24324C;
      line-height: 1em;
    }
    p {
      margin: 10px 0 16px 0;
      font-size: 14px;
      color: #24324C;
      line-height: 22px;
    }
    .buy {
      .backImg1 {
        width: 420px;
        height: 331px;
        background: url('../../assets/images/handbook/cn-Bitmap5.png');
        background-size: 100% 100%;
        &.en {
          height: 350px;
          background-image: url('../../assets/images/handbook/en-Bitmap4.png');
          background-size: 100% 100%;
        }
        &.ja {
          height: 350px;
          background-image: url('../../assets/images/handbook/ja-Bitmap4.png');
          background-size: 100% 100%;
        }
        &.ko {
          height: 350px;
          background-image: url('../../assets/images/handbook/ko-Bitmap4.png');
          background-size: 100% 100%;
        }
        &.ru {
          height: 350px;
          background-image: url('../../assets/images/handbook/ru-Bitmap4.png');
          background-size: 100% 100%;
        }
      }
    }
    .sell {
      .backImg2 {
        width: 427px;
        height: 327px;
        background: url('../../assets/images/handbook/cn-Bitmap6.png');
        background-size: 100% 100%;
        &.en {
          height: 350px;
          background-image: url('../../assets/images/handbook/en-Bitmap5.png');
          background-size: 100% 100%;
        }
        &.ja {
          height: 350px;
          background-image: url('../../assets/images/handbook/ja-Bitmap5.png');
          background-size: 100% 100%;
        }
        &.ko {
          height: 350px;
          background-image: url('../../assets/images/handbook/ko-Bitmap5.png');
          background-size: 100% 100%;
        }
        &.ru {
          height: 350px;
          background-image: url('../../assets/images/handbook/ru-Bitmap5.png');
          background-size: 100% 100%;
        }
      }
    }
  }
  .congratulations {
    padding: 25px 0 0 0;
    font-size: 16px;
    color: #24324C;
    letter-spacing: 0.16px;
    line-height: 1em;
  }
  .information {
    .backImg {
      width: 878px;
      height: 140px;
      margin: 13px auto 0;
      background: url('../../assets/images/handbook/cn-Bitmap7.png');
      background-size: 100% 100%;
      &.en {
        background-image: url('../../assets/images/handbook/en-Bitmap6.png');
        background-size: 100% 100%;
      }
      &.ja {
        background-image: url('../../assets/images/handbook/ja-Bitmap6.png');
        background-size: 100% 100%;
      }
      &.ko {
        background-image: url('../../assets/images/handbook/ko-Bitmap6.png');
        background-size: 100% 100%;
      }
      &.ru {
        background-image: url('../../assets/images/handbook/ru-Bitmap6.png');
        background-size: 100% 100%;
      }
    }
  }
  .line {
    width: 880px;
    height: 1px;
    margin: 16px auto 0;
    border-top: 1px dashed #ECF0F7;
  }
  .qrcode {
    margin: 30px 0;
    .backImg {
      width: 200px;
      height: 200px;
      margin: 0 auto 16px;
      border: 1px solid #D6D8DD;
      background-image: url("../../assets/images/handbook/erweima.png");
      background-size: cover;
    }
    p {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #24324C;
      letter-spacing: 0.14px;
      text-align: center;
      line-height: 14px;
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
    p {
      margin-left: 9px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #24324C;
      line-height: 22px;
    }
    a {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #697FD5;
      line-height: 22px;
      text-decoration: underline;
    }
  }
</style>
