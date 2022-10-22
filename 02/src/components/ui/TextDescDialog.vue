<template>
  <div>
    <el-button type="text" @click="OpenTextDescDialog">点击打开文本</el-button>
    <el-dialog :title="title" :visible.sync="dialogTextDescVisible" :destroy-on-close="true" :width="boxWidth">
      <el-empty v-if="dialogTextDescVisible" :description="descriptions" :image="imageURL"></el-empty>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'textDescDialog',
  props: {
    descriptions: {
      type: String,
      default: 'descriptions'
    },
    title: {
      type: String,
      default: 'title'
    },
    imageURL: {
      type: String,
      default: ''
    },
    boxWidth: {
      type: String,
      default: '90%'
    }
  },
  methods: {
    OpenTextDescDialog () {
      this.dialogTextDescVisible = true
    }
  },
  data () {
    return {
      dialogTextDescVisible: false
    }
  }
}
</script>

<style scoped>

</style>
