<!-- 改密 -->
<template>
  <div class="page">
    <header>
      <dl>
        <dt>更改我的密码</dt>
        <dd>使用者密码变更，变更的密码将在再次登入后使用！</dd>
      </dl>
    </header>
    <form
      action=""
      method=""
    >
    <div class="row policyNumber">
          <div class="title">
            <span>旧密码</span>
          </div>
           <el-input v-model="claimOrderNum" placeholder="请输入旧密码" size="mini" style="width:250px"></el-input>
        </div>
      <fieldset>
        <legend>具体操作</legend>
        <div class="row policyNumber">
          <div class="title">
            <span>新密码</span>
          </div>
         <el-input v-model="claimOrderNum" placeholder="请输入新密码" size="mini" style="width:250px"></el-input>
        </div>
        <div class="row policyNumber">
          <div class="title">
            <span>再次确认一次</span>
          </div>
          <el-input v-model="claimOrderNum" placeholder="请输入新密码" size="mini" style="width:250px"></el-input>
          
        </div>
        
      </fieldset>

       <div class="oprateBtn">
            <el-button
              type="primary"
              size="mini"
            >确定</el-button>
            
            <el-button
              type="success"
              size="mini"
            >取消</el-button>
          </div>
    </form>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      claimOrderNum:'',
      radio: "allComp",
      compDisabled1: true,
      compDisabled2: true,
      options1: [
        {
          value: "指定保险公司"
        },
        {
          value: "寿险公司"
        },
        {
          value: "产险公司"
        }
      ],
      insurCompany: "指定保险公司",
      options2: [
        {
          value: "不区分"
        },
        {
          value: "工银安盛(寿)"
        },
        {
          value: "光大永明(寿)"
        },
        {
          value: "和谐健康(产)"
        },
        {
          value: "恒大人寿(产)"
        }
      ],
      selectedComp: "",
      time: "dealDate",
      selectedTime1: "",
      selectedTime2: "",
      showDate: true,
      random: "institute",
      numberSel: "保单号码",
      numberSel1: "保单",
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
      ],
      numberOpt1: [
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
      ],
      options3: [
        {
          value: "不区分"
        },
        {
          value: "恩施分公司"
        },
        {
          value: "广西分公司"
        },
        {
          value: "湖南分公司"
        },
        {
          value: "江苏分公司"
        }
      ],
      selectedInstit: ["不区分"],
      insitDisabled: false,
      fcDisabled1: true,
      fcDisabled2: true,
      options4: [
        {
          value: "个人"
        },
        {
          value: "所辖团队"
        }
      ],
      valuerandom: "个人",
      input: "",
      // dialogVisible: false,
      outerVisible: false,
      innerVisible: false,
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
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      addrposit: "",
      form: {
        name: "",
        idcard: "",
        bianhao: ""
      },
      tableData: [],
     
      insureDan: ["不区分"],
      options5: [
        {
          value: "不区分"
        },
        {
          value: "预收件"
        },
        {
          value: "承保件"
        },
        {
          value: "契撤件"
        },
        {
          value: "停效件"
        },
        {
          value: "失效件"
        }
      ],
      huizhidan: "不区分",
      options6: [
        {
          value: "不区分"
        },
        {
          value: "未交"
        },
        {
          value: "已交"
        }
      ],
      value6: "",
      findOrderItem: {
        company: "不区分",
        date: "受理日期：",
        random: "机构：",
        orderStaus: "保单状态、回执：全部"
      },
       value4: '',
    };
  },
  methods: {
    selectedRadio(value) {
      //如果选择的是第二项选择保险公司，则根据选择的保险公司选择向后台发送消息，
      //后台再根据选择的保险公司发送第二个select展示什么数据
      if (value !== "selectedComp") {
        this.compDisabled1 = true;
        this.compDisabled2 = true;
        this.insurCompany = "指定保险公司";
        this.selectedComp = "";
      } else if (value === "selectedComp") {
        this.compDisabled1 = false;
        this.compDisabled2 = false;
      }
    },
    //处理传过去的保险公司
    SelectComChange(value) {
      this.handleSelectChange(value);
      this.findOrderItem.company = "指定保险公司：";
      for (var i = 0, l = this.selectedComp.length; i < l; i++) {
        if (i == l - 1) {
          this.findOrderItem.company += this.selectedComp[i];
        } else {
          this.findOrderItem.company += this.selectedComp[i] + ",";
        }
      }
    },
    selectedTime(value) {
      if (value === "dealDate") {
        this.showDate = true;
        this.findOrderItem.date = "受理日期：";
      } else if (value === "dealMonth") {
        this.showDate = false;
        this.findOrderItem.date = "受理月份：";
      } else if (value === "countMonth") {
        this.showDate = false;
        this.findOrderItem.date = "绩效月份：";
      }
    },
    saveTime1() {
      this.findOrderItem.date += this.selectedTime1;
    },
    saveTime2() {
      this.findOrderItem.date += "至" + this.selectedTime2;
    },
    selectedRandom(value) {
      if (value === "institute") {
        this.insitDisabled = false;
        this.fcDisabled1 = true;
        this.fcDisabled2 = true;
        this.valuerandom = "个人";
      } else if (value === "fanchou") {
        this.insitDisabled = true;
        this.fcDisabled1 = false;
        this.fcDisabled2 = false;
        this.selectedInstit = ["不区分"];
        this.findOrderItem.random = "范畴：个人";
      }
    },
    //处理传过去的对象范围
    SelectJGChange(value) {
      this.handleSelectChange(value);
      this.findOrderItem.random = "机构：";
      for (var i = 0, l = this.selectedInstit.length; i < l; i++) {
        if (i == l - 1) {
          this.findOrderItem.random += this.selectedInstit[i];
        } else {
          this.findOrderItem.random += this.selectedInstit[i] + ",";
        }
      }
    },
    SelectFCChange() {
      this.findOrderItem.random = "范畴：";
      this.findOrderItem.random += this.valuerandom;
    },
    SelectOrderChange(value) {
      this.handleSelectChange(value);
      this.findOrderItem.orderStaus = "保单状态:";
      for (var i = 0, l = this.insureDan.length; i < l; i++) {
        if (i == l - 1) {
          this.findOrderItem.orderStaus += this.insureDan[i] + ";";
        } else {
          this.findOrderItem.orderStaus += this.insureDan[i] + ",";
        }
      }
      this.findOrderItem.orderStaus += "回执：";
      this.findOrderItem.orderStaus += this.huizhidan;
    },
    //  saveHuiZhi(){
    //     this.findOrderItem.orderStaus=''
    //  },
    handleSelectChange(value) {
      if (value[value.length - 1] == "不区分") {
        value.splice(0, value.length - 1);
      } else if (
        value.indexOf("不区分") != -1 &&
        value[value.length - 1] != "不区分"
      ) {
        value.splice(value.indexOf("不区分"), 1);
      }
    },
    linkToOrderData() {
      this.$router.push({
        path: "/user/neworderdata",
        query: { findOrderItem: this.findOrderItem }
      });
    },
    onSubmit() {
      console.log("submit!");
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    isClose() {
      console.log("是否要关闭弹框");
    }
    // formValidator(){
    //   return true;
    // }
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
  margin-top: 20px;
}
</style>
