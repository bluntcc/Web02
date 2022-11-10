<template>
  <nut-button class="mainStepCss" v-for="(n, index) in stepInfo" block type="primary" :key="n" @click="EnterSubStep(index)">{{
    n.StepName
  }}</nut-button>
</template>

<script lang="ts" setup name="MainStep">
  import { getAllStepInfo } from '/@/utils/stepUtils';
  import { useProcessStore } from '/@/store/modules/process';
  const processStore = useProcessStore();

  const stepInfo = getAllStepInfo();
  const EnterSubStep = function (step) {
    processStore.setStepInfo(step, 0);
  };
</script>

<style scoped>
  .mainStepCss {
    width: 60%;
    /*text-align: center;*/
    margin: 20px auto 0px;
  }
</style>
