<template>
  <div id="table1">
    <h2>这是Table1</h2>
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" @click="edit(scope.row)" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="编辑" :visible.sync="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="日期" width="150"></el-table-column>
    <el-table-column property="name" label="姓名" width="200"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
    <el-table-column property="province" label="省份"></el-table-column>
    <el-table-column property="city" label="市区"></el-table-column>
    <el-table-column property="zip" label="邮编"></el-table-column>
  </el-table>
</el-dialog>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      repositoryUrl : 'http://localhost:8088/swagger-ui.html',
      repositoryName : '',
      dialogTableVisible: false,
      tableData: [],
      gridData: []
      }
  },
  mounted() {
      // 发ajax请求，用以获取数据
      // const url = 'http://localhost:8088/vueTable/getList';
      // axios.get(url).then(
      //     response => {
      //       debugger;
      //         const result = response.data.respData.list[0];
      //         console.log(result)
      //         this.tableData = response.data.respData.list;
      //         this.repositoryName = result.name;
      //     }
      // ).catch(
      //     response => {
      //         this.$message.error("接口异常");
      //     },
      // );
      this.$fetch.api_user
          .getList({})
              .then(({ code, message, respData}) => {
                debugger;
                  this.tableData = respData.list;
              })
  },
  methods: {
    handleClick(row) {
      
      this.dialogTableVisible = true;
      this.gridData = [{
        date: row.date,
        name: row.name,
        address: row.address,
        province: row.province,
        city: row.city,
        zip: row.zip
      }];
    },
    edit(row){
      this.$message("日期： " + row.date + " 姓名：" + row.name + " 城市：" + row.province + " 区域： " + row.city + " 地址：" + row.address + " 编码： " + row.zip);
    }
  }
}
</script>