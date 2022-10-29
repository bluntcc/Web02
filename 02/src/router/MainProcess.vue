<template>
    <bottom-card :game-step-info="gameStepInfo"></bottom-card>
</template>

<script>
import BottomCard from '../components/BottomCard'

export default {
  name: 'MainProcess',
  components: {
    BottomCard
  },
  provide () {
    return {
      setGameStep: this.setGameStepHandle
    }
  },
  methods: {
    setGameStepHandle (gameStepIndex, gameSubStepIndex) {
      this.gameStepInfo.gameStepIndex = gameStepIndex
      this.gameStepInfo.gameSubStepIndex = gameSubStepIndex
    }
  },
  mounted () {

  },
  data: function () {
    return {
      gameStepInfo: {
        gameStepIndex: 0,
        gameSubStepIndex: 0
      }
    }
  }
}
</script>

<style scoped>
</style>
