<template>
  <div class="mainDivCss">
    <div class="mainTitleCss">
      <h1 class="centreVHCss">演练得分</h1>
    </div>
    <nut-collapse v-model:active=activeNames :accordion="true" icon="down-arrow">
      <nut-collapse-item v-for="(n, index) in stepInfo" :name="index">
        <template v-slot:mTitle>
          {{n.StepName}}
        </template>
        <nut-button class="mainStepCss" v-for="m in getSubStepNumber(index)" block type="primary" @click="EnterSubStep(index, m - 1)">
          {{getSubStepInfo(index, m - 1).SubStepName}}
        </nut-button>
      </nut-collapse-item>
    </nut-collapse>
  </div>
</template>

<script lang="ts" setup name="ResultStep">
  import { getAllStepInfo, getSubStepNumber, getSubStepInfo } from '/@/utils/stepUtils';
  import { useProcessStore } from '/@/store/modules/process';
  import { ref } from 'vue';
  const processStore = useProcessStore();

  const stepInfo = getAllStepInfo();
  const EnterSubStep = function (step, subStep) {
    processStore.setStepInfo(step, subStep);
  };

  const activeNames = ref(-1);

</script>

<style scoped>
  .mainDivCss {
    height: 100%;
    text-align: center;
  }
  .mainTitleCss {
    height: 15%;
    width: 600px;
    margin: auto;
    position: relative;
  }
  .mainStepCss {
    width: 60%;
    margin: 0 auto 20px;
    /*display: block;*/
  }
  .centreVHCss {
    position: absolute;
    left: 50%; /* 定位父级的50% */
    top: 50%;
    transform: translate(-50%, -50%); /*自己的50% */
  }
</style>
