<template>
  <div>
    <el-button type="text" @click="OpenVideo">点击打开 Message Box</el-button>
    <el-dialog :title="desc" :visible.sync="dialogTableVisible" @close="CloseVideo" :destroy-on-close="true" :width="boxWidth">
      <player-video v-if="dialogTableVisible" id="playerVideo" :volume="volume" ref="video" :src="src" class="video-content"></player-video>
    </el-dialog>
  </div>
</template>

<script>
import PlayerVideo from './PlayerVideo.vue'

export default {
  name: 'videoMsgBox',
  components: {
    PlayerVideo
  },
  props: {
    src: {
      type: String,
      default: 'http://vjs.zencdn.net/v/oceans.mp4'
    },
    desc: {
      type: String,
      default: '视频介绍'
    },
    volume: {
      type: Number,
      default: 1
    },
    boxWidth: {
      type: String,
      default: '90%'
    }
  },
  computed: {
    video () {
      return this.$refs.video
    }
  },
  methods: {
    CloseVideo () {
      // this.video.stop()
    },
    OpenVideo () {
      this.dialogTableVisible = true
    }
  },
  data () {
    return {
      dialogTableVisible: false
    }
  }
}
</script>

<style scoped>
.video-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 300px;
}
</style>
