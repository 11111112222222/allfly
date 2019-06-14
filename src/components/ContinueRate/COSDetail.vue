<template>
  <div class="page" style="height:100%;position:relative;">
    <header>
      <div class="title">
        <span @click="goBack"><i class="el-icon-back"></i></span>
        <span>保单明细</span>
      </div>
    </header>
    <div class="container">
      <el-table :data="tableData1" style="width: 100%"  >
      <el-table-column prop="name" label="保险公司" width="180">
      </el-table-column>
      <el-table-column prop="name" label="承保时间" width="180">
      </el-table-column>
      <el-table-column prop="name" label="应收继续保费" width="180">
      </el-table-column>
      <el-table-column prop="name" label="实收继续保费" width="180">
      </el-table-column>
      <el-table-column prop="name" label="R13" width="180"> </el-table-column>
    </el-table>
    <div class="blank-space">

    </div>
    <section>
      <div>
        <div class="tabContent">
          <div class="totalCost">保单明细{{ totalCost }}</div>
          <div class="listTable">
            <el-table
              :data="tableData"
              size="mini"
              height="340px"
              highlight-current-row
              border
            >
              <el-table-column fixed type="index" width="50"> </el-table-column>
              <el-table-column
                prop="date"
                label="保单号码"
                sortable
                width="100"
                heigt="50"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="保险公司"
                sortable
                width="100"
                heigt="50"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="保单状态"
                sortable
                width="100"
                heigt="50"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="投保人"
                sortable
                width="100"
                heigt="50"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="承揽人"
                sortable
                width="100"
                heigt="50"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="承揽人姓名"
                sortable
                width="120"
                heigt="50"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="受理日期"
                sortable
                width="100"
                heigt="50"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="生效日期"
                sortable
                width="100"
                heigt="50"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="年华收益"
                sortable
                width="100"
                heigt="50"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="险种代码"
                sortable
                width="100"
                heigt="50"
              >
              </el-table-column>
              <el-table-column prop="address" label="地址" width="100" sortable>
              </el-table-column>
            </el-table>
          </div>
            <Dialog :dialogFormVisible="dialogFormVisible" :tableData="tableData" @change="change"></Dialog>
          <div class="inBtn">
            <el-button type="primary" size="mini" @click="derive">导出Excel</el-button>
            <!-- <el-button type="primary" size="mini">理赔报表导出</el-button> -->
          </div>
          <!-- <div class="oprateBtn">
            <el-button type="danger" size="mini">删除</el-button>
            <el-button type="primary" size="mini">查看 / 编辑</el-button>
            <el-button type="success" size="mini">新增一笔</el-button>
          </div> -->
        </div>
      </div>
    </section>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
import Dialog from 'base/dialog/dialog.vue'
let array = []
export default {
  data() {
    return {
      tableData: [],
      tableData1: [],
      totalCost: 0,
      dialogFormVisible:false
    };
  },
  components: {
    Dialog
  },
  mounted() {},
  methods: {
    goBack() {
      history.go(-1);
    },
    fetch() {
      this.tableData = this.$route.query.instance;
      this.tableData1.push(this.tableData[0])
      this.tableData1 = this.tableData1.splice(0,1)
    },
    derive() {
      this.dialogFormVisible = true;
    },
    change() {
      this.dialogFormVisible=false
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.fetch();
    });
  }
};
</script>

<style scoped lang="scss">
header .title {
  width: 100%;
  height: 30px;
  background-color: #dddefe;
}

header span:first-child {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  margin-left: 10px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.oprateBtn {
  float: right;
  margin-top: 20px;
}
.totalCost {
  float: left;
  height: 30px;
}
.inBtn {
 float: left;
  margin-top: 20px;
  margin-left: 20px;
}
.container {
  margin: 20px;
}
.blank-space{
  height:20px;
}
</style>
