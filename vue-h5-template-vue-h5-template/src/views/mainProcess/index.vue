<template>
  <div class="allCss" :style="{ 'background-image': 'url(' + mainProcessBg.img + ')'}"> </div>
  <div class="mainProcessCss">
    <main-step v-if="getSubStepType(processStore.getStep, processStore.getSubStep) === SubStepType.None" />
    <game-step-mini v-if="getSubStepType(processStore.getStep, processStore.getSubStep) !== SubStepType.None" />
    <multi-box v-if="getSubStepType(processStore.getStep, processStore.getSubStep) === SubStepType.MultiBox" />
    <TextDes v-if="getSubStepType(processStore.getStep, processStore.getSubStep) === SubStepType.Text" />
    <PlayVideo v-if="getSubStepType(processStore.getStep, processStore.getSubStep) === SubStepType.Video" />
    <single-box v-if="getSubStepType(processStore.getStep, processStore.getSubStep) === SubStepType.SingleBox" />
    <Map v-if="getSubStepType(processStore.getStep, processStore.getSubStep) === SubStepType.Map" />
  </div>
  <div class="panDownUpCss" ref="panDownUp"></div>
</template>

<script lang="ts" setup name="MainProcess">
  import { getSubStepInfo, getSubStepType } from '/@/utils/stepUtils';
  import { SubStepType } from '/@/utils/stepUtils';
  import { useProcessStore } from '/@/store/modules/process';
  import TextDes from '/@/components/TextDes.vue';
  import PlayVideo from '/@/components/PlayVideo.vue';
  import MainStep from '/@/components/MainStep.vue';
  const processStore = useProcessStore();
  import Hammer from 'hammerjs/hammer.min';

  let panDownUp = ref(null);
  onMounted(() => {
    let hammerTimer = new Hammer(panDownUp.value);
    hammerTimer.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    hammerTimer.on('panend', function (ev) {
      if (ev.additionalEvent === 'panup') processStore.setStepInfo(processStore.step, processStore.subStep + 1);
      else if (ev.additionalEvent == 'pandown') processStore.setStepInfo(processStore.step, processStore.subStep - 1);
    });
  });

  const mainProcessBg = reactive({
    img: '/bg/MainProcessBg.jpg',
  });

  watch(processStore.$state, (v, o) => {
    if (getSubStepType(processStore.getStep, processStore.getSubStep) === SubStepType.None) {
      mainProcessBg.img = '/bg/MainProcessBg.jpg';
    } else {
      mainProcessBg.img = '/bg/NormalBg.png';
    }
  });
</script>

<style scoped>
  .allCss {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background-size: cover;
    background: ;
  }
  .mainProcessCss {
    width: 100%;
    height: 100%;
    margin: 0 auto -100px auto;
  }
  .panDownUpCss {
    width: 100%;
    height: 100px;
  }
</style>
