<!-- 结算费率参数 -->
<template>
  <div>
    <div id="main">
      <header>
        <dl>
          <dt>结算费率参数</dt>
        </dl>
      </header>
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="参数区别" name="first">
          <el-table
            ref="singleTable"
            :data="tableData1"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%;height:250px;overflow:auto;"
            border
          >
            <el-table-column property="ID" label="ID" width="120"></el-table-column>
            <el-table-column property="projectName" label="项目名称" width="120"></el-table-column>
            <el-table-column property="remark1" label="说明"></el-table-column>
          </el-table>
          <fieldset>
            <legend>说明</legend>
            <p></p>
          </fieldset>
        </el-tab-pane>
        <el-tab-pane label="费率参数名称" name="second">
          <el-table
            ref="singleTable"
            :data="tableData2"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%;height:250px;overflow:auto;"
            border
          >
            <el-table-column property="ID" label="ID" width="120"></el-table-column>
            <el-table-column property="moneyParameterName" label="费率参数名称" width="120"></el-table-column>
            <el-table-column property="remark2" label="说明"></el-table-column>
          </el-table>
          <fieldset>
            <legend>说明</legend>
            <p></p>
          </fieldset>
        </el-tab-pane>
      </el-tabs>
      <div id="BottomButton" class="rt">
        <el-button type="warning">取 消</el-button>
        <el-button type="primary">确 定</el-button>
        <el-button type="warning">应 用</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName2: "first",
      tableData1: [
        {
          ID: "0",
          projectName: "一般险种",
          remark1: ""
        },
        {
          ID: "11",
          projectName: "团体险种",
          remark1: ""
        },
        {
          ID: "12",
          projectName: "卡单险种",
          remark1: ""
        }
      ],
      tableData2: [
        {
          ID: "0",
          moneyParameterName: "代理合同佣金",
          remark2: ""
        },
        {
          ID: "1",
          moneyParameterName: "核发首 / 续年佣金",
          remark2: ""
        },
        {
          ID: "11",
          moneyParameterName: "内部标准保费",
          remark2: ""
        }
      ],
      currentRow: null
    };
  },

  components: {},

  computed: {},

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../../../style/reset.css";
#main {
  position: relative;
  padding: 0 30px 30px 30px;
  header {
    margin-bottom: 10px;
    margin-left: -10px;
  }
  fieldset {
    padding-left: 20px;
    padding-bottom: 50px;
    margin: 20px 0px;
  }
}
#BottomButton {
  position: absolute;
  top: 600px;
  right: 30px;
  text-align: right;
}
</style>