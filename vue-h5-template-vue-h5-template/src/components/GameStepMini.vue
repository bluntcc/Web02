<template>
  <div>
    <div class="titleCss">
      <h1 class="centreVHCss">{{ getStepInfo(processStore.step).StepName }}</h1>
    </div>
    <nut-steps class="GameStepMiniCss" :current="processStore.subStep + 1" @click-step="handleClickStep" progress-dot>
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

<style scoped>
  .GameStepMiniCss {
    width: 80%;
    /*border: 1px solid #2c3e50;*/
    margin: 0 auto 0;
    top: 0;
  }
  .itemCss {
    width: 80%;
    height: auto;
    /*border: 1px solid #2c3e50;*/
    margin: 0 auto;
    text-align: center;
  }
  .centreVHCss {
    position: absolute;
    left: 50%; /* 定位父级的50% */
    top: 50%;
    width: fit-content;
    transform: translate(-50%, -40%); /*自己的50% */
  }
  .titleCss {
    /*margin: 0 auto;*/
    height: 100px;
    text-align: center;
    position: relative;
  }
</style>
