<template>
  <div class="clickIcon">
    <div
      class="iconBox"
      :style="{ width: width + 'px', height: height + 'px' }"
    >
      <slot name="svg" v-bind:data="{ toggle, flag, iconWidth, iconHeight }"></slot>
      <lottie
        @click="toggle"
        :class="{ show: flag === true || !defaultSlot }"
        class="like"
        style="display: none;"
        :options="options"
        :height="height"
        :width="width"
        v-on:animCreated="handleAnimation"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref, defineComponent } from 'vue'
import Lottie from './Lottie.vue'
let anim = null
/**
 * 点击icon然后播放一段动画的组件
 * 适合收藏、点赞等小功能
 */

export default defineComponent({
  name: 'clickIcon',
  props: {
    // 宽度
    width: {
      type: Number,
      default: 100
    },
    // 高度
    height: {
      type: Number,
      default: 100
    },
    // 初始化Lottie需要的参数
    options: {
      type: Object,
      default: () => {}
    },
    // 是否需要一个插槽，显示一个默认的图标
    defaultSlot: {
      type: Boolean,
      default: true
    },
    // 从外面传递的一个点击后需要的交互效果
    toggleFun: {
      type: Function,
      default: null
    }
  },
  components: {
    lottie: Lottie
  },
  emits: ['init'],
  setup (props, { emit }) {
    // 动画速度
    const animationSpeed = 2
    // 点击交互标识
    let flag = ref(false)
    // 图标高度
    const iconWidth = computed(() => {
      return props.width
    })
    // 图标宽度
    const iconHeight = computed(() => {
      return props.height
    })
    // 点击图标交互
    const toggle = function () {
      if (!props.defaultSlot) {
        props.toggleFun && props.toggleFun(anim)
      } else {
        flag.value = !flag.value
        if (flag.value) {
          anim.play()
        } else {
          anim.stop()
        }
      }
    }
    // 获取anim对象
    const handleAnimation = function (animated) {
      anim = animated
      onSpeedChange()
      emit('init', animated)
    }
    // 停止动画
    const stop = function () {
      anim.stop()
    }
    // 播放动画
    const play = function () {
      anim.play()
    }
    // 暂停动画
    const pause = function () {
      anim.pause()
    }
    // 控制播放速度
    const onSpeedChange = function () {
      anim.setSpeed(animationSpeed)
    }
    return {
      iconWidth,
      iconHeight,
      handleAnimation,
      flag,
      toggle,
      stop,
      play,
      pause
    }
  }
})
</script>

<style scoped>
.iconBox {
  position: relative;
}
.show {
  display: inline-block !important;
}
.hidden {
  display: none !important;
}
.like {
  cursor: pointer;
}
.icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
