// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Msg from './commons/msg'
import Datetime from './commons/datetime'
//导入请求框架
import api from './api'
import axios from 'axios';

Vue.config.productionTip = false

Vue.use(ElementUI)
//系统错误捕获
const errorHandler = (error, vm)=>{
  console.error('抛出全局异常: 【' + error + '】');
  console.error(vm);
  // console.error(error);
   
}
Vue.config.errorHandler = errorHandler;
Vue.prototype.$throw = (error)=> errorHandler(error,this);

//通用提示框
Vue.prototype.msg = Msg;
//通用时间格式化
Vue.prototype.formatDate = Datetime;

//全局设置网络超时时间
axios.defaults.timeout = 30000;

//使用api
Vue.use(api);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


