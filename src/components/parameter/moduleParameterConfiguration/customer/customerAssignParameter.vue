<!-- 客户作业参数 -->
<template>
  <div>
    <div id="main">
      <header>
        <dl>
          <dt>客户作业参数</dt>
        </dl>
      </header>
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="客户类型" name="first">
          <el-table
            ref="singleTable"
            :data="tableData1"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%;height:250px;overflow:auto;"
            border
          >
            <el-table-column type="index" width="50" label="ID"></el-table-column>
            <el-table-column property="customerTypeName" label="客户类型名称"></el-table-column>
          </el-table>
          <fieldset>
            <legend>说明</legend>
            <p></p>
          </fieldset>
        </el-tab-pane>
        <el-tab-pane label="国籍" name="second">
          <el-table
            ref="singleTable"
            :data="tableData2"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%;height:250px;overflow:auto;"
            border
          >
            <el-table-column type="index" width="50" label="ID"></el-table-column>
            <el-table-column property="countryName" label="国籍名称"></el-table-column>
          </el-table>
          <fieldset>
            <legend>说明</legend>
            <p></p>
          </fieldset>
        </el-tab-pane>
      </el-tabs>
      <div id="BottomButton" class="rt">
        <el-button type="primary">确 定</el-button>
        <el-button type="warning">取 消</el-button>
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
          customerTypeName: "已投保客户",
        },
        {
          customerTypeName: "潜在客户",
        },
        {
          customerTypeName: "团险客户",
        }
      ],
      tableData2: [
        {
          countryName: "中国",
        },
        {
          countryName: "港澳台",
        },
        {
          countryName: "外籍",
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