<!-- 逐笔核佣检查查看编辑 -->
<template>
  <div style="height:100%;position:relative;">
    <header>
      <div class="title">
        <span @click="goBack">
          <i class="el-icon-back"></i>
        </span>
        <span>逐笔核佣查看 / 编辑</span>
      </div>
    </header>
    <section>
      <table class="orderTable">
        <tr>
          <td class="title">计佣（绩）年月</td>
          <td>
            <el-date-picker size="mini" v-model="month" type="month" placeholder="选择月"></el-date-picker>
          </td>
          <td class="title">核发状态</td>
          <td>
            <el-select size="mini" v-model="checkStateSelect" placeholder="请选择">
              <el-option
                size="mini"
                v-for="item in checkState"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </td>
          <td class="title">发生月</td>
          <td>
            <el-date-picker size="mini" v-model="happenMonth" type="month" placeholder="选择月"></el-date-picker>
          </td>
        </tr>
        <tr>
          <td class="title">可过账（核佣）</td>
          <td>
            <el-checkbox v-model="checked">否</el-checkbox>
          </td>
          <td class="title">账目状态</td>
          <td>
            <el-select size="mini" v-model="AccountStateSelect" placeholder="请选择">
              <el-option
                size="mini"
                v-for="item in AccountState"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </td>
          <td>平衡月</td>
          <td>
            <el-date-picker size="mini" v-model="balanceMonth" type="month" placeholder="选择月"></el-date-picker>
          </td>
        </tr>
      </table>
      <table class="orderTable">
        <tr>
          <td>保单号码</td>
          <td>{{insuranceNumber}}</td>
          <td>相关单据/号码</td>
          <td>/</td>
          <td>投保人信息</td>
          <td>{{name}}</td>
        </tr>
        <tr>
          <td>交费型别</td>
          <td>
            <el-select size="mini" v-model="payTypeSelect" placeholder="请选择">
              <el-option
                size="mini"
                v-for="item in payType"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </td>
          <td>交费受理日期</td>
          <td>
            <el-date-picker size="mini" v-model="payDoTime" type="month" placeholder="选择月"></el-date-picker>
          </td>
          <td>年度缴次</td>
          <td>
            <el-input-number
              size="mini"
              v-model="year"
              controls-position="right"
              :min="1"
              :max="10"
            ></el-input-number>年
            <el-input-number
              size="mini"
              v-model="times"
              controls-position="right"
              :min="1"
              :max="10"
            ></el-input-number>次
          </td>
        </tr>
        <tr>
          <td>缴费方式/类别</td>
          <td>年交/银行划账</td>
          <td>缴费日期</td>
          <td>
            <el-date-picker size="mini" v-model="payTime" type="month" placeholder="选择月"></el-date-picker>
          </td>
          <td>回执日期</td>
          <td></td>
        </tr>
      </table>
      <el-table
        border
        size="mini"
        height="100"
        :data="tableData2"
        style="margin: 5px auto;text-align:left;width:95%;"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
      <div style="width:95%;margin:0 auto;">
        <table style="width:49%;float:left;margin-top:20px;" class="orderTable">
          <tr>
            <td>总保费</td>
            <td>1199</td>
            <td>首年</td>
            <td>0</td>
            <td>销售</td>
            <td>0</td>
          </tr>
          <tr>
            <td>标保</td>
            <td>839.3</td>
            <td>续年</td>
            <td>0</td>
            <td>服务</td>
            <td>0</td>
          </tr>
        </table>
        <table style="width:49%;float:right;margin-top:20px;" class="orderTable">
          <tr>
            <td>首佣FYC</td>
            <td>647.46</td>
            <td>内部标保</td>
            <td>0</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style="margin-left:20px">续佣FYC</td>
            <td>0</td>
            <td>财佣FYC</td>
            <td>0</td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <div class="button1">
          <el-button type="primary" size="mini">参数费率</el-button>
          <el-button type="primary" size="mini">重算</el-button>
        </div>
        <fieldset style="margin-left:0px;margin-right:0px;">
          <legend>承揽型别
            <el-select size="mini" v-model="whoseSelect" placeholder="请选择">
              <el-option
                v-for="item in whose"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </legend>
          <div class="bottomLeft">
            <table>
              <tr>
                <td>A</td>
                <td class="tableCenter">刘加文</td>
                <td class="buttonTable">
                  <el-button size="mini">...</el-button>
                </td>
              </tr>
              <tr>
                <td colspan="3" class="empty">
                  <a href="#">刘加文 2101101000002</a>
                </td>
              </tr>
            </table>
            <table>
              <tr>
                <td>B</td>
                <td class="tableCenter">承揽人</td>
                <td class="buttonTable"></td>
              </tr>
              <tr>
                <td colspan="3" class="empty"></td>
              </tr>
            </table>
            <table>
              <tr>
                <td>C</td>
                <td class="tableCenter">承揽人电话号码</td>
                <td class="buttonTable">
                  <el-button size="mini">…</el-button>
                </td>
              </tr>
              <tr>
                <td colspan="3" class="empty"></td>
              </tr>
            </table>
          </div>
          <div class="bottomRight">
            <table>
              <tr>
                <td>D</td>
                <td class="tableCenter">保全员</td>
                <td class="buttonTable">
                  <el-button size="mini">…</el-button>
                </td>
              </tr>
              <tr>
                <td colspan="3" class="empty"></td>
              </tr>
            </table>
            <table>
              <tr>
                <td>E</td>
                <td class="tableCenter">收费员</td>
                <td class="buttonTable">
                  <el-button size="mini">…</el-button>
                </td>
              </tr>
              <tr>
                <td colspan="3" class="empty"></td>
              </tr>
            </table>
          </div>
        </fieldset>
      </div>
      <div class="checkPerson">
        <table class="orderTable">
          <tr>
            <td style="width:60px;text-align:center;">核佣人</td>
            <td>
              <el-input v-model="checkPerson" size="mini" style="margin-left:0px;"></el-input>
            </td>
          </tr>
        </table>
        <!-- <div class="link"> -->
        <a href="#">创建</a>
        <a href="#">更新</a>
        <!-- </div>   -->
      </div>
      <div class="button2">
        <el-button type="success" size="mini">确定</el-button>
        <el-button type="warning" size="mini" @click="goBack">取消</el-button>
        <el-button type="primary" size="mini">应用</el-button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      month: "",
      checkState: [
        {
          value: "正常"
        },
        {
          value: "不正常"
        }
      ],
      checkStateSelect: "正常",
      happenMonth: "",
      checked: false,
      AccountState: [
        {
          value: "正常"
        },
        {
          value: "不正常"
        }
      ],
      AccountStateSelect: "正常",
      balanceMonth: "",
      insuranceNumber: "123456",
      name: "方海宁",
      payType: [
        {
          value: "新契约缴费"
        },
        {
          value: "旧契约缴费"
        }
      ],
      payTypeSelect: "新契约缴费",
      payDoTime: "",
      year: 1,
      times: 1,
      payTime: "",
      tableData2: [
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
      whose: [
        {
          value: "个人件"
        },
        {
          value: "集体件"
        }
      ],
      whoseSelect: "个人件",
      checkPerson: ""
    };
  },

  components: {},

  computed: {},

  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    goBack() {
      history.go(-1);
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
  position: absolute;
  top: 30px;
  bottom: 0px;
  left: 0;
  right: 0;
  overflow-y: scroll;
  .orderTable {
    width: 95%;
    margin: 20px auto;
    td {
      border: 1px solid #d4d8e4;
      border-collapse: collapse;
      height: 20px;
      padding: 5px;
    }
    td:nth-of-type(odd) {
      font-weight: bold;
    }
  }
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.bottomLeft {
  display: inline-block;
  table {
    display: inline;
    text-align:center;
    top:0px;
    left:0px;
    margin:10px;
    border:0px; 
    .tableCenter{
      width:100px;
      height:30px;
      line-height:30px;
    };
    .buttonTable{
      width:50px;
      height:30px;
      line-height:30px;
    }
  }
}
.bottomRight {
  float:right;
  table {
    display: inline;
    text-align:center;
    margin:10px;
    border:0px;
    .tableCenter{
      width:100px;
      height:30px;
      line-height:30px;
    };
    .buttonTable{
      width:50px;
      height:30px;
      line-height:30px;
    }
  }
}
// .empty {
//   // 表格为空时，仍然要显示将表格的高度显示
//   height: 20px;
// }
.checkPerson {
  width: 95%;
  margin: 10px auto;
  text-align: right;
  vertical-align: middle;
}
.checkPerson table {
  width: 250px;
  height:30px;
  line-height:30px;
  display: inline-block;
  margin: 0;
  text-align: left;
}
// .link{
//   display:inline-block;
//   vertical-align: middle;
// }
.checkPerson a {
  display: inline-block;
  height: 30px;
  line-height:30px;
  // vertical-align: middle;
  margin-left: 10px;
}
.button1 {
  width: 100%;
  margin: 0 auto;
  text-align: right;
}
.button2 {
  width: 95%;
  margin: 0 auto;
  text-align: right;
  margin-bottom: 40px;
}
</style>