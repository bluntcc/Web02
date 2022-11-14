<template>
  <div class="mapPointCss" @click="clickMethod">
    <nut-icon name="location2" />
    <h5>{{ pointTitle }}</h5>
  </div>
</template>

<script lang="ts" setup name="MapPoint">
  import { defineProps } from 'vue';
  import { Dialog } from '@nutui/nutui';
  import { MapPointInfoHelper } from '/@/utils/stepUtils';
  const props = defineProps({
    pointsInfo: {
      type: MapPointInfoHelper,
      required: true,
    },
  });
  const desc = props.pointsInfo.infoDes;
  const pointTitle = props.pointsInfo.pointTitle;
  const location = props.pointsInfo.location;
  const infoImage = props.pointsInfo.infoImage;
  const clickMethod = function () {
    Dialog({
      title: pointTitle,
      content: "<p style='color:red'>" + desc + "</p><img style='width: 100px; height: 100px' src='" + infoImage + "' />",
    });
  };
</script>

<style scoped>
  .mapPointCss {
    position: relative;
    left: v-bind(location[0] + 'vw');
    top: v-bind(location[1] + 'vw');
    text-align: center;
  }
</style>
