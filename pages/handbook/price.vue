<template>
  <div class="fund">
    <h2>{{ $t(`message.direct.price.title1`) }}</h2>
    <p
      style="font-size: 16px;line-height: 16px;color: #24324C;font-weight: 500"
    >{{ $t(`message.direct.price.paragraph1`) }}</p>
    <p style="margin-top: 10px">{{ $t(`message.direct.price.paragraph2`) }}</p>
    <p style="margin-top: 10px;text-indent: 2em;">{{ $t(`message.direct.price.paragraph3`) }}</p>
    <p style="margin-top: 10px;text-indent: 2em;">{{ $t(`message.direct.price.paragraph4`) }}</p>
    <p style="margin-top: 10px;text-indent: 2em;">{{ $t(`message.direct.price.paragraph5`) }}</p>
    <p style="margin-top: 10px">{{ $t(`message.direct.price.paragraph6`) }}</p>
    <p style="margin-top: 10px;text-indent: 2em;">{{ $t(`message.direct.price.paragraph7`) }}</p>
    <p style="margin-top: 10px;text-indent: 2em;">{{ $t(`message.direct.price.paragraph8`) }}</p>
    <p style="margin-top: 10px;text-indent: 2em;">{{ $t(`message.direct.price.paragraph9`) }}</p>
    <p style="margin-top: 10px;text-indent: 2em;">{{ $t(`message.direct.price.paragraph10`) }}</p>
    <!--<ul>-->
    <!--<li :class="$route.params.id === 'BTC' ? 'active' : ''"><router-link to="/handbook/price/BTC">BTC</router-link></li>-->
    <!--<li :class="$route.params.id === 'EOS' ? 'active' : ''"><router-link to="/handbook/price/EOS">EOS</router-link></li>-->
    <!--<li :class="$route.params.id === 'BCH' ? 'active' : ''"><router-link to="/handbook/price/BCH">BCH</router-link></li>-->
    <!--<li :class="$route.params.id === 'ETH' ? 'active' : ''"><router-link to="/handbook/price/ETH">ETH</router-link></li>-->
    <!--<li :class="$route.params.id === 'LTC' ? 'active' : ''"><router-link to="/handbook/price/LTC">LTC</router-link></li>-->
    <!--<li :class="$route.params.id === 'XRP' ? 'active' : ''"><router-link to="/handbook/price/XRP">XRP</router-link></li>-->
    <!--<li :class="$route.params.id === 'ETC' ? 'active' : ''"><router-link to="/handbook/price/ETC">ETC</router-link></li>-->
    <!--<li :class="$route.params.id === 'DASH' ? 'active' : ''"><router-link to="/handbook/price/DASH">DASH</router-link></li>-->
    <!--</ul>-->
    <ul>
      <li
        :class="$route.params.id === item.id.toString() ? 'active' : ''"
        v-for="(item, index) in contract"
        :key="index"
      >
        <router-link :to="'/handbook/price/' + item.id">{{ item.tableName.toUpperCase() }}</router-link>
      </li>
    </ul>
    <direct-table :theadList="theadList" :tbodyList="tbodyList" :tdWidth="tdWidth"></direct-table>
  </div>
</template>

<script>
import DirectTable from "@/components/direct-table";
import Filter from "@/assets/js/filter";
import SwapsApi from "@/assets/js/api/swapsApi.js";
export default {
  name: "price",
  components: {
    DirectTable
  },
  data() {
    return {
      theadList: this.$t(`message.direct.price.theadList`),
      tbodyList: null,
      contract: null,
      tdWidth: ["428px", "449px"]
    };
  },
  watch: {
    $route() {
      this.getThisContractList();
    },
    "$i18n.locale"() {
      this.theadList = this.$t(`message.direct.price.theadList`);
    }
  },
  methods: {
    init() {
      SwapsApi.getContractAllList()
        .then(res => {
          let arr = res.data.contractList || [];
          arr.forEach(item => {
            if (!item.contractParam) {
              item.contractParam = {};
            }
          });
          this.$store.commit("market/SET_CONTRACT", arr);
          this.contract = arr;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getThisContractList() {
      let id = this.$route.params.id;
      // console.log(id)
      SwapsApi.getIndexPriceList(id)
        .then(res => {
          this.tbodyList = [];
          let list1 = [];
          // console.log(res.data.indexPriceList);
          res.data.indexPriceList.forEach((item, index) => {
            let tmp1 = [];
            // let tmp2 = null
            tmp1 = [
              Filter.getDate(item.createdDate),
              Filter.splitFormat(item.price, 2)
            ];
            //              item.formList.forEach(res => {
            //                tmp2 = [Filter.getDate(item.createdDate), res.name, '50%', Filter.splitFormat(res.value, 2)]
            //                list2.push(tmp2)
            //              })
            list1.push(tmp1);
          });
          this.tbodyList = list1;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    let list1 = [];
    let id = this.$route.params.id;
    SwapsApi.getIndexPriceList(id)
      .then(res => {
        res.data.indexPriceList.forEach((item, index) => {
          let tmp1 = [];
          tmp1 = [
            Filter.getDate(item.createdDate),
            Filter.splitFormat(item.price, 2)
          ];
          //            item.formList.forEach(res => {
          //              tmp2 = [Filter.getDate(item.createdDate), res.name, '50%', Filter.splitFormat(res.value, 2)]
          //              list2.push(tmp2)
          //            })
          list1.push(tmp1);
        });
        this.tbodyList = list1;
        // this.tbodyList2 = list2.splice(0,10)
      })
      .catch(err => {
        console.log(err);
      });
  },
  created() {
    this.init();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/css/theme";
.fund {
  h2 {
    margin: 0 20px;
    width: 100%;
    height: 50px;
    font-size: 20px;
    color: #24324c;
    line-height: 50px;
    font-weight: normal;
    border-bottom: 1px solid #ecf0f7;
  }
  p {
    margin-top: 16px;
    padding: 0 20px;
    font-size: 14px;
    color: #24324c;
    line-height: 22px;
  }
  ul {
    margin: 22px 20px 0;
    border-bottom: 1px solid #ecf0f7;
    li {
      display: inline-block;
      width: 74px;
      height: 32px;
      text-align: center;
      a {
        font-size: 16px;
        color: #7889a9;
      }
    }
    .active {
      border-bottom: 2px solid #597ab9;
    }
  }
}
</style>
