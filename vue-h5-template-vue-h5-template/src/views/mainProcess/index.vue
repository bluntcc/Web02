<template>
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
  import { getSubStepType } from '/@/utils/stepUtils';
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
    // hammerTimer.on('pan', function (ev) {
    //   console.log(ev.additionalEvent);
    //   if (ev.additionalEvent === 'panup') processStore.setStepInfo(processStore.step, processStore.subStep + 1);
    // });
  });
</script>

<style scoped>
  .mainProcessCss {
    width: 100%;
    height: 80%;
  }
  .panDownUpCss{
    width: 100%;
    height: 20%;
    margin-bottom: 0;
  }
</style>
