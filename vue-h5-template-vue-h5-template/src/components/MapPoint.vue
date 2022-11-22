<template>
  <div class="mapPointCss" @click="clickMethod">
    <Vue3Lottie v-if="enableButton" animation-link="https://assets8.lottiefiles.com/packages/lf20_xedgcnvz.json" />
    <Vue3Lottie v-if="!enableButton" animation-link="https://assets8.lottiefiles.com/packages/lf20_hdy5hmdn.json"></Vue3Lottie>
    <h5 class="titleCss2">{{ pointTitle }}</h5>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Dialog } from '@nutui/nutui';
  import { Vue3Lottie } from 'vue3-lottie';

  export default defineComponent({
    name: 'MapPoint',
    components: {
      Vue3Lottie,
    },
    props: {
      index: {
        type: Number,
        required: true,
      },
      pointTitle: {
        type: String,
        required: true,
      },
      pointLocation: {
        type: Number[2],
        required: true,
      },
      descTxt: {
        type: String,
        default: '',
      },
      descImage: {
        type: String,
        default: '',
      },
      enableButton: {
        type: Boolean,
        default: true,
      },
      mapCallbackMethod: {
        type: Function,
        default: function () {},
      },
    },
    methods: {
      clickMethod() {
        if (!this.enableButton) return;
        Dialog({
          title: this.pointTitle,
          content: "<p style='color:red'>" + this.descTxt + "</p><img style='width: 100px; height: 100px' src='" + this.descImage + "' />",
          noCancelBtn: true,
        });
        this.mapCallbackMethod(this.index);
      },
    },
  });
</script>

<style scoped>
  .mapPointCss {
    position: absolute;
    left: v-bind(pointLocation[0] + 'vw');
    top: v-bind(pointLocation[1] + 'vw');
    text-align: center;
  }
  .titleCss2 {
    color: white;
  }
</style>
