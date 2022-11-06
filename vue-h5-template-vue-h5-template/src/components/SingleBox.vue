<template>
  <h2>{{ subStepInfo.SubStepDesc }}</h2>
  <h3>{{ subStepInfoDetail.SingleBoxQuestion }}</h3>
  <nut-image :src="subStepInfoDetail.SingleBoxImages" />
  <nut-radiogroup v-model="radioVal">
    <nut-radio v-for="n in subStepInfoDetail.SingleBoxList" :key="n" :label="n">{{n}}</nut-radio>
  </nut-radiogroup>
  <nut-button @click="submit" plain type="primary">提交</nut-button>
</template>

<script lang="ts" setup name="SingleBox">
  import { useProcessStore } from '/@/store/modules/process';
  import { Toast } from '@nutui/nutui';

  import { getSubStepDetail, getSubStepInfo, SingleBoxInfo } from '/@/utils/stepUtils';
  const processStore = useProcessStore();
  let subStepInfo = getSubStepInfo(processStore.step, processStore.subStep);
  let subStepInfoDetail = getSubStepDetail(processStore.step, processStore.subStep) as SingleBoxInfo;
  const radioVal = ref(null);
  watch(processStore.$state, (v, o) => {
    subStepInfo = getSubStepInfo(processStore.step, processStore.subStep);
    subStepInfoDetail = getSubStepDetail(processStore.step, processStore.subStep) as SingleBoxInfo;
  });
  const submit = function () {
    if (radioVal == null) {
      Toast.text('未选择');
      return;
    }
    if (radioVal.value === subStepInfoDetail.SingleBoxList[subStepInfoDetail.SingleBoxCorrectAnswer]){
      Toast.text('通过');
      processStore.setPassInfo(processStore.step, processStore.subStep);
      return;
    }
    Toast.text('回答错误');
  };
</script>

<style scoped></style>
