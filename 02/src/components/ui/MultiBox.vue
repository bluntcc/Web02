<template>
  <div>
    <el-button type="text" @click="OpenMultiBoxDialog">点击打开多选框</el-button>
    <el-dialog :title="multiBoxTitle" :visible.sync="dialogMultiBoxVisible" :destroy-on-close="true" width="80%">
      <el-empty v-if="dialogMultiBoxVisible" :description="question" :image="imageURL"></el-empty>
      <el-row :gutter="50">
        <el-checkbox-group v-model="checkedBoxGroup">
          <el-checkbox v-for="item in multiBoxList" :key="item" :label="item">{{item}}</el-checkbox>
        </el-checkbox-group>
      </el-row>
      <el-row v-for="tCheckedItem in checkedBoxGroup" :title="tCheckedItem" :key="tCheckedItem"></el-row>
      <el-button @click="ConfirmButton">确定</el-button>
    </el-dialog>
    <div v-if="hasConfirm">当前多选框结果：{{multiBoxResult}}</div>
  </div>
</template>

<script>
export default {
  name: 'MultiBox',
  props: {
    multiBoxTitle: {
      type: String,
      default: 'no title'
    },
    question: {
      type: String,
      default: 'no question'
    },
    multiBoxList: {
      type: Array,
      default: () => []
    },
    correctAnswer: {
      type: Array,
      default: () => []
    },
    imageURL: {
      type: String,
      default: ''
    }
  },
  methods: {
    // 打开单选框
    OpenMultiBoxDialog () {
      this.checkedBoxGroup = []
      this.dialogMultiBoxVisible = true
    },
    // 回答结果判断
    ConfirmButton () {
      if (this.checkedBoxGroup.length === this.correctAnswer.length) {
        this.multiBoxResult = true
        for (let i = 0; i < this.correctAnswer.length; i++) {
          if (this.multiBoxList[this.correctAnswer[i]] !== this.checkedBoxGroup[i]) {
            this.multiBoxResult = false
            break
          }
        }
      } else {
        this.multiBoxResult = false
      }
      this.dialogMultiBoxVisible = false
      this.hasConfirm = true
    }
  },
  data () {
    return {
      checkedBoxGroup: '',
      dialogMultiBoxVisible: false,
      multiBoxResult: false,
      hasConfirm: false
    }
  }
}
</script>

<style scoped>

</style>
