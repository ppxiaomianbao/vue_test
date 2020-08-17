<template>
  <div id="icon1">
    <h2>这是Datetime</h2>
    <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
  </div>

  <br>
  <span class="redClolor">以下是日期测试</span>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>

  <br>
  <el-button type="primary" @click="test_click()" icon="el-icon-search">点击</el-button>
  <el-button type="text" @click="open">点击打开 Message Box</el-button>
  
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: null,
      value2: '',
    }
  },
  methods: {
    test_click: function(){
      let va1 = this.formatDate(this.value1, 'yyyy-MM-dd hh:mm:ss');
      let va2 = this.formatDate(this.value2, 'yyyy-MM-dd hh:mm:ss');
      console.log("value1: " + va1);
      console.log("value2: " + va2);
    },
    open: function(){
      this.$confirm('此操作将展示当前选中的时间，是否展示?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.msg('',this.formatDate(this.value1, 'yyyy-MM-dd hh:mm:ss'),null);
        }).catch(() => {
        });
    }
}
}
</script>
<style>
.redClolor {
  text-align: center;
  color: red;
  margin-top: 60px;
}
</style>