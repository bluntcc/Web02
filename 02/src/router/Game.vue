<template>
  <div>
    <gameStep :game-step-des-list = "gameStepDesList" :game-step-info-list = "gameStepInfoList" :active = "active" v-on:setGameStep="setGameStep"></gameStep>
    <video-msg-box :src="gameStepVideoList[active]" :desc="gameStepVideoDescList[active]"></video-msg-box>
    <text-desc-dialog :descriptions="gameStepTextDescList[active]" :title="gameStepTextDescTitleList[active]" :image-u-r-l="gameStepTextDescImageList[active]"></text-desc-dialog>
    <single-box :singleBoxTitle="gameSingleBoxTitle" :question="gameSingleBoxQuestion" :singleBoxList="gameSingleBoxList" :correctAnswer="gameSingleBoxCorrectAnswer" :imageURL="gameSingleBoxImages"></single-box>
  </div>
</template>

<script>
import gameStep from '../components/ui/GameStep'
import videoMsgBox from '../components/Video/VideoMsgBox'
import textDescDialog from '../components/ui/TextDescDialog'
import singleBox from '../components/ui/SingleBox.vue'
export default {
  name: 'Game',
  components: {
    gameStep: gameStep,
    videoMsgBox: videoMsgBox,
    textDescDialog: textDescDialog,
    singleBox: singleBox
  },
  methods: {
    setGameStep: function (currentActiveIndex) {
      this.active = currentActiveIndex
    }
  },
  data: function () {
    return {
      gameStepInfoList: [
        '步骤1', '步骤2', '步骤3'
      ],
      gameStepDesList: [
        '这是一段很长很长很长的描述性文字', '这是一段很长很长很长的描述性文字', '这是一段很长很长很长的描述性文字'
      ],
      active: 0,
      // video 数据
      gameStepVideoList: [
        'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
        'http://vjs.zencdn.net/v/oceans.mp4',
        'https://www.w3schools.com/html/movie.mp4'
      ],
      gameStepVideoDescList: [
        'Test1',
        'Test2',
        'Test3'
      ],
      // 文字弹窗数据
      gameStepTextDescList: [
        '描述1',
        '描述2',
        '描3'
      ],
      gameStepTextDescTitleList: [
        'Title1',
        'Title2',
        'Title3'
      ],
      gameStepTextDescImageList: [
        'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
      ],
      // 单选弹窗数据
      gameSingleBoxTitle: '这是一个单选框',
      gameSingleBoxQuestion: 'now we want to be stronger,what can I do?',
      gameSingleBoxImages: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
      gameSingleBoxList: [
        'list one',
        'list two',
        'list three'
      ],
      gameSingleBoxCorrectAnswer: 1
    }
  }
}
</script>

<style scoped>

</style>
