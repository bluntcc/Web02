<template>
  <div class="animationCss1">
    <Vue3Lottie animation-link="https://assets2.lottiefiles.com/packages/lf20_jwigyaty.json" />
  </div>
  <div class="animationCss2">
    <Vue3Lottie animation-link="https://assets3.lottiefiles.com/packages/lf20_oE53bY.json" />
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import { Vue3Lottie } from 'vue3-lottie';

  export default defineComponent({
    components: {
      Vue3Lottie,
    },
    props: {
      height: {
        type: Number,
      },
      width: {
        type: Number,
      },
      left: {
        type: Number,
      },
      top: {
        type: Number,
      },
    },
    data() {
      return {
        playerLeft: this.$props.left + 5,
        playerTop: this.$props.top + 5,
      };
    },
  });
</script>

<style scoped>
  .animationCss1 {
    height: v-bind(height + 'vw');
    width: v-bind(width + 'vw');
    left: v-bind(left + 'vw');
    top: v-bind(top + 'vw');
    position: absolute;
    text-align: center;
  }
  .animationCss2 {
    height: v-bind(height + 'vw');
    width: v-bind(width + 'vw');
    left: v-bind(playerLeft + 'vw');
    top: v-bind(playerTop + 'vw');
    position: absolute;
    text-align: center;
  }
</style>
