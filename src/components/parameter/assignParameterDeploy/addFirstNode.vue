<!-- 添加一级节点 / 分支机构 -->
<template>
  <div>
    <header>
      <div class="title">
        <span @click="goBack">
          <i class="el-icon-back"></i>
        </span>
        <span>添加一级节点 / 分支机构</span>
      </div>
    </header>
    <section>
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="节点属性" name="first">
          <div class="content">
            <fieldset>
              <legend>主分支信息</legend>
              <div class="line">
                <div class="left">类型 ：</div>
                <div class="right">
                  <el-select
                    size="mini"
                    v-model="typeSelected"
                    collapse-tags
                    placeholder="请选择"
                    @change
                  >
                    <el-option v-for="item in type" :key="item.value" :value="item.value"></el-option>
                  </el-select>
                </div>
              </div>
              <div class="line">
                <div class="left">代码：</div>
                <div class="right">
                  <el-input
                    size="mini"
                    placeholder="请输入内容"
                    style="width:200px"
                    v-model="code"
                    clearable
                  ></el-input>
                  <el-button type="info" plain size="mini">检查</el-button>
                </div>
              </div>
            </fieldset>
            <div id="behindFieldset">
              <div class="line">
                <div class="left">全称：</div>
                <div class="right">
                  <el-input
                    size="mini"
                    placeholder="请输入内容"
                    style="width:200px"
                    v-model="fullName"
                    clearable
                  ></el-input>
                </div>
              </div>
              <div class="line">
                <div class="left">显示简称：</div>
                <div class="right">
                  <el-input
                    size="mini"
                    placeholder="请输入内容"
                    style="width:200px"
                    v-model="shortName"
                    clearable
                  ></el-input>
                </div>
              </div>
              <div class="line">
                <div class="left">授权限制：</div>
                <div class="right">
                  <el-input
                    size="mini"
                    placeholder="请输入内容"
                    style="width:200px"
                    v-model="authorizationLimit"
                    clearable
                    disabled
                  ></el-input>
                </div>
              </div>
              <div class="line">
                <div class="left">保监局：</div>
                <div class="right">
                  <el-select
                    size="mini"
                    v-model="InsuranceRegulatoryBureau"
                    collapse-tags
                    placeholder="请选择"
                    @change
                  >
                    <el-option v-for="item in type" :key="item.value" :value="item.value"></el-option>
                  </el-select>
                </div>
              </div>
              <div class="line">
                <div class="left" style="vertical-align:top;">描述：</div>
                <div class="right">
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="textarea"
                    style=" width:200px;"
                  ></el-input>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="基本信息" name="second">
          <div class="content" id="basicInformation">
            <div class="line">
              <div class="left">电话：</div>
              <div class="right">
                <el-input
                  size="mini"
                  placeholder="请输入内容"
                  style="width:200px"
                  v-model="telephone"
                  clearable
                ></el-input>
              </div>
            </div>
            <div class="line">
              <div class="left">传真：</div>
              <div class="right">
                <el-input
                  size="mini"
                  placeholder="请输入内容"
                  style="width:200px"
                  v-model="fax"
                  clearable
                ></el-input>
              </div>
            </div>
            <div class="line">
              <div class="left">群组邮箱：</div>
              <div class="right">
                <el-input
                  size="mini"
                  placeholder="请输入内容"
                  style="width:200px"
                  v-model="email"
                  clearable
                ></el-input>
              </div>
            </div>
            <div class="line">
              <div class="left" style="vertical-align:top;">地址：</div>
              <div class="right">
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="address"
                  style=" width:200px;"
                ></el-input>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="联系人" name="third">
          <div class="content">
            <el-table @row-click="rowClick" border :data="tableData" highlight-current-row height='400' style="width: 95%;margin:30px;">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </div>
          <div id="tableBottom">
            <el-button type="primary" plain size="mini" @click="deleteRow">删除</el-button>
            <el-button type="primary" plain size="mini" @click="dialogFormVisible = true">添加</el-button>
            <el-dialog title="联系人信息" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" style="width:200px"></el-input>
                  <el-button @click="seniorSearch">高级查找</el-button>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth">
                  <el-input v-model="form.sex" autocomplete="off" style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="职级名称" :label-width="formLabelWidth">
                  <el-input v-model="form.rankName" autocomplete="off" style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth">
                  <el-input v-model="form.telephone" autocomplete="off" style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth">
                  <el-input v-model="form.email" autocomplete="off" style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="描述" :label-width="formLabelWidth">
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="form.describe"
                    style="width:200px"
                  ></el-input>
                </el-form-item>
                <el-form-item label="更新日期" :label-width="formLabelWidth">
                  <el-date-picker
                    v-model="form.date"
                    type="date"
                    placeholder="选择日期"
                    style="width:200px"
                  ></el-date-picker>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible = false">添 加</el-button>
                <el-button type="warning" @click="dialogFormVisible = false">取消</el-button>
              </div>
            </el-dialog>
          </div>
          <!-- 分支协作机构管理/添加一级节点、分支机构/联系人/添加/高级查找对话框（位置） -->
          <el-dialog title="位置" :visible.sync="dialogTableVisible">
            <linkmanMessage></linkmanMessage>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogTableVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
            </div>
          </el-dialog>
        </el-tab-pane>
      </el-tabs>
      <div id="button">
        <el-button type="primary" plain size="mini">确定</el-button>
        <el-button type="warning" plain size="mini" @click="goBack">取消</el-button>
        <el-button type="primary" plain size="mini">应用</el-button>
      </div>
    </section>
  </div>
</template>

<script>
import linkmanMessage from "./linkmanMessage";
export default {
  data() {
    return {
      activeName2: "first",
      typeSelected: "",
      type: [
        {
          value: "首期"
        },
        {
          value: "续期"
        }
      ],
      code: "",
      fullName: "",
      shortName: "",
      authorizationLimit: "未授权",
      InsuranceRegulatoryBureau: "",
      textarea: "",
      telephone: "",
      fax: "",
      email: "",
      address: "",
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
      form: {
        name: "",
        sex: "",
        rankName: "",
        telephone: "",
        email: "",
        describe: "",
        date: ""
      },
      formLabelWidth: "120px",
      dialogTableVisible: false,
      rowIndex:-1,//-1表示默认没有选中任何项
    };
  },

  components: {
    linkmanMessage
  },

  computed: {},

  methods: {
    goBack() {
      history.go(-1);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    seniorSearch() {
      this.dialogTableVisible = true;
    },
    rowClick(row){
      this.rowIndex=Array.indexOf(this.tableData,row);
      console.log('this.rowIndex',this.rowIndex);
    },
    deleteRow(){
      if(this.rowIndex!=-1){
        this.$confirm('确认删除该项吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(this.rowIndex,1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }else{
        this.$message('请选择要删除的项！');
      }
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
  position: relative;
}
.content {
  width: 100%;
  height: 100%;
}
fieldset {
  margin-right: 30px;
}

.left {
  display: inline-block;
  width: 200px;
  text-align: right;
  padding: 5px;
}
.right {
  display: inline-block;
  margin-bottom: 5px;
}
.line {
  margin-bottom: 20px;
}
#behindFieldset {
  margin-left: 30px;
}
#button {
  position: absolute;
  left: 400px;
  top: 570px;
  text-align: center;
}
#basicInformation {
  margin-top: 30px;
}
#tableBottom {
  float: right;
  margin-right: 35px;
}
</style>