<template>
  <div class="hello" id="hello">
    <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
  <p class="redClolor">以下是一个for循环</p>
  <ol>
    <li v-for="(item,index) in todos" :key=index>
        {{item.text + index}}
    </li>
  </ol>
  <span class="redClolor">处理用户输入</span>
  <p>{{messages}}</p>
  <button v-on:click="reverseMessage">反转消息</button>
  <P class="redClolor">以下为表单绑定</P>
  <p>{{message_model}}</p>
  <input v-model="message_model">
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 测试绑定数据
      message: '页面加载于 ' + new Date().toLocaleString(),
      // 测试for循环用法
      todos: [
        {text: '这是for循环一'},
        {text: '这是for循环二'},
        {text: '这是for循环三'}],
      messages: 'hello word!!!',
      message_model: 'Hello Vue!'
    }
  },
  methods: {
    reverseMessage: function () {
      this.messages = this.messages.split('').reverse().join(''),
      this.message_model = this.messages
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
