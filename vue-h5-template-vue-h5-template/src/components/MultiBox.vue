<template>
  <div class="itemCss">
    <nut-checkboxgroup v-model="checkboxGroup" @change="handleChange">
      <nut-checkbox v-for="item in subStepInfo.SubStepInfo.MultiBoxList" :key="item" :label="item">{{ item }}</nut-checkbox>
    </nut-checkboxgroup>
  </div>
  <div class="itemCss">
    <nut-button size="small" type="primary" @click="toggleAll(true)" style="margin: 0 20px 0 0">全选</nut-button>
    <nut-button size="small" type="primary" @click="toggleAll(false)" style="margin: 0 20px 0 0">取消</nut-button>
    <nut-button size="small" type="warning" @click="toggleReverse()">反选</nut-button>
  </div>

  <nut-button class="itemCss" @click="submit" plain block type="primary">提交</nut-button>
</template>

<script lang="ts" setup name="MultiBox">
  import { reactive } from 'vue';
  import { Toast } from '@nutui/nutui';
  import { useProcessStore } from '/@/store/modules/process';
  import { MultiBoxInfo } from '/@/utils/stepUtils';
  import { getSubStepInfo } from '/@/utils/stepUtils';

  const processStore = useProcessStore();
  let subStepInfo = getSubStepInfo(processStore.step, processStore.subStep);
  let subStepInfoDetail = subStepInfo.SubStepInfo as MultiBoxInfo;
  let checkboxGroup: string[] = reactive([]);

  watch(processStore.$state, (val, old) => {
    subStepInfo = getSubStepInfo(processStore.step, processStore.subStep);
    subStepInfoDetail = subStepInfo.SubStepInfo as MultiBoxInfo;
  });

  const handleChange = (label: any[]) => {
    // Toast.text(`${label.length === subStepInfo.SubStepInfo.MultiBoxList.length ? '全选' : '取消全选'}`);
    //Toast.text(`${label}`);
    //console.log(checkboxGroup);
  };
  const toggleAll = (f: boolean) => {
    subStepInfoDetail = subStepInfo.SubStepInfo as MultiBoxInfo;
    while (checkboxGroup.length > 0) checkboxGroup.pop();
    if (f) {
      for (let itemIndex in subStepInfoDetail.MultiBoxList) checkboxGroup.push(subStepInfoDetail.MultiBoxList[itemIndex]);
    }
  };

  const toggleReverse = () => {
    let t = new Set();
    checkboxGroup.every((ele) => t.add(ele));
    while (checkboxGroup.length > 0) {
      checkboxGroup.pop();
    }
    subStepInfoDetail.MultiBoxList.forEach((ele) => {
      if (!t.has(ele)) checkboxGroup.push(ele);
    });
  };

  const checkMultiBoxPass = function () {
    let correctSet = new Set();
    subStepInfoDetail.MultiBoxCorrectAnswer.forEach((x) => correctSet.add(subStepInfoDetail.MultiBoxList[x]));
    return checkboxGroup.length === subStepInfoDetail.MultiBoxCorrectAnswer.length && checkboxGroup.every((ele) => correctSet.has(ele));
  };

  const submit = function () {
    if (checkboxGroup.length == 0) {
      Toast.text('未选择');
      return;
    }
    if (checkMultiBoxPass()) {
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
</style>
