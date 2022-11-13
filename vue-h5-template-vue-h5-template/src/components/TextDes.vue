<template>
  <div>
    <div class="textDesTitleCss">
      <h1>{{ subStepInfoData.data.SubStepInfo.TextTitle }}</h1>
      <!--    <h2>{{ subStepInfoData.data.SubStepInfo.TextTitle }}</h2>-->
      <h3>{{ subStepInfoData.data.SubStepDesc }}</h3>
      <!--    <nut-cell-->
      <!--      class="itemCss"-->
      <!--      :title="subStepInfoData.data.SubStepName"-->
      <!--      :subTitle="subStepInfoData.data.SubStepInfo.TextTitle"-->
      <!--      :desc="subStepInfoData.data.SubStepDesc"-->
      <!--    />-->
    </div>
    <nut-cell class="itemCss" :desc="TextDesc.data" desc-text-align="left" />
    <nut-image class="itemCss" :src="subStepInfoData.data.SubStepInfo.TextImageUrl" fit="contain" postion="center" />
  </div>
</template>

<script lang="ts" setup name="TextDes">
  import { useProcessStore } from '/@/store/modules/process';
  import { getSubStepInfo, TextInfo } from '/@/utils/stepUtils';
  const processStore = useProcessStore();
  let subStepInfo = getSubStepInfo(processStore.step, processStore.subStep);
  const subStepInfoData = reactive({
    data: subStepInfo,
  });
  const TextDesc = reactive({
    data: '',
  });

  let textDescIndex = 0;
  const autoTyping = function () {
    textDescIndex++;
    let rawDesc = subStepInfoData.data.SubStepInfo as TextInfo;
    TextDesc.data = rawDesc.TextDesc.slice(0, textDescIndex);
  };

  onMounted(() => {
    setInterval(() => {
      autoTyping();
    }, 300);
  });

  watch(processStore.$state, (v, o) => {
    subStepInfoData.data = getSubStepInfo(processStore.step, processStore.subStep);
    textDescIndex = 0;
  });
</script>

<style scoped>
  .itemCss {
    width: 80%;
    height: auto;
    /*border: 1px solid #2c3e50;*/
    margin: 10px auto;
  }
  .textDesTitleCss {
    height: 100px;
    position: relative;
    text-align: center;
  }
  /*.centreVHCss {*/
  /*  position: absolute;*/
  /*  left: 50%; !* 定位父级的50% *!*/
  /*  top: 50%;*/
  /*  transform: translate(-50%, -50%); !*自己的50% *!*/
  /*}*/
</style>
