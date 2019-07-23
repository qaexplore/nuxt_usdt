<template>
  <div>
    <swaps-header></swaps-header>
    <div style="background-color:#f5f7fa">
      <st-row class="content" justify="between" style="margin-top: 50px;">
        <navigation></navigation>
        <div class="right" id="handbookRight">
          <router-view></router-view>
          <a @click="goTop" class="float" id="show_return_top" ref="show_return_top">
            <span class="jt"></span>
            <span class="text">{{ $t('message.direct.navigation.goTop') }}</span>
          </a>
        </div>
      </st-row>
    </div>
    <!-- <st-footer style="background: #141625;" :product="product"></st-footer> -->
    <div id="parent-footer">
      <iframe
        :height="ifreamHeight"
        :src="ifreamSrc"
        frameborder="0"
        framespacing="0"
        id="footer"
        name="footer"
        scrolling="no"
        style="position:absolute;min-width:1366px;"
        width="100%"
      ></iframe>
    </div>
  </div>
</template>

<script>
import SwapsHeader from "@/components/swaps-header";
import Product from "@/assets/js/config/product";
import Navigation from "@/components/handbook/navigation";
import ApiConfig from "@/myConfig/api.config.js";
export default {
  name: "handbook",
  components: {
    SwapsHeader,
    Navigation
  },
  computed: {
    product() {
      return Product(this.$i18n);
    }
  },
  data() {
    return {
      screenWidth: null,
      elementNav: document.querySelector("#navigation"),
      ifreamSrc: ApiConfig.footerDomain,
      ifreamHeight: "210"
    };
  },
  watch: {
    screenWidth(val) {
      this.calFloat(val);
    },
    $route() {
      setTimeout(() => {
        this.getNavigationHeight();
      }, 100);
      window.scrollTo(0, 0);
    },
    "$i18n.locale"() {
      setTimeout(() => {
        this.getNavigationHeight();
      }, 100);
      let postMessage = {
        language: this.$i18n.locale,
        color: "#121723",
        href: window.location.origin
      };
      setTimeout(() => {
        window.frames.footer.postMessage(postMessage, this.ifreamSrc);
      });
    }
  },
  methods: {
    postIfream() {
      let postMessage = {
        language: this.$i18n.locale,
        color: "#121723",
        href: window.location.origin
      };
      if (
        document.getElementById("footer") &&
        document.getElementById("footer").attachEvent
      ) {
        document.getElementById("footer").attachEvent("onload", () => {
          // IE
          setTimeout(() => {
            window.frames.footer.postMessage(postMessage, this.ifreamSrc);
          }, 100);
        });
      } else {
        document.getElementById("footer").onload = new Promise(() => {
          // 非IE
          setTimeout(() => {
            window.frames.footer.postMessage(postMessage, this.ifreamSrc);
          }, 100);
        });
      }
    },
    goTop() {
      document.documentElement.scrollTop = 0;
      window.pageYOffset = 0;
      document.body.scrollTop = 0;
    },
    // 计算浮动距离
    calFloat(val) {
      if (val < 1348) return;
      let tmp = (val - 1180) / 2;
      let num = tmp + 1180 + 20;
      let target = document.getElementById("show_return_top");
      target.style.left = num + "px";
    },
    // 计算导航栏
    calNavigayion(val) {
      //if (val < 1366) return
      let tmp = (val - 1140) / 2;
      let num = tmp + 1140 + 20 - 240;
      let nav = document.getElementById("navigation");
      if (val < 1366) {
        nav.style.right = "";
        nav.style.left = "90px";
      } else {
        nav.style.left = "";
        nav.style.right = num + "px";
      }
      // console.log(val)
      // console.log(nav)
    },
    scrollFunc2() {
      if (
        this.$route.path !== "/handbook/usdtContract" ||
        this.$route.path !== "/handbook/instructions"
      ) {
        return;
      }
      let toTop =
        document.body.scrollTop === 0
          ? document.documentElement.scrollTop
          : document.body.scrollTop;
      let oTop111 = document.body.scrollTop;
      // console.log('rrrr', toTop, oTop111)
      if (toTop > 90) {
        // console.log(111)
        document.querySelector("#navigation").style.top = 0;
      } else {
        document.querySelector("#navigation").style.top = 70 - toTop + "px";
      }
    },
    scrollFunc1() {
      // console.log('scrollFunc1')
    },
    getNavigationHeight() {
      let tmpHeight = window.getComputedStyle(
        document.querySelector("#handbookRight"),
        null
      )["height"];
      tmpHeight = Number(tmpHeight.substr(0, tmpHeight.length - 2)) - 58; // 58为点击下一页 元素的高度
      // console.log('tmpHeight',tmpHeight);
      document.querySelector("#navigation").style.height = tmpHeight + "px";
    },
    fun(e) {
      if (e.data && e.data.height) {
        this.ifreamHeight = e.data.height;
      }
    }
  },
  mounted() {
    if (process.client) return;
    setTimeout(() => {
      this.postIfream();
    }, 100);
    window.addEventListener("message", this.fun, false);
    this.calFloat(document.body.clientWidth);
    // 获取浏览器宽度
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
    if (document.addEventListener) {
      document.addEventListener("DOMMouseScroll", this.scrollFunc1, false);
    }
    window.onmousewheel = document.onmousewheel = this.scrollFunc2;
    // console.log('345hui',window.getComputedStyle(document.querySelector('#handbookRight'),null)['height'])
    this.getNavigationHeight();
  },
  destroyed() {
    console.log("0000");
    window.removeEventListener("message", this.fun, false);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/css/theme";
.content {
  margin: 0px auto;
  width: 1180px;
  min-height: 700px;
  .no-transiton,
  .no-transiton * {
    transition: none !important;
  }
  .right {
    position: relative;
    // margin-left: 260px;
    width: 920px;
    height: 100%;
    background: #fff;
    .float {
      padding: 8px;
      position: fixed;
      bottom: 30px;
      left: 1560px;
      z-index: 100;
      width: 40px;
      height: 40px;
      background: #fff;
      box-shadow: 2px 4px 6px 0 rgba(112, 124, 148, 0.1);
      .border-radius(@radius: 50%);
      .text {
        display: none;
      }
      &:hover {
        animation: fadeInOut 0.3s;
        .jt {
          display: none;
        }
        .jt::after {
          display: none;
        }
        .text {
          display: inline-block;
          font-size: 12px;
          color: #7889a9;
          line-height: 1em;
          text-align: center;
        }
        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
        @-webkit-keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      }
      .jt {
        position: absolute;
        display: inline-block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-right: 10px solid transparent;
        border-left: 10px solid transparent;
        border-bottom: 10px solid #7889a9;
      }
      .jt::after {
        content: "";
        position: absolute;
        top: 2px;
        left: -8px;
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        border-bottom: 8px solid #fff;
      }
    }
  }
}
</style>
