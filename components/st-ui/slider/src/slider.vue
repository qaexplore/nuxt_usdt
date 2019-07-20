<template>
  <div class="st-slider">
    <div class="area" ref="slider" :class="[set && 'default', themes == 'white' ? 'white' : '']">
      <div class="percent0" @click="setPercent(0)"></div>
      <div :class="['percent25',set && 'default', parseFloat(percent*100) >= 25 && 'active']" @click="setPercent(0.25)"></div>
      <div :class="['percent50',set && 'default', parseFloat(percent*100) >= 50 && 'active']" @click="setPercent(0.5)"></div>
      <div :class="['percent75',set && 'default', parseFloat(percent*100) >= 75 && 'active']" @click="setPercent(0.75)"></div>
      <div class="end" :class="[set && 'default']" @click="setPercent(1)"></div>
      <div class="progress" :style="{width: progress + 'px'}"></div>
      <st-slider-button :percent="percent" :width="width" ref="button" @progress="progressMove"></st-slider-button>
    </div>
    <st-row justify="between" align="center" class="slider-footer" :class="[themes == 'white' ? 'white' : '']">
      <p style="margin-left: -4px;">0</p>
      <p>100%</p>
    </st-row>
  </div>
</template>

<script>
  import StSliderButton from './slider-button'

  export default {
    name: 'st-slider',
    components: {
      StSliderButton
    },
    provide () {
      return {
        stSlider: this
      }
    },
    // props: ['value'],
    props: {
      value: {
        type: Number,
        default: 0
      },
      set: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        width: '',
        progress: '0',
        isSource: true
      }
    },
    computed: {
      percent () {
        return Number((this.progress / (this.width - 4)).toFixed(2))
      },
      themes () {
        return this.$store.state.dictionary.theme;
      }
    },
    watch: {
      percent (value) {
        if (this.isSource) {
          this.$emit('percent', value)
        }
      },
      value (val) {
        this.stylePercent(val)
      },
      '$route' (val) {
        this.progress = 0;
      }
    },
    methods: {
      setPercent (percent) {
        this.isSource = true
        this.progress = percent * (this.width - 4)
        this.$refs['button'].newPosition = this.progress
        this.$refs['button'].startPosition = this.progress
      },
      stylePercent (percent) {
        percent = percent >= 1 ? 1 : percent
        this.isSource = false
        this.progress = percent * (this.width - 4)
        this.$refs['button'].newPosition = this.progress
        this.$refs['button'].startPosition = this.progress
      },
      progressMove () {
        this.isSource = true
        this.progress = this.$refs['button'].$el.offsetLeft
      },
      init () {
        this.$refs.button.init()
        this.progress = '0'
      },
      editProgress (value) {
        this.isSource = false
        this.progress = (this.width - 4) * (value > 1 ? 1 : value)
        this.$refs['button'].newPosition = this.progress
        this.$refs['button'].startPosition = this.progress
      }
    },
    mounted () {
      this.width = this.$refs['slider'].offsetWidth
      this.progress = this.$refs['button'].$el.offsetLeft
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../theme";
  .st-slider {
    padding-left: 6px;
    .area {
      position: relative;
      .flex();
      height: 3px;
      &.default{
        background: #3F4663;
      }
      background: #666b93;
      .progress {
        height: 100%;
        //background-color: #7e9efd;
        background: #4f57ac;
      }
      .end {
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -4px;
        width: 8px;
        height: 8px;
        .border-radius(@radius: 50%);
        background: #666b93;
        &.default{
          background: #3F4663;
        }
        cursor: pointer;
      }
      .percent0 {
        .end();
        left: 0;
        right: inherit;
        .transform(translate(-50%));
        background: #4f57ac;
      }
      .percent25 {
        .end();
        left: 25%;
        right: inherit;
        .transform(translate(-50%));
      }
      .percent50 {
        .end();
        left: 50%;
        right: inherit;
        .transform(translate(-50%));
      }
      .percent75 {
        .end();
        left: 75%;
        right: inherit;
        .transform(translate(-50%));
      }
      .active {
        background: #4f57ac;
        &.default{
          background: #4f57ac;
        }
      }

      /* 白色主题 */
      &.white {
        background: rgb(238, 240, 251);
        .end {
          background: rgb(238, 240, 251);
          &.default{
            background: rgb(238, 240, 251);
          }
        }
        .percent25{
          .end();
        }
        .percent50{
          .end();
        }
        .percent75 {
          .end();
        }
        .active {
          background: #4f57ac;
          &.default{
            background: #4f57ac;
          }
        }
      }
    }
    .slider-footer {
      p{
        padding-top: 10px;
        font-size: 12px;
        // color: #6c85ae;
        color: #CBD7F0;
      }
      &.white {
        p{
          color: #24324C;
        }
      }
    }
  }
</style>
