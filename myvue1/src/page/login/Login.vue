<template>
  <div>
    <div class="outer_label">
      <img class="inner_label login_logo" width="90" src="../../../static/image/login/logo.png">
    </div>
    <div class="login_form">
      <div>
        <input type="text" v-model="userName" placeholder="请输入账号">
      </div>
      <div>
        <input type="password" v-model="password" @keyup.enter="login" placeholder="请输入密码"> 
      </div>
      <el-checkbox v-model="remember_pwd">记住密码</el-checkbox>
    </div>
    <div class="button">
      <button type="button" @click="login">登录</button>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        userName: '',
        password: '',
        isBtnLoading: false,
        remember_pwd: false,
      }
    },
    methods: {
      login(){
        //校验用户名密码
        this.msg(this.userName,"请输入用户名","warning");
        this.msg(this.password,"请输入用密码","warning");
        this.$fetch.api_user.login({
          username: this.userName,
          password: this.password
        })
        .then(({code,message,respData})=>{
          this.$message("登录成功");
          this.$router.push({ name: "menu1" });
        })
      }
    }
}
</script>