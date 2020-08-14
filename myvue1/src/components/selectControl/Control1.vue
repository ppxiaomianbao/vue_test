<template>
  <div id="icon1">
    <h2>这是Control1</h2>
    <template>
      <div>
        <el-radio v-model="radio1" label="1" border>备选项1</el-radio>
        <el-radio v-model="radio1" label="2" border>备选项2</el-radio>
      </div>
      
      <br>
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
    </template>
    <el-button type="primary" v-on:click="test_radio()">上传<i class="el-icon-upload el-icon--right"></i></el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1',
      radio1: '1'
    }
  },
  methods: {
    test_radio: function(){
      console.log("radio: " + this.radio);
    }
  }
}
</script>