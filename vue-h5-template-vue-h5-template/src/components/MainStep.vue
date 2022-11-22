<template>
  <video-background poster="/bg/MainProcessBg.jpg" src="/video/backGround.mp4" style="position: absolute; height: 100%; width: 100%">
  </video-background>
  <div class="mainDivCss">
    <div class="mainTitleCss">
      <h1 class="centreVHCss">{{ gameTitle }}</h1>
    </div>
    <div>
      <nut-button class="mainStepCss" v-for="(n, index) in stepInfo" block type="primary" :key="n" @click="EnterSubStep(index)">
        {{ n.StepName }}
      </nut-button>
    </div>
  </div>
</template>

<script lang="ts" setup name="MainStep">
  import { getAllStepInfo, getGameTitle } from '/@/utils/stepUtils';
  import { useProcessStore } from '/@/store/modules/process';
  import VideoBackground from 'vue-responsive-video-background-player'

  const processStore = useProcessStore();

  const stepInfo = getAllStepInfo();
  const gameTitle = getGameTitle();
  const EnterSubStep = function (step) {
    processStore.setStepInfo(step, 0);
  }; 
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
