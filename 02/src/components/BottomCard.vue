<template>
  <div>
    <game-step-mini :game-step-index="currentStepIndex" :game-sub-step-index="currentSubStepIndex" :all-number="currentSubStepAllNumber" :done-number="currentSubStepIndex"></game-step-mini>
    <video-msg-box v-if="currentSubStepType === 0" :src="currentVideoSrc" :desc="currentVideoDescriptions"></video-msg-box>
    <text-desc-dialog v-if="currentSubStepType === 1" :descriptions="currentTextDescriptions" :title="currentTextTitle" :image-u-r-l="currentImageUrl"></text-desc-dialog>
  </div>
</template>

<script>
import gameStep from '../components/ui/GameStep'
import videoMsgBox from '../components/Video/VideoMsgBox'
import textDescDialog from '../components/ui/TextDescDialog'
import data from '../assets/data.json'
import GameStepMini from '../components/ui/GameStepMini'

export default {
  name: 'BottomCard',
  components: {
    GameStepMini,
    gameStep: gameStep,
    videoMsgBox: videoMsgBox,
    textDescDialog: textDescDialog
  },
  props: {
    gameStepInfo: {
      Object,
      default () {
        return {gameStepIndex: 0, gameSubStepIndex: 0}
      }
    }
  },
  methods: {
    changeGameStepInfo: function (gameStep, gameSubStepIndex) {
      this.currentStepIndex = gameStep
      this.currentSubStepIndex = gameSubStepIndex
      var tStepInfo = data['GameStep'][this.currentStepIndex]['SubStep']
      var tSubStepInfo = tStepInfo[this.currentSubStepIndex]
      this.currentSubStepType = tSubStepInfo['SubStepType']
      this.currentSubStepInfo = tSubStepInfo['SubStepInfo']
      this.currentSubStepAllNumber = tStepInfo.length
      if (this.currentSubStepType === 0) {
        this.currentVideoSrc = this.currentSubStepInfo['VideoUrl']
        this.currentVideoDescriptions = this.currentSubStepInfo['VideoDesc']
        this.currentVideoTitle = this.currentSubStepInfo['VideoTitle']
      } else if (this.currentSubStepType === 1) {
        this.currentTextTitle = this.currentSubStepInfo['TextTitle']
        this.currentTextDescriptions = this.currentSubStepInfo['TextDesc']
        this.currentImageUrl = this.currentSubStepInfo['TextImageUrl']
      }
    }
  },
  watch: {
    gameStepInfo: {
      'handler' (newV) {
        this.changeGameStepInfo(newV.gameStepIndex, newV.gameSubStepIndex)
      },
      'deep': true
    }
  },
  data: function () {
    this.changeGameStepInfo(this.gameStepInfo.gameStepIndex, this.gameStepInfo.gameSubStepIndex)
    return {
      currentSubStepType: this.currentSubStepType,
      currentSubStepInfo: this.currentSubStepInfo,
      currentSubStepAllNumber: this.currentSubStepAllNumber,
      currentStepIndex: this.gameStepInfo.gameStepIndex,
      currentSubStepIndex: this.gameStepInfo.gameSubStepIndex,
      currentVideoSrc: this.currentVideoSrc,
      currentVideoDescriptions: this.currentVideoDescriptions,
      currentVideoTitle: this.currentVideoTitle,
      currentTextDescriptions: this.currentTextDescriptions,
      currentTextTitle: this.currentTextTitle,
      currentImageUrl: this.currentImageUrl
    }
  }
}
</script>

<style scoped>

</style>
