<template>
  <div>
    <h2>{{ getStepInfo(processStore.step).StepName }}</h2>
    <nut-steps :current="processStore.subStep + 1" @click-step="handleClickStep">
      <nut-step v-for="n in getSubStepNumber(processStore.step)" :title="getSubStepInfo(processStore.step, n - 1).SubStepName" :key="n" />
    </nut-steps>
  </div>
</template>

<script lang="ts" setup name="GameStepMini">
  import { useProcessStore } from '/@/store/modules/process';
  import { getStepInfo, getSubStepNumber, getSubStepInfo } from '/@/utils/stepUtils';
  const processStore = useProcessStore();

  let handleClickStep = (index: number) => {
    processStore.setStepInfo(processStore.step, index - 1);
  };
</script>

<style scoped></style>
