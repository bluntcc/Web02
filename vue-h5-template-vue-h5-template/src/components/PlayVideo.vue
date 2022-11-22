<template>
  <nut-video class="playVideoCss" id="playVideo" :source="state.videoSource" :options="state.options" @play="playAction"/>
  <div class="buttonRow">
    <nut-button class="buttonBase" :disabled="!showNextStep" type="primary" @click="gotoNextStep">下一步</nut-button>
    <nut-button class="buttonBase" plain type="warning" @click="gotoHomePage">返回主界面</nut-button>
  </div>
</template>

<script lang="ts" setup name="PlayVideo">
  import { nextTick } from 'vue';
  import { useProcessStore } from '/@/store/modules/process';
  import { getSubStepDetail, VideoInfo } from '/@/utils/stepUtils';
  const processStore = useProcessStore();
  let subStepInfoDetail = getSubStepDetail(processStore.step, processStore.subStep) as VideoInfo;
  const state = reactive({
    videoSource: {
      src: subStepInfoDetail.VideoUrl,
      type: 'video/mp4',
      immediate: true,
    },
    options: {
      controls: true,
      autoplay: false,
      muted: true,
      disabled: true,
    },
  });
  async function updateSrc() {
    await nextTick();
    let myPlayVideo = document.getElementById('playVideo');
    if (myPlayVideo != undefined) {
      let video = myPlayVideo.children[0] as HTMLMediaElement;
      console.log(video);
      video.load();
    }
  }
  watch(processStore.$state, (v, o) => {
    subStepInfoDetail = getSubStepDetail(processStore.step, processStore.subStep) as VideoInfo;
    state.videoSource.src = subStepInfoDetail.VideoUrl;
    showNextStep.value = false;
    updateSrc();
  });

  //判断下一步是否可以点击
  const showNextStep = ref(false);
  const playAction = function(){
    showNextStep.value = true;
  }

  //点击确认进入下一步并记录结果为完成状态
  const gotoNextStep = function(){
    processStore.setPassInfo(processStore.step, processStore.subStep);
    processStore.setStepInfo(processStore.step, processStore.subStep + 1);
  }

  const gotoHomePage = function(){
    processStore.setStepInfo(0, -1);
  }
</script>

<style scoped>
  .playVideoCss {
    width: 90%;
    height: 24%;
    margin: 0 auto 0;
  }
  .buttonRow{
    text-align: center;
  }
  .buttonBase{
    width: 250px;
    margin: 20px;
  }
</style>
