<template>
  <div
    style="padding-top: 50px;"
    :class="{'history':'black' === themeValue, 'history-white': 'white' === themeValue}"
  >
    <swaps-header></swaps-header>
    <div style="padding-bottom:20px;">
      <trade-history></trade-history>
    </div>

    <!-- <st-footer style="background-color: #141625;position:inherit; margin-top: 20px;" :product="product"></st-footer> -->
    <div id="parent-footer">
      <iframe
        style="position:absolute;min-width:1366px;"
        :src="ifreamSrc"
        frameborder="0"
        width="100%"
        id="footer"
        name="footer"
        framespacing="0"
        :height="ifreamHeight"
        scrolling="no"
      ></iframe>
    </div>
  </div>
</template>

<script>
import SwapsHeader from "@/components/swaps-header.vue";
import TradeHistory from "@/components/history/trade-history.vue";
import Product from "@/assets/js/config/product";
import ApiConfig from "@/myConfig/api.config.js";

export default {
  name: "historyPage",
  data() {
    return {
      ifreamSrc: ApiConfig.footerDomain,
      ifreamHeight: "210"
    };
  },
  computed: {
    product() {
      return Product(this.$i18n);
    },
    themeValue() {
      // return 'white'
      return this.$store.state.dictionary.theme;
    }
  },
  components: {
    SwapsHeader,
    TradeHistory
  },
  watch: {
    "$i18n.locale"() {
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
  mounted() {
    setTimeout(() => {
      this.postIfream();
    }, 100);
    window.addEventListener("message", this.fun, false);
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
    fun(e) {
      if (e.data && e.data.height) {
        this.ifreamHeight = e.data.height;
      }
    }
  },
  destroyed() {
    window.removeEventListener("message", this.fun, false);
  }
};
</script>

<style lang="less" scoped="">
@import "../../assets/css/theme";
.history {
  background: #0d121d;
  .trade-history {
    margin-top: 20px;
  }
}
.history-white {
  background: #f5f6fa;
  .trade-history-white {
    margin-top: 20px;
  }
}
</style>
