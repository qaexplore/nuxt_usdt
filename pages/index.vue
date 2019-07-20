<template>
  <div
    :class="{'trade-index':'black' === themeValue, 'trade-index-white': 'white' === themeValue}"
    style="width:100%;"
  >
    <swaps-header></swaps-header>
  </div>
</template>

<script>
import ApiConfig from "@/assets/js/config/api.config";
import SwapsHeader from "@/components/swaps-header.vue";

export default {
  name: "index",
  components: {
    SwapsHeader
  },
  computed: {
    product() {
      return Product(this.$i18n);
    },
    themeValue() {
      return this.$store.state.dictionary.theme;
    },
    screenWidth() {
      return this.$store.state.dictionary.screenWidth;
    },
    screenHeight() {
      return this.$store.state.dictionary.screenHeight;
    },
    wsOrder() {
      return this.$store.state.market.wsOrder;
    },
    // 最新成交价格，取last
    last() {
      return !!this.$store.state.market.tickers[this.$route.params.id]
        ? this.$store.state.market.tickers[this.$route.params.id].last
        : 0;
    },
    // 获取币种名称
    contractInfo() {
      return this.$store.state.market.contract.filter(item => {
        return item.id === Number(this.$route.params.id);
      })[0];
    },
    // 位数要求
    figure() {
      return this.$store.state.market.contract.filter(item => {
        return item.id.toString() === this.contractInfo.id.toString();
      })[0].contractParam;
    },
    notice() {
      return this.$store.state.dictionary.notice;
    }
  }
};
</script>

<style lang="less" scoped>
</style>
