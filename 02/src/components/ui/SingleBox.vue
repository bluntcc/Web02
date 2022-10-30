<template>
  <div>
    <el-button type="text" @click="OpenSingleBoxDialog">点击打开单选框</el-button>
    <el-dialog :title="singleBoxTitle" :visible.sync="dialogSingleBoxVisible" :destroy-on-close="true" width="80%">
      <el-empty v-if="dialogSingleBoxVisible" :description="question" :image="imageURL"></el-empty>
      <el-row :gutter="50">
        <el-radio-group v-model="radio">
          <div v-for="item in singleBoxList" :key="item">
            <el-radio :label="item">{{item}}</el-radio>
          </div>
        </el-radio-group>
      </el-row>
      <el-row>当前选择的值是：{{this.radio}}</el-row>
      <el-button @click="ConfirmButton">确定</el-button>
    </el-dialog>
    <div v-if="hasConfirm">当前单选框结果：{{singleBoxResult}}</div>
  </div>
</template>

<script>
export default {
  name: 'textDescDialog',
  props: {
    singleBoxTitle: {
      type: String,
      default: 'no title'
    },
    question: {
      type: String,
      default: 'no question'
    },
    singleBoxList: {
      type: Array,
      default: () => []
    },
    correctAnswer: {
      type: Number,
      default: 0
    },
    imageURL: {
      type: String,
      default: ''
    }
  },
  methods: {
    // 打开单选框
    OpenSingleBoxDialog () {
      this.radio = ''
      this.dialogSingleBoxVisible = true
    },
    // 回答结果判断
    ConfirmButton () {
      if (this.radio === this.singleBoxList[this.correctAnswer]) {
        this.singleBoxResult = true
      } else {
        this.singleBoxResult = false
      }
      this.dialogSingleBoxVisible = false
      this.hasConfirm = true
    }
  },
  data () {
    return {
      radio: '',
      dialogSingleBoxVisible: false,
      singleBoxResult: false,
      hasConfirm: false
    }
  }
}
</script>

<style scoped>

</style>
