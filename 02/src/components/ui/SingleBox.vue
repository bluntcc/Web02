<template>
  <div>
    <el-button type="text" @click="OpenSingleBoxDialog">点击打开单选框</el-button>
    <el-dialog :title="title" :visible.sync="dialogSingleBoxVisible" :destroy-on-close="true" :width="boxWidth">
      <el-empty v-if="dialogSingleBoxVisible" :description="question" :image="imageURL"></el-empty>
      <el-radio-group v-model="radio">
        <el-radio v-for="item in singleBoxList" :key="item">{{item}}</el-radio>
      </el-radio-group>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'textDescDialog',
  props: {
    question: {
      type: String,
      default: 'no question'
    },
    singleBoxList: {
      type: Array,
      default: () => []
    },
    correctAnswer: {
      type: String,
      default: 'no question'
    },
    imageURL: {
      type: String,
      default: ''
    }
  },
  methods: {
    OpenSingleBoxDialog () {
      this.dialogSingleBoxVisible = true
    }
  },
  data () {
    return {
      dialogSingleBoxVisible: false
    }
  }
}
</script>

<style scoped>

</style>
