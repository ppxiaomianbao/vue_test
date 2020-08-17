<template>
  <div id="form1">
    <h2>这是Form1</h2>
    <div class="div">
    <el-form ref="form" :model="form" label-width="80px" style="width:25%;">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option v-for="(region,index) in regions" :key="index" :label="region.name" :value="region.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <!-- 测试使用v-for 展示复选框 -->
        <el-checkbox-group v-model="form.type">
          <el-checkbox v-for="che in checkboxs" :label="che.id" :key="che.name">{{che.name}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <!-- 测试使用c-for 展示单选框 -->
        <el-radio-group v-model="form.resource">
          <el-radio v-for="(radio,index) in radios" :key="index" :label="radio.id">{{radio.name}}</el-radio>
          <!-- <el-radio label="线下场地免费"></el-radio> -->
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkboxs: [{id:1,name: "美食/餐厅线上活动"},{id:2,name: "地推活动"},{id:3,name: "线下主题活动"},{id:4,name: "单纯品牌曝光"}],
      radios: [{id:0,name: "线上品牌商赞助"},{id:1,name: "线下场地免费"}], 
      regions: [{id:"shanghai",name:"区域一"},{id:"beijing",name:"区域二"}],
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
    }
  },
  methods: {
      onSubmit() {
        console.log(this.form.type);
        console.log("region: " + this.form.region);
        console.log("radio: " + this.form.resource);
      }
    }
}
</script>

<style>
.div{ margin:0 auto;margin-left: 40%;width: 1700px;} 
</style>