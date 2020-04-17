<template>
    <div id="table">
        <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>table</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table
            :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            style="width: 100%;
            height: 100%">
            <el-table-column
            type="selection"
            center
            width="55">
            </el-table-column>
            <el-table-column
            prop="date"
            label="日期"
            sortable
            center
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
            width="120">
            <template slot-scope="scope">
                <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small">
                移除
                </el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage1"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
        </el-pagination>
    </div>
</template>
<script>
export default {
    name : "table",
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      current_change:function(currentPage){
        this.currentPage = currentPage;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        total:4,//默认数据总数
        pagesize:2,//每页的数据条数
        currentPage1: 2,
        currentPage:1,//默认开始页面
        istag: true,
        input:"",
        input21: '',
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    created:function(){
        this.total=this.tableData.length;
    },
}
</script>
<style scoped>
#table{
    margin: 20px;
}
.el-table{
    margin-top: 20px;
}
</style>