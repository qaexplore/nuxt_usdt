<template>
  <div class="fund">
    <!-- 名词解释 -->
    <a class="title">{{ $t('message.direct.nounExplanation.paragraph1') }}</a>
    <i>{{ $t('message.direct.nounExplanation.paragraph2') }}</i>
    <p class="line">{{ $t('message.direct.nounExplanation.paragraph3') }}</p>
    <i>{{ $t('message.direct.nounExplanation.paragraph4') }}</i>
    <p class="line">{{ $t('message.direct.nounExplanation.paragraph5') }}</p>
    <i>{{ $t('message.direct.nounExplanation.paragraph6') }}</i>
    <p class="line">{{ $t('message.direct.nounExplanation.paragraph7') }}</p>
    <i>{{ $t('message.direct.nounExplanation.paragraph8') }}</i>
    <p class="line">{{ $t('message.direct.nounExplanation.paragraph9') }}</p>
    <i>{{ $t('message.direct.nounExplanation.paragraph10') }}</i>
    <p class="line">{{ $t('message.direct.nounExplanation.paragraph11') }}</p>
    <i>{{ $t('message.direct.nounExplanation.paragraph12') }}</i>
    <p class="line">{{ $t('message.direct.nounExplanation.paragraph13') }}</p>
    <i>{{ $t('message.direct.nounExplanation.paragraph14') }}</i>
    <p class="line">{{ $t('message.direct.nounExplanation.paragraph15') }}</p>
    <i>{{ $t('message.direct.nounExplanation.paragraph16') }}</i>
    <p class="line">{{ $t('message.direct.nounExplanation.paragraph17') }}</p>
    <i>{{ $t('message.direct.nounExplanation.paragraph18') }}</i>
    <p class="line">{{ $t('message.direct.nounExplanation.paragraph19') }}</p>
    <i>{{ $t('message.direct.nounExplanation.paragraph20') }}</i>
    <p class="line">{{ $t('message.direct.nounExplanation.paragraph21') }}</p>
    <i>{{ $t('message.direct.nounExplanation.paragraph22') }}</i>
    <p class="line">{{ $t('message.direct.nounExplanation.paragraph23') }}</p>
    <i>{{ $t('message.direct.nounExplanation.paragraph24') }}</i>
    <p class="line">{{ $t('message.direct.nounExplanation.paragraph25') }}</p>
    <i>{{ $t('message.direct.nounExplanation.paragraph26') }}</i>
    <p class="line">{{ $t('message.direct.nounExplanation.paragraph27') }}</p>
    <i>{{ $t('message.direct.nounExplanation.paragraph28') }}</i>
    <p class="line">{{ $t('message.direct.nounExplanation.paragraph29') }}</p>
    <i>{{ $t('message.direct.nounExplanation.paragraph30') }}</i>
    <p class="line">{{ $t('message.direct.nounExplanation.paragraph31') }}</p>
    <i>{{ $t('message.direct.nounExplanation.paragraph32') }}</i>
    <p style="padding-bottom: 30px;">{{ $t('message.direct.nounExplanation.paragraph33') }}</p>
    <st-row class="toHistory" justify="center" align="center">
      <div class="mouse"></div>
      <p class="text1" v-html="$t('message.direct.handbook.paragraph6.p2')"></p>
      <router-link class="text2" to="/handbook/price/1001" v-html="$t('message.direct.navigation.title4')"></router-link>
    </st-row>
  </div>
</template>

<script>
  export default {
    name: 'nounExplanation'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../assets/css/theme";
  .fund {
    .title {
      display: block;
      margin: 0 20px;
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
    i {
      display: block;
      margin-top: 13px;
      margin-bottom: 4px;
      padding: 0 20px;
      font-style: normal;
      font-size: 14px;
      font-weight: 600;
      color: #24324C;
      line-height: 20px;
    }
    p {
      margin:6px 20px 0;
      padding-bottom: 13px;
      font-size: 14px;
      color: #24324C;
      line-height: 22px;
    }
    .line {
      border-bottom: 1px dashed #ECF0F7;
    }
    .comment {
      margin-top: 7px;
      color: #7889A9;
    }
    .dl {
      padding: 0 20px;
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
  }
</style>
