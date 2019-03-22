<!-- 续期应收自动化作业 -->
<template>
  <div style="height:100%">
    <el-tabs v-model="activeTab" type="card">
      <!-- @tab-click="handleClick" -->
      <!--这个是tabs标签页-->
      <el-tab-pane label="查询" name="query">
        <!--这个指代的是标签的每一项-->
        <div class="tableContent">
          <form>
            <div>
              <div class="title">分支机构</div>
              <div class="content">
                <el-checkbox
                  v-model="branchCheck"
                  class="check"
                  v-on:change="branchIsChecked=!branchIsChecked"
                ></el-checkbox>
                <el-select
                  size="mini"
                  v-model="branchSelected"
                  multiple
                  collapse-tags
                  placeholder="请选择"
                  @change="handleSelectedChange"
                  v-bind:disabled="!branchIsChecked"
                  id="branchSelected"
                >
                  <el-option v-for="item in branchOpt" :key="item.value" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>

            <div>
              <div class="title">保险公司</div>
              <div class="content">
                <el-checkbox
                  v-model="companyCheck"
                  class="check"
                  @change="comAndInsurIsSelected=!comAndInsurIsSelected"
                ></el-checkbox>
                <el-select
                  size="mini"
                  v-model="companySelected"
                  collapse-tags
                  placeholder="请选择"
                  v-bind:disabled="!comAndInsurIsSelected"
                >
                  <el-option v-for="item in companyOpt" :key="item.value" :value="item.value"></el-option>
                </el-select>
                <el-select
                  size="mini"
                  v-model="insuranceSelected"
                  collapse-tags
                  style="margin-left: 10px;"
                  placeholder="请选择"
                  v-bind:disabled="!comAndInsurIsSelected"
                >
                  <el-option v-for="item in insuranceOpt" :key="item.value" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>

            <div>
              <div class="title">
                <el-select size="mini" v-model="monthSelected" class="monthSelecte">
                  <el-option v-for="item in monthOpt" :key="item.value" :value="item.value"></el-option>
                </el-select>
              </div>
              <div class="content">
                <el-checkbox v-model="monthCheck" class="check" checked disabled></el-checkbox>
                <el-date-picker
                  size="mini"
                  v-model="date1"
                  type="month"
                  placeholder="开始日期"
                  :picker-options="pickerOptions0"
                  style="width:200px"
                ></el-date-picker>&nbsp;&nbsp;至&nbsp;&nbsp;
                <el-date-picker
                  size="mini"
                  v-model="date2"
                  type="month"
                  placeholder="结束日期"
                  :picker-options="pickerOptions1"
                  style="width:200px"
                ></el-date-picker>
              </div>
            </div>

            <div>
              <div class="title"></div>
              <div class="content">
                <div style="margin-left:20px">交费年期</div>
                <el-input-number
                  v-model="payPeriod"
                  controls-position="right"
                  :min="1"
                  :max="10"
                  size="mini"
                  style="margin-left:10px"
                ></el-input-number>
              </div>
            </div>

            <div>
              <div class="title">交费入账</div>
              <div class="content">
                <el-checkbox
                  v-model="payAcountCheck"
                  class="check"
                  @change="payAcountIsSelected=!payAcountIsSelected"
                ></el-checkbox>
                <el-select
                  size="mini"
                  collapse-tags
                  v-model="isAcountSelected"
                  v-bind:disabled="!payAcountIsSelected"
                >
                  <el-option v-for="item in isAcountOpt" :key="item.value" :value="item.value"></el-option>
                </el-select>&nbsp;&nbsp;
                <el-checkbox
                  v-model="fromDateCheck"
                  class="check"
                  v-bind:disabled="!payAcountIsSelected"
                  @change="fromDateIsSelected=!fromDateIsSelected"
                ></el-checkbox>
                <div>距应收日期</div>
                <el-select
                  size="mini"
                  collapse-tags
                  v-model="isMoreSelected"
                  v-bind:disabled="!fromDateIsSelected"
                >
                  <el-option v-for="item in isMoreOpt" :key="item.value" :value="item.value"></el-option>
                </el-select>
                <el-select
                  size="mini"
                  collapse-tags
                  v-model="numDaysSelected"
                  v-bind:disabled="!fromDateIsSelected"
                >
                  <el-option v-for="item in numDaysOpt" :key="item.value" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>

            <div>
              <div class="title">期交方式缴次</div>
              <div class="content">
                <el-checkbox
                  v-model="payAndTimesCheck"
                  collapse-tags
                  class="check"
                  @change="payAndTimeIsSelected=!payAndTimeIsSelected"
                ></el-checkbox>
                <el-select
                  size="mini"
                  collapse-tags
                  v-model="payTypeSelected"
                  v-bind:disabled="!payAndTimeIsSelected"
                >
                  <el-option v-for="item in payTypeOpt" :key="item.value" :value="item.value"></el-option>
                </el-select>&nbsp;&nbsp;
                <el-checkbox
                  v-model="timesCheck"
                  class="check"
                  v-bind:disabled="!payAndTimeIsSelected"
                  @change="timesCheckIsSelected=!timesCheckIsSelected"
                ></el-checkbox>
                <div>缴次</div>
                <el-input-number
                  v-model="year"
                  controls-position="right"
                  :min="1"
                  :max="10"
                  size="mini"
                  v-bind:disabled="!timesCheckIsSelected"
                ></el-input-number>
                <div>年</div>
                <el-input-number
                  v-model="times"
                  controls-position="right"
                  :min="1"
                  :max="10"
                  size="mini"
                  v-bind:disabled="!timesCheckIsSelected"
                ></el-input-number>
                <div>次</div>
              </div>
            </div>

            <div>
              <div class="title">保单号码</div>
              <div class="content">
                <el-checkbox
                  v-model="insuranceNumberCheck"
                  class="check"
                  @change="insuranceNumberIsSelected=!insuranceNumberIsSelected"
                ></el-checkbox>
                <el-input
                  size="mini"
                  v-model="insuranceNumberInput"
                  style="width:200px"
                  v-bind:disabled="!insuranceNumberIsSelected"
                ></el-input>
              </div>
            </div>

            <fieldset>
              <legend>高级选项</legend>
              <div>
                <div class="title">收费联系住址</div>
                <div class="content">
                  <el-checkbox
                    v-model="addressCheck"
                    class="check"
                    @change="addressIsSelected=!addressIsSelected"
                  ></el-checkbox>
                  <el-select
                    size="mini"
                    collapse-tags
                    v-model="addressSelected"
                    v-bind:disabled="!addressIsSelected"
                  >
                    <el-option v-for="item in addressOpt" :key="item.value" :value="item.value"></el-option>
                  </el-select>
                  <el-input
                    size="mini"
                    v-model="addressInput"
                    style="width:150px"
                    v-bind:disabled="!addressIsSelected"
                  ></el-input>
                </div>
              </div>

              <div>
                <div class="title">收费联系邮编</div>
                <div class="content">
                  <el-checkbox
                    v-model="emailCheck"
                    class="check"
                    @change="emailIsSelected=!emailIsSelected"
                  ></el-checkbox>
                  <el-select
                    size="mini"
                    v-model="emailSelected"
                    collapse-tags
                    v-bind:disabled="!emailIsSelected"
                  >
                    <el-option v-for="item in emailOpt" :key="item.value" :value="item.value"></el-option>
                  </el-select>
                  <el-input
                    size="mini"
                    v-model="emailInput"
                    style="width:150px"
                    v-bind:disabled="!emailIsSelected"
                  ></el-input>
                </div>
              </div>

              <div>
                <div class="title">承揽人离线</div>
                <div class="content">
                  <el-checkbox
                    v-model="operatorCheck"
                    class="check"
                    @change="operatorIsSelected=!operatorIsSelected"
                  ></el-checkbox>
                  <el-select
                    size="mini"
                    collapse-tags
                    v-model="operatorSelected"
                    v-bind:disabled="!operatorIsSelected"
                  >
                    <el-option v-for="item in operatorOpt" :key="item.value" :value="item.value"></el-option>
                  </el-select>
                </div>
              </div>

              <div>
                <div class="title">承揽人A/B/C</div>
                <div class="content">
                  <el-checkbox
                    v-model="whichOperatorCheck"
                    class="check"
                    @change="whichOperatorIsSelected=!whichOperatorIsSelected"
                  ></el-checkbox>
                  <el-select
                    size="mini"
                    collapse-tags
                    v-model="alphabetSelected"
                    v-bind:disabled="!whichOperatorIsSelected"
                  >
                    <el-option v-for="item in alphabetOpt" :key="item.value" :value="item.value"></el-option>
                  </el-select>
                  <el-select
                    size="mini"
                    collapse-tags
                    v-model="nameOrCodeSelected"
                    style="width:150px"
                    v-bind:disabled="!whichOperatorIsSelected"
                  >
                    <el-option v-for="item in nameOrCodeOpt" :key="item.value" :value="item.value"></el-option>
                  </el-select>
                  <el-input
                    size="mini"
                    v-model="nameOrCodeInput"
                    style="width:150px"
                    v-bind:disabled="!whichOperatorIsSelected"
                  ></el-input>
                </div>
              </div>

              <div>
                <div class="title">D</div>
                <div class="content">
                  <el-checkbox v-model="DCheck" class="check" @change="DIsSelected=!DIsSelected"></el-checkbox>
                  <el-select size="mini" v-model="DSelected" collapse-tags v-bind:disabled="!DIsSelected">
                    <el-option v-for="item in DOpt" :key="item.value" :value="item.value"></el-option>
                  </el-select>
                  <el-input
                    size="mini"
                    v-model="DInput"
                    style="width:150px"
                    v-bind:disabled="!DIsSelected"
                  ></el-input>
                </div>
              </div>

              <div>
                <div class="title">E</div>
                <div class="content">
                  <el-checkbox v-model="ECheck" class="check" @change="EIsSelected=!EIsSelected"></el-checkbox>
                  <el-select size="mini" v-model="ESelected" collapse-tags v-bind:disabled="!EIsSelected">
                    <el-option v-for="item in EOpt" :key="item.value" :value="item.value"></el-option>
                  </el-select>
                  <el-input
                    size="mini"
                    v-model="EInput"
                    style="width:150px"
                    v-bind:disabled="!EIsSelected"
                  ></el-input>
                </div>
              </div>
            </fieldset>
            <el-button type="primary" class="button" @click="changeTabPane">确定</el-button>
          </form>
        </div>
      </el-tab-pane>

      <el-tab-pane label="列表" name="listTabPane">
        <div class="tabContent">
          <div class="total">
            <el-button type="primary" plain size="mini">刷新</el-button>&nbsp;&nbsp;&nbsp;
            <span>总保费:</span> &nbsp;
            <span>0</span>
          </div>
          <div class="listTab">
            <el-table
              size="mini"
              height="480"
              border
              ref="singleTable"
              :data="tableData"
              highlight-current-row
              style="width: 95%"
              @current-change="handleCurrentChange"
            >
              <el-table-column type="index" width="50"></el-table-column>
              <el-table-column type="selection" width="55">选择</el-table-column>
              <el-table-column property="date" label="日期" width="120"></el-table-column>
              <el-table-column property="name" label="姓名" width="120"></el-table-column>
              <el-table-column property="address" width="300px" label="地址"></el-table-column>
              <el-table-column property="telephone" label="电话" width="120"></el-table-column>
              <el-table-column property="age" label="年龄" width="60"></el-table-column>
              <el-table-column property="sex" label="性别" width="60px"></el-table-column>
              <el-table-column property="height" label="身高" width="60"></el-table-column>
              <el-table-column property="weight" label="体重" width="60"></el-table-column>
              <el-table-column property="educationalBackground" label="教育背景"></el-table-column>
            </el-table>
          </div>
          <div class="bottomLeftButton">
            <el-button type="primary" plain>导出到Excel</el-button>
            <el-button type="primary" plain>批量生成保单记录</el-button>
          </div>
          <div class="bottomRightButton">
            <el-button type="primary" plain>保单查看</el-button>
            <el-button type="primary" plain>续期交费记录</el-button>
            <el-button type="primary" plain>应收查看</el-button>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "query",
      branchOpt: [
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
        },
        {
          value: "荆门分公司"
        },
        {
          value: "辽宁分公司"
        },
        {
          value: "宁夏分公司"
        },
        {
          value: "十堰分公司"
        },
        {
          value: "武昌分公司"
        },
        {
          value: "武汉分公司"
        },
        {
          value: "仙桃分公司"
        },
        {
          value: "咸宁分公司"
        },
        {
          value: "襄阳分公司"
        },
        {
          value: "宜昌分公司"
        },
        {
          value: "总部"
        }
      ],
      branchSelected: ["不区分"],
      branchCheck: this.branchIsChecked,
      branchIsChecked: false,
      companyOpt: [
        {
          value: "公司1"
        },
        {
          value: "公司2"
        },
        {
          value: "公司3"
        }
      ],
      companySelected: "公司1",
      companyCheck: false,
      insuranceOpt: [
        {
          value: "险种1"
        },
        {
          value: "险种2"
        },
        {
          value: "险种3"
        },
        {
          value: "险种4"
        },
        {
          value: "险种5"
        }
      ],
      insuranceSelected: "",
      comAndInsurIsSelected: false, //用来判断公司和险种是否可用
      monthOpt: [
        {
          value: "到期月份"
        },
        {
          value: "应收月份"
        }
      ],
      monthSelected: "到期月份",
      monthCheck: false,
      date1: "",
      date2: "",
      pickerOptions0: {
        disabledDate: time => {
          this.date2 = "";
          return false;
        }
      },
      pickerOptions1: {
        disabledDate: time => {
          return this.date1 == "" ? true : time.getTime() < this.date1;
        }
      },

      payPeriod: 1,
      isAcountOpt: [
        {
          value: "已入账"
        },
        {
          value: "未入账"
        }
      ],
      isAcountSelected: "已入账",
      payAcountCheck: false,
      payAcountIsSelected: false, //判断交费入账后的复选框是否选中
      fromDateIsSelected: false, //判断距应收日期前的复选框是否选中
      fromDateCheck: false,
      isMoreOpt: [
        {
          value: "超过"
        },
        {
          value: "不超过"
        }
      ],
      isMoreSelected: "不超过",
      numDaysOpt: [
        {
          value: "30天"
        },
        {
          value: "45天"
        },
        {
          value: "60天"
        },
        {
          value: "三个月"
        },
        {
          value: "四个月"
        },
        {
          value: "五个月"
        },
        {
          value: "半年"
        },
        {
          value: "一年"
        },
        {
          value: "两年"
        }
      ],
      numDaysSelected: "30天",
      payTypeOpt: [
        {
          value: "年交"
        },
        {
          value: "半年交"
        },
        {
          value: "季交"
        },
        {
          value: "月交"
        },
        {
          value: "趸交"
        }
      ],
      payTypeSelected: "年交",
      payAndTimesCheck: false,
      payAndTimeIsSelected: false, //用来判断期交方式缴次是否可用
      year: 1,
      times: 1,
      timesCheck: false,
      timesCheckIsSelected: false, //判断期交方式缴次后的缴次前的复选框的状态，及后面的两个计数器是否可用
      insuranceNumberCheck: false,
      insuranceNumberIsSelected: false, //判断保单号码输入框是否可用
      insuranceNumberInput: "%",
      addressOpt: [
        {
          value: "投保人住址"
        },
        {
          value: "被保人住址"
        }
      ],
      addressCheck: false,
      addressIsSelected: false, //用来动态判断收费联系住址复选框后面的表单是否可用
      addressSelected: "投保人住址",
      addressInput: "%",
      emailOpt: [
        {
          value: "投保人住址邮箱"
        },
        {
          value: "被保人住址邮箱"
        }
      ],
      emailSelected: "投保人住址邮箱",
      emailCheck: false,
      emailIsSelected: false, //判断收费联系邮箱复选框后面的表单是否可用
      emailInput: "%",
      operatorOpt: [
        {
          value: "承揽人A"
        },
        {
          value: "承揽人B"
        },
        {
          value: "承揽人C"
        },
        {
          value: "保全员D"
        },
        {
          value: "收费员E"
        }
      ],
      operatorSelected: "承揽人A",
      operatorCheck: false,
      operatorIsSelected: false, //用来动态决定承揽人离线复选框后的表单是否可用
      alphabetOpt: [
        {
          value: "A"
        },
        {
          value: "B"
        },
        {
          value: "C"
        }
      ],
      alphabetSelected: "A",
      nameOrCodeOpt: [
        {
          value: "姓名"
        },
        {
          value: "代码"
        }
      ],
      nameOrCodeSelected: "姓名",
      nameOrCodeInput: "%",
      whichOperatorCheck: false,
      whichOperatorIsSelected: false, //用来动态决定承揽人A/B/C复选框后面的表单是否可用
      DOpt: [
        {
          value: "姓名"
        },
        {
          value: "代码"
        },
        {
          value: "离职"
        }
      ],
      DSelected: "姓名",
      DInput: "%",
      DCheck: false,
      DIsSelected: false, //用来动态决定D复选框后面的表单是否可用
      EOpt: [
        {
          value: "姓名"
        },
        {
          value: "代码"
        }
      ],
      ESelected: "姓名",
      EIsSelected: false, //用来动态决定E复选框后面的表单是否可用
      EInput: "%",
      ECheck: false,
      // 下面是列表一栏地数据
      tabChecked: false,
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          telephone: "13212345698",
          age: 24,
          sex: "boy",
          height: 175,
          weight: 69,
          educationalBackground: "college"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          telephone: "13212345698",
          age: 24,
          sex: "boy",
          height: 175,
          weight: 69,
          educationalBackground: "college"
        }
      ],
      multipleSelection: []
    };
  },

  components: {},

  computed: {},

  methods: {
    handleSelectedChange: function(value) {
      if (value[value.length - 1] == "不区分") {
        //如果点击的是不区分的选项，就将其他选项去除
        value.splice(0, value.length - 1);
      } else if (value.indexOf("不区分") != -1) {
        //点击的是其他选项，若是内部含有不区分的选项，就将不区分的选项去除,注意这里的indexOf的O是大写的，真是烦人
        value.splice(value.indexOf("不区分"), 1); //注意这里的indexOf的O是大写的，真是烦人
      }
    },
    // handleClick: function() {
    //   console.log("这个定义过了");
    // },
    getMonth: function(text) {
      alert($("#date1").val());
      // $("#date2").minDate=;
      // $("#date2").minDate=text;
    },
    handleCurrentChange: function() {
      //这个是用来监听列表的变化的
    },
    changeTabPane: function() {
      this.activeTab = "listTabPane";
    }
  }
};
</script>
<style lang='scss' scoped>
.title {
  display: inline-block;
  width: 200px;
  text-align: right;
  padding: 10px;
  .monthSelecte {
    width: 100px;
  }
}
.content {
  display: inline-block;
  div {
    display: inline-block;
  }
}
// .check {
//   margin-right: 10px;
// }
fieldset {
  border: solid 1px silver;
  padding: 5px 0px 10px 0px;
  margin: 5px 50px 5px 50px; //顺序为上、右、下、左
  .title {
    margin-left: -50px;
  }
}
.button {
  margin-left: 250px;
  margin-top: 0px;
  background-color: "blue";
  width: 80px;
  height: 33px;
}
// 下面的是列表栏地样式
.tabContent {
  position: relative;
}
.total {
  float: right;
  margin-right: 20px;
  margin-bottom: 20px;
}
.bottomLeftButton {
  position: fixed;
  bottom: 40px;
  left: 280px;
}
.bottomRightButton {
  position: fixed;
  bottom: 40px;
  right: 60px;
}
.listTab {
  overflow-y: scroll;
  margin-left: 40px;
  margin-right: 40px;
  width: 100%;
  height: 500px;
}
</style>