<template>
  <div>
    <el-button @click="handlePreviousClick">上一步</el-button>
    <el-steps :active="active" align-center>
      <el-step :title= "gameStepInfo" :description="gameStepDesList[gameStepInfoIndex]" :key="gameStepInfoIndex" v-for="(gameStepInfo,gameStepInfoIndex) in gameStepInfoList"></el-step>
    </el-steps>
    <el-button @click="handleNextClick">下一步</el-button>
  </div>
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
  },
  methods: {
    handleNextClick () {
      const currentActiveIndex = this.active < this.gameStepDesList.length - 1 ? this.active + 1 : 0
      this.$emit('setGameStep', currentActiveIndex)
    },
    handlePreviousClick () {
      const currentActiveIndex = this.active > 0 ? this.active - 1 : 0
      this.$emit('setGameStep', currentActiveIndex)
    }
  }
}
</script>

<style scoped>

</style>
