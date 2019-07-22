<template>
  <div class="button" :style="{ left: newPosition + 'px'}" @mousedown="onButtonDown">
    <span
      id="percent"
      :style="{left: percent > 0.5 ? '-30px' : '14px', color: themes == 'white' ? '#24324C' : '#CBD7F0'}"
    >{{ getValue() }}</span>
  </div>
</template>

<script>
import Utils from "@/assets/js/utils";
export default {
  name: "st-slider-button",
  data() {
    return {
      dragging: false,
      startX: 0,
      currentX: 0,
      startPosition: 0,
      newPosition: 0,
      min: 0,
      max: 520,
      width: ""
    };
  },
  inject: ["stSlider"],
  props: ["percent"],
  watch: {
    $route() {
      this.init();
    }
  },
  computed: {
    // 主题
    themes() {
      return this.$store.state.dictionary.theme;
    }
  },
  methods: {
    onButtonDown(event) {
      event.preventDefault();
      this.onDragStart(event);
      window.addEventListener("mousemove", this.onDragging);
      window.addEventListener("mouseup", this.onDragEnd);
      window.addEventListener("contextmenu", this.onDragEnd);
    },
    onDragStart(event) {
      this.dragging = true;
      this.startX = event.clientX;
    },
    onDragging(event) {
      if (this.dragging) {
        let diff = 0;
        this.currentX = event.clientX;
        diff = this.currentX - this.startX;
        this.newPosition = this.startPosition + diff;
        this.setPosition(this.newPosition);
      }
    },
    onDragEnd(event) {
      if (this.dragging) {
        /*
         * 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
         * 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
         */
        setTimeout(() => {
          this.dragging = false;
          this.startPosition = this.newPosition;
          this.setPosition(this.newPosition);
        }, 0);
        window.removeEventListener("mousemove", this.onDragging);
        window.removeEventListener("mouseup", this.onDragEnd);
        window.removeEventListener("contextmenu", this.onDragEnd);
      }
    },
    setPosition(newPosition) {
      if (newPosition === null) {
        return;
      }
      if (newPosition < 0) {
        this.newPosition = 0;
      } else if (newPosition > this.width - 4) {
        this.newPosition = this.width - 4;
      }
      this.$emit("progress");
    },
    moveTo(event) {
      // 根据dragging状态判断是点击还是拖动后触发click
      if (!this.dragging) {
        this.newPosition =
          event.clientX - this.$refs["range"].getBoundingClientRect().left;
        this.startPosition = this.newPosition;
        this.setPosition(this.newPosition);
      }
    },
    init() {
      this.dragging = false;
      this.startX = 0;
      this.currentX = 0;
      this.startPosition = 0;
      this.newPosition = 0;
      this.min = 0;
      this.max = 520;
    },
    resize() {
      let ratio = this.newPosition / (this.width - 4);
      if (this.newPosition === this.width - 4) {
        ratio = 1;
      }
      // console.log(ratio)
      this.width = this.stSlider.$refs["slider"].offsetWidth;
      this.stSlider.width = this.width;
      this.newPosition = (this.width - 4) * ratio;
      setTimeout(() => {
        this.setPosition((this.width - 4) * ratio);
      }, 0);
    },
    getValue() {
      return (Utils.mul(this.percent, 100) || 0) + "%";
    }
  },
  mounted() {
    this.width = this.stSlider.$refs["slider"].offsetWidth;
    // window.onresize = () => {
    //   let ratio = this.newPosition / this.width
    //   if (this.newPosition === this.width - 4) {
    //     ratio = 1
    //   }
    //   // console.log(ratio)
    //   this.width = this.stSlider.$refs['slider'].offsetWidth
    //   this.setPosition(this.width * ratio)
    // }
    window.addEventListener("resize", this.resize, false);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../../../assets/css/theme";
.themeBlack();
.button {
  position: absolute;
  top: -6px;
  width: 13px;
  height: 17px;
  transform: translateX(-6px);
  background-image: url("../../../../assets/images/newUI/operate/huakuai.png");
  background-size: cover;
  cursor: pointer;
  span {
    position: absolute;
    top: -11px;
    font-size: 12px;
    color: @tradeOperateFontColor;
  }
}
</style>
