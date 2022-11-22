<template>
  <div
    :v-model="subStepInfoDetailData"
    class="mapCss"
    :style="{ 'background-image': 'url(' + subStepInfoDetailData.subStepInfoDetail.MapUrl + ')' }"
  >
    <div class="rainCss">
      <Vue3Lottie animation-link="https://assets6.lottiefiles.com/packages/lf20_wGcut8SNuq.json" />
      <Vue3Lottie animation-link="https://assets6.lottiefiles.com/packages/lf20_wGcut8SNuq.json" />
    </div>
    <template v-for="(x, index) in subStepInfoDetailData.subStepInfoDetail.MapPoints" :key="'dragBox' + index">
      <map-point
        class="mapPointCss"
        :index="index"
        :point-title="subStepInfoDetailData.subStepInfoDetail.MapPoints[index].pointTitle"
        :point-location="subStepInfoDetailData.subStepInfoDetail.MapPoints[index].location"
        :desc-txt="subStepInfoDetailData.subStepInfoDetail.MapPoints[index].infoDes"
        :desc-image="subStepInfoDetailData.subStepInfoDetail.MapPoints[index].infoImage"
        :map-callback-method="mapCallbackMethod"
      />
      <map-point
        class="mapPointCss"
        :ref="
          (el) => {
            divRefList[index] = el;
          }
        "
        :index="index"
        :point-title="subStepInfoDetailData.subStepInfoDetail.MapPoints[index].dragLocationTitle"
        :point-location="subStepInfoDetailData.subStepInfoDetail.MapPoints[index].dragLocation"
        :map-callback-method="mapCallbackMethod"
        :enable-button="false"
      />
      <MapPointAnimation2
        v-if="mapPointAnimationRefList[index]"
        :left="subStepInfoDetailData.subStepInfoDetail.MapPoints[index].dragLineLocation[0]"
        :top="subStepInfoDetailData.subStepInfoDetail.MapPoints[index].dragLineLocation[1]"
        :width="subStepInfoDetailData.subStepInfoDetail.MapPoints[index].dragLineLocation[2]"
        :height="subStepInfoDetailData.subStepInfoDetail.MapPoints[index].dragLineLocation[3]"
      />
    </template>
  </div>
  <div class="buttonRow">
    <nut-button class="buttonBase" v-if="showNext" type="primary" @click="gotoNextStep">下一步</nut-button>
  </div>
</template>

<script setup lang="ts">
  import { Toast } from '@nutui/nutui';
  import { Vue3Lottie } from 'vue3-lottie';

  import { useProcessStore } from '/@/store/modules/process';
  import { MapInfo } from '/@/utils/stepUtils';
  import { getSubStepInfo } from '/@/utils/stepUtils';
  const processStore = useProcessStore();

  let subStepInfo = getSubStepInfo(processStore.step, processStore.subStep);
  let subStepInfoDetail = subStepInfo.SubStepInfo as MapInfo;

  const subStepInfoDetailData = reactive({
    subStepInfoDetail: subStepInfoDetail,
    subStepInfo: subStepInfo,
  });

  watch(processStore.$state, (val, old) => {
    subStepInfoDetailData.subStepInfo = getSubStepInfo(processStore.step, processStore.subStep);
    subStepInfoDetailData.subStepInfoDetail = subStepInfoDetailData.subStepInfo.SubStepInfo as MapInfo;
    mapPointAnimationRefList.fill(false);
  });
  const mapSize = subStepInfoDetail.MapSize;
  const mapCallbackMethod = function (index) {
    mapPointAnimationRefList[index] = true;
  };

  const divRefList = ref([]);
  const mapPointAnimationRefList = reactive(Array(subStepInfoDetail.MapPoints.length).fill(false));

  onBeforeUpdate(() => {
    divRefList.value = [];
  });

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
  .rainCss {
    width: 50%;
    height: 30%;
    margin: 0 auto 0;
    text-align: center;
  }
  .buttonRow{
    text-align: center;
  }
</style>
