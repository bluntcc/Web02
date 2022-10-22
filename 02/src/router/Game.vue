<template>
  <div>
    <gameStep :game-step-des-list = "gameStepDesList" :game-step-info-list = "gameStepInfoList" :active = "active" v-on:setGameStep="setGameStep"></gameStep>
    <video-msg-box :src="gameStepVideoList[active]" :desc="gameStepVideoDescList[active]"></video-msg-box>
  </div>
</template>

<script>
import gameStep from '../components/ui/GameStep'
import videoMsgBox from '../components/Video/VideoMsgBox'
export default {
  name: 'Game',
  components: {
    gameStep: gameStep,
    videoMsgBox: videoMsgBox
  },
  methods: {
    setGameStep: function (currentActiveIndex) {
      this.active = currentActiveIndex
    }
  },
  data () {
    return {
      gameStepInfoList: [
        '步骤1', '步骤2', '步骤3'
      ],
      gameStepDesList: [
        '这是一段很长很长很长的描述性文字', '这是一段很长很长很长的描述性文字', '这是一段很长很长很长的描述性文字'
      ],
      active: 0,
      gameStepVideoList: [
        'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
        'http://vjs.zencdn.net/v/oceans.mp4',
        'https://www.w3schools.com/html/movie.mp4'
      ],
      gameStepVideoDescList: [
        'Test1',
        'Test2',
        'Test3'
      ]
    }
  }
}
</script>

<style scoped>

</style>
