<!-- 代理险种费用率管理/险种信息编辑 -->
<template>
  <div id="main" style="height:100%">
    <header>
      <dl>
        <dt>
          <i class="el-icon-back" @click="goBack"></i>
          险种信息编辑 - [{{insuranceTypeName}}]
        </dt>
      </dl>
    </header>
    <el-tabs type="border-card" v-model="activeTab" style="height:100%;overflow-y:auto;">
      <el-tab-pane label="险种明细" name="insuranceTypeDetais">
        <div class="tabContent">
          <form action>
            <div>
              <div class="title">保险公司</div>
              <div class="content">
                <el-input v-model="company" disabled size="mini" style="width:250px"></el-input>
              </div>
            </div>
            <div>
              <div class="title">主附约</div>
              <div class="content">
                <el-select size="mini" v-model="mainViceContractSelected" style="width:250px">
                  <el-option v-for="item in mainViceContract" :key="item.value" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
            <div>
              <div class="title">险种代码</div>
              <div class="content">
                <el-input v-model="insuranceNode" size="mini" style="width:250px"></el-input>
              </div>
            </div>
            <div>
              <div class="title">险种类别</div>
              <div class="content">
                <el-select size="mini" v-model="insuranceTypeSelected" style="width:250px">
                  <el-option v-for="item in insuranceType" :key="item.value" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
            <div>
              <div class="title">险种全称</div>
              <div class="content">
                <el-input v-model="insuranceFullName" size="mini" style="width:250px"></el-input>
              </div>
            </div>
            <div>
              <div class="title">险种简称</div>
              <div class="content">
                <el-input v-model="insuranceSimplifiedName" size="mini" style="width:250px"></el-input>
                <el-checkbox v-model="moneySynchroMainContractChecked">费率同步主约</el-checkbox>
              </div>
            </div>
            <div>
              <div class="title">参数区别</div>
              <div class="content">
                <el-select size="mini" v-model="parameterDifferenceSelected" style="width:250px">
                  <el-option
                    v-for="item in parameterDifference"
                    :key="item.value"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <el-checkbox v-model="moneySynchroFirstYearchecked">费率同步首年</el-checkbox>
              </div>
            </div>
            <div style="line-height:25px;">
              <div class="title" style="display:inline-block;vertical-align:top;">交费年期一览表</div>
              <div
                class="content"
                style="width:350px;border:1px solid #ddd;padding:10px;background-color:rgba(250, 248, 248, 0.993);margin-top:10px;"
              >
                <el-table
                  :data="tableData"
                  border
                  style="width:250px;float:left;height:100px;margin-top:10px;"
                >
                  <el-table-column prop="yearPeriod_bracket" label="年期/分档" width="100"></el-table-column>
                  <el-table-column prop="remark" label="说明"></el-table-column>
                </el-table>
                <el-button
                  type="primary"
                  class="rt"
                  size="mini"
                  style="margin-bottom:5px;margin-top:10px;"
                  @click="dialogFormVisible = true"
                >新增</el-button>
                <el-button type="primary" class="rt" size="mini" style="margin-bottom:5px;">编辑</el-button>
                <el-button type="primary" class="rt" size="mini">移除</el-button>
              </div>
              <el-dialog title="年期添加" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item label="年期" :label-width="formLabelWidth">
                    <el-input v-model="form.yearPeriod" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="说明" :label-width="formLabelWidth">
                    <el-input
                      type="textarea"
                      :rows="3"
                      placeholder
                      v-model="form.yearPeriodRemark"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogFormVisible = false">添 加</el-button>
                </div>
              </el-dialog>
            </div>
            <div>
              <div class="title">险种销售期间</div>
              <div class="content">
                <el-date-picker
                  style="width:250px"
                  v-model="date"
                  type="daterange"
                  size="mini"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                ></el-date-picker>
              </div>
            </div>
            <div>
              <div class="title">备注</div>
              <div class="content">
                <el-input v-model="comment" size="mini" style="width:250px"></el-input>
              </div>
            </div>
            <el-button type="primary" size="medium" class="searchBtn">重 置</el-button>
            <el-button type="primary" size="medium">应 用</el-button>
          </form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="核佣费率列表" name="listTab">
        <div class="tabContent">
          <div class="listTable">
            <el-table
              ref="recordTable"
              size="mini"
              border
              height="300px"
              :data="recordList"
              highlight-current-row
              @row-click="setOrderNum"
            >
              <el-table-column type="index" width="50"></el-table-column>
              <el-table-column property="moneyParameterName" label="费率参数名称" sortable width="120"></el-table-column>
              <el-table-column property="collectCost" label="收 / 支" sortable width="120"></el-table-column>
              <el-table-column property="yearPeriodBegin" label="年期-起" sortable></el-table-column>
              <el-table-column property="yearPeriodNow" label="年期-迄" sortable></el-table-column>
              <el-table-column property="calculaltePerformanceBegin" label="计绩开始" sortable></el-table-column>
              <el-table-column property="calculaltePerformanceEnd" label="计绩结束" sortable></el-table-column>
            </el-table>
            <fieldset>
              <legend>说明</legend>
              <div></div>
            </fieldset>
          </div>
          <div class="oprateBtn">
            <el-button type="danger" size="mini" @click="delateInfo">移 除</el-button>
            <el-button type="primary" size="mini" @click="queryEdit">查看 / 编辑</el-button>
            <el-button type="primary" size="mini" @click="newAdd">新 增</el-button>
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
      insuranceTypeName: "建工险",
      activeTab: "insuranceTypeDetais",
      company: "",
      mainViceContractSelected: "",
      mainViceContract: [
        {
          value: "主约"
        },
        {
          value: "附约"
        }
      ],
      insuranceNode: "",
      insuranceTypeSelected: "",
      insuranceType: [
        {
          value: "企业财产保险"
        },
        {
          value: "家庭财产保险-投资型家财险"
        },
        {
          value: "家庭财产保险-其他"
        },
        {
          value: "机动车辆保险-交强险"
        },
        {
          value: "机动车辆保险-其他"
        },
        {
          value: "工程保险"
        },
        {
          value: "责任保险"
        },
        {
          value: "信用保险"
        },
        {
          value: "保证保险-机动车辆消费贷款保证保险"
        },
        {
          value: "保证保险-个人贷款抵押房屋保证保险"
        },
        {
          value: "保证保险-其他"
        },
        {
          value: "船舶保险"
        },
        {
          value: "货物运输保险"
        },
        {
          value: "特殊风险保险"
        },
        {
          value: "农业保险"
        },
        {
          value: "健康险-投资型健康险"
        },
        {
          value: "健康险-其他"
        },
        {
          value: "意外伤害保险-投资型意外险"
        },
        {
          value: "意外伤害保险-其他"
        },
        {
          value: "其他"
        },
        {
          value: "其他（不参与统计）"
        }
      ],
      insuranceFullName: "",
      insuranceSimplifiedName: "",
      moneySynchroMainContractChecked: false,
      parameterDifferenceSelected: "",
      parameterDifference: [
        {
          value: "一般险种"
        },
        {
          value: "团体险种"
        },
        {
          value: "卡单险种"
        },
        {
          value: "车险险种"
        },
        {
          value: "财险险种"
        },
        {
          value: "自营网络哦平台险种"
        },
        {
          value: "第三方网络平台险种"
        }
      ],
      moneySynchroFirstYearchecked: false,
      tableData: [
        {
          yearPeriod_bracket: "无",
          remark: "无"
        }
      ],
      date: "",
      comment: "",
      recordList: [
        {
          moneyParameterName: "无",
          collectCost: "无",
          yearPeriodBegin: "无",
          yearPeriodNow: "无",
          calculaltePerformanceBegin: "无",
          calculaltePerformanceEnd: "无"
        }
      ],
      form: {
        yearPeriod: "",
        yearPeriodRemark: ""
      },
      dialogFormVisible: false,
      formLabelWidth: "120px"
    };
  },
  components: {},

  methods: {
    goBack() {
      history.go(-1);
    },
    handleSelectChange(value) {
      if (value[value.length - 1] == "不区分") {
        value.splice(0, value.length - 1);
      } else if (value.indexOf("不区分") != -1) {
        value.splice(value.indexOf("不区分"), 1);
      }
    },
    yearSelectChange(value) {
      if (value == "年期/分档") {
        this.subYearShow = true;
      } else {
        this.subYearShow = false;
      }
    },
    handleToggleTab() {
      this.activeTab = "listTab";
    },
    queryEdit() {
      // this.$router.push({ path: "/user/queryEdit" });
    },
    delateInfo() {
      this.$confirm("确定删除该条数据吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          for (var i = 0; i < this.recordList.length; i++) {
            if (this.recordList[i].orderNum == this.orderNum) {
              this.recordList.splice(i, 1);
              break;
            }
          }
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
    checked() {
      //this.$root.eventHub.$on("sendOrderNum",(val)=>{
      //      for(var i=0;i<this.recordList.length;i++){
      //     if(this.recordList[i].orderNum==val){
      //         this.recordListIndex=i;
      //         console.log("forIndex",this.recordListIndex)
      //         break;
      //     }
      // }
      // })
      // console.log("index",this.recordListIndex)
      this.$refs.recordTable.setCurrentRow(this.recordList[0]);
      this.orderNum = this.recordList[0].orderNum;
    },
    getOrderRow(val) {
      console.log("val", val);
    },
    setOrderNum(row) {
      console.log("当前行", row);
      this.orderNum = row.orderNum;
    },
    newAdd() {
      this.$router.push({ path: "/user/insuranceMoneyEdit" });
    }
  },
  //  watch: {
  //      '$route':"checked"
  //  },
  beforeRouteEnter(to, from, next) {
    //console.log("准备进入路由模板");
    next(vm => {
      //通过vm访问组件实例
      // vm.$root.eventHub.$on('sendOrderNum',vm.getOrderRow);
      //   vm.fetchData();
      //   vm.getDate();
    });
  }
};
</script>

<style scoped lang="scss">
@import "../../../../style/reset.css";
#main {
  header {
    margin-top: -20px;
    margin-bottom: 20px;
  }
  padding: 10px 30px;
  overflow-y: auto;
}
.tabContent {
  position: relative;
  text-align: left;
  padding: 0 30px;
  // height: 100%;
  // overflow: scroll;
  //   color:rgba(250, 248, 248, 0.993);
}
.title {
  display: inline-block;
  width: 150px;
  text-align: right;
  padding: 10px;
}
.content {
  display: inline-block;
  .inputNum {
    display: inline-block;
    margin-left: 10px;
  }
}
.checkbox {
  margin-right: 10px;
}
fieldset {
  padding: 10px 0 10px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  height: 100px;
}
// legend {
//     padding: .5em;
//     border: 0;
//     width: auto;
// }
.searchBtn {
  width: 100px;
  margin-top: 10px;
  margin-left: 200px;
}
.totalData {
  float: left;
  height: 30px;
}
.listTable {
  clear: both;
  //max-width:1000px;
  width: 100%;
}
.oprateBtn {
  //    position: fixed;;
  //    bottom:25px;
  //    right:45px;
  float: right;
  margin-top: 20px;
}
</style>
