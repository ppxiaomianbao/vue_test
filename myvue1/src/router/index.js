import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Test1 from '../components/Test1'
import Test2 from '../components/Test2'
import Icon1 from '../components/Icon/Icon1'
import Control1 from '../components/selectControl/Control1'
import Input1 from '../components/input/Input1'
import Datetime1 from '../components/datetime/Datetime1'
import Upload1 from '../components/upload/Upload1'
import Table1 from '../components/table/Table1'
import Form1 from '../components/form/Form1'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test1',
      name: 'test1',
      component: Test1
    },
    {
      path: '/test2',
      name: 'test2',
      component: Test2
    },
    {
      path: '/icon1',
      name: 'icon1',
      component: Icon1
    },
    {
      path: '/control1',
      name: 'control1',
      component: Control1
    },
    {
      path: '/input1',
      name: 'input1',
      component: Input1
    },
    {
      path: '/datetime1',
      name: 'datetime1',
      component: Datetime1
    },
    {
      path: '/upload1',
      name: 'upload1',
      component: Upload1
    },
    {
      path: '/table1',
      name: 'table1',
      component: Table1
    },
    {
      path: '/form1',
      name: 'form1',
      component: Form1
    }
  ]
})
