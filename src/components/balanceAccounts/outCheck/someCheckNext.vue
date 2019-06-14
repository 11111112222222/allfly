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

      <el-table-column
        v-for="item in tableHead1"
        :key="item.property"
        :label="item.label"
        :property="item.property"
        :fixed="item.fixed"
        :width="item.width"
      >
        <template slot-scope="scope">
          <div v-if="item.oper">
            <!-- <el-button v-for="(o, key) in item.oper" :key="key" @click="o.clickFun(scope.row)" type="text" size="small">{{o.name}}</el-button>  -->
            <el-button @click="deleteClick(scope.row)" type="danger" size="small">删除</el-button>
            <el-button type="primary" size="small" @click="editInformation(scope.row.name)">查看/编辑</el-button>
          </div>
          <div v-else>{{ scope.row[item.property]}}</div>
        </template>
      </el-table-column>

      <div class="right">
        <el-table :data="tableData2" style="width: 100%" id="rightTable" border>
          <template v-for="(Item) in tableData2">
            <el-table-column :prop="Item.dataSourceItems" label="对应数据源字段" width="180"></el-table-column>
            <el-table-column :prop="Item.systemItems" label="系统字段"></el-table-column>
          </template>
        </el-table>
        <el-button
          type="primary"
          class="rightTableButton"
          size="mini"
          @click="dialogTableVisible1 = true"
        >选择模板...</el-button>
        <el-button
          type="primary"
          class="rightTableButton"
          size="mini"
          @click="dialogFormVisible = true"
        >保存模板...</el-button>
      </div>
    </section>
    <footer>
      <el-button type="danger" @click="cancel">取 消</el-button>
      <el-button type="primary" @click="goBack">上一步</el-button>
      <el-button type="primary" id="xButton" @click="dialogTableVisible = true">下一步</el-button>
      <el-button type="primary" id="xButton">完 成</el-button>
    </footer>
    <!-- 选择模板的弹出框 -->
    <el-dialog title="批量核佣检查" :visible.sync="dialogTableVisible1">
      <el-table
        :data="gridData1"
        height="250"
        border
        ref="singleTable"
        highlight-current-row
        @current-change="handleCurrentChange"
      >
        <el-table-column property="number" label="序 号" width="150"></el-table-column>
        <el-table-column property="name" label="比对象名称" width="200"></el-table-column>
        <el-table-column property="errorValue" label="误差值"></el-table-column>
        <el-table-column prop="name" width="240" fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button
              type="danger"
              size="mini"
              @click.native.prevent="remove(scope.$index,gridData1)"
            >移 除</el-button>
            <el-button type="primary" size="mini" @click="dialogTableVisible1 = false">编 辑</el-button>
            <el-button type="primary" size="mini" @click="dialogTableVisible1 = false">套 用</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
    <!-- 保存模板的弹出框 -->
    <el-dialog title="模板更新 / 模板编辑 / 模板创建" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="保险公司" :label-width="formLabelWidth">
          <el-input v-model="form.company" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="模板说明" :label-width="formLabelWidth">
          <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="form.textarea"></el-input>
        </el-form-item>
        <el-form-item label="作者" :label-width="formLabelWidth">
          <el-input v-model="form.author" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="更新实日期" :label-width="formLabelWidth">
          <el-input v-model="form.update" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 下一步的弹出框 -->
    <el-dialog title="批量核佣检查" :visible.sync="dialogTableVisible">
      <el-table
        :data="gridData"
        height="250"
        border
        highlight-current-row
        @current-change="handleCurrentChange"
      >
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
      gridData1: [
        {
          number: "无1",
          name: "无",
          errorValue: "无"
        },
        {
          number: "无",
          name: "无",
          errorValue: "无"
        }
      ],
      dialogTableVisible1: false,
      formLabelWidth: "120px",
      dialogFormVisible: false,
      form: {
        company: "",
        author: "",
        textarea: "",
        update: ""
      }
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    goBack() {
      history.go(-1);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
      // console.log(this.$refs.multipleTable.store.states.selection);
    },
    remove(index, table) {
      this.$confirm("确定删除该条数据吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          table.splice(index, 1);
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
    },
    cancel() {
      this.$router.push({ path: "/user/someCheck" });
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