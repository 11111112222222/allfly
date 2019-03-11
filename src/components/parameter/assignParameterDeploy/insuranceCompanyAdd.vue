<!-- 保险公司添加 -->
<template>
  <div id="main">
    <header>
      <dl>
        <dt class="el-icon-back" @click="goBack">保险公司添加</dt>
      </dl>
    </header>
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="基本信息" name="basicInfo">
        <div class="Line">
          <p>保险公司全名：</p>
          <el-input v-model="fullName" placeholder="请输入保险公司全名"></el-input>
          <el-radio v-model="radio" label="1">寿险公司</el-radio>
          <el-radio v-model="radio" label="2">产险公司</el-radio>
        </div>
        <div class="Line">
          <p>中文简称：</p>
          <el-input v-model="simplifiedChinese" placeholder="请输入中文简称"></el-input>
        </div>
        <div class="Line">
          <p>英文代号：</p>
          <el-input v-model="englishName" placeholder="请输入英文代号"></el-input>
        </div>
        <div class="Line">
          <p>所属省市/签发地：</p>
          <el-button type="primary" @click="dialogFormVisible = true">省市</el-button>
          <el-dialog title="地址选择" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="省 / 市" :label-width="formLabelWidth">
                <el-select v-model="form.province" placeholder="请选择活动区域">
                  <el-option label="湖北" value="shanghai"></el-option>
                  <el-option label="河南" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="市 / 县" :label-width="formLabelWidth">
                <el-select v-model="form.city" placeholder="请选择活动区域">
                  <el-option label="荆州" value="shanghai"></el-option>
                  <el-option label="沙洋" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>

          <el-input v-model="address" placeholder="请输入所属省市/签发地" style="width:500px;"></el-input>
        </div>
        <div class="Line">
          <p>注册营业地址：</p>
          <el-button type="primary" @click="dialogFormVisible = true">省市</el-button>
          <el-input v-model="registAddress" placeholder="请输入注册营业地址" style="width:500px;"></el-input>
        </div>
        <div class="Line">
          <p>联系电话：</p>
          <el-input v-model="telephone" placeholder="请输入联系电话："></el-input>
        </div>
        <div class="Line">
          <p>传真FAX：</p>
          <el-input v-model="fax" placeholder="请输入传真FAX"></el-input>
        </div>
        <div class="Line">
          <p>邮箱：</p>
          <el-input v-model="email" placeholder="请输入邮箱"></el-input>
        </div>
        <div class="Line">
          <p>网址：</p>
          <el-input v-model="url" placeholder="请输入网址"></el-input>
        </div>
        <div class="Line">
          <p>备注：</p>
          <el-input v-model="remark" placeholder="请输入备注" style="width:500px;"></el-input>
        </div>
        <div class="Line">
          <p>显示顺序：</p>
          <el-input v-model="displayOrder" placeholder="请输入显示顺序"></el-input>
        </div>
      </el-tab-pane>
      <el-tab-pane label="关联分支机构" name="list">
        <el-table :data="tableData" border style="width: 100%;" ref="multipleTable">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="name" label="一级分支"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="联系人信息" name="linkmanInfo">
        <el-table :data="tableData" border style="width: 100%;">
          <el-table-column prop="date" width="180" label="日期"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
        <div class="button">
          <div class="lf">
            <el-button type="warning">移除</el-button>
          </div>
          <div class="rt">
            <el-button type="primary">查看/编辑</el-button>
            <el-button type="primary" @click="dialogFormVisible1 = true">新增</el-button>
            <el-dialog title="保险公司联系人编辑" :visible.sync="dialogFormVisible1">
              <el-form :model="form1">
                <el-form-item label="联系人姓名" :label-width="formLabelWidth">
                  <el-input v-model="form1.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth">
                  <el-select v-model="form1.sex" placeholder="请选择活动区域">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="部门" :label-width="formLabelWidth">
                  <el-input v-model="form1.apartment" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="职级" :label-width="formLabelWidth">
                  <el-input v-model="form1.rank" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="职级内容" :label-width="formLabelWidth">
                  <el-input v-model="form1.rankContent" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth">
                  <el-input v-model="form1.telephone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话附注" :label-width="formLabelWidth">
                  <el-input v-model="form1.telephoneRemark" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="传真" :label-width="formLabelWidth">
                  <el-input v-model="form1.fax" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="传真附注" :label-width="formLabelWidth">
                  <el-input v-model="form1.faxRemark" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth">
                  <el-input v-model="form1.email" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
              </div>
            </el-dialog>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="文档/协议" name="file_protocol">
        <el-table :data="tableData" border style="width: 100%;">
          <el-table-column prop="date" width="180" label="部门"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
        <div class="button">
          <div class="lf">
            <el-button type="warning">移除</el-button>
          </div>
          <div class="rt">
            <el-button type="primary">查看/编辑</el-button>
            <el-button type="primary" @click="dialogFormVisible2 = true">新增</el-button>
            <el-dialog title="文档/协议 编辑页面" :visible.sync="dialogFormVisible2">
              <el-form :model="form2">
                <el-form-item label="文件名称" :label-width="formLabelWidth">
                  <el-input v-model="form2.fileName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="文档包含" :label-width="formLabelWidth">
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList"
                  >
                    <el-button size="small" type="primary">浏 览</el-button>
                  </el-upload>
                  <el-button type="primary" style="margin-top:10px;">下 载</el-button>
                </el-form-item>
                <el-form-item label="有效期间" :label-width="formLabelWidth">
                  <el-date-picker
                    v-model="form2.date"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  ></el-date-picker>
                </el-form-item>
                <el-form-item label="说明" :label-width="formLabelWidth">
                  <el-input v-model="form2.illustrate" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
              </div>
            </el-dialog>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div id="button">
      <div>
        <el-button type="primary">确定</el-button>
        <el-button type="warning">取消</el-button>
        <el-button type="primary">应用</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName2: "basicInfo",
      fullName: "",
      radio: "1",
      simplifiedChinese: "",
      englishName: "",
      address: "",
      registAddress: "",
      telephone: "",
      fax: "",
      email: "",
      url: "",
      remark: "",
      displayOrder: "0",
      tableData: [
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
        province: "",
        city: ""
      },
      formLabelWidth: "120px",
      dialogFormVisible1: false,
      form1: {
        name: "",
        sex: "",
        apartment: "",
        rank: "",
        rankContent: "",
        telephone: "",
        telephoneRemark: "",
        fax: "",
        faxRemark: "",
        email: ""
      },
      dialogFormVisible2: false,
      form2: {
        fileName: "",
        date: "",
        date2: "",
        illustrate: ""
      },
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleRemove(file, fileList) {
      //   console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
      this.form2.fileContain = file.name;
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      this.form2.fileContain = file.name;
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    goBack() {
      history.go(-1);
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../../style/reset.css";
#main {
  padding: 0 30px 30px 30px;
  header {
    margin-bottom: 10px;
    margin-left: -10px;
  }
  .Line {
    margin-top: 10px;
    margin-left: 20px;
    p {
      width: 200px;
      display: inline-block;
      text-align: right;
    }
    .el-input {
      width: 400px;
    }
  }
  .el-tab-pane {
    position: relative;
  }
  .el-table {
    height: 400px;
    overflow: auto;
  }
  #button {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    margin: 20px auto;
    text-align: center;
  }
  .button {
    margin-top: 10px;
  }
  .verticalTop {
    vertical-align: top;
  }
}
</style>