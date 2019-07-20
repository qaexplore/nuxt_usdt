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
  data() {
    return {
      apiconfig: ApiConfig
    };
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
