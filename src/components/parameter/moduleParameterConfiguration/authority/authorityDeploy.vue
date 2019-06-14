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
          <li id="addItems" ref="addItems" @mouseover="mouseOver" style="display:block;">
            新增
            <i class="el-icon-caret-right" style="width:50px;text-align:right;"></i>
          </li>
          <li id="remove" ref="remove" @click="Delete" @mouseover="mouseLeave">移除</li>
          <li @click="dialogFormVisible = true" id="reName" ref="reName" @mouseover="mouseLeave">更名</li>
          <li
            @click="changePicture"
            id="changePicture"
            ref="changePicture"
            @mouseover="mouseLeave"
          >更改图标</li>
          <li id="edit" ref="edit" @mouseover="mouseLeave" @click="edit">编辑</li>
        </ul>
        <ul id="ul2" style="visibility:hidden" @mouseleave="mouseLeave">
          <li id="classify" ref="classify" @click="classify">权限模组分类</li>
          <li id="useMoudle" ref="useMoudle" @click="useMoudle">使用权限模组</li>
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
          <el-button disabled>上一步</el-button>
          <el-button @click="dialogFormVisible1 = false;dialogTableVisible1=true">下一步</el-button>
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
        <el-table
          :data="gridData"
          border
          @cell-click="fieldsetRemark"
          height="250"
          style="overflow-y:auto;"
        >
          <el-table-column property="windowName" label="窗体名称" width="150"></el-table-column>
          <el-table-column property="systemClassify" label="系统分类"></el-table-column>
        </el-table>
        <fieldset style="margin:5px 0;height:50px;">
          <legend>说明</legend>
          <div id="fieldsetRemark"></div>
        </fieldset>
        <div style="text-align:right">
          <el-button>加 入</el-button>
          <el-button type="primary">关 闭</el-button>
        </div>
      </el-dialog>
      <!-- 添加权限模组配置向导 -->
      <el-dialog
        title="添加权限模组配置向导"
        :visible.sync="dialogTableVisible1"
        width="40%"
        :before-close="handleClose"
      >
        <div class="line" style="height:30px;line-height:30px;vertical-align:middle">
          <i class="el-icon-tickets" style="color:blue;font-size:30px;margin-right:5px;"></i>
          <span>加入定义窗体来源</span>
        </div>
        <fieldset style="margin:5px 0;" class="line">
          <legend>窗体来源</legend>
          <div>
            <el-radio-group v-model="radio">
              <el-radio :label="3" class="line">自定义</el-radio>
              <br>
              <el-radio :label="6" class="line">系统默认模组定义窗体</el-radio>
            </el-radio-group>
            <div class="line">
              <el-select v-model="value" placeholder="请选择" style="width:300px;">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-button type="primary">加 入</el-button>
            </div>
            <div class="line">
              <el-input
                type="textarea"
                :rows="4"
                placeholder="请输入内容"
                v-model="textarea"
                style="width:300px;"
              ></el-input>
              <el-button type="danger">移除</el-button>
            </div>
          </div>
        </fieldset>
        <div class="line" style="margin-top:10px;text-align:right;">
              <el-button @click="dialogTableVisible1=false">取消</el-button>
              <el-button @click="dialogFormVisible1=true;dialogTableVisible1=false;">上一步</el-button>
              <el-button @click="dialogTableVisible2 = true;dialogTableVisible1=false;">下一步</el-button>
              <el-button type="primary" @click="dialogTableVisible1=false">完成</el-button>
            </div>
      </el-dialog>
      <!-- 添加权限模组配置向导/下一步 -->
      <el-dialog title="添加权限模组配置向导" :visible.sync="dialogTableVisible2" width="40%"
        :before-close="handleClose">
        <div class="line" style="height:30px;line-height:30px;vertical-align:middle">
          <i class="el-icon-tickets" style="color:blue;font-size:30px;margin-right:5px;"></i><span>选取使用窗体 / 可多重选择</span>
          <el-button style="float:right" @click="dialogTableVisible=true">浏览窗体</el-button>
        </div>
        <el-table
          :data="deploy"
          border
          @cell-click="fieldsetRemark"
          height="250"
          style="overflow-y:auto;"
        >
          <el-table-column type="index" label="序号" width="150"></el-table-column>
           <el-table-column
              type="selection"
              width="55">
            </el-table-column>
          <el-table-column property="windowName" label="窗体名称"></el-table-column>
          <el-table-column property="remark" label="说明"></el-table-column>
        </el-table>
        <div class="line" style="margin-top:10px;text-align:right;">
              <el-button @click="dialogTableVisible2=false">取消</el-button>
              <el-button @click="dialogTableVisible1=true;dialogTableVisible2=false;">上一步</el-button>
              <el-button @click="dialogTableVisible3=true;dialogTableVisible2=false;">下一步</el-button>
              <el-button type="primary" @click="dialogTableVisible2=false">完成</el-button>
            </div>
      </el-dialog>
      <!-- 添加权限模组配置向导/选择图片 -->
      <el-dialog title="添加权限模组配置向导" :visible.sync="dialogTableVisible3">
        <div class="line" style="height:30px;line-height:30px;vertical-align:middle">
          <i class="el-icon-tickets" style="color:blue;font-size:30px;margin-right:5px;"></i><span>选择图片</span>
        </div>
        <el-select v-model="value1" placeholder="请选择图片" style="width:300px;" @change="selectChange">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <div class="picture">
                <template v-if="value1==='xitongtushi'">
                  <i class="el-icon-edit"></i><i class="el-icon-share"></i><i class="el-icon-delete"></i>
                  <i class="el-icon-upload"></i><i class="el-icon-goods"></i>
                  <i class="el-icon-share"></i><i class="el-icon-caret-left"></i><i class="el-icon-caret-right"></i>
                  <i class="el-icon-caret-bottom"></i><i class="el-icon-caret-top"></i>
                </template>
              </div>
        <div style="text-align:right;margin-top:10px;">
          <el-button @click="dialogTableVisible3=false">取消</el-button>
              <el-button @click="dialogTableVisible3=false;dialogTableVisible2=true">上一步</el-button>
              <el-button @click="dialogTableVisible4=true;dialogTableVisible3=false">下一步</el-button>
              <el-button type="primary" @click="dialogTableVisible3=false">完成</el-button>
        </div>
      </el-dialog>
      <!-- 添加权限模组配置向导/配置完成 -->
      <el-dialog title="添加权限模组配置向导" :visible.sync="dialogTableVisible4" style="padding:20px;">
        <div class="line" style="height:30px;line-height:30px;vertical-align:middle">
          <i class="el-icon-success" style="color:green;font-size:30px;margin-right:5px;"></i><span>配置完成</span>
        </div>
        <div class="success">
          <div>模组名称：{{form1.name}}</div>
          <div>说明：{{form1.remark}}</div>
          <div style="border-bottom:2px dotted #ddd;">选用窗体信息如下</div>
          <div class="info"></div>
        </div>
              
        <div style="text-align:right">
          <el-button @click="dialogTableVisible4=false">取消</el-button>
              <el-button @click="dialogTableVisible4=false;dialogTableVisible3=true">上一步</el-button>
              <el-button disabled>下一步</el-button>
              <el-button type="primary"  @click="dialogTableVisible4=false">完成</el-button>
        </div>
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
        },
        {
          windowName: "核保规则模块",
          systemClassify: "车险管理模块"
        },
        {
          windowName: "车险费率管理",
          systemClassify: "车险费率管理模块"
        },
        {
          windowName: "核保规则模块",
          systemClassify: "车险管理模块"
        },
        {
          windowName: "车险费率管理",
          systemClassify: "车险费率管理模块"
        },
        {
          windowName: "核保规则模块",
          systemClassify: "车险管理模块"
        },
        {
          windowName: "车险费率管理",
          systemClassify: "车险费率管理模块"
        },
        {
          windowName: "核保规则模块",
          systemClassify: "车险管理模块"
        },
        {
          windowName: "车险费率管理",
          systemClassify: "车险费率管理模块"
        },
        {
          windowName: "核保规则模块",
          systemClassify: "车险管理模块"
        },
        {
          windowName: "车险费率管理",
          systemClassify: "车险费率管理模块"
        },
        {
          windowName: "核保规则模块",
          systemClassify: "车险管理模块"
        },
        {
          windowName: "车险费率管理",
          systemClassify: "车险费率管理模块"
        }
      ],
      dialogTableVisible: false,
      radio: 3,
      dialogTableVisible1: false,
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
      textarea: "",
      deploy:[
        {
          windowName:'职级定义配置编辑窗体',
          remark:'编辑公司的职级信息'
        }
      ],
      dialogTableVisible2:false,
      options1:[
        {
          value:'xitongtushi',
          label:'系统图示'
        }
      ],
      value1:'',
      dialogTableVisible3:false,
      dialogTableVisible4:false,
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
      this.$refs.addItems.style.color = "black";
      this.$refs.remove.style.color = "black";
      this.$refs.reName.style.color = "black";
      this.$refs.changePicture.style.color = "black";
      this.$refs.edit.style.color = "black";
      this.$refs.useMoudle.style.color = "black";
      this.$refs.classify.style.color = "black";
      if (node.label == "系统模块管理") {
        this.$refs.remove.style.color = "#ddd";
        this.$refs.reName.style.color = "#ddd";
        this.$refs.changePicture.style.color = "#ddd";
        this.$refs.edit.style.color = "#ddd";
        this.$refs.useMoudle.style.color = "#ddd";
      } else if (new RegExp("^<.*$").test(node.label)) {
        this.$refs.changePicture.style.color = "#ddd";
        this.$refs.classify.style.color = "#ddd";
      } else {
        this.$refs.addItems.style.color = "#ddd";
        this.$refs.useMoudle.style.color = "#ddd";
        this.$refs.classify.style.color = "#ddd";
      }
      menu.style.visibility = "visible";
    },
    mouseOver(event) {
      if (this.$refs.addItems.style.color == "black") {
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
      if (this.$refs.changePicture.style.color == "black") {
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
      this.$refs.addWindow.style.color == "black";
      this.$refs.newRemove.style.color == "black";
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
      this.$refs.addWindow.style.color == "black";
      this.$refs.newRemove.style.color == "#ddd";
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
      if (this.$refs.classify.style.color == "black") {
        this.dialogFormVisible = true;
      }
    },
    useMoudle() {
      if (this.$refs.useMoudle.style.color == "black") {
        this.dialogFormVisible1 = true;
      }
    },
    edit() {
      if (this.$refs.edit.style.color == "black") {
        this.dialogFormVisible2 = true;
      }
    },
    fieldsetRemark(row, column, cell, event) {
      // console.log(row[column.property]);
      document.getElementById("fieldsetRemark").innerHTML =
        row[column.property];
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    selectChange(e){
      console.log('this.value1',this.value1);
      console.log('e',e);
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
.el-select {
  width: 200px;
}
textarea.el-textarea__inner {
  width: 200px;
}
fieldset {
  padding: 10px 20px;
}
.line {
  margin-bottom: 10px;
}
.picture{
  width:100%;
  padding:10px;
}
.picture{
  margin-top:10px;
  width:100%;
  height:200px;
  font-size:100px;
  overflow:auto;
  border:1px solid #ddd;
  padding:20px;
  i{
    margin-right:10px;
    color:aqua;
  }
}
.success{
  // width:100%;
  
  margin:10px 20px;
  overflow:auto;
}
.success .info{
  border:1px solid #ddd;
  height:250px;
}
.success div{
  margin-bottom:10px;
  &:first-of-type{
    margin-top:10px;
  }&:last-of-type{
    margin-bottom:0;
  }
}
</style>