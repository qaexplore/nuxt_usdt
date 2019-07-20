<template>
  <div id="app">
    <nuxt />
  </div>
</template>

<script>
import Dictionary from "~/assets/js/dictionary";
import Cookie from "~/myConfig/cookie";
import ApiConfig from "~/myConfig/api.config.js";
export default {
  name: "default",
  scrollToTop: true,
  data() {
    return {
      apiconfig: ApiConfig
    };
  },
  computed: {
    router() {
      return this.$route;
    }
  },
  watch: {
    "$i18n.locale"(val) {
      let obj = { val: { $dictionary: null } };
      Dictionary.install(obj, this.$i18n);
      Object.assign(this.$dictionary, obj.val.$dictionary);
    },
    router(val) {}
  },
  methods: {
    initTheme() {
      if (Cookie.getCookie("theme") === "black") {
        this.$store.commit("dictionary/SET_THEME", "black");
      }
      if (Cookie.getCookie("theme") === "white") {
        this.$store.commit("dictionary/SET_THEME", "white");
      }
      if (Cookie.getCookie("theme")) {
        this.$store.commit("dictionary/SET_THEME", Cookie.getCookie("theme"));
      } else {
        Cookie.setCookie("theme", "black", 1, "/", this.apiConfig.domain);
      }
    },
    INIT_WH() {
      this.$store.commit(
        "dictionary/SAVE_SCREEN_WIDTH",
        document.body.clientWidth
      );
      this.$store.commit(
        "dictionary/SET_SCREENHEIGHT",
        document.body.clientHeight
      );
    }
  },
  created() {
    if (process.client) {
      window.onresize = () => {
        this.INIT_WH();
      };
      window.onscroll = () => {
        let left =
          document.documentElement.scrollLeft || document.body.scrollLeft;
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        this.$store.commit("dictionary/SAVE_SCROLLLEFT", left);
        this.$store.commit("dictionary/SAVE_SCROLLTOP", top);
      };
    }
  },
  mounted() {
    this.initTheme();
    this.INIT_WH();
  }
};
</script>


<style lang="less" scoped>
#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1366px;
}
</style>
