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

  
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: '',
      value2: '',
    }
  },
  methods: {
    test_click: function(){
      console.log("value1: " + this.formatDate(this.value1, 'yyyy-MM-dd hh:mm:ss'));
      console.log("value2: " + this.value2);
    }
  //   formatDate: function (date, fmt) {
  //   if (/(y+)/.test(fmt)) {
  //       fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  //   }
  //   let o = {
  //       'M+': date.getMonth() + 1,
  //       'd+': date.getDate(),
  //       'h+': date.getHours(),
  //       'm+': date.getMinutes(),
  //       's+': date.getSeconds()
  //   };
  //   for (let k in o) {
  //       if (new RegExp(`(${k})`).test(fmt)) {
  //           let str = o[k] + '';
  //           fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
  //       }
  //   }
  //   return fmt;
  // },
  // padLeftZero: function (str) {
  //   return ('00' + str).substr(str.length);
  // }
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