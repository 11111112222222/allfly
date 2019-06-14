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
          <td id="insurancePeopleMessage">
            <div @click="insurancePeopleMessage">{{name}}</div>
          </td>
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
            <el-date-picker size="mini" v-model="payDoTime" type="date" placeholder="选择日期"></el-date-picker>
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
          <td>交费日期</td>
          <td>
            <el-date-picker size="mini" v-model="payTime" type="date" placeholder="选择日期"></el-date-picker>
          </td>
          <td>回执日期</td>
          <td></td>
        </tr>
      </table>
      <el-table
        border
        size="mini"
        height="200"
        :data="tableData2"
        style="margin: 5px auto;text-align:left;width:95%;"
        :row-class-name="tableRowClassName"
      >
        <el-table-column type="index" sortable label="序号" width="50"></el-table-column>

        <el-table-column
          v-for="item of tableHead"
          :key="item.property"
          :property="item.property"
          :label="item.label"
          :width="item.width"
          :fixed="item.fixed"
          :sortable="item.sortable"
        >
          <template slot-scope="scope">
            <div v-if="item.operate">
              <el-button
                type="primary"
                size="small"
                @click="dialogVisible = true"
              >{{item.operate.name}}</el-button>
            </div>
            <div v-else>{{scope.row[item.property]}}</div>
          </template>
        </el-table-column>

        <!-- <el-table-column prop="name" width="180" fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteInfo(scope.$index,tableData2)"
              type="danger"
              size="mini"
            >删除</el-button>
            <el-button type="primary" size="mini" @click="dialogVisible = true">编辑</el-button>
          </template>
        </el-table-column>-->
      </el-table>
      <el-dialog :visible.sync="dialogVisible" title="交费记录编辑" width="60%">
        <div class="bodyMsg">
          <PayRecordEditor></PayRecordEditor>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button size="mini" type="danger" @click="dialogVisible = false">取 消</el-button>
          <el-button size="mini" type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
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
          <el-button type="primary" size="mini" @click="dialogFormVisible = true">参数费率</el-button>
          <el-button type="primary" size="mini">重算</el-button>
        </div>
        <!-- 参数费率按钮点击后的弹出框 -->
        <el-dialog title="险种费率查看" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="保单受理日" :label-width="formLabelWidth">
              <el-input v-model="form.dealDate" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="险种名称" :label-width="formLabelWidth">
              <el-input v-model="form.insuranceName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年期" :label-width="formLabelWidth">
              <el-input v-model="form.yearPeriod" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="参数费率名称" :label-width="formLabelWidth">
              <el-select v-model="form.rateName" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="佣金制度" :label-width="formLabelWidth">
              <el-input v-model="form.employRule" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="费率类型" :label-width="formLabelWidth">
              <el-select v-model="form.rateType" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <el-table :data="tableData1" style="width: 100%" border height="200">
            <el-table-column prop="yearDate" label="年期" width="180"></el-table-column>
            <el-table-column prop="rate" label="费率"></el-table-column>
          </el-table>
          <!-- 
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>-->
        </el-dialog>

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

          <!-- 承揽人部分点击按钮后的弹出框 -->
          <el-dialog :visible.sync="dialogVisible1" title="位置" width="60%">
            <div class="main">
              <location></location>
            </div>
          </el-dialog>

          <div class="bottomLeft">
            <table>
              <tr>
                <td>A</td>
                <td class="tableCenter">承揽人</td>
                <td class="buttonTable">
                  <el-button size="mini" @click="dialogVisible1 = true">...</el-button>
                </td>
              </tr>
              <tr>
                <td colspan="3" class="empty">
                  <a href="#">{{contracter}}</a>
                </td>
              </tr>
            </table>
            <table>
              <tr>
                <td>B</td>
                <td class="tableCenter">承揽人</td>
                <td class="buttonTable">
                  <el-button size="mini">...</el-button>
                </td>
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
        <!-- <a href="#">创建</a>
        <a href="#">更新</a>-->
        <!-- </div>   -->
      </div>
      <div>
        <div class="oprateBtn">
          <el-tooltip placement="top">
            <div slot="content">
              <div v-for="(item) in createAccount" :key="item.name">
                <span>{{item.name}}：</span>
                <span>{{item.content}}</span>
              </div>
            </div>
            <el-button size="mini">创建</el-button>
          </el-tooltip>
          <el-tooltip placement="top">
            <div slot="content">
              <div v-for="(item) in updateAccount" :key="item.name">
                <span>{{item.name}}：</span>
                <span>{{item.content}}</span>
              </div>
            </div>
            <el-button size="mini">更新</el-button>
          </el-tooltip>
          <el-button type="primary" size="mini" id="confirmBtn">确定</el-button>
          <el-button type="danger" size="mini" @click="goBack()">取消</el-button>
          <el-button type="primary" size="mini">应用</el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PayRecordEditor from "components/Order/PayRecordEditor.vue";
