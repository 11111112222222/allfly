<template>
  <div class="page">
    <el-tabs type="border-card" v-model="activeTab">
      <el-tab-pane label="查询" name="searchTab">
        <div class="row company">
          <div class="title">
            <span>保险公司</span>
          </div>
          <el-checkbox v-model="companyChecked"></el-checkbox>
          <el-select
            size="mini"
            v-model="companyTypeSel"
            placeholder="请选择"
          >
            <el-option
              v-for="item in companyTypeOpt"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select
            size="mini"
            v-model="companySel"
            placeholder="请选择"
            multiple
            collapse-tags
          >
            <el-option
              v-for="item in companyOpt"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="row policyNumber">
          <div class="title">
            <span>保单相关号码/投被保人</span>
          </div>
          <el-checkbox v-model="numberChecked"></el-checkbox>
          <el-select
            size="mini"
            v-model="numberSel"
            placeholder="请选择"
          >
            <el-option
              v-for="item in numberOpt"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-input
            size="mini"
            style="width:20%"
            placeholder="请输入内容"
            v-model="numberVal"
            clearable
          >
          </el-input>
        </div>
        <div class="row policyStatus">
          <div class="title">
            <span>保单状态</span>
          </div>
          <el-checkbox v-model="statusChecked"></el-checkbox>
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
        <div class="row dateIndex">
          <div class="title">
            <span>日期索引</span>
          </div>
          <el-checkbox v-model="dateChecked"></el-checkbox>
          <el-select
            size="mini"
            v-model="dateSel"
            placeholder="请选择"
          >
            <el-option
              v-for="item in dateOpt"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-date-picker
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
          </el-date-picker>
        </div>
        <div class="row policyReceipt">
          <div class="title">
            <span>保单回执</span>
          </div>
          <el-checkbox v-model="receiptChecked"></el-checkbox>
          <el-select
            size="mini"
            v-model="receiptSel"
            placeholder="请选择"
          >
            <el-option
              v-for="item in receiptOpt"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-date-picker
            size="mini"
            v-model="receiptDate"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="receiptPickerOpt"
          >
          </el-date-picker>
        </div>

        <fieldset>
          <legend>高级查询</legend>
          <div class="wrapper">
            <div class="row property">
              <div class="title">
                <span>保单记录属性</span>
              </div>
              <el-checkbox v-model="propertyChecked"></el-checkbox>
              <el-select
                size="mini"
                v-model="propertySel"
                placeholder="请选择"
                style="width:8%;marginRight:2px"
              >
                <el-option
                  v-for="item in propertyOpt"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-select
                size="mini"
                v-model="propertyReleSel"
                placeholder="请选择"
                style="width:9%"
              >
                <el-option
                  v-for="item in propertyReleOpt"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-select
                size="mini"
                v-model="IndexDate"
                placeholder="请选择"
                style="width:10%"
              >
                <el-option
                  v-for="item in propertyExiOpt"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-input
                size="mini"
                style="width:20%"
                placeholder="请输入内容"
                v-model="propertyVal"
                clearable
              >
              </el-input>
            </div>
            <div class="row propertyRele">
              <div class="title">
                <span></span>
              </div>
              <!-- el-checkbox占位 -->
              <el-checkbox style="display:none;"></el-checkbox>
              <el-checkbox v-model="propertyReleChecked"></el-checkbox>
              <el-select
                size="mini"
                v-model="validityTimeSel"
                placeholder="请选择"
                style="width:15%;"
              >
                <el-option
                  v-for="item in validityTimeOpt"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-date-picker
                size="mini"
                v-model="propertyReleDate"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="propertyPickerOpt"
              >
              </el-date-picker>
            </div>
            <div class="row insuranceType">
              <div class="title">
                <span>投保险种</span>
              </div>
              <el-checkbox v-model="insuTypeChecked"></el-checkbox>
              <el-select
                size="mini"
                v-model="insuTypeSel"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in insuTypeOpt"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="row bracket">
              <div class="title">
                <span>年期/分档</span>
              </div>
              <el-checkbox v-model="bracketChecked"></el-checkbox>
              <el-select
                size="mini"
                v-model="bracketSel"
                placeholder="请选择"
                style="width:9%;marginRight:2px"
              >
                <el-option
                  v-for="item in bracketOpt"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-input-number
                size="mini"
                v-model="bracketLowVal"
                controls-position="right"
                :min="1"
                :max="10"
                style="width:8%;marginRight:2px"
              ></el-input-number>至
              <el-input-number
                size="mini"
                v-model="bracketHigVal"
                controls-position="right"
                :min="1"
                :max="10"
                style="width:8%;"
              ></el-input-number>
            </div>
            <div class="row accpeter">
              <div class="title">
                <span>承揽人</span>
              </div>
              <el-checkbox v-model="accpeterChecked"></el-checkbox>
              <el-select
                size="mini"
                v-model="accpeterSel"
                placeholder="请选择"
                style="width:8%;marginRight:2px"
              >
                <el-option
                  v-for="item in accpeterOpt"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-select
                size="mini"
                v-model="accpeterNameSel"
                placeholder="请选择"
                style="width:9%"
              >
                <el-option
                  v-for="item in accpeterNameOpt"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-input
                size="mini"
                style="width:20%"
                placeholder="请输入内容"
                v-model="accpeterVal"
                clearable
              >
              </el-input>
            </div>
            <div class="row staff">
              <div class="title">
                <span>录单人员/单位</span>
              </div>
              <el-checkbox v-model="staffChecked"></el-checkbox>
              <el-select
                size="mini"
                v-model="staffSel"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in staffOpt"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-input
                size="mini"
                style="width:20%"
                placeholder="请输入内容"
                v-model="staffVal"
                clearable
              >
              </el-input>
            </div>
          </div>
        </fieldset>
        <div class="button-wrapper">
          <el-button type="primary" @click="handleToggleTab">查询</el-button>
        </div>

      </el-tab-pane>
      <el-tab-pane label="列表" name="listTab">
        <div class="tabContent">
          <div class="totalCost">总保费：{{totalCost}}</div>
          <div class="listTable">
            <el-table
              :data="tableData3"
              size="mini"
              height="440px"
              highlight-current-row
              border
            >
            <el-table-column
            fixed
                        type="index"
                        width="50">
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
            <Dialog :dialogFormVisible="dialogFormVisible" :tableData="tableData3" @change="change"></Dialog>
          </div>
          <div class="inBtn">
                    <el-button type="primary" size="mini" @click="showDialog">导出Excel</el-button>
                    <!-- <el-button type="primary" size="mini">理赔报表导出</el-button> -->
                </div>
                <div class="oprateBtn">
                    <el-button type="danger" size="mini">删除</el-button>
                    <el-button type="primary" size="mini">查看 / 编辑</el-button>
                    <el-button type="success" size="mini">新增一笔</el-button>
                </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
import Dialog from 'base/dialog/dialog.vue'

export default {
  data() {
    return {
      // 查询数据
      dialogFormVisible:false,
      activeTab:'searchTab',
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
          label: "预收件"
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
      statusSel: "预收件",
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
        }
      ],
      totalCost: 0
    };
  },
  methods: {
    handleToggleTab(){
         this.activeTab="listTab"
     },
     change() {
       this.dialogFormVisible = false
     },
     showDialog() {
       this.dialogFormVisible = true
     }
  },
  components:{
    Dialog
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
.tabContent{
        position: relative;
        text-align: left;
        padding:0 30px;
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
.totalCost{
        float:right;
        height: 30px;
    }
    .inBtn{
  position: fixed;
  left: 275px;
  bottom: 25px;
}
</style>
