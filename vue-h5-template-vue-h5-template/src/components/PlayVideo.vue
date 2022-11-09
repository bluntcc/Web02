<template>
  <nut-video id="playVideo" :source="state.videoSource" :options="state.options" />
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
      autoplay: true,
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
    updateSrc();
  });
</script>

<style scoped></style>