import location from "./location.vue";
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
      tableHead: [
        { label: "险种代码", property: "code", width: "100", sortable: "true" },
        { label: "险种名称", property: "name", width: "100", sortable: "true" },
        {
          label: "被保人",
          property: "protectedPerson",
          width: "100",
          sortable: "true"
        },
        {
          label: "受理日期",
          property: "dealDate",
          width: "100",
          sortable: "true"
        },
        { label: "生效日期", property: "effectDate", sortable: "true" },
        {
          label: "操作",
          property: "operate",
          fixed: "right",
          width: "100",
          operate: { name: "查看 / 编辑" }
        }
      ],
      tableData2: [
        {
          code: "GDGGS123",
          name: "百年附高",
          protectedPerson: "里斯",
          dealDate: "2019-02-13",
          effectDate: "2019-02-13"
        },
        {
          code: "GDGGS123",
          name: "百年附加",
          protectedPerson: "里斯",
          dealDate: "2019-02-13",
          effectDate: "2019-02-13"
        },
        {
          code: "GDGGS123",
          name: "年附加高",
          protectedPerson: "里斯",
          dealDate: "2019-02-13",
          effectDate: "2019-02-13"
        },
        {
          code: "GDGGS123",
          name: "百附加高",
          protectedPerson: "里斯",
          dealDate: "2019-02-13",
          effectDate: "2019-02-13"
        },
        {
          code: "GDGGS123",
          name: "百年加高",
          protectedPerson: "里斯",
          dealDate: "2019-02-13",
          effectDate: "2019-02-13"
        },
        {
          code: "GDGGS123",
          name: "百年附",
          protectedPerson: "里斯",
          dealDate: "2019-02-13",
          effectDate: "2019-02-13"
        },
        {
          code: "GDGGS123",
          name: "附加高",
          protectedPerson: "里斯",
          dealDate: "2019-02-13",
          effectDate: "2019-02-13"
        },
        {
          code: "GDGGS123",
          name: "百年高",
          protectedPerson: "里斯",
          dealDate: "2019-02-13",
          effectDate: "2019-02-13"
        },
        {
          code: "GDGGS123",
          name: "百高",
          protectedPerson: "里斯",
          dealDate: "2019-02-13",
          effectDate: "2019-02-13"
        },
        {
          code: "GDGGS123",
          name: "百",
          protectedPerson: "里斯",
          dealDate: "2019-02-13",
          effectDate: "2019-02-13"
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
      checkPerson: "",
      dialogFormVisible: false,
      form: {
        dealDate: "",
        insuranceName: "",
        yearPeriod: "",
        rateName: "首/续年佣金",
        employRule: "",
        rateType: "纯保费部分费率"
      },
      formLabelWidth: "120px",
      tableData1: [
        {
          yearDate: "2015-05-02",
          rate: "200"
        },
        {
          yearDate: "2016-05-02",
          rate: "100"
        }
      ],
      dialogVisible: false,
      dialogVisible1: false,
      contracter: "刘加文 2101101000002",
      createAccount: [
        { name: "员工码", content: "00000033" },
        { name: "员工名称", content: "啦啦啦" },
        { name: "单位部门", content: "总部-运营部" },
        { name: "佣金制度", content: "基本法A制" },
        { name: "目前职级", content: "HQ01-内勤人员" },
        { name: "关系上属", content: "--" },
        { name: "入司日期", content: "2018-10-11" },
        { name: "手机", content: "" },
        { name: "电子邮箱", content: "" },
        { name: "创建日期", content: "2019-03-06" }
      ],
      updateAccount: [
        { name: "员工码", content: "00000033" },
        { name: "员工名称", content: "啦啦啦" },
        { name: "单位部门", content: "总部-运营部" },
        { name: "佣金制度", content: "基本法A制" },
        { name: "目前职级", content: "HQ01-内勤人员" },
        { name: "关系上属", content: "--" },
        { name: "入司日期", content: "2018-10-11" },
        { name: "手机", content: "" },
        { name: "电子邮箱", content: "" },
        { name: "更新日期", content: "2019-03-06" }
      ]
    };
  },

  components: { PayRecordEditor, location },

  computed: {},

  mounted: function() {
    this.month = this.$route.query.information.AchievementMonth;
    this.payDoTime = this.$route.query.information.chargeDate;
    console.log(this.$route.query.information.AchievementMonth);
  },

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
    },
    insurancePeopleMessage() {
      this.$router.push({ path: "/user/ClientEditor" });
    },
    deleteInfo(index, table) {
      this.$confirm("确定删除该条数据吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          table.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    editorBtn(row) {
      this.$router.push({ path: "/user/PayRecordEditor" });
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
    text-align: center;
    top: 0px;
    left: 0px;
    margin: 10px;
    border: 0px;
    .tableCenter {
      width: 110px;
      height: 30px;
      line-height: 30px;
    }
    .buttonTable {
      width: 50px;
      height: 30px;
      line-height: 30px;
    }
    .empty {
      height: 30px;
      // line-height:30px;
    }
  }
}
.bottomRight {
  float: right;
  table {
    display: inline;
    text-align: center;
    margin: 10px;
    border: 0px;
    .tableCenter {
      width: 110px;
      height: 30px;
      line-height: 30px;
    }
    .buttonTable {
      width: 50px;
      height: 30px;
      line-height: 30px;
    }
    .empty {
      height: 30px;
      // line-height:30px;
    }
  }
}
.oprateBtn {
  //    position: fixed;;
  //    bottom:25px;
  //    right:45px;
  float: right;
  margin: 10px 30px 10px 0;
  a {
    text-decoration: underline;
    color: blue;
    cursor: pointer;
    margin: 0 10px;
    &:hover {
      color: red;
    }
  }
  #confirmBtn {
    margin-left: 50px;
  }
}

.checkPerson {
  width: 95%;
  margin: 10px auto;
  text-align: right;
  vertical-align: middle;
}
.checkPerson table {
  width: 250px;

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
  line-height: 30px;
  // vertical-align: middle;
  margin-left: 10px;
}
.button1 {
  width: 100%;
  margin: 0 auto;
  text-align: right;
}

#insurancePeopleMessage {
  color: blue;
}
#insurancePeopleMessage:hover {
  text-decoration: underline;
}
td:nth-of-type(odd) {
  // background:#eee;
  font-weight: bold;
}
</style>