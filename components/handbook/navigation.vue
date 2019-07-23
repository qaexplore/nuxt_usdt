<template>
  <div class="navigation" id="navigation">
    <div class="navigation-content">
      <a @click="clickContract1">
        <p>{{ $t('message.direct.navigation.title1') }}</p>
        <span :class="contract1 ? 'active' : ''"><i></i></span>
      </a>
      <ul v-if="contract1">
        <li class="secondary-title">
          <router-link to="/handbook" :class="$route.path === '/handbook' ? 'selectContent' : ''"><p>{{ $t('message.direct.navigation.secondaryTitle1') }}</p></router-link>
        </li>
        <li class="secondary-title">
          <router-link to="/handbook/profitDeficit" :class="$route.path === '/handbook/profitDeficit' ? 'selectContent' : ''"><p>{{ $t('message.direct.navigation.secondaryTitle0') }}</p></router-link>
        </li>
      </ul>
      <ul v-if="contract1">
        <li class="secondary-title">
          <a @click="clickContract2"><p>{{ $t('message.direct.navigation.secondaryTitle2') }}</p><span :class="contract2 ? 'active' : ''"><i></i></span></a>
          <ul v-if="contract2">
            <li>
              <router-link to="/handbook/instructions#1" :class="{'selectContent': presentNav === 1 || navActive === 1}">{{ $t('message.direct.navigation.title2Content1') }}</router-link>
              <router-link to="/handbook/instructions#2" :class="{'selectContent': presentNav === 2 || navActive === 2}">{{ $t('message.direct.navigation.title2Content2') }}</router-link>
              <router-link to="/handbook/instructions#3" :class="{'selectContent': presentNav === 3 || navActive === 3}">{{ $t('message.direct.navigation.title2Content3') }}</router-link>
              <router-link to="/handbook/instructions#4" :class="{'selectContent': presentNav === 4 || navActive === 4}">{{ $t('message.direct.navigation.title2Content4') }}</router-link>
              <router-link to="/handbook/instructions#5" :class="{'selectContent': presentNav === 5 || navActive === 5}">{{ $t('message.direct.navigation.title2Content5') }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <ul v-if="contract1">
        <li class="secondary-title">
          <router-link to="/handbook/compensate/1" :class="$route.path.indexOf('compensate') > -1 ? 'selectContent' : ''"><p>{{ $t('message.direct.navigation.secondaryTitle3') }}</p></router-link>
        </li>
      </ul>
      <ul v-if="contract1">
        <li class="secondary-title">
          <router-link to="/handbook/insurance/1" :class="$route.path.indexOf('insurance') > -1? 'selectContent' : ''"><p>{{ $t('message.direct.navigation.secondaryTitle4') }}</p></router-link>
        </li>
      </ul>
      <a @click="clickContract3">
        <p>{{ $t('message.direct.navigation.title2') }}</p>
        <span :class="contract3 ? 'active' : ''"><i></i></span>
      </a>
      <ul v-if="contract3">
        <li class="secondary-title">
          <router-link to="/handbook/usdtDirect" :class="$route.path === '/handbook/usdtDirect' ? 'selectContent' : ''"><p>{{ $t('message.direct.navigation.secondaryTitle5') }}</p></router-link>
        </li>
        <li class="secondary-title">
          <router-link to="/handbook/usdtProfitDeficit" :class="$route.path === '/handbook/usdtProfitDeficit' ? 'selectContent' : ''"><p>{{ $t('message.direct.navigation.secondaryTitle50') }}</p></router-link>
        </li>
      </ul>
      <ul v-if="contract3">
        <li class="secondary-title">
          <a @click="clickContract4"><p>{{ $t('message.direct.navigation.secondaryTitle6') }}</p><span :class="contract4 ? 'active' : ''"><i></i></span></a>
          <ul v-if="contract4">
            <li>
              <!--<a href="/handbook/usdtContract#1" :class="$route.path === '/handbook/usdtContract' && $route.hash.slice(1) - 0 === 1 ? 'selectContent' : ''">{{ $t('message.direct.navigation.title6Content1') }}</a>-->
              <router-link to="/handbook/usdtContract#1" :class="{'selectContent': presentNav === 1 || navActive === 1}">{{ $t('message.direct.navigation.title6Content1') }}</router-link>
              <router-link to="/handbook/usdtContract#2" :class="{'selectContent': presentNav === 2 || navActive === 2}">{{ $t('message.direct.navigation.title6Content2') }}</router-link>
              <router-link to="/handbook/usdtContract#3" :class="{'selectContent': presentNav === 3 || navActive === 3}">{{ $t('message.direct.navigation.title6Content3') }}</router-link>
              <router-link to="/handbook/usdtContract#4" :class="{'selectContent': presentNav === 4 || navActive === 4}">{{ $t('message.direct.navigation.title6Content4') }}</router-link>
              <router-link to="/handbook/usdtContract#5" :class="{'selectContent': presentNav === 5 || navActive === 5}">{{ $t('message.direct.navigation.title6Content5') }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <ul v-if="contract3">
        <li class="secondary-title">
          <router-link to="/handbook/usdtCompensate/1001" :class="$route.path.indexOf('usdtCompensate') > -1 ? 'selectContent' : ''"><p>{{ $t('message.direct.navigation.secondaryTitle3') }}</p></router-link>
        </li>
      </ul>
      <ul v-if="contract3">
        <li class="secondary-title">
          <router-link to="/handbook/usdtInsurance/1001" :class="$route.path.indexOf('usdtInsurance') > -1 ? 'selectContent' : ''"><p>{{ $t('message.direct.navigation.secondaryTitle4') }}</p></router-link>
        </li>
      </ul>
      <a @click="showRegularContract">
        <p>{{ $t('message.regular.navigation.regularTitle') }}</p>
        <span :class="regularContract ? 'active' : ''"><i></i></span>
      </a>
      <ul v-if="regularContract">
        <li class="secondary-title">
          <router-link to="/handbook/regularDirect" :class="$route.path === '/handbook/regularDirect' ? 'selectContent' : ''"><p>{{ $t('message.regular.navigation.regularSecondTitle2') }}</p></router-link>
        </li>
        <li class="secondary-title">
          <a
            @click="showRegularContractDetail"><p>{{ $t('message.regular.navigation.regularSecondTitle1') }}</p><span
            :class="regularContractDetail ? 'active' : ''"><i></i></span></a>
          <ul v-if="regularContractDetail">
            <li>
              <router-link to="/handbook/regularContract#1" :class="{'selectContent': presentNav === 1 || navActive
              === 1}">{{ $t('message.regular.navigation.regularThirdTitle1') }}</router-link>
              <router-link to="/handbook/regularContract#2" :class="{'selectContent': presentNav === 2 || navActive
              === 2}">{{ $t('message.regular.navigation.regularThirdTitle2') }}</router-link>
              <router-link to="/handbook/regularContract#3" :class="{'selectContent': presentNav === 3 || navActive
              === 3}">{{ $t('message.regular.navigation.regularThirdTitle3') }}</router-link>
              <router-link to="/handbook/regularContract#4" :class="{'selectContent': presentNav === 4 || navActive
              === 4}">{{ $t('message.regular.navigation.regularThirdTitle4') }}</router-link>
              <router-link to="/handbook/regularContract#5" :class="{'selectContent': presentNav === 5 || navActive
              === 5}">{{ $t('message.regular.navigation.regularThirdTitle5') }}</router-link>
              <router-link to="/handbook/regularContract#6" :class="{'selectContent': presentNav === 6 || navActive
              === 6}">{{ $t('message.regular.navigation.regularThirdTitle6') }}</router-link>
              <router-link to="/handbook/regularContract#7" :class="{'selectContent': presentNav === 7 || navActive
              === 7}">{{ $t('message.regular.navigation.regularThirdTitle7') }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <ul v-if="regularContract">
        <li class="secondary-title">
          <router-link to="/handbook/regularContract/insurance/2001" :class="$route.path.indexOf('insurance') > -1?
          'selectContent' : ''"><p>{{ $t('message.direct.navigation.secondaryTitle4') }}</p></router-link>
        </li>
      </ul>
      <router-link to="/handbook/nounExplanation" :class="$route.path === '/handbook/nounExplanation' ? 'selectContent' : ''">
        <p>{{ $t('message.direct.navigation.title3') }}</p>
        <!--<span><i></i></span>-->
      </router-link>
      <router-link to="/handbook/price/1001" :class="$route.path.indexOf('price') > -1 ? 'selectContent' : ''">
        <p>{{ $t('message.direct.navigation.title4') }}</p>
        <!--<span><i></i></span>-->
      </router-link>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'navigation',
    data () {
      return {
        contract1: false,
        contract2: false,
        contract3: false,
        contract4: false,
        regularContract: false,
        regularContractDetail: false,
        presentNav: null,
      }
    },
    computed: {
      navActive () {
        return this.$store.state.dictionary.navActive
      }
    },
    watch: {
      navActive(val) {
        // console.log('watch navActive', val)
        if (val !== 0) {
          this.presentNav = null
        }
      },
      '$route' () {
        this.getNav()
      }
    },
    methods: {
      clickContract1 () {
        this.contract1 = !this.contract1
        this.contract2 = false
        this.contract3 = false
        this.contract4 = false
        this.regularContract = false
        this.regularContractDetail = false
        this.$router.push('/handbook')
      },
      clickContract2 () {
        this.contract2 = !this.contract2
        this.$router.push('/handbook/instructions#1')
      },
      clickContract3 () {
        this.contract3 = !this.contract3
        this.contract1 = false
        this.contract2 = false
        this.regularContract = false
        this.regularContractDetail = false
        // this.contract4 = false
        // this.$router.push('/handbook/usdtDirect')
        this.clickContract4();
      },
      clickContract4 () {
        this.contract4 = !this.contract4
        this.$router.push('/handbook/usdtContract#1')
      },
      // 显示交割合约
      showRegularContract () {
        this.contract1 = false
        this.contract2 = false
        this.contract3 = false
        this.contract4 = false
        this.regularContract = !this.regularContract
        this.showRegularContractDetail()
      },
      showRegularContractDetail () {
        this.regularContractDetail = !this.regularContractDetail
        this.$router.push('/handbook/regularDirect')
      },
      getNav () {
        this.$store.commit("SET_NAV", 0) // 0代表做了点击操作
        if (this.$route.path === '/handbook/usdtContract') {
          this.presentNav = Number(this.$route.hash.slice(1))
        } else if (this.$route.path === '/handbook/instructions') {
          this.presentNav = Number(this.$route.hash.slice(1))
        } else if (this.$route.path === '/handbook/regularContract') {
          this.presentNav = Number(this.$route.hash.slice(1))
        } else {
          this.presentNav = null
          this.$store.commit("SET_NAV", null)
        }
        // console.log('getNav',this.presentNav)
      }
    },
    created () {
      this.getNav()
      if (this.$route.path === '/handbook' || this.$route.path === '/handbook/compensate' || this.$route.path === '/handbook/insurance') {
        this.contract1 = true
      }
      if (this.$route.path === '/handbook/instructions') {
        this.contract1 = true
        this.contract2 = true
      }
      if (this.$route.path === '/handbook/usdtDirect' || this.$route.path === '/handbook/usdtCompensate' || this.$route.path === '/handbook/usdtInsurance') {
        this.contract3 = true
      }
      if (this.$route.path === '/handbook/usdtContract') {
        this.contract3 = true
        this.contract4 = true
      }
      if (this.$route.path === '/handbook/regularContract' || this.$route.path === '/handbook/regularDirect') {
        this.regularContract = true
        this.regularContractDetail = true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../assets/css/theme";
  .navigation {
    width: 240px;
    height: 100%;
    background: #fff;
    overflow: hidden;
    .navigation-content {
      position: fixed;
      top: 70px;
      // padding: 20px 10px 0;
      padding: 20px 10px 10px;
      width: 240px;
      // height: 450px;
      min-height: 450px;
      background: #fff;
    }
    a {
      padding: 0 10px;
      position: relative;
      display: flex;
      justify-content: space-between;
      p {
        display: inline-block;
        font-size: 16px;
        line-height: 34px;
        font-weight: 500;
        color: #24324C;
        // font-family: PingFangSC-Medium;
      }
      span {
        position: absolute;
        top: 32%;
        right: 0;
        width: 16px;
        height: 16px;
        background-image: url("../../assets/images/handbook/arrow2.svg");
        background-size: cover;
        /*border-right: 6px solid transparent;*/
        /*border-left: 6px solid transparent;*/
        /*border-top: 7px solid #7889A9;*/
        vertical-align: middle;
        transition: .3s all linear;
        i {
          position: absolute;
          left: -4px;
          bottom: 2px;
          /*border-right: 4px solid transparent;*/
          /*border-left: 4px solid transparent;*/
          /*border-top: 5px solid #fff;*/
        }
      }
      .active {
        transform: rotate(-180deg);
        -ms-transform: rotate(-180deg); 	/* IE 9 */
        -moz-transform: rotate(-180deg); 	/* Firefox */
        -webkit-transform: rotate(-180deg); /* Safari 和 Chrome */
        -o-transform: rotate(-180deg); 	/* Opera */
      }
      &:hover {
        background: #ECF0F7;
        color: #24324C!important;
        .border-radius(@radius: 3px);
      }
    }
    .secondary-title {
      a {
        padding-left: 20px;
        p {
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          padding: 5px 0;
          // font-family: PingFangSC-Medium;
        }
        &:hover {
          background: #ECF0F7;
          color: #24324C!important;
          .border-radius(@radius: 3px);
        }
      }
    }
    li {
      a {
        font-size: 14px;
        line-height: 20px;
        color: #24324C;
        font-weight: 300;
        font-size: 14px;
        padding-top: 6px;
        padding-bottom: 6px;
      }
    }
    .selectContent {
      color: #fff;
      background: #597AB9;
      .border-radius(@radius: 3px);
      p {
        color: #fff;

      }
      &:hover{
        P {
          color: #333!important;
        }
      }
    }
  }
</style>
