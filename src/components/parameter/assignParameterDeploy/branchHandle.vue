<!-- 权限模组配置定义 -->
<template>
  <div id="main" @click="mainClick">
    <div id="parameter">
      <header>
        <dl>
          <dt>分支协作机构管理</dt>
        </dl>
      </header>
      <div id="left" @contextmenu.prevent="showMenu">
        <el-tree
          :data="data"
          :props="defaultProps"
          @node-click="handleNodeClick"
          highlight-current
          @node-contextmenu="showMenu"
        ></el-tree>
      </div>
      <div id="right" @contextmenu.prevent="showMenu">
        <el-table :data="tableData" style="width: 100%" border @row-contextmenu="showMenu">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </div>
      <!--自定义右键菜单-->
      <div id="menu" class="skin">
        <ul id="ul">
          <li @click="add" id="addItems">
            <!-- <strong>添加一级节点/分支机构</strong> -->
            添加子级节点 / 部门
          </li>
          <li @click="refresh">刷新</li>
          <li id="delete" @click="Delete">删除</li>
          <li @click="property">属性</li>
        </ul>
      </div>
      <el-dialog title="公司信息" :visible.sync="dialogFormVisible">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="主要信息" name="first">
            <div>
              <header>
                <strong>
                  公司名称：
                  <span>合翔保险经纪有限公司</span>
                </strong>
              </header>
              <section>
                <div>简称</div>
                <div>营业执照</div>
                <div>组织机构代码</div>
                <div>法人代表</div>
              </section>
            </div>
          </el-tab-pane>
          <el-tab-pane label="营业" name="second">
            <fieldset>
              <legend>营业内容</legend>
              <div>代理国内外人身保险商品</div>
            </fieldset>
          </el-tab-pane>
          <el-tab-pane label="联系" name="third">
            <fieldset>
              <legend>联系方式</legend>
              <div>代理网址</div>
              <div>代表邮箱</div>
              <div>
                代表电话：
                <span>0532-85739287</span>
              </div>
              <div>
                代表传真：
                <span>0532-85780870</span>
              </div>
            </fieldset>
          </el-tab-pane>
        </el-tabs>

        <div slot="footer" class="dialog-footer">
          <el-button type="warning" @click="dialogFormVisible = false">关 闭</el-button>
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
          label: "合翔保险经纪有限公司",
          children: [
            {
              label: "安徽分公司",
              children: [
                {
                  label: "安徽营销部"
                },
                {
                  label: "安徽运营部"
                }
              ]
            },
            {
              label: "北京分公司",
              children: [
                {
                  label: "北京营销部"
                },
                {
                  label: "北京运营部"
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
      dialogFormVisible: false,
      formLabelWidth: "120px",
      activeName2: "first"
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
      var evt = window.event || arguments[0];
      var left = document.getElementById("left");
      var menu = document.getElementById("menu");
      //   //   menu.style.top = data.clientX+"px";
      //   //   menu.style.left = data.clientY+"px";
      //   /*获取当前鼠标右键按下后的位置，据此定义菜单显示的位置*/
      //   var rightedge = left.clientWidth - evt.clientX;
      //   var bottomedge = left.clientHeight - evt.clientY;
      //   /*如果从鼠标位置到容器右边的空间小于菜单的宽度，就定位菜单的左坐标（Left）为当前鼠标位置向左一个菜单宽度*/
      //   if (rightedge < menu.offsetWidth)
      //     menu.style.left =
      //       left.scrollLeft + evt.clientX - menu.offsetWidth + "px";
      //   /*否则，就定位菜单的左坐标为当前鼠标位置*/
      //   else
      //     menu.style.left = left.scrollLeft + evt.clientX + "px";
      //   /*如果从鼠标位置到容器下边的空间小于菜单的高度，就定位菜单的上坐标（Top）为当前鼠标位置向上一个菜单高度*/
      //   if (bottomedge < menu.offsetHeight)
      //     menu.style.top =
      //       left.scrollTop + evt.clientY - menu.offsetHeight + "px";
      //   /*否则，就定位菜单的上坐标为当前鼠标位置*/
      //   else
      //     menu.style.top = left.scrollTop + evt.clientY + "px";
      menu.style.top = evt.pageY - 60 + "px";
      menu.style.left = evt.pageX - 200 + "px";
      /*设置菜单可见*/
      if (node != undefined) {
        //node不为undefind说明右键的元素为菜单元素或者table
        if (node.label == "合翔保险经纪有限公司") {
          //右键的是树根节点
          $("#addItems")[0].innerHTML = "添加一级节点 / 分支机构";
          $("#delete").hide();
        } else {
          //为table右键或者树根的子节点（包括孙子节点，即叶子节点）
          node.cancelBubble = true; //取消事件冒泡
          if (node.label == null) {
            //表示右键的是table，只有table右键有preventDefault方法，树列表没有
            node.preventDefault();
          }
          $("#addItems")[0].innerHTML = "添加子级节点 / 部门";
          $("#delete").show();
        }
      } else {
        $("#addItems")[0].innerHTML = "添加一级节点 / 分支机构";
        $("#delete").hide();
      }
      menu.style.visibility = "visible";
    },
    //鼠标左击使得右击的菜单消失
    mainClick() {
      var menu = document.getElementById("menu");
      menu.style.visibility = "hidden";
    },
    add() {
      console.log($("#addItems")[0].innerHTML);
      if ($("#addItems")[0].innerHTML == "添加一级节点 / 分支机构") {
        this.$router.push({ path: "/user/addFirstNode" });
      } else {
        this.$router.push({ path: "/user/addChildNode" });
      }
    },
    refresh() {
      location.reload("GET");
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    Delete() {
      alert("删除");
    },
    property() {
      if ($("#addItems")[0].innerHTML == "添加一级节点 / 分支机构") {
        this.dialogFormVisible = true;
      } else {
        this.$router.push({ path: "/user/addFirstNode" });
      }
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../../style/reset.css";
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
    height: calc(100vh - 200px);
    border: 1px solid #ddd;
    overflow: auto;
  }
  #right {
    position: absolute;
    top: 40px;
    left: 200px;
    display: inline-block;
    width: 67vw;
    height: calc(100vh - 200px);
    border: 1px solid rgb(233, 223, 223);
    overflow: auto;
  }
  #menu ul {
    position: absolute;
    float: left;
    border: 1px solid #979797;
    background: #f1f1f1;
    padding: 2px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
    width: 230px;
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
}
</style>