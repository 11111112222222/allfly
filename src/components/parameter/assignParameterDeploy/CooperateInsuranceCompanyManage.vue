<!-- 协同保险公司管理 -->
<template>
  <div id="main">
    <header>
      <dl>
        <dt>协同保险公司管理</dt>
      </dl>
    </header>
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="查询" name="query">
        <div id="nameLine">
          <span>公司名称：</span>
          <el-input v-model="companyName" placeholder="请输入内容"></el-input>
        </div>
        <el-button type="primary" id="query" @click="query">查 询</el-button>
      </el-tab-pane>
      <el-tab-pane label="列表" name="list">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          @row-click="rowClick"
          highlight-current-row
        >
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
        <div id="button">
          <div class="lf">
            <el-button type="primary">导出EXCEL</el-button>
          </div>
          <div class="rt">
            <el-button type="warning" @click="deleteRow">删 除</el-button>
            <el-button type="primary" @click="insuranceCompanyAdd">查看 / 编辑</el-button>
            <el-button type="primary" @click="insuranceCompanyAdd">新 增</el-button>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName2: "query",
      companyName: "%",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        }
      ],
      rowIndex: -1 //-1表示未选中任何选项
    };
  },

  components: {},

  computed: {},

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    insuranceCompanyAdd() {
      this.$router.push({ path: "/user/insuranceCompanyAdd" });
    },
    query() {
      this.activeName2 = "list";
    },
    rowClick(row, event, column) {
      // console.log("row",Array.indexOf(this.tableData,row));
      // console.log("column",column);
      // console.log("this.tableData.contains(row)",this.tableData.selected(row));
      this.rowIndex = Array.indexOf(this.tableData, row);
    },
    deleteRow() {
      if (this.rowIndex == -1) {
        this.$message("请选择要删除的项！");
      } else {
        this.$confirm("确定删除该条数据吗?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.tableData.splice(this.rowIndex, 1);
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      }
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../../style/reset.css";
#main {
  height:calc(100vh - 15px);
  overflow:auto;
  padding: 0 30px 30px 30px;
  header {
    margin-bottom: 10px;
    margin-left: -10px;
  }
  #nameLine {
    margin-top: 50px;
    margin-left: 20px;
    .el-input {
      width: 400px;
      margin-bottom: 20px;
    }
    border-bottom: 1px solid #ddd;
  }
  #query {
    margin: 20px auto;
    display: block;
  }
  .el-table {
    height: 400px;
    overflow: auto;
  }
  #button {
    margin-top: 20px;
  }
}
</style>