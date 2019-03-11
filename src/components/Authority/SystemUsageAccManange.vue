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
        <div class="blank-space"></div>
        <div class="row company">
          <div class="title">
            <span>用户类型</span>
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

        </div>
        <div class="row policyNumber">
          <div class="title">
            <span>单位/分支/协作机构</span>
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

        </div>
        <div class="row policyStatus">
          <div class="title">
            <span>员工编号</span>
          </div>
          <el-checkbox v-model="statusChecked"></el-checkbox>
          <el-input
            size="mini"
            style="width:20%"
            placeholder="%"
            v-model="numberVal"
            clearable
          >
          </el-input>
        </div>
        <div class="row dateIndex">
          <div class="title">
            <span>真实姓名</span>
          </div>
          <el-checkbox v-model="dateChecked"></el-checkbox>
          <el-input
            size="mini"
            style="width:20%"
            placeholder="%"
            v-model="propertyVal"
            clearable
          >
          </el-input>

        </div>
        <div class="row policyReceipt">
          <div class="title">
            <span>登入名称</span>
          </div>
          <el-checkbox v-model="receiptChecked"></el-checkbox>
          <el-input
            size="mini"
            style="width:20%"
            placeholder="%"
            v-model="staffVal"
            clearable
          >
          </el-input>
        </div>
        <div class="blank-space"></div>
        <div class="line"></div>
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
              :data="tableData3"
              size="mini"
              height="440px"
              highlight-current-row
              @row-click="setOrderNum"
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
              type="danger"
              size="mini"
              @click.native.prevent="delateInfo()"
            >删除</el-button>
            <el-button
              type="primary"
              size="mini"
              @click="jumpToLook"
            >查看 / 编辑</el-button>
            <el-button
              type="success"
              size="mini"
              @click="jumpToIncrease"
            >新增一笔</el-button>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
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
      currentRow: null,
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
      propertyVal: "",
      validityTimeSel: "有效期起",
      propertyReleDate: "",
      insuTypeSel: "财富年年两全保险（分红型）",
      bracketSel: "年期/分档",
      bracketLowVal: "",
      bracketHigVal: "1",
      accpeterSel: "不区分",
      accpeterNameSel: "姓名",
      accpeterVal: "",
      staffSel: "姓名",
      staffVal: "",

      // 列表数据
      // tableData3: [
      //   {
      //     date: "2016-05-03",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1518 弄"
      //   },
      //   {
      //     date: "2016-05-02",
      //     name: "王小虎2",
      //     address: "上海市普陀区金沙江路 1518 弄"
      //   },
      //   {
      //     date: "2016-05-04",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1518 弄"
      //   },
      //   {
      //     date: "2016-05-01",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1518 弄"
      //   },
      //   {
      //     date: "2016-05-08",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1518 弄"
      //   },
      //   {
      //     date: "2016-05-06",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1518 弄"
      //   },
      //   {
      //     date: "2016-05-07",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1518 弄"
      //   }
      // ],
      totalCost: 0,
      date:'',
      formData: null
    };
  },
  computed: {
    ...mapState(['tableData3']),
  },
  methods: {
    handleToggleTab() {
      this.activeTab = "listTab";
    },
    jumpToIncrease(){
       this.$router.push({ path: '/user/AccountIncrease' });
    },
    jumpToLook(){
        if(this.date) {
            for(let i=0;i<this.tableData3.length;i++){
                if(this.tableData3[i].date===this.date){
                    this.formData = this.tableData3[i]
                    break;
                }
            }
            this.$router.push({ path: '/user/AccountLook',query: { formData: this.formData } });
       }else{
         this.$message({
            type: 'info',
            message: '请选择需要查看的数据'
          });    
       }
       
    },
    deleteRow(index, rows) {
        rows.splice(index, 1);
    },
    handleCurrentChange(val) {
        this.currentRow = val;
    },
    setOrderNum(row){  
         console.log("当前行",row);
         this.date=row.date;
     },
     delateInfo(){
       if(this.date) {
         this.$confirm('确定删除该条数据吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            for(let i=0;i<this.tableData3.length;i++){
                if(this.tableData3[i].date==this.date){
                    this.tableData3.splice(i,1);
                    break;
                }
            }
            this.date='';
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
         this.$message({
            type: 'info',
            message: '请选择需要删除的数据'
          });    
       }
     },
      
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
.line {
  border: 1px solid #ddd;
  margin-left: 110px;
}
.blank-space {
  height: 50px;
}
</style>
