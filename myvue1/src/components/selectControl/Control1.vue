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
      <el-button type="primary" v-on:click="test_radio()">上传<i class="el-icon-upload el-icon--right"></i></el-button>

      <br>
      <span class="redClolor">以下测试多选框禁用</span>
      <el-checkbox v-model="checked1" :disabled="isDisabled">备选项1</el-checkbox>
      <el-checkbox v-model="checked2" :disabled="!isDisabled">备选项</el-checkbox>
      <el-button type="warning" round v-on:click="test_toggle()">切换禁用状态</el-button>

      <br>
      <span class="redClolor">以下测试多选框组</span>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>

      <br>
      <span class="redClolor">以下测试限制多选框可选数量</span>
      <el-checkbox-group 
        v-model="checkedCities1"
        :min="1"
        :max="3">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    
      <br>
      <span class="redClolor">以下测试多选框全选</span>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkedCities2" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </template>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  data () {
    return {
      //测试单选框
      radio: '1',
      radio1: '1',
      //测试多选框禁用
      checked1: false,
      checked2: true,
      isDisabled: false,
      //以下测试多选框组
      checkList: ['复选框 A','选中且禁用'],
      //以下测试多选框可选数量
      checkedCities1: ['上海','广州'],
      cities: cityOptions,
      //以下测试多选框全选
      checkAll: false,
      checkedCities2: ['上海','广州'],
      isIndeterminate: true
    }
  },
  methods: {
    test_radio: function(){
      console.log("radio: " + this.radio);
    },
    test_toggle: function(){
      this.checked1 = !this.checked1;
      this.checked2 = !this.checked2;
      this.isDisabled = !this.isDisabled;
    },
    handleCheckAllChange(val) {
        this.checkedCities2 = val ? cityOptions : [];
        this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
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