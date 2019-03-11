<!-- 添加子级节点 / 部门 -->
<template>
  <div>
    <header>
      <div class="title">
        <span @click="goBack">
          <i class="el-icon-back"></i>
        </span>
        <span>添加子级节点 / 部门</span>
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
        <el-tab-pane label="部门领导" style="padding:30px;">
          <fieldset style="margin-left:0px;margin-right:0px;padding:10px 0px 20px 30px;">
            <legend>当前部门领导</legend>
            <span>姓名</span>
            <span>{{leaderName}}</span>
          </fieldset>
          <el-table :data="tableData" border stripe style="width: 100%;">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
          <el-button type="danger" class="rt">删除</el-button>
          <el-button type="primary" class="rt">新建</el-button>
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
        <el-tab-pane label="基本法" name="third" style="padding:30px;">
          <div class="rt" style="width:350px;">
            <span>佣金制度</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button type="primary">编辑</el-button>
          </div>
          <div id="BasicLaw"></div>
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
      leaderName: "小猪,现无"
    };
  },

  components: {},

  computed: {},

  methods: {
    goBack() {
      history.go(-1);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
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
.rt {
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom:20px;
}
#BasicLaw{
    clear:both;
    border:1px solid #ddd;
    height:300px;
    width:100%;
}
</style>