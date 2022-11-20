<template>
  <div class="mainDivCss">
    <!--最上方返回重新开始栏-->
    <div class="hs_top_btn_box">
      <nut-button class="hs_top_btn hs_tc_btn_box" @click="EnterSubStep(0, -1)">返回首页</nut-button>
      <nut-button class="hs_top_btn hs_zlyc_btn" @click="EnterSubStep(0, 0)">再来一次</nut-button>
		</div>
    <!--演练结果栏-->
    <div class="hs_top_head">
      <div class="hs_top_txt">恭喜您，已完成山洪灾害防御模拟训练！</div>
      <div class="hs_top_bot">
        <div class="hs_bot_item">
          <div class="hs_bot_top">推演人</div>
          <div class="hs_bot_main" id="username2"></div>
        </div>
        <div class="hs_bot_item">
          <div class="hs_bot_top">推演结果</div>	 
          <div class="hs_bot_main" id="score"></div>	 
        </div>
        <div class="hs_bot_item">
          <div class="hs_bot_top">推演时长</div> 
          <div class="hs_bot_main" style="font-size: 27px;" id="duration"></div> 
        </div>
      </div>
      <img class="hs_top_imag_box" src="picture/jiuyuan.png" alt="">
		</div>
    <!--子环节栏-->
    <nut-collapse v-model:active=activeNames :accordion="true" icon="down-arrow">
      <nut-collapse-item v-for="(n, index) in stepInfo" :name="index">
        <template v-slot:mTitle>
          <div class="hs_liebao_bt">{{n.StepName}}</div>
          <div class="hs_title_state hs_state_finish" id="step_1000">全部完成</div>
        </template>
        <div class="hs_liebao" v-for="m in getSubStepNumber(index)">
          <div class="revealSubStepCss">{{getSubStepInfo(index, m - 1).SubStepName}}</div>
          <div v-if="resultArrays[index][m - 1]" class="hs_state hs_state_finish" id="step_1100">完成</div>
          <div v-else class="hs_state hs_state_unfinish" id="step_1100">未完成</div>
          <nut-button class="hs_liebao_btn" type="primary" @click="EnterSubStep(index, m - 1)">
            回顾
          </nut-button>
        </div>
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
  
  const resultArrays = processStore.getPassArray;
  const activeNames = ref(0);

</script>

<style scoped>
  .mainDivCss {
    height: 100%;
    text-align: center;
  }
  .revealSubStepCss{
    margin-left: 10px;
  }
  .hs_liebao {
    background-color: #f0f4fe;
    height: 75px;
    line-height: 47px;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    border-radius: 5px;
    position: relative;
  }
  .hs_liebao_btn {
    position: absolute;
    right: 20px;
    width: 140px;
    height: 50px;
    line-height: 27px;
    border: 1px solid;
    cursor: pointer;
  }
  .hs_top_head {
      margin-top: 10px;
      height: 350px;
      background-color: #2c497e;
      padding: 20px;
      color: #ffffff;
      position: relative;
  }
  .hs_top_txt {
    font-size: 36px;
    color: #ffffff;
  }
  .hs_top_time {
    font-size: 17px;
    color: #ffffff;
    margin-top: 20px;
  }
  .hs_top_bot {
    display: flex;
    align-items: center;
    margin-top: 37px;
  }
 .hs_bot_item {
    width: 150px;
    height: 110px;
    background-color: #3b63ad;
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .hs_bot_top {
    font-size: 30px;
    color: #ffffff;
    height: 50px;
    line-height: 50px;
  }
  .hs_bot_main {
    font-size: 29px;
    height: 50px;
    line-height: 50px;
  }
  .hs_top_imag_box {
    position: absolute;
    top: 225px;
    right: 0px;
    width: 300px;
    height: 200px;
  }
  .hs_top_btn_box {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .hs_top_btn {
    width: 200px;
    background-color: #96a2be;
    text-align: center;
    color: #ffffff;
    line-height: 36px;
    margin-top: 20px;
    cursor: pointer;
  }
  .hs_tc_btn_box {
    margin-right: 30px;
  }
  .hs_zlyc_btn {
    background-color: #FDA753;
  }
  .hs_state_finish {
    color: #0dd200;
  }
  .hs_state_unfinish {
    color: #c52222;
  }
  .hs_state {
    position: absolute;
    right: 180px;
  }
  .hs_liebao_bt {
    position: absolute;
    font-size: 30px;
    font-weight: 600;
    left: 50px;
    top: 30px;
  }
  .hs_title_state {
    position: absolute;
    top: 30px;
    right: 80px;
    font-size: 22px;
  }
</style>
