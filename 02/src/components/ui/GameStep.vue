<template>
  <el-steps :active="active" align-center>
      <el-step :title= "gameStepInfo" :description="gameStepDesList[gameStepInfoIndex]" :key="gameStepInfoIndex" v-for="(gameStepInfo,gameStepInfoIndex) in gameStepInfoList"></el-step>
  </el-steps>
</template>

<script>
export default {
  name: 'GameStep',
  props: {
    gameStepInfoList: {
      type: Array,
      default: () => []
    },
    gameStepDesList: {
      type: Array,
      default: () => []
    },
    active: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>

</style>
