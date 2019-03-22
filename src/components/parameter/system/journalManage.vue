<!-- 日志管理 -->
<template>
  <div id="main">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="查询" name="first">
        <fieldset>
          <legend>筛选器查询</legend>
          <div class="main">
            <div class="line">
              <div class="left">
                <el-checkbox v-model="checked1">操作员</el-checkbox>
              </div>
              <div class="right">
                <el-input v-model="manipulator" placeholder="请输入内容"></el-input>
                <el-button type="primary" plain @click="dialogFormVisible = true">选择</el-button>
                <el-dialog title="查找" :visible.sync="dialogFormVisible">
                  <el-form :model="form">
                    <el-form-item label="使用者姓名" :label-width="formLabelWidth">
                      <el-input v-model="form.name1" autocomplete="off" id="useName1"></el-input>
                    </el-form-item>
                    <el-form-item label="使用者名称" :label-width="formLabelWidth">
                      <el-input v-model="form.name2" autocomplete="off" id="useName2"></el-input>
                      <el-button type="primary" size="mini" @click="query">查找</el-button>
                    </el-form-item>

                    <el-table :data="gridData" id="table" border>
                      <el-table-column property="date" label="日期" width="150"></el-table-column>
                      <el-table-column property="name" label="姓名" width="200"></el-table-column>
                      <el-table-column property="address" label="地址"></el-table-column>
                    </el-table>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="select">选取</el-button>
                  </div>
                </el-dialog>
              </div>
            </div>
            <div class="line">
              <div class="left">
                <el-checkbox v-model="checked2">事件发生</el-checkbox>
              </div>
              <div class="right">
                <div class="block">
                  <el-date-picker
                    v-model="date"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  ></el-date-picker>
                </div>
              </div>
            </div>

            <div class="line">
              <div class="left">
                <el-checkbox v-model="checked4">操作结果</el-checkbox>
              </div>
              <div class="right">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </div>
            <div class="line">
              <div class="left">
                <el-checkbox v-model="checked3">来源IP位址</el-checkbox>
              </div>
              <div class="right">
                <el-input v-model="sourceIP" placeholder="请输入内容"></el-input>
              </div>
            </div>
          </div>
          <div id="bottomCheckbox">
            <el-checkbox v-model="typenumberChecked">每一类型查询限制比数为：100000</el-checkbox>
          </div>
        </fieldset>
        <el-button type="primary" plain id="find" @click="activeName2 = 'second'">查找</el-button>
      </el-tab-pane>
      <el-tab-pane label="日志" name="second" id="button">
        <div id="parameter">
          <div id="left">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
          </div>
          <div id="right">
            <div>
              <el-table :data="tableData" style="width: 100%" border>
                <el-table-column prop="date" label="日期" width="180"></el-table-column>
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
              </el-table>
            </div>
            <!-- <div id="secondPage">第二个页面</div> -->
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
      activeName2: "first",
      checked1: "",
      manipulator: "",
      checked2: "",
      date: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      checked3: "",
      checked4: "",
      sourceIP: "",
      typenumberChecked: false,
      dialogFormVisible: false,
      form: {
        name1: "%",
        name2: "%",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      dialogFormVisible: false,
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      data: [
        {
          label: "系统日志库",
          children: [
            {
              label: "安全性"
            },
            {
              label: "数据操作"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
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
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  components: {},

  computed: {},

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    query() {},
    handleNodeClick(data) {
      //   console.log(data);
      if (data.label == "安全性") {
        var temp = {};
        temp.date = "2019-02-12";
        temp.name = "小样";
        temp.address = "湖北";
        var tableDataTemp = [];
        tableDataTemp[0] = temp;
        this.tableData = tableDataTemp;
      } else {
        //   document.getElementById("secondPage").style.display = "inline-block";
        //   document.getElementById("firstPage").style.display = "none";
        var temp = {};
        temp.date = "2019-02-12";
        temp.name = "小美";
        temp.address = "湖北";
        var tableDataTemp = [];
        tableDataTemp[0] = temp;
        this.tableData = tableDataTemp;
      }
    },
    select() {
      var userName1 = document.getElementById("useName1").value;
      var userName2 = document.getElementById("useName2").value;
      if (
        userName1 == "" ||
        userName1 == "%" ||
        userName2 == "" ||
        userName2 == "%"
      ) {
        alert("请选择操作人");
      } else {
        this.dialogFormVisible = false;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../../style/reset.css";

#main {
  padding: 20px;
}

.line {
  margin-top: 20px;
  .left {
    display: inline-block;
    width: 150px;
    padding-left: 50px;
  }
  .right {
    display: inline-block;
    .el-input {
      width: 200px;
      display: inline-block;
      margin-right: 20px;
    }
  }
}
#bottomCheckbox {
  margin-top: 20px;
  padding-left: 50px;
  margin-bottom: 20px;
}
#find {
  display: block;
  margin: 0 auto;
}
#table {
  height: 300px;
  overflow-y: auto;
}
#parameter {
  position: relative;
  width: 100vw;
  height: 100vh;
  #left {
    position: absolute;
    top: 20px;
    left: 20px;
    display: inline-block;
    width: 150px;
    height: calc(100vh - 200px);
    border: 1px solid #ddd;
    margin-right: 5px;
  }
  #right {
    position: absolute;
    top: 20px;
    left: 180px;
    display: inline-block;
    width: 67vw;
    height: calc(100vh - 200px);
    border: 1px solid rgb(233, 223, 223);
    overflow: auto;
  }
}
</style>