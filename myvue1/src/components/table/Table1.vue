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
export default {
  data () {
    return {
      dialogTableVisible: false,
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '北京',
          city: '朝阳区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '赵小龙',
          province: '广州',
          city: '西湖区',
          address: '上海市普陀区金沙江路 1517 弄1',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '李麻子',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄2',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '张三',
          province: '武汉',
          city: '新洲区',
          address: '上海市普陀区金沙江路 1516 弄3',
          zip: 200333
        }],
        gridData: []
      }
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