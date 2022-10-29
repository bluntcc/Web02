<template>
  <div>
    <el-button @click="handlePreviousClick">上一步</el-button>
    <el-steps :active="gameSubStepIndex" align-center>
      <el-step v-for="n in doneNumber" :title = "doneTitle" :key="n"></el-step>
      <el-step :title="doingTitle" :key="doneNumber+1"></el-step>
      <el-step v-for="n in allNumber-doneNumber-1" :title="willDoTitle" :key="n+doneNumber+1" ></el-step>
    </el-steps>
    <el-button @click="handleNextClick">下一步</el-button>
  </div>
</template>

<script>
export default {
  name: 'GameStepMini',
  props: {
    gameStepIndex: {
      type: Number,
      default: 0
    },
    gameSubStepIndex: {
      type: Number,
      default: 0
    },
    doneNumber: {
      type: Number,
      default: 0
    },
    allNumber: {
      type: Number,
      default: 0
    }
  },
  inject: ['setGameStep'],
  mounted () {
  },
  methods: {
    handleNextClick () {
      if (this.gameSubStepIndex < this.currentAllStepNumber - 1) {
        this.setGameStep(this.gameStepIndex, this.gameSubStepIndex + 1)
      } else {
        this.setGameStep(this.gameStepIndex + 1, 0)
      }
    },
    handlePreviousClick () {
      if (this.gameSubStepIndex > 0) {
        this.setGameStep(this.gameStepIndex, this.gameSubStepIndex - 1)
      } else {
        this.setGameStep(this.gameStepIndex - 1, 0)
      }
    }
  },
  data: function () {
    return {
      doneTitle: '已完成',
      doingTitle: '进行中',
      willDoTitle: '未完成',
      currentAllStepNumber: this.allNumber
    }
  }
}
</script>

<style scoped>
</style>
