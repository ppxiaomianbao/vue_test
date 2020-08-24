<template>
  <div id="icon1">
    <h2>这是Icon</h2>
    <i class="el-icon-edit"></i>
    <el-button type="primary" :loading="loading">加载中</el-button>
    <el-button type="primary" v-on:click="test_click" icon="el-icon-search">搜索</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    test_click(){
      let message = "点击事件触发了,当前时间:" + new Date().toLocaleString();
      this.msg('',message,'success')
      this.loading = !this.loading
    }
  }
}
</script>