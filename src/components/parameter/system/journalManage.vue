<!-- 日志管理 -->
<template>
  <div id="main" @click="handleMainClick">
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
                <el-dialog title="查找" :visible.sync="dialogFormVisible" :modal-append-to-body='false'>
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
        <div id="parameter" ref="parameter">
          <div id="left" ref="left">
            <el-tree
              :data="data"
              :props="defaultProps"
              @node-click="handleNodeClick"
              @node-contextmenu="handleContextMenu"
            ></el-tree>
            <div class="rightClickMenu" ref="rightClickMenu">
              <div id="output">
                汇出
                <i class="el-icon-caret-right"/>
                <div id="hoverRightMenu" ref="hoverRightMenu">
                  <div>类型所有日志</div>
                  <div>选定的日志</div>
                </div>
              </div>
              <div @click="managePro">管理属性</div>
            </div>
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
        <!-- 右键菜单管理属性弹出框 -->
        <el-dialog
          title="管理属性"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
          :modal-append-to-body="false"
        >
          <template>
            <el-tabs v-model="activeName" type="card" @tab-click="handleManProClick">
              <el-tab-pane label="属性" name="first">
                <el-row :gutter="20" style="margin-top:20px;">
                  <el-col :span="10">
                    <div class="grid-content bg-purple" style="text-align:right">当前日志周期</div>
                  </el-col>
                  <el-col :span="14">
                    <div class="grid-content bg-purple">2019/5/12 - 2019/5/12</div>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="10">
                    <div class="grid-content bg-purple" style="text-align:right">当前日志笔数</div>
                  </el-col>
                  <el-col :span="14">
                    <div class="grid-content bg-purple">120</div>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="10">
                    <div class="grid-content bg-purple" style="text-align:right">日志数据限制上限</div>
                  </el-col>
                  <el-col :span="14">
                    <div class="grid-content bg-purple">
                      <div>
                        <el-checkbox size='mini' v-model="checked5">保存笔数： 1000</el-checkbox>
                      </div>
                      <div>
                        <el-checkbox size='mini' v-model="checked6">保存周期(天)： 60</el-checkbox>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="设置" name="second">
                <div>
                  <div>
                    显示名称：
                    <el-input size='mini' v-model="showName" placeholder style="width:60%;"></el-input>
                  </div>
                  <fieldset>
                    <legend>日志数据</legend>
                    <div style="margin-bottom:10px;">
                      <el-checkbox v-model="checked6">
                        保存笔数
                      </el-checkbox>
                      <el-input-number
                        size='mini'
                          v-model="num1"
                          controls-position="right"
                          @change="handleChange1"
                          :min="1"
                          :max="10000"
                        ></el-input-number>
                    </div>
                    <div style="margin-bottom:10px;">
                      <el-checkbox size='mini' v-model="checked7">
                        保存周期
                      </el-checkbox>
                      <el-input-number
                        size='mini'
                          v-model="num2"
                          controls-position="right"
                          @change="handleChange2"
                          :min="1"
                          :max="10000"
                        ></el-input-number> 天
                    </div>
                  </fieldset>
                  <div>
                    <el-button size='mini' type="primary">默认设置</el-button>
                    <el-button size='mini' type="primary">确定</el-button>
                    <el-button size='mini'>取消</el-button>
                    <el-button size='mini' type="primary">应用</el-button>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </template>
        </el-dialog>
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
      ],
      dialogVisible: false,
      activeName: "first",
      checked5: false,
      checked6: false,
      showName: "数据操作性",
      checked6: false,
      checked7: false,
      num1: 1000,
      num2: 60
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
      this.$refs.rightClickMenu.style.display = "none";
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
    handleContextMenu(event, data, node, self) {
      // console.log("this.$refs.parameter.offsetTop", this.$refs.parameter.clientX);
      console.log("event", event);
      console.log("data", data);
      console.log("node", node.isLeaf);
      console.log("self", self);
      if (node.isLeaf === true) {
        this.$refs.rightClickMenu.style.display = "block";
        this.$refs.rightClickMenu.style.left = event.clientX - 250 + "px";
        this.$refs.rightClickMenu.style.top = event.clientY - 115 + "px";
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
    },
    handleMainClick(event) {
      // event.stopPropagation();
      this.$refs.rightClickMenu.style.display = "none";
    },
    managePro() {
      this.dialogVisible = true;
    },
    handleManProClick(tab, event) {
      console.log(tab, event);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleChange1(value) {
      console.log(value);
    },
    handleChange2(value) {
      console.log(value);
    }
  }
};
</script>
<style lang='scss' scoped>
// @import "../../../style/reset.css";

#main {
  padding: 20px;
  position: relative;
  z-index: 5;
  overflow: auto;
}

.line {
  margin-top: 20px;
  .left {
    display: inline-block;
    width: 150px;
    padding-left: 50px;
    position: relative;
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
  // position: relative;
  width: 100%;
  height: 100vh;

  #left {
    // position: absolute;
    // top: 0px;
    // left: 0px;
    display: inline-block;
    width: 15%;
    height: calc(100% - 150px);
    border: 1px solid #ddd;
    margin-right: 1%;
    z-index: 6;
  }
  #right {
    // position: absolute;
    // top: 0px;
    // left: 16%;
    display: inline-block;
    width: 83%;
    height: calc(100% - 150px);
    border: 1px solid rgb(233, 223, 223);
    overflow: auto;
    float: right;
  }
  .rightClickMenu {
    position: absolute;
    top: 100px;
    left: 10px;
    width: 130px;
    border: 1px solid #ddd;
    z-index: 10;
    box-shadow: 5px 5px 5px rgb(226, 224, 224);
  }
  .rightClickMenu div {
    height: 35px;
    line-height: 35px;
    text-align: center;
    background: #eee;
    // padding:5px;
  }
  .rightClickMenu > div:hover {
    // border:1px solid #ddd;
    background: #ddd;
  }
  .rightClickMenu div:first-of-type {
    border-bottom: 1px solid #ddd;
  }
  #hoverRightMenu {
    display: none;
  }
  #output:hover #hoverRightMenu {
    display: block;
    width: 150px;
    text-align: center;
    position: absolute;
    top: 0px;
    left: 128px;
    border-left: 1px solid #ddd;
    z-index: 11;
    // box-shadow: 5px 5px 5px rgb(226, 224, 224);
  }
  #hoverRightMenu div:hover {
    background: #ddd;
  }
  .el-icon-caret-right {
    float: right;
    height: 35px;
    line-height: 35px;
    padding-right: 5px;
  }
}
.el-row {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  // .bg-purple {
  //   background: #d3dce6;
  // }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  fieldset {
  padding: .35em .625em .75em;
  margin: 20px 0;
  border: 1px solid #d9dce7;
  padding: 10px;
  text-align: left;
}
</style>