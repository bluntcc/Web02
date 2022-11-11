<template>
  <div style="height: 100%">
    <drag-box>
      <nut-button>{{ subStepInfoDetail.MapDesc }}</nut-button>
    </drag-box>
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

</script>

<style scoped></style>
