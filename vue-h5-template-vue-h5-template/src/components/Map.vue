<template>
  <div class="mapCss" :style="{ 'background-image': 'url(' + subStepInfoDetail.MapUrl + ')' }">
    <map-point
      class="mapPointCss"
      :index="index"
      :point-title="subStepInfoDetail.MapPoints[index].pointTitle"
      :point-location="subStepInfoDetail.MapPoints[index].location"
      :desc-txt="subStepInfoDetail.MapPoints[index].infoDes"
      :desc-image="subStepInfoDetail.MapPoints[index].infoImage"
      :key="'dragBox' + index"
      :map-callback-method="mapCallbackMethod"
      v-for="(x, index) in subStepInfoDetail.MapPoints"
    />
  </div>
  <div class="buttonRow">
    <nut-button class="buttonBase" v-if="showNext" type="primary" @click="gotoNextStep">下一步</nut-button>
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

  const mapPointAnimationRefList = reactive(Array(subStepInfoDetail.MapPoints.length).fill(false));
  const mapCallbackMethod = function (index) {
    mapPointAnimationRefList[index] = true;
  };
  const showNext = computed(() => {
    for (let i = 0; i < subStepInfoDetail.MapPoints.length; i++) {
      if (mapPointAnimationRefList[i] == false) return false;
    }
    return true;
  });
  //点击确认进入下一步并记录结果为完成状态
  const gotoNextStep = function () {
    processStore.setPassInfo(processStore.step, processStore.subStep);
    processStore.setStepInfo(processStore.step, processStore.subStep + 1);
  };
  const mapSize = subStepInfoDetail.MapSize;
</script>

<style scoped>
  .mapCss {
    width: v-bind(mapSize[0] + 'vw');
    height: v-bind(mapSize[1] + 'vw');
    position: relative;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: auto;
  }
  .mapPointCss {
    height: 40px;
    width: 100px;
  }
  .buttonRow{
    text-align: center;
  }
</style>
