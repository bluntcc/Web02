<template>
  <div :style="style" ref="lavContainer"></div>
</template>

<script>
import lottie from 'lottie-web'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'lottie',
  props: {
    options: {
      type: Object,
      required: true
    },
    height: Number,
    width: Number
  },

  computed: {
    style () {
      return {
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%'
      }
    }
  },

  mounted () {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: 'svg',
      loop: this.options.loop !== false,
      autoplay: this.options.autoplay !== false,
      path: this.options.path
    })
    this.$emit('animCreated', this.anim)
  },

  unmounted () {
    this.anim && this.anim.destroy()
  }
}
</script>

<style scoped>

</style>
