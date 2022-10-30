<template>
  <div class="bottomCardCss">
    <game-step-mini :game-step-index="currentStepIndex" :game-sub-step-index="currentSubStepIndex" :all-number="currentSubStepAllNumber" :done-number="currentSubStepIndex"></game-step-mini>
    <video-msg-box v-if="currentSubStepType === 0" :src="currentVideoSrc" :desc="currentVideoDescriptions"></video-msg-box>
    <text-desc-dialog v-if="currentSubStepType === 1" :descriptions="currentTextDescriptions" :title="currentTextTitle" :image-u-r-l="currentImageUrl"></text-desc-dialog>
    <single-box v-if="currentSubStepType === 2" :singleBoxTitle="currentSingleBoxTitle" :question="currentSingleBoxQuestion" :singleBoxList="currentSingleBoxList" :correctAnswer="currentSingleBoxCorrectAnswer" :imageURL="currentSingleBoxImages"></single-box>
  </div>
</template>

<script>
import gameStep from '../components/ui/GameStep'
import videoMsgBox from '../components/Video/VideoMsgBox'
import textDescDialog from '../components/ui/TextDescDialog'
import data from '../assets/data.json'
import GameStepMini from '../components/ui/GameStepMini'
import singleBox from './ui/SingleBox'

export default {
  name: 'BottomCard',
  components: {
    GameStepMini,
    gameStep: gameStep,
    videoMsgBox: videoMsgBox,
    textDescDialog: textDescDialog,
    singleBox: singleBox
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
      let tStepInfo = data['GameStep'][this.currentStepIndex]['SubStep']
      let tSubStepInfo = tStepInfo[this.currentSubStepIndex]
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
      } else if (this.currentSubStepType === 2) {
        this.currentSingleBoxTitle = this.currentSubStepInfo['SingleBoxTitle']
        this.currentSingleBoxQuestion = this.currentSubStepInfo['SingleBoxQuestion']
        this.currentSingleBoxImages = this.currentSubStepInfo['SingleBoxImages']
        this.currentSingleBoxList = this.currentSubStepInfo['SingleBoxList']
        this.currentSingleBoxCorrectAnswer = this.currentSubStepInfo['SingleBoxCorrectAnswer']
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
      currentImageUrl: this.currentImageUrl,
      currentSingleBoxTitle: this.currentSingleBoxTitle,
      currentSingleBoxQuestion: this.currentSingleBoxQuestion,
      currentSingleBoxImages: this.currentSingleBoxImages,
      currentSingleBoxList: this.currentSingleBoxList,
      currentSingleBoxCorrectAnswer: this.currentSingleBoxCorrectAnswer
    }
  }
}
</script>

<style scoped>
.bottomCardCss{
  width: 100%;
  /*display: flex;*/
  align-items: center;
  position: absolute;
  bottom: 0;
}
</style>
