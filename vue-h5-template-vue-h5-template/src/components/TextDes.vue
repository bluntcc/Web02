<template>
  <div>
    <nut-cell size="large" :title="subStepInfo.SubStepName" :desc="subStepInfo.SubStepDesc" />
    <nut-cell size="large" :title="subStepInfo.SubStepInfo.TextTitle" :desc="subStepInfo.SubStepInfo.TextDesc" />
    <nut-image :src="subStepInfo.SubStepInfo.TextImageUrl" width="100" height="100" fit="contain" postion="center" />
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

<style scoped></style>
