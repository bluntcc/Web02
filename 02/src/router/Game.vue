<template>
  <gameStep :game-step-des-list = "gameStepDesList" :game-step-info-list = "gameStepInfoList" :active = "active"></gameStep>
</template>

<script>
import gameStep from '../components/ui/GameStep'
export default {
  name: 'Game',
  components: {
    gameStep: gameStep
  },
  data () {
    return {
      gameStepInfoList: [
        '步骤1', '步骤2', '步骤3'
      ],
      gameStepDesList: [
        '这是一段很长很长很长的描述性文字', '这是一段很长很长很长的描述性文字', '这是一段很长很长很长的描述性文字'
      ],
      active: 1
    }
  }
}
</script>

<style scoped>

</style>
