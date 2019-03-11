<!-- 群组相应权限管理 -->
<template>
  <div id="main" style="overflow-y:auto;" @click="hideMenu">
    <header>
      <dl>
        <dt>群组相应权限</dt>
      </dl>
    </header>
    <!-- <div style="width:100%;display:inline-block;"> -->
    <div style="display:inline-block;">
      <el-table
        :data="tableData1"
        id="tableData1"
        style="height:85vh;overflow:scroll;"
        border
        @header-contextmenu="showMenu"
        @row-contextmenu="showMenu"
      >
        <el-table-column prop="date" label="域用户登录默认组" width="250"></el-table-column>
      </el-table>
    </div>
    <div style="display:inline-block;width:calc(100% - 270px);" @contextmenu.prevent="showMenu3">
      <el-table
        :data="tableData2"
        style="width:100%;height:85vh;margin-left:10px;"
        border
        @header-contextmenu="showMenu2"
        @row-contextmenu="showMenu2"
      >
        <el-table-column prop="date" label="域用户登录默认组"></el-table-column>
      </el-table>
    </div>
    <!-- </div> -->
    <ul id="ul1">
      <li id="addUserGroup" @click="dialogFormVisible=true">新增使用者群组</li>
      <li id="RemoveUserGroup" @click="dialogVisible = true">移除使用者群组</li>
    </ul>

    <!-- 新增使用者群组弹出对话框 -->
    <el-dialog title="编辑" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="组名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">确 定</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>

    <!-- 移除使用者群组弹出对话框 -->
    <el-dialog title="警告" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>你确定要删除吗?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <ul id="ul2">
      <li id="addauthorityGroup" @click="dialogTableVisible = true">新增权限模组</li>
      <li id="Remove" @click="dialogVisible2 = true">移除</li>
    </ul>
    <ul id="ul3">
      <li id="addauthorityGroup3" @click="dialogTableVisible = true">新增权限模组</li>
      <li id="Remove3" style="color:#ddd;">移除</li>
    </ul>

    <!-- 新增权限模组弹出对话框 -->
    <el-dialog title="加入群组权限模组 / 浏览已经定义的权限模组" :visible.sync="dialogTableVisible">
      <el-table :data="gridData" border height="300">
        <el-table-column property="date" label="权限模组名称"></el-table-column>
      </el-table>
      <fieldset style="height:100px;margin:10px 0px;">
        <legend>说明</legend>
      </fieldset>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">关 闭</el-button>
        <el-button type="primary" @click="dialogTableVisible = false">加 入</el-button>
      </div>
    </el-dialog>

    <!-- 移除弹出对话框 -->
    <el-dialog title="警告" :visible.sync="dialogVisible2" width="30%" :before-close="handleClose">
      <span>你确定要删除吗?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData1: [
        {
          date: "2016-05-02"
        },
        {
          date: "2016-05-04"
        },
        {
          date: "2016-05-01"
        },
        {
          date: "2016-05-03"
        }
      ],
      tableData2: [
        {
          date: "2016-05-02"
        },
        {
          date: "2016-05-04"
        },
        {
          date: "2016-05-01"
        },
        {
          date: "2016-05-03"
        }
      ],
      dialogFormVisible: false,
      form: {
        name: ""
      },
      formLabelWidth: "120px",
      dialogVisible: false,
      gridData: [
        {
          date: "2016-05-02"
        },
        {
          date: "2016-05-02"
        }
      ],
      dialogTableVisible: false,
      dialogVisible2: false
    };
  },

  components: {},

  computed: {},

  methods: {
    /*显示菜单*/
    showMenu(data, node) {
      // console.log(data);
      $("#ul2")[0].style.visibility = "hidden";
      $("#ul3")[0].style.visibility = "hidden";
      node.preventDefault();
      var evt = window.event || arguments[0];
      var ul1 = document.getElementById("ul1");
      ul1.style.top = evt.pageY - 25 + "px";
      ul1.style.left = evt.pageX - 222 + "px";
      /*设置菜单可见*/
      ul1.style.visibility = "visible";
    },
    showMenu2(data, node) {
      // console.log(data);
      $("#ul1")[0].style.visibility = "hidden";
      $("#ul3")[0].style.visibility = "hidden";
      node.preventDefault();
      var evt = window.event || arguments[0];
      var ul1 = document.getElementById("ul2");
      ul1.style.top = evt.pageY - 25 + "px";
      ul1.style.left = evt.pageX - 222 + "px";
      /*设置菜单可见*/
      node.cancelBubble = true;
      ul2.style.visibility = "visible";
    },
    showMenu3(data, node) {
      // console.log(data);
      $("#ul2")[0].style.visibility = "hidden";
      $("#ul3")[0].style.visibility = "hidden";
      var evt = window.event || arguments[0];
      var ul1 = document.getElementById("ul3");
      ul3.style.top = evt.pageY - 25 + "px";
      ul3.style.left = evt.pageX - 222 + "px";
      /*设置菜单可见*/
      ul3.style.visibility = "visible";
    },
    hideMenu() {
      $("#ul1")[0].style.visibility = "hidden";
      $("#ul2")[0].style.visibility = "hidden";
      $("#ul3")[0].style.visibility = "hidden";
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../../../style/reset.css";
#main {
  position: relative;
  height: 100%;
  padding: 0px 30px 30px 30px;
}

#ul1 {
  position: absolute;
  float: left;
  border: 1px solid #979797;
  background: #f1f1f1;
  padding: 2px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
  width: 170px;
  visibility: hidden;
  overflow: hidden;
}
#ul1 li {
  clear: both;
  height: 24px;
  cursor: pointer;
  line-height: 24px;
  white-space: nowrap;
  padding: 0 30px;
  width: 100%;
  display: inline-block;
}
#ul1 li:hover {
  background: #e6edf6;
  border: 1px solid #b4d2f6;
}
#ul2 {
  position: absolute;
  float: left;
  border: 1px solid #979797;
  background: #f1f1f1;
  padding: 2px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
  width: 170px;
  visibility: hidden;
  overflow: hidden;
}
#ul2 li {
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
#ul3 {
  position: absolute;
  float: left;
  border: 1px solid #979797;
  background: #f1f1f1;
  padding: 2px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
  width: 170px;
  visibility: hidden;
  overflow: hidden;
}
#ul3 li {
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
</style>