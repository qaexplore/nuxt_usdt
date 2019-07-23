<template>
  <div :class="{'z-select':'black' === themeValue, 'z-select-white': 'white' === themeValue}">
    <div class="main">
      <p :class="{'active': selectedId === item.id }" :style={option} v-for="(item, index) in list" :key="item.id"
         @click="change($event, item, index)">
        {{ item.name }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'z-select',
    data() {
      return {}
    },
    props:['list','option', 'selectedId'],
    computed: {
      // 主题
      themeValue () {
        return this.$store.state.dictionary.theme
        // return 'white'
      }
    },
    methods: {
      change (e, item, index) {
        // e.stopPropagation()
        // console.log('aa', '223')
        this.$emit('selected', item, index)
      }
    },
    mounted () {
      // console.log(this.list)
    }
  }
</script>

<style lang="less" scoped="">
  @import "../../assets/css/theme";
  .z-select {
    .themeBlack();
    .main {
      position: relative;
      // padding: 4px 0;
      // width: 80px;
      border-radius: 2px;
      padding: 6px 0;
      /*border: solid 1px #2b2c58;*/
      box-shadow: 0 10px 10px 0 rgba(21,22,39,0.40);
      background: #181E2F;
      p {
        height: 24px;
        line-height: 24px;
        text-align: left;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 12px;
        color: @fontColor;
        cursor: pointer;
        /*border-bottom: 1px solid #313451;*/
        &:last-child {
          border-bottom: 0;
        }
        &:hover {
          cursor: pointer;
          background: #161B2A;
          color: @layerTransferBlueColor;
        }
      }
      .active {
        color: #7e9efd;
      }
      /*&:after {*/
        /*position: absolute;*/
        /*right: 10px;*/
        /*top: -5px;*/
        /*content: '';*/
        /*display: inline-block;*/
        /*// border-top: 4px solid red;@tradeSelectBgColor*/
        /*border-bottom: 5px solid #181E2F;*/
        /*border-left: 5px solid transparent;*/
        /*border-right: 5px solid transparent;*/
      /*}*/
    }
  }
  .z-select-white {
    .themeWhite();
    .main {
      position: relative;
      // padding: 4px 0;
      // width: 80px;
      border-radius: 2px;
      padding: 6px 0;
      /*border: solid 1px #2b2c58;*/
      background: #FFFFFF;
      box-shadow: 0 4px 10px 0 rgba(21,22,39,0.06);
      p {
        height: 24px;
        line-height: 24px;
        text-align: left;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 12px;
        color: #39425E;
        cursor: pointer;
        &:last-child {
          border-bottom: 0;
        }
        &:hover {
          cursor: pointer;
          background: #F3F7FE;
          color: #7E9EFD;
        }
      }
      .active {
        color: #7e9efd;
      }
      /*&:after {*/
      /*position: absolute;*/
      /*right: 10px;*/
      /*top: -5px;*/
      /*content: '';*/
      /*display: inline-block;*/
      /*// border-top: 4px solid red;@tradeSelectBgColor*/
      /*border-bottom: 5px solid #181E2F;*/
      /*border-left: 5px solid transparent;*/
      /*border-right: 5px solid transparent;*/
      /*}*/
    }
  }
</style>
