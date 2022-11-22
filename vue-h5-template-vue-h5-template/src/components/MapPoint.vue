<template>
  <div class="mapPointCss" @click="clickMethod">
    <nut-icon name="location2" />
    <h5>{{ pointTitle }}</h5>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Dialog } from '@nutui/nutui';

  export default defineComponent({
    name: 'MapPoint',
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
        console.log(this.index)
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
</style>
