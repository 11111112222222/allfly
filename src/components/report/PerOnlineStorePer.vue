<!-- 个人网店绩效日报表 -->
<template>
  <div class="page">
    <el-tabs
      type="border-card"
      v-model="activeTab"
    >
      <el-tab-pane
        label="查询"
        name="searchTab"
      >

        <fieldset>
          <legend>数据范畴区分条件</legend>
          <div class="row policyStatus">
            <div class="title">
              <span>保险公司区分</span>
            </div>

            <el-select
              size="mini"
              v-model="statusSel"
              placeholder="请选择"
            >
              <el-option
                v-for="item in statusOpt"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="row policyNumber">
            <div class="title">
              <span>当月日报期间到</span>
            </div>
            <el-date-picker
              size="mini"
              v-model="IndexDate"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
            <!-- <el-date-picker
              size="mini"
              v-model="IndexDate"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="datepickerOpt"
            >
            </el-date-picker> -->
          </div>
          
          <div class="row dateIndex">
            <div class="title">
              <span>承揽类型</span>
            </div>

            <el-checkbox v-model="checked">渠道网点</el-checkbox>

          </div>
          <div class="row company">
            <div class="title">
              <span>银行渠道区分</span>
            </div>

            <el-input
              size="mini"
              style="width:18%"
              disabled
              v-model="numberVal"
              clearable
            >
            </el-input>
            <el-button
            type="mini"
         
          >...</el-button>
          </div>
          <div class="row company">
            <div class="title">
              <span>理财人员区分</span>
            </div>

            <el-input
              size="mini"
              style="width:18%"
              disabled
              v-model="numberVal"
              clearable
            >
            </el-input>
            <el-button
            type="mini"
         
          >...</el-button>
          </div>
           <div class="row policyStatus">
            <div class="title">
              <span>绩效区分</span>
            </div>

            <el-select
              size="mini"
              v-model="statusSel"
              placeholder="请选择"
            >
              <el-option
                v-for="item in statusOpt"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          

        </fieldset>
        <div class="button-wrapper">
          <el-button
            type="primary"
            @click="handleToggleTab"
          >查询</el-button>
        </div>

      </el-tab-pane>
      <el-tab-pane
        label="列表"
        name="listTab"
      >
        <div class="tabContent">
          <div class="totalCost">总保费：{{totalCost}}</div>
          <div class="listTable">
            <el-table
              class="table"
              :data="tableData3"
              size="mini"
              height="840px"
              highlight-current-row
              border
            >
              <el-table-column
                fixed
                type="index"
                width="50"
              >
              </el-table-column>
              <el-table-column
                prop="date"
                label="保单号码"
                sortable
                width="100"
                heigt="50"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="保险公司"
                sortable
                width="100"
                heigt="50"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="保单状态"
                sortable
                width="100"
                heigt="50"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="投保人"
                sortable
                width="100"
                heigt="50"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="承揽人"
                sortable
                width="100"
                heigt="50"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="承揽人姓名"
                sortable
                width="120"
                heigt="50"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="受理日期"
                sortable
                width="100"
                heigt="50"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="生效日期"
                sortable
                width="100"
                heigt="50"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="年华收益"
                sortable
                width="100"
                heigt="50"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="险种代码"
                sortable
                width="100"
                heigt="50"
              >
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                width="100"
                sortable
              >
              </el-table-column>
            </el-table>
          </div>
          
          <div class="oprateBtn">
            <el-button
              type="primary"
              size="mini"
            >导出Excel</el-button>
            
            <el-button
              type="success"
              size="mini"
            >分类汇总</el-button>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      // 查询数据
      activeTab: "searchTab",
      companyChecked: true,
      numberChecked: true,
      statusChecked: true,
      dateChecked: true,
      receiptChecked: true,
      propertyChecked: true,
      propertyReleChecked: true,
      insuTypeChecked: true,
      bracketChecked: true,
      accpeterChecked: true,
      staffChecked: true,
      companyTypeOpt: [
        {
          value: "选项1",
          label: "指定保险公司"
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
      companyOpt: [
        {
          value: "选项1",
          label: "保险人寿"
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
      statusOpt: [
        {
          value: "选项1",
          label: "不区分"
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
      dateOpt: [
        {
          value: "选项1",
          label: "受理日期"
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
      receiptOpt: [
        {
          value: "选项1",
          label: "未交回"
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
      propertyOpt: [
        {
          value: "选项1",
          label: "单证信息"
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
      propertyReleOpt: [
        {
          value: "选项1",
          label: "投保单"
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
      propertyExiOpt: [
        {
          value: "选项1",
          label: "有"
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
      validityTimeOpt: [
        {
          value: "选项1",
          label: "有效期起"
        },
        {
          value: "选项2",
          label: "有效期止"
        }
      ],
      insuTypeOpt: [
        {
          value: "选项1",
          label: "财富年年两全保险（分红型）"
        },
        {
          value: "选项2",
          label: "有效期止"
        }
      ],
      bracketOpt: [
        {
          value: "选项1",
          label: "年期/分档"
        },
        {
          value: "选项2",
          label: "有效期止"
        }
      ],
      accpeterOpt: [
        {
          value: "选项1",
          label: "不区分"
        },
        {
          value: "选项2",
          label: "A"
        },
        {
          value: "选项3",
          label: "B"
        }
      ],
      accpeterNameOpt: [
        {
          value: "选项1",
          label: "姓名"
        },
        {
          value: "选项2",
          label: "A"
        },
        {
          value: "选项3",
          label: "B"
        }
      ],
      staffOpt: [
        {
          value: "选项1",
          label: "姓名"
        },
        {
          value: "选项2",
          label: "单位"
        },
        {
          value: "选项3",
          label: "B"
        }
      ],

      datepickerOpt: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      receiptPickerOpt: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      propertyPickerOpt: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },

      companyTypeSel: "指定保险公司",
      companySel: [],
      numberSel: "保单号码",
      numberVal: "",
      statusSel: "不区分",
      dateSel: "受理日期",
      IndexDate: "",
      receiptSel: "未交回",
      receiptDate: [],
      propertySel: "单证信息",
      propertyReleSel: "投保单",
      propertyExiSel: "有",
      propertyVal: "黄金糕",
      validityTimeSel: "有效期起",
      propertyReleDate: "",
      insuTypeSel: "财富年年两全保险（分红型）",
      bracketSel: "年期/分档",
      bracketLowVal: "1",
      bracketHigVal: "1",
      accpeterSel: "不区分",
      accpeterNameSel: "姓名",
      accpeterVal: "",
      staffSel: "姓名",
      staffVal: "",

      // 列表数据
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
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
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      totalCost: 0,
      checked: true
    };
  },
  methods: {
    handleToggleTab() {
      this.activeTab = "listTab";
    }
  }
};
</script>

<style scoped lang="scss">
.el-tabs {
  height: calc(100vh - 40px);
}
.el-select {
  margin: 0 10px 0 0;
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
.el-date-picker {
  margin-top: 10px;
}

fieldset {
  padding: 0.35em 0.625em 0.75em;
  margin: 0 2px;
  border: 1px solid silver;
  .wrapper {
    margin-left: -8.75px;
  }
}
legend {
  padding: 0.5em;
  border: 0;
  width: auto;
  color: blue;
}
.button-wrapper {
  margin-top: 10px;
  text-align: center;
  margin-left: -100px;
}
.tabContent {
  position: relative;
  text-align: left;
  padding: 0 30px;
  // height: 100%;
  // overflow: scroll;
}
.oprateBtn {
  //    position: fixed;;
  //    bottom:25px;
  //    right:45px;
  float: right;
  margin-top: 20px;
}
.totalCost {
  float: right;
  height: 30px;
}
.inBtn {
  position: fixed;
  left: 275px;
  bottom: 25px;
}
@media screen and (max-width: 1480px) {
    .table {
      height:440px !important
    }
}
</style>
