<template>
  <div id="test2">
    <h2>这是test2</h2>
    <p v-show="test_show_true">测试v-show元素展示</p>
    <p v-show="test_show_false">测试v-show元素隐藏</p>

    <br>
    <span class="redClolor">以下是一个点击事件</span>
    <button v-on:click="test_click()">按钮</button>

    <br>
    <span class="redClolor">以下测试切换登陆方式</span>
    <input v-show="isShow" type="text" placeholder="请输入账号" v-model="account">
    <input v-show="!isShow" type="text" placeholder="请输入邮箱" v-model="email">
    <input type="password" placeholder="请输入密码" v-model="password">
    <br>
    <button v-on:click="test_submit()">登陆</button>
    <button v-on:click="test_convert()">点击切换登陆方式</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test_show_true: true,
      test_show_false: false,
      isShow: true,

      account: '',
      email: '',
      password: ''
    }
  },
  methods: {
    test_click: function () {
      this.test_show_true = !this.test_show_true,
      this.test_show_false = !this.test_show_false
    },
    test_convert: function () {
      this.isShow = !this.isShow
    },
    test_submit: function () {
      if(this.isShow){
        this.msg(this.account,"请输入账号",'warning')
      }else{
        this.msg(this.email,"请输入邮箱",'warning')
      }
      this.msg(this.password,"请输入密码",'warning')
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
