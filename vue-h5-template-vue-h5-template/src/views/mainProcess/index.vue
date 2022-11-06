<template>
  <h2>主流程</h2>
  <game-step-mini />
  <multi-box v-if="getSubStepType(processStore.getStep, processStore.getSubStep) === SubStepType.MultiBox" />
  <TextDes v-if="getSubStepType(processStore.getStep, processStore.getSubStep) === SubStepType.Text" />
  <PlayVideo v-if="getSubStepType(processStore.getStep, processStore.getSubStep) === SubStepType.Video" />
  <single-box v-if="getSubStepType(processStore.getStep, processStore.getSubStep) === SubStepType.SingleBox" />
  <nut-button @click="PreProcess">上一阶段</nut-button>
  <nut-button @click="nextProcess">下一阶段</nut-button>
</template>

<script lang="ts" setup name="MainProcess">
  import { getSubStepType } from '/@/utils/stepUtils';
  import { SubStepType } from '/@/utils/stepUtils';
  import { useProcessStore } from '/@/store/modules/process';
  import TextDes from '/@/components/TextDes.vue';
  import PlayVideo from '/@/components/PlayVideo.vue';
  const processStore = useProcessStore();
  const nextProcess = function () {
    processStore.setStepInfo(processStore.step + 1, 0);
  };
  const PreProcess = function () {
    processStore.setStepInfo(processStore.step - 1, 0);
  };
</script>

<style scoped></style>
