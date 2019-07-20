<template>
  <div :class="{'appear': true, 'down': down}" v-if="visible">
    <div :class="className">
      <div class="content">
        <span style="margin-left: 14px;">{{message}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      message: String,
      title: String,
      className: {
        type: String,
        default: 'box normal '
      },
      position: {
        type: String,
        default: 'middle'
      },
      iconClass: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        visible: false,
        down: false,
        date: new Date(),
        timer1: null,
        timer2: null
      }
    },
    methods: {
      closeEmerge () {
        // this.visible = false
//        this.down = true
//        setTimeout( () => {
//          this.visible = false
//          clearTimeout(this.timer1)
//          clearTimeout(this.timer2)
//        }, 1400)
      }
    },
    mounted () {
      this.visible = true
      setTimeout(()=>{
        this.visible = false
      }, 2000)
//      this.timer1 = setTimeout( () => {
//        // console.log('down::',this.down)
//        if (this.down) {
//          return
//        }
//        this.down = true
//      }, 100)
//      this.timer2 = setTimeout( () => {
//        if(this.visible === false) {
//          return
//        }
//        this.visible = false
//      }, 5500)
    },
  }
</script>

<style lang="less" scoped>
  @import "../../../../assets/css/theme";
  .appear {
    .themeBlack();
    position: fixed;
    width: 100%;
    // right: 18px;
    top: 0;
    z-index: 99999;
    /*animation: popup 0.5s 1;*/
    /*-moz-animation: popup 0.5s 1;*/
    /*-webkit-animation: popup 0.5s 1;*/
    /*-o-animation: popup 0.5s 1;*/
    .red {
      background-color: @emergeRed !important;
      // border: solid 1px #b92e5d !important;
    }
    .green {
      background-color: @emergeGreen !important;
      // border: solid 1px #32b28f !important;
    }
    .normal {
      background-color: #262a43;
      // border: solid 1px #7e9efd;
    }
    .box {
      width: 100%;
      height: 50px;
      border-radius: 4px;
      /*background-color: #262a43;*/
      /*border: solid 1px #7e9efd;*/
      span {
        color: @fontColor;
        font-size: 12px;
      }
      .content {
        // padding: 16px 30px;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 50px;
        span {
          color: #fff;
          font-size: 16px;
        }
        .title {
          height: 28px;
          line-height: 28px;
          position: relative;
          .type {
            font-size: 14px;
            line-height: 14px;
          }
          .time {
            display: inline-block;
            padding-right:30px;
            height: 28px;
            line-height: 28px;
          }
          .icon_delete {
            position: absolute;
            display: inline-block;
            right: 0;
            top: 6px;
            width: 14px;
            height: 14px;
            background: url("../../../../assets/images/cancel.png");
            cursor: pointer;
          }
        }
        .notice {
          display: inline-block;
          height: 28px;
          line-height: 28px;
          // margin-top: 10px;
        }
      }
    }
  }
  .down {
    // right: 100px;
    animation: popdown 1.5s 1;
  }
  @-webkit-keyframes popup {
    from {bottom: -88px;}
    to {bottom: 8px;}
  }
  @-webkit-keyframes popdown {
    from {bottom: 8px;}
    to {bottom: -100px;}
  }
  @-moz-keyframes popup {
    from {bottom: -88px;}
    to {bottom: 8px;}
  }
  @-moz-keyframes popdown {
    from {bottom: 8px;}
    to {bottom: -100px;}
  }
  @-o-keyframes popup {
    from {bottom: -88px;}
    to {bottom: 8px;}
  }
  @-o-keyframes popdown {
    from {bottom: 8px;}
    to {bottom: -100px;}
  }
  @keyframes popup {
    from {bottom: -88px;}
    to {bottom: 8px;}
  }
  @keyframes popdown {
    from {bottom: 8px;}
    to {bottom: -100px;}
  }
</style>
