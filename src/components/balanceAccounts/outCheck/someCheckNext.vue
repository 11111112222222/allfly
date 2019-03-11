<!-- 批量核佣检查/下一步/批量核佣检查 -->
<template>
  <div>
    <header>
      <div class="title">
        <span @click="goBack">
          <i class="el-icon-back"></i>
        </span>
        <span>批量核佣检查 / 下一步 / 批量核佣检查</span>
      </div>
    </header>
    <section>
      <div class="left">
        <div class="left1">
          <el-table :data="tableData1" style="width: 100%">
            <el-table-column prop="dataSourceItems" label="数据源字段" width="180"></el-table-column>
          </el-table>
        </div>
        <div class="left2">
          <el-button type="primary">选中></el-button>
          <el-button type="primary">略过></el-button>
          <el-button type="danger" id="xButton">X</el-button>
        </div>
      </div>
      <div class="right">
        <el-table :data="tableData2" style="width: 100%" id="rightTable" border>
          <el-table-column prop="dataSourceItems" label="对应数据源字段" width="180"></el-table-column>
          <el-table-column prop="systemItems" label="系统字段"></el-table-column>
        </el-table>
        <el-button type="primary" class="rightTableButton" size="mini">选择模板...</el-button>
        <el-button type="primary" class="rightTableButton" size="mini">保存模板...</el-button>
      </div>
    </section>
    <footer>
      <el-button type="danger">取 消</el-button>
      <el-button type="primary">上一步</el-button>
      <el-button type="primary" id="xButton" @click="dialogTableVisible = true">下一步</el-button>
      <el-button type="primary" id="xButton">完 成</el-button>
    </footer>
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData" height="250" border>
        <el-table-column property="number" label="序 号" width="150"></el-table-column>
        <el-table-column property="name" label="比对象名称" width="200"></el-table-column>
        <el-table-column property="errorValue" label="误差值"></el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button type="danger" @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible = false">上一步</el-button>
        <el-button type="primary" @click="dialogTableVisible = false">下一步</el-button>
        <el-button type="primary" @click="dialogTableVisible = false">完 成</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData1: [
        {
          dataSourceItems: "保险公司"
        },
        {
          dataSourceItems: "保单号码"
        },
        {
          dataSourceItems: "..."
        },
        {
          dataSourceItems: "..."
        },
        {
          dataSourceItems: "..."
        }
      ],
      tableData2: [
        {
          dataSourceItems: "无",
          systemItems: "无"
        },
        {
          dataSourceItems: "无",
          systemItems: "无"
        }
      ],
      gridData: [
        {
          number: "无",
          name: "无",
          errorValue: "无"
        },
        {
          number: "无",
          name: "无",
          errorValue: "无"
        }
      ],
      dialogTableVisible: false,
      formLabelWidth: "120px"
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    goBack() {
      history.go(-1);
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../../style/reset.css";
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
section {
  padding: 30px;
  //   width: 100%;
  height: 100%;
  display: block;
  .left {
    float: left;
    width: 27%;
    .left1 {
      width: 66%;
      height: 60vh;
      overflow: auto;
      border: 1px solid #ddd;
      display: inline-block;
    }
    .left2 {
      width: 32%;
      //   border: 1px solid #ddd;
      float: right;
      text-align: center;
      padding-top: 200px;
      .el-button {
        margin-top: 10px;
        margin-left: 0px;
        // #xButton .el-button--mini, .el-button--small{
        //     font-size:20px;
        //     font-weight: bold;
        // }
      }
      #xButton {
        font-size: 20px;
        font-weight: bolder;
        background-color: #ddd;
        color: red;
      }
    }
  }
  .right {
    width: 72%;
    height: 60vh;
    // border: 1px solid #ddd;
    float: right;
    #rightTable {
      height: 90%;
      overflow: auto;
    }
    .rightTableButton {
      margin-top: 10px;
    }
  }
}
footer {
  position: fixed;
  bottom: 100px;
  right: 30px;
  // clear:both;
  // background-color:#ddd;
}
</style>