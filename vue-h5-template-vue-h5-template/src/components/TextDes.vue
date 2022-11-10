<template>
  <div>
    <nut-cell class="itemCss" size="large" :title="subStepInfo.SubStepName" :desc="subStepInfo.SubStepDesc" />
    <nut-cell class="itemCss" size="large" :title="subStepInfo.SubStepInfo.TextTitle" :desc="subStepInfo.SubStepInfo.TextDesc" />
    <nut-image class="itemCss" :src="subStepInfo.SubStepInfo.TextImageUrl" fit="contain" postion="center" />
  </div>
</template>

<script lang="ts" setup name="TextDes">
  import { useProcessStore } from '/@/store/modules/process';
  import { getSubStepInfo } from '/@/utils/stepUtils';
  const processStore = useProcessStore();
  let subStepInfo = getSubStepInfo(processStore.step, processStore.subStep);

  watch(processStore.$state, (v, o) => {
    subStepInfo = getSubStepInfo(processStore.step, processStore.subStep);
  });
</script>

<style scoped>
  .itemCss {
    width: 80%;
    height: auto;
    /*border: 1px solid #2c3e50;*/
    margin: 10px auto;
  }
</style>
