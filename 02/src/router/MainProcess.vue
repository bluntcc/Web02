<template>
  <div class="mainProcessCss">
    <bottom-card :game-step-info="gameStepInfo"></bottom-card>
  </div>
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
.mainProcessCss{
  width: 100%;
  height: 100%;
  background-image: url("/static/TestUI1/Map Background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-color: #464646;
}
</style>
