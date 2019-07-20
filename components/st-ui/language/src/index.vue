<template>
  <st-row align="center" class="st-language">
    <st-row align="center" class="current" justify="center">
      <span :class="['flag', locale.lang]"></span>
      <!-- <span>{{ locale.text }}</span> -->
      <span></span>
    </st-row>
    <div class="options">
      <span></span>
      <st-row
        :key="item.id"
        @callback="change(item.lang)"
        align="center"
        class="option"
        v-for="item in languageList"
      >
        <span :class="['flag', item.lang]"></span>
        <span>{{ item.text }}</span>
      </st-row>
    </div>
  </st-row>
</template>

<script>
import LanguageList from './languageList'
import Cookie from '@/assets/js/config/cookie'
import ApiConfig from '@/assets/js/config/api.config'
export default {
  name: 'st-language',
  data() {
    return {
      languageList: LanguageList
    }
  },
  props: {
    Cookie: Object,
    ApiConfug: Object,
    langList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    locale() {
      let locale = this.languageList.find(
        item => item.lang === this.$i18n.locale
      )
      if (!locale) {
        locale = this.languageList[0]
        Cookie.setCookie('locale', locale.lang, '', '/', ApiConfig.domain)
      }
      return locale
    }
  },
  methods: {
    change(lang) {
      // console.log(lang)
      Cookie.setCookie('locale', lang, '', '/', ApiConfig.domain)
      this.$i18n.locale = lang
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../../assets/css/theme';
.st-language {
  .themeBlack();
  position: relative;
  height: 30px;
  padding-bottom: 10px;
  .current {
    height: 100%;
    // padding-left: 10px;
    // width: 113px;
    position: relative;
    top: 2px;
    height: 25px;
    // border: 1px solid @headerLoginLineColor;
    .border-radius(100px);
    cursor: pointer;
    & > span {
      margin: 0 2px;
      color: @headerChangeVersionFontColor;
      font-size: 12px;
      display: block;
      &:last-of-type {
        border-top: 5px solid @headerChangeVersionFontColor;
        border-right: 3.5px solid transparent;
        border-left: 3.5px solid transparent;
        .transition(0.5s);
      }
    }
  }
  .options {
    display: none;
    position: absolute;
    left: -50%;
    top: 30px;
    .transform(translate(-50%));
    padding: 14px 0 10px;
    z-index: 1000;
    // background-color: #1a2a48;
    background-color: @headerUserInfoPopupBgColor;
    box-shadow: 0px 3px 7px 0px rgba(20, 33, 57, 0.5);
    .border-radius(5px);
    cursor: initial;
    & > span {
      position: absolute;
      left: 70%;
      top: -5px;
      .transform(translate(-50%));
      border-right: 5px solid transparent;
      border-bottom: 6px solid @headerUserInfoPopupBgColor;
      border-left: 5px solid transparent;
    }
    .option {
      height: 34px;
      line-height: 34px;
      // border-bottom: 1px solid #fff;
      padding: 0 30px;
      cursor: pointer;
      white-space: nowrap;
      &:hover {
        background-color: @headerUserInfoPopupActiveColor;
        span {
          color: @fontColor;
        }
      }
      &:last-of-type {
        border: none;
      }
      span {
        color: @headerUserInfoPopupFontColor;
        font-size: 12px;
        margin: 0 2px;
        // &:last-of-type {
        //   white-space: nowrap;
        // }
      }
    }
  }
  &:hover {
    .current {
      border-color: #6c85ae;
      & > span {
        color: #6c85ae;
        &:last-of-type {
          .transform(rotate(180deg));
          // border-top-color: #6c85ae;
          border-top-color: #6c89ff;
        }
      }
    }
    .options {
      display: block;
    }
  }
  .flag {
    width: 13px;
    height: 9px;
    background-size: 13px 9px;
    &.cn {
      background-image: url('./img/cn@2x.png');
    }
    &.en {
      background-image: url('./img/en@2x.png');
    }
    &.ko {
      background-image: url('./img/ko@2x.png');
    }
    &.ru {
      background-image: url('./img/ru@2x.png');
    }
    &.ja {
      background-image: url('./img/ja@2x.png');
    }
  }
  &.white {
    .current {
      border-color: #6c85ae;
      span {
        color: #6c85ae;
        &:last-of-type {
          border-top-color: #6c85ae;
        }
      }
    }
    .options {
      background-color: #f8f9fb;
      box-shadow: 0px 3px 7px 0px rgba(205, 205, 205, 0.5);
      & > span {
        border-bottom-color: #f8f9fb;
      }
      .option {
        span {
          color: #6c85ae;
        }
      }
    }
    &:hover {
      .current {
        border-color: #1e2266;
        span {
          color: #1e2266;
          &:last-of-type {
            border-top-color: #1e2266;
          }
        }
      }
      .options {
        .option {
          &:hover {
            background-color: #eff1f6;
            span {
              color: #1e2266;
            }
          }
        }
      }
    }
  }
  &.home {
    .current {
      border-color: #fff;
      span {
        color: #fff;
        &:last-of-type {
          border-top-color: #fff;
        }
      }
    }
    .options {
      background-color: #0c1047;
      // box-shadow: 0px 3px 7px 0px rgba(205, 205, 205, 0.5);
      & > span {
        border-bottom-color: #0c1047;
      }
      .option {
        span {
          color: #fff;
        }
      }
    }
    &:hover {
      .current {
        border-color: #c0d0f9;
        span {
          color: #c0d0f9;
          &:last-of-type {
            border-top-color: #c0d0f9;
          }
        }
      }
      .options {
        .option {
          padding: 0 20px;
          &:hover {
            background-color: #1f2257;
            span {
              color: #c0d0f9;
            }
          }
        }
      }
    }
  }
}
</style>
