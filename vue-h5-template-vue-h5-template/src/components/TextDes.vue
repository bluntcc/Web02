<template>
  <div>
    <div class="textDesTitleCss">
      <h2>{{ subStepInfoData.data.SubStepInfo.TextTitle }}</h2>
      <!--    <h2>{{ subStepInfoData.data.SubStepInfo.TextTitle }}</h2>-->
      <!--    <h3>{{ subStepInfoData.data.SubStepDesc }}</h3>-->
      <!--    <nut-cell-->
      <!--      class="itemCss"-->
      <!--      :title="subStepInfoData.data.SubStepName"-->
      <!--      :subTitle="subStepInfoData.data.SubStepInfo.TextTitle"-->
      <!--      :desc="subStepInfoData.data.SubStepDesc"-->
      <!--    />-->
    </div>
    <h3 ref="textDesRef" class="textCss">
      {{ TextDesc.data }}
    </h3>
    <nut-image class="itemCss" :src="subStepInfoData.data.SubStepInfo.TextImageUrl" fit="contain" postion="center" />
  </div>
</template>

<script lang="ts" setup name="TextDes">
  import { useProcessStore } from '/@/store/modules/process';
  import { getSubStepInfo, TextInfo } from '/@/utils/stepUtils';
  const processStore = useProcessStore();
  const textDesRef = ref(null);
  let subStepInfo = getSubStepInfo(processStore.step, processStore.subStep);
  const subStepInfoData = reactive({
    data: subStepInfo,
  });
  const TextDesc = reactive({
    data: '',
  });

  let textDescIndex = 0;
  const autoTyping = function () {
    let rawDesc = subStepInfoData.data.SubStepInfo as TextInfo;

    if (textDescIndex >= rawDesc.TextDesc.length) return;
    textDescIndex++;
    TextDesc.data = rawDesc.TextDesc.slice(0, textDescIndex);
    if (textDesRef.value) textDesRef.value.scrollTop = textDesRef.value.scrollHeight;
  };

  onMounted(() => {
    setInterval(() => {
      autoTyping();
    }, 100);
  });

  watch(processStore.$state, (v, o) => {
    subStepInfoData.data = getSubStepInfo(processStore.step, processStore.subStep);
    textDescIndex = 0;
  });
</script>

<style scoped>
  .itemCss {
    width: 80%;
    height: 400px;
    /*border: 1px solid #2c3e50;*/
    margin: 10px auto;
  }
  .textDesTitleCss {
    height: 100px;
    position: relative;
    text-align: center;
  }
  .textCss {
    width: 80%;
    height: 300px;
    overflow: scroll;
    border: 1px;
    margin: auto;
    color: #ffffff;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 0;
  }
  /*.centreVHCss {*/
  /*  position: absolute;*/
  /*  left: 50%; !* 定位父级的50% *!*/
  /*  top: 50%;*/
  /*  transform: translate(-50%, -50%); !*自己的50% *!*/
  /*}*/
</style>
