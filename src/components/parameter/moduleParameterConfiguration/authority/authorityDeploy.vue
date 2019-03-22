<!-- 权限模组配置定义 -->
<template>
  <div id="main" @click="mainClick">
    <div id="parameter">
      <header>
        <dl>
          <dt>权限模组配置定义</dt>
        </dl>
      </header>
      <div id="left">
        <el-tree
          :data="data"
          :props="defaultProps"
          @node-click="handleNodeClick"
          highlight-current
          @node-contextmenu="showMenu"
        ></el-tree>
      </div>
      <div id="center" @contextmenu.prevent="showCenterBlankMenu">
        <el-table :data="tableData1" border @row-contextmenu="showCenterMenu">
          <el-table-column prop="windowName" label="窗体名称" width="180"></el-table-column>
          <el-table-column prop="remark" label="描述"></el-table-column>
        </el-table>
      </div>
      <div id="right">
        <el-table :data="tableData2" border @row-contextmenu="showRightMenu">
          <el-table-column prop="controlItems" label="控制项" width="180"></el-table-column>
          <el-table-column prop="remark" label="说明"></el-table-column>
        </el-table>
      </div>
      <div id="centerMenu" class="skin">
        <ul id="ul3">
          <li id="addWindow" @click="dialogTableVisible = true">新增窗体</li>
          <li id="newRemove">移除</li>
        </ul>
      </div>
      <!-- 自定义右键菜单 -->
      <div id="menu" class="skin">
        <ul id="ul1">
          <li id="addItems" @mouseover="mouseOver" style="display:block;">
            新增
            <i class="el-icon-caret-right" style="width:50px;text-align:right;"></i>
          </li>
          <li id="remove" @click="Delete" @mouseover="mouseLeave">移除</li>
          <li @click="dialogFormVisible = true" id="reName" @mouseover="mouseLeave">更名</li>
          <li @click="changePicture" id="changePicture" @mouseover="mouseLeave">更改图标</li>
          <li id="edit" @mouseover="mouseLeave" @click="edit">编辑</li>
        </ul>
        <ul id="ul2" style="visibility:hidden" @mouseleave="mouseLeave">
          <li id="classify" @click="classify">权限模组分类</li>
          <li id="useMoudle" @click="useMoudle">使用权限模组</li>
        </ul>
      </div>
      <!-- 自定义右边列表右键菜单 -->
      <div id="rightMenu" class="skin">
        <ul id="ul4">
          <li id="addWindow">可用</li>
          <li id="newRemove">禁用</li>
          <li id="addWindow">选择分支机构</li>
          <li id="newRemove">选择记录属性</li>
        </ul>
      </div>
      <!-- 新增权限模组实体弹出框 -->
      <el-dialog title="新增权限模组实体 / 指定权限模组实体名称" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="说明" :label-width="formLabelWidth">
            <el-input v-model="form.remark" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">完 成</el-button>
        </div>
      </el-dialog>
      <!-- 使用权限模组弹出框 -->
      <el-dialog title="添加权限模组配置向导 / 指定权限模组名称" :visible.sync="dialogFormVisible1">
        <el-form :model="form1">
          <el-form-item label="名称" :label-width="formLabelWidth">
            <el-input v-model="form1.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="说明" :label-width="formLabelWidth">
            <el-input v-model="form1.remark" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible1 = false">取 消</el-button>
          <el-button @click="dialogFormVisible1 = false">上一步</el-button>
          <el-button @click="dialogFormVisible1 = false">下一步</el-button>
          <el-button type="primary" @click="dialogFormVisible1 = false">完 成</el-button>
        </div>
      </el-dialog>
      <!-- 权限模组编辑弹出框 -->
      <el-dialog title="权限模组编辑" :visible.sync="dialogFormVisible2">
        <el-form :model="form2">
          <el-form-item label="权限模组名称" :label-width="formLabelWidth">
            <el-input v-model="form2.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="说明" :label-width="formLabelWidth">
            <el-input v-model="form2.remark" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible2 = false">完 成</el-button>
        </div>
      </el-dialog>
      <!-- 加入窗体 / 浏览窗体 -->
      <el-dialog title="加入窗体 / 浏览窗体" :visible.sync="dialogTableVisible">
        <el-table :data="gridData" border @cell-click="fieldsetRemark" height="250" style="overflow-y:auto;">
          <el-table-column property="windowName" label="窗体名称" width="150"></el-table-column>
          <el-table-column property="systemClassify" label="系统分类"></el-table-column>
        </el-table>
        <fieldset style="margin:5px 0;height:50px;">
          <legend>说明</legend>
          <div id="fieldsetRemark"></div>
        </fieldset>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          label: "系统模块管理",
          children: [
            {
              label: "<类01>：保单",
              children: [
                {
                  label: "公司：内部结算-备档"
                },
                {
                  label: "公司：内部结算-车险"
                }
              ]
            },
            {
              label: "<类02>：结算",
              children: [
                {
                  label: "公司：内部结算-备档"
                },
                {
                  label: "公司：内部结算-车险"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      tableData1: [
        {
          windowName: "标准基本法演算窗体",
          remark: "标准基本法演算窗体"
        },
        {
          windowName: "基本法自动结算窗体",
          remark: "佣金计算"
        },
        {
          windowName: "基本法自动结算演示窗体",
          remark: "基本法"
        }
      ],
      tableData2: [
        {
          controlItems: "标准基本法演算窗体",
          remark: "wu "
        },
        {
          controlItems: "基本法自动结算窗体",
          remark: "佣金计算"
        },
        {
          controlItems: "基本法自动结算演示窗体",
          remark: "基本法"
        }
      ],
      form: {
        name: "",
        remark: ""
      },
      dialogFormVisible: false,
      form1: {
        name: "",
        remark: ""
      },
      dialogFormVisible1: false,
      form2: {
        name: "",
        remark: ""
      },
      dialogFormVisible2: false,
      formLabelWidth: "120px",
      activeName2: "first",
      gridData: [
        {
          windowName: "核保规则模块",
          systemClassify: "车险管理模块"
        },
        {
          windowName: "车险费率管理",
          systemClassify: "车险费率管理模块"
        },{
          windowName: "核保规则模块",
          systemClassify: "车险管理模块"
        },
        {
          windowName: "车险费率管理",
          systemClassify: "车险费率管理模块"
        },{
          windowName: "核保规则模块",
          systemClassify: "车险管理模块"
        },
        {
          windowName: "车险费率管理",
          systemClassify: "车险费率管理模块"
        },{
          windowName: "核保规则模块",
          systemClassify: "车险管理模块"
        },
        {
          windowName: "车险费率管理",
          systemClassify: "车险费率管理模块"
        },{
          windowName: "核保规则模块",
          systemClassify: "车险管理模块"
        },
        {
          windowName: "车险费率管理",
          systemClassify: "车险费率管理模块"
        },{
          windowName: "核保规则模块",
          systemClassify: "车险管理模块"
        },
        {
          windowName: "车险费率管理",
          systemClassify: "车险费率管理模块"
        },{
          windowName: "核保规则模块",
          systemClassify: "车险管理模块"
        },
        {
          windowName: "车险费率管理",
          systemClassify: "车险费率管理模块"
        }
      ],
      dialogTableVisible: false
    };
  },

  components: {},

  computed: {},

  methods: {
    handleNodeClick(data) {
      console.log(data);
      var menu = document.getElementById("menu");
      menu.style.visibility = "hidden";
    },
    handleNodeContextmenu(data) {
      console.log(data);
    },
    /*显示菜单*/
    showMenu(data, node) {
      // console.log(data);
      this.form2.name = node.label;
      var evt = window.event || arguments[0];
      var left = document.getElementById("left");
      var menu = document.getElementById("menu");
      menu.style.top = evt.pageY - 80 + "px";
      menu.style.left = evt.pageX - 220 + "px";
      /*设置菜单可见*/
      // 每次右键打开菜单时，都先将文字颜色设置为黑色
      $("#addItems").css("color", "black");
      $("#remove").css("color", "black");
      $("#reName").css("color", "black");
      $("#changePicture").css("color", "black");
      $("#edit").css("color", "black");
      $("#useMoudle").css("color", "black");
      $("#classify").css("color", "black");
      if (node.label == "系统模块管理") {
        $("#remove").css("color", "#ddd");
        $("#reName").css("color", "#ddd");
        $("#changePicture").css("color", "#ddd");
        $("#edit").css("color", "#ddd");
        $("#useMoudle").css("color", "#ddd");
      } else if (new RegExp("^<.*$").test(node.label)) {
        // console.log(node.label);
        // console.log($("#classify")[0].style.color);
        $("#changePicture").css("color", "#ddd");
        $("#classify").css("color", "#ddd");
      } else {
        $("#addItems").css("color", "#ddd");
        $("#useMoudle").css("color", "#ddd");
        $("#classify").css("color", "#ddd");
      }
      menu.style.visibility = "visible";
    },
    mouseOver(event) {
      if ($("#addItems")[0].style.color == "black") {
        var ul2 = document.getElementById("ul2");
        ul2.style.visibility = "visible";
      }
    },
    mouseLeave(data, node) {
      var ul2 = document.getElementById("ul2");
      console.log("鼠标移出");
      ul2.style.visibility = "hidden";
    },
    //鼠标左击使得右击的菜单消失
    mainClick() {
      var menu = document.getElementById("menu");
      menu.style.visibility = "hidden";
      var menu = document.getElementById("ul2");
      ul2.style.visibility = "hidden";
      var centerMenu = document.getElementById("centerMenu");
      centerMenu.style.visibility = "hidden";
      var rightMenu = document.getElementById("rightMenu");
      rightMenu.style.visibility = "hidden";
    },
    // add() {
    //   this.$router.push({ path: "/user/addFirstNode" });
    // },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    Delete() {
      alert("删除");
    },
    changePicture(node) {
      if ($("#changePicture")[0].style.color == "black") {
        this.dialogFormVisible = true;
        // node.cancelBubble=true;
        // node.preventDefault();
      }
    },
    showCenterMenu(data, node) {
      var evt = window.event || arguments[0];
      var left = document.getElementById("center");
      var centerMenu = document.getElementById("centerMenu");
      centerMenu.style.top = evt.pageY + 50 + "px";
      centerMenu.style.left = evt.pageX - 350 + "px";
      centerMenu.style.visibility = "visible";
      $("#addWindow").css("color", "black");
      $("#newRemove").css("color", "black");
      node.cancelBubble = true;
      node.preventDefault();
    },
    showCenterBlankMenu(data, node) {
      var evt = window.event || arguments[0];
      var left = document.getElementById("center");
      var centerMenu = document.getElementById("centerMenu");
      centerMenu.style.top = evt.pageY + 50 + "px";
      centerMenu.style.left = evt.pageX - 350 + "px";
      centerMenu.style.visibility = "visible";
      $("#addWindow").css("color", "black");
      $("#newRemove").css("color", "#ddd");
    },
    showRightMenu(data, node) {
      var evt = window.event || arguments[0];
      var left = document.getElementById("right");
      var rightMenu = document.getElementById("rightMenu");
      rightMenu.style.top = evt.pageY + 48 + "px";
      rightMenu.style.left = evt.pageX - 345 + "px";
      rightMenu.style.visibility = "visible";
      // $("#addWindow").css("color", "black");
      // $("#newRemove").css("color", "black");
      node.cancelBubble = true;
      node.preventDefault();
    },
    classify() {
      if ($("#classify")[0].style.color == "black") {
        this.dialogFormVisible = true;
      }
    },
    useMoudle() {
      if ($("#useMoudle")[0].style.color == "black") {
        this.dialogFormVisible1 = true;
      }
    },
    edit() {
      if ($("#edit")[0].style.color == "black") {
        this.dialogFormVisible2 = true;
      }
    },
    fieldsetRemark(row, column, cell, event){
      // console.log(row[column.property]);
      $("#fieldsetRemark")[0].innerHTML=row[column.property];
      console.log($("#fieldsetRemark"));
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../../../style/reset.css";
#parameter {
  position: relative;
  width: 100vw;
  height: 100vh;
  #left {
    position: absolute;
    top: 40px;
    left: 20px;
    // display: inline-block;
    width: 180px;
    height: calc(100vh - 125px);
    border: 1px solid #ddd;
    overflow: auto;
  }
  #center {
    position: absolute;
    top: 40px;
    left: 200px;
    display: inline-block;
    width: 400px;
    height: calc(100vh - 125px);
    border: 1px solid rgb(233, 223, 223);
    overflow: auto;
    margin-left: 5px;
  }
  #right {
    position: absolute;
    top: 40px;
    left: 605px;
    display: inline-block;
    width: 42%;
    height: calc(100vh - 125px);
    border: 1px solid rgb(233, 223, 223);
    overflow: auto;
    margin-left: 5px;
  }
  #menu {
    position: relative;
  }
  #menu ul {
    position: relative;
    float: left;
    border: 1px solid #979797;
    background: #f1f1f1;
    padding: 2px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
    width: 120px;
    overflow: hidden;
  }
  #menu ul li {
    // float: left;
    clear: both;
    height: 24px;
    cursor: pointer;
    line-height: 24px;
    white-space: nowrap;
    padding: 0 30px;
    width: 100%;
    display: inline-block;
  }
  #menu ul li:hover {
    background: #e6edf6;
    border: 1px solid #b4d2f6;
  }
  #ul2 {
    position: absolute;
    top: -127px;
    left: 126px;
  }
  #ul2 {
    // position: absolute;
    float: left;
    border: 1px solid #979797;
    background: #f1f1f1;
    padding: 2px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
    width: 230px;
    overflow: hidden;
  }
  #ul2 li {
    // float: left;
    clear: both;
    height: 24px;
    cursor: pointer;
    line-height: 24px;
    white-space: nowrap;
    padding: 0 30px;
    width: 100%;
    display: inline-block;
  }
  #ul2 li:hover {
    background: #e6edf6;
    border: 1px solid #b4d2f6;
  }
  #centerMenu {
    position: relative;
  }
  #centerMenu ul3 {
    position: relative;
    float: left;
    border: 1px solid #979797;
    background: #f1f1f1;
    padding: 2px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
    width: 120px;
    overflow: hidden;
  }
  #centerMenu ul3 li {
    // float: left;
    clear: both;
    height: 24px;
    cursor: pointer;
    line-height: 24px;
    white-space: nowrap;
    padding: 0 30px;
    width: 100%;
    display: inline-block;
  }
  #centerMenu ul3 li:hover {
    background: #e6edf6;
    border: 1px solid #b4d2f6;
  }
  #ul3 {
    position: absolute;
    top: -127px;
    left: 126px;
  }
  #ul3 {
    // position: absolute;
    float: left;
    border: 1px solid #979797;
    background: #f1f1f1;
    padding: 2px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
    width: 230px;
    overflow: hidden;
  }
  #ul3 li {
    // float: left;
    clear: both;
    height: 24px;
    cursor: pointer;
    line-height: 24px;
    white-space: nowrap;
    padding: 0 30px;
    width: 100%;
    display: inline-block;
  }
  #ul3 li:hover {
    background: #e6edf6;
    border: 1px solid #b4d2f6;
  }
  #rightMenu {
    position: relative;
  }
  #rightMenu ul4 {
    position: relative;
    float: left;
    border: 1px solid #979797;
    background: #f1f1f1;
    padding: 2px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
    width: 120px;
    overflow: hidden;
  }
  #rightMenu ul4 li {
    // float: left;
    clear: both;
    height: 24px;
    cursor: pointer;
    line-height: 24px;
    white-space: nowrap;
    padding: 0 30px;
    width: 100%;
    display: inline-block;
  }
  #rightMenu ul4 li:hover {
    background: #e6edf6;
    border: 1px solid #b4d2f6;
  }
  #ul4 {
    position: absolute;
    top: -127px;
    left: 126px;
  }
  #ul4 {
    // position: absolute;
    float: left;
    border: 1px solid #979797;
    background: #f1f1f1;
    padding: 2px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
    width: 230px;
    overflow: hidden;
  }
  #ul4 li {
    // float: left;
    clear: both;
    height: 24px;
    cursor: pointer;
    line-height: 24px;
    white-space: nowrap;
    padding: 0 30px;
    width: 100%;
    display: inline-block;
  }
  #ul4 li:hover {
    background: #e6edf6;
    border: 1px solid #b4d2f6;
  }
  .skin {
    width: 100px;
    padding: 2px;
    visibility: hidden;
    position: absolute;
    top: 200px;
    left: 200px;
  }
  .el-tab-pane {
    padding: 20px;
    header span {
      background: #f0f5ca;
    }
    section div {
      margin-top: 10px;
    }
    fieldset {
      padding-left: 40px;
      height: 200px;
      div {
        margin-bottom: 20px;
        span {
          background: #f0f5ca;
        }
      }
    }
  }
  #addItems {
    position: relative;
    border-bottom: 1px solid #ddd;
  }
  // .el-icon-caret-right{
  //   text-align:right;;
  // }
}
</style>