<template>
  <div class="mapCss" :style="{ 'background-image': 'url(' + subStepInfoDetail.MapUrl + ')' }">
    <drag-box :id="'dragBox' + index" :key="'dragBox' + index" v-for="(x, index) in subStepInfoDetail.MapPoints" >
      <nut-icon size="30" name="location2" />
    </drag-box>
  </div>
</template>

<script lang="ts" setup name="Map">
  import { Toast } from '@nutui/nutui';

  import { useProcessStore } from '/@/store/modules/process';
  import { MapInfo } from '/@/utils/stepUtils';
  import { getSubStepInfo } from '/@/utils/stepUtils';
  const processStore = useProcessStore();

  let subStepInfo = getSubStepInfo(processStore.step, processStore.subStep);
  let subStepInfoDetail = subStepInfo.SubStepInfo as MapInfo;

  watch(processStore.$state, (val, old) => {
    subStepInfo = getSubStepInfo(processStore.step, processStore.subStep);
    subStepInfoDetail = subStepInfo.SubStepInfo as MapInfo;
  });
</script>

<style scoped>
  .mapCss {
    height: 400px;
    width: 500px;
    position: relative;
    background-repeat: no-repeat;
    margin: auto;
  }
  .mapPointCss {
    height: 10px;
    width: 10px;
  }
</style>
