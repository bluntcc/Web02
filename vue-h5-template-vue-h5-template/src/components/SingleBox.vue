<template>
  <div>
    <h2 class="itemCss">{{ singleBoxData.subStepInfo.SubStepDesc }}</h2>
    <h3 class="itemCss">{{ singleBoxData.subStepInfoDetail.SingleBoxQuestion }}</h3>
    <nut-image class="itemCss" :src="singleBoxData.subStepInfoDetail.SingleBoxImages" />
    <div class="itemCss">
      <nut-radiogroup v-model="radioVal">
        <nut-radio class="radioCss" v-for="n in singleBoxData.subStepInfoDetail.SingleBoxList" :key="n" :label="n">{{ n }}</nut-radio>
      </nut-radiogroup>
    </div>
    <div class="itemCss">
      <nut-button @click="submit" plain block type="primary">提交</nut-button>
    </div>
  </div>
</template>

<script lang="ts" setup name="SingleBox">
  import { useProcessStore } from '/@/store/modules/process';
  import { Toast } from '@nutui/nutui';

  import { getSubStepDetail, getSubStepInfo, SingleBoxInfo } from '/@/utils/stepUtils';
  const processStore = useProcessStore();
  let subStepInfo = getSubStepInfo(processStore.step, processStore.subStep);
  let subStepInfoDetail = getSubStepDetail(processStore.step, processStore.subStep) as SingleBoxInfo;
  const radioVal = ref(null);
  const singleBoxData = reactive({
    subStepInfo: subStepInfo,
    subStepInfoDetail: subStepInfoDetail,
  });
  watch(processStore.$state, (v, o) => {
    singleBoxData.subStepInfo = getSubStepInfo(processStore.step, processStore.subStep);
    singleBoxData.subStepInfoDetail = getSubStepDetail(processStore.step, processStore.subStep) as SingleBoxInfo;
    radioVal.value = null;
  });
  const submit = function () {
    if (radioVal == null) {
      Toast.text('未选择');
      return;
    }
    if (radioVal.value === subStepInfoDetail.SingleBoxList[subStepInfoDetail.SingleBoxCorrectAnswer]) {
      Toast.text('通过');
      processStore.setPassInfo(processStore.step, processStore.subStep);
      return;
    }
    Toast.text('回答错误');
  };
</script>

<style scoped>
  .itemCss {
    width: 80%;
    height: auto;
    /*border: 1px solid #2c3e50;*/
    margin: 10px auto;
  }
  .radioCss {
    margin: 2px auto 2px;
    width: 100%;
  }
</style>
