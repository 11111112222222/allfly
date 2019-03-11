<!-- 结算前保单明细预校 -->
<template>
  <div class="page">
    <header>
      <dl>
        <dt>继续率重新组织</dt>
      </dl>
    </header>
    <form action="" method="">
      <fieldset>
        <legend>明细</legend>
        <div class="row policyNumber">
          <div class="title">
            <span>分支机构</span>
          </div>
          <el-select size="mini" v-model="numberSel" placeholder="请选择">
            <el-option
              v-for="item in numberOpt"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="row policyNumber">
          <div class="title">
            <span>继续率月份</span>
          </div>

          <el-date-picker
            size="mini"
            v-model="value4"
            type="month"
            placeholder="选择月"
          >
          </el-date-picker>
        </div>
       
      </fieldset>
      <div class="inBtn">
        <el-button type="primary" size="mini" @click="jumpToQuery">继续率查询统计</el-button>
      </div>
      <div class="oprateBtn">
        <el-button type="primary" size="mini">重新计算</el-button>
        <el-button type="success" size="mini">取消</el-button>
      </div>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods:{
    jumpToQuery() {
     this.$router.push({path:'/user/ContinueQueryStatistics'})
    }
  },
  data() {
    return { 
      insurCompany: "指定保险公司",
      numberSel: "保单号码",
      numberSel1: "保单",
      input: "",
      value4: "",
      numberOpt: [
        {
          value: "选项1",
          label: "保单号码"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        }
      ]
    };
  },
  
  components: {}
};
</script>

<style scoped lang="scss">
.page {
  padding: 10px 30px 0 30px;
  // height:100%;
  height: 100%;
  overflow-y: scroll;
}
dt {
  font-size: 1.5em;
  color: #409eff;
}
dd {
  margin: 10px 0px 5px 20px;
}
fieldset {
  padding: 0.35em 0.625em 0.75em;
  margin: 0 2px;
  border: 1px solid #ebeef5;
}
legend {
  padding: 0.5em;
  border: 0;
  width: auto;
}
fieldset:first-child ul li,
fieldset:nth-child(2) div,
fieldset:nth-child(3) li {
  height: 30px;
  margin-top: 2px;
  line-height: 30px;
  text-align: middle;
}
.elradio {
  height: 28px;
  line-height: 28px;
}
fieldset:nth-child(4) span {
  margin-left: 10px;
}
.subutton {
  margin-bottom: 20px;
}
#btn {
  margin-top: 20px;
  width: 110px;
  height: 35px;
  background-color: #409eff;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 0 5px;
}
.find {
  margin-top: 5px;
  display: flex;
  flex-flow: row nowrap;
}
.elformitem {
  margin-bottom: 0px;
}
.findleft {
  width: 40%;
}
.findright {
  width: 60%;
  padding: 0 5px 0 10px;
}
.el-dialog__body {
  padding: 10px !important;
}
.title {
  display: inline-block;
  width: 15%;
  text-align: right;
  margin-right: 5px;
}
.row {
  margin-bottom: 10px;
}
.oprateBtn {
  float: right;
  margin-top: -10px;
  margin-right: 20px;
}
.inBtn {
  float: left;
  margin-top: 30px;
}
</style>
