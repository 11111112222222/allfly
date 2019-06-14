<!-- 逐笔核佣检查 -->
<template>
  <div style="height:100%">
    <el-tabs v-model="everyCheck" type="card" @tab-click="handleClick">
      <el-tab-pane label="查询" name="query">
        <div class="tableContent">
          <form>
            <div>
              <div class="title">分支机构</div>
              <div class="content">
                <el-checkbox v-model="branchCheck" class="check"></el-checkbox>
                <el-select
                  size="mini"
                  v-model="branchSelected"
                  multiple
                  collapse-tags
                  placeholder="请选择"
                  @change="handleSelectedChange"
                  id="branchSelected"
                >
                  <el-option v-for="item in branchOpt" :key="item.value" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
            <div>
              <div class="title">计绩年月</div>
              <div class="content">
                <el-checkbox v-model="monthCheck" class="check"></el-checkbox>
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
              <div class="title">是否核佣</div>
              <div class="content">
                <el-checkbox v-model="isCheck" class="check"></el-checkbox>
                <el-select
                  size="mini"
                  v-model="isChecked"
                  collapse-tags
                  placeholder="请选择"
                  @change="handleSelectedChange"
                  id="branchSelected"
                >
                  <el-option v-for="item in isCheckOpt" :key="item.value" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
            <div>
              <div class="title">保险公司</div>
              <div class="content">
                <el-checkbox v-model="specifyInsuranceCompanyCheck" class="check"></el-checkbox>
                <el-select
                  size="mini"
                  v-model="specifyInsuranceCompanyChecked"
                  collapse-tags
                  placeholder="请选择"
                  id="specifyInsuranceCompanyChecked"
                >
                  <el-option
                    v-for="item in specifyInsuranceCompanyCheckOpt"
                    :key="item.value"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <el-select
                  size="mini"
                  v-model="insuranceCompanyChecked"
                  collapse-tags
                  placeholder="请选择"
                  @change="handleSelectedChange"
                  id="insuranceCompanyChecked"
                >
                  <el-option
                    v-for="item in insuranceCompanyCheckOpt"
                    :key="item.value"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <el-checkbox v-model="isAllCheck" class="check"></el-checkbox>
                <div style="display:inline-block">全选</div>
              </div>
            </div>
            <div>
              <div class="title">承揽人</div>
              <div class="content">
                <el-checkbox v-model="contractorCheck" class="check"></el-checkbox>
                <el-select
                  size="mini"
                  v-model="contractorChecked"
                  collapse-tags
                  placeholder="请选择"
                  id="contractorChecked"
                >
                  <el-option
                    v-for="item in contractorCheckOpt"
                    :key="item.value"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <el-select
                  size="mini"
                  v-model="identifyChecked"
                  collapse-tags
                  placeholder="请选择"
                  @change
                  id="identifyChecked"
                >
                  <el-option v-for="item in identifyCheckOpt" :key="item.value" :value="item.value"></el-option>
                </el-select>
                <el-input size="mini" v-model="identifyInput" style="width:200px"></el-input>
              </div>
            </div>
            <fieldset>
              <legend>高级查询</legend>
              <div>
                <div class="title">缴费年度缴次</div>
                <div class="content">
                  <el-checkbox v-model="yearCheck" class="check"></el-checkbox>
                  <el-input-number
                    v-model="yearChecked"
                    size="mini"
                    controls-position="right"
                    @change="handleChange"
                    :min="1"
                    :max="10"
                  ></el-input-number>
                  <div style="display:inline-block">年</div>
                  <el-checkbox v-model="timesCheck"></el-checkbox>
                  <el-input-number
                    v-model="timesChecked"
                    size="mini"
                    controls-position="right"
                    @change="handleChange"
                    :min="1"
                    :max="10"
                  ></el-input-number>
                  <div style="display:inline-block">次</div>
                </div>
              </div>

              <div>
                <div class="title">保单回执情况</div>
                <div class="content">
                  <el-checkbox v-model="receiptCheck" class="check"></el-checkbox>
                  <el-select
                    size="mini"
                    v-model="receiptType"
                    collapse-tags
                    placeholder="请选择"
                    @change
                    id="receiptType"
                  >
                    <el-option v-for="item in receiptTypeOpt" :key="item.value" :value="item.value"></el-option>
                  </el-select>
                  <el-checkbox v-model="beginTimeCheck" class="check"></el-checkbox>
                  <el-date-picker
                    size="mini"
                    v-model="timeSelected"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    style="width:250px"
                  ></el-date-picker>
                </div>
              </div>
              <div>
                <div class="title">保单索引查询</div>
                <div class="content">
                  <el-checkbox v-model="queryCheck" class="check"></el-checkbox>
                  <el-select
                    size="mini"
                    v-model="queryChecked"
                    collapse-tags
                    placeholder="请选择"
                    @change
                    id="queryChecked"
                  >
                    <el-option v-for="item in queryCheckOpt" :key="item.value" :value="item.value"></el-option>
                  </el-select>
                  <el-input size="mini" v-model="queryCheckInput" style="width:200px"></el-input>
                </div>
              </div>
              <div>
                <div class="title">过账/账目状态</div>
                <div class="content">
                  <el-checkbox v-model="accountStatus" class="check"></el-checkbox>
                  <el-select
                    size="mini"
                    v-model="accountStatusSelected"
                    collapse-tags
                    placeholder="请选择"
                    @change
                    id="accountStatusSelected"
                  >
                    <el-option
                      v-for="item in accountStatusSelectOpt"
                      :key="item.value"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                  <el-checkbox v-model="accountsTimeCheck" class="check"></el-checkbox>
                  <el-date-picker
                    size="mini"
                    v-model="accountsTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    style="width:250px"
                  ></el-date-picker>
                </div>
              </div>
              <div>
                <div class="title"></div>
                <div class="content">
                  <el-checkbox class="check" disabled></el-checkbox>
                  <el-checkbox v-model="statusCheck" class="check"></el-checkbox>
                  <el-select
                    size="mini"
                    v-model="statusChecked"
                    collapse-tags
                    placeholder="请选择"
                    @change
                    id="statusChecked"
                  >
                    <el-option v-for="item in statusCheckOpt" :key="item.value" :value="item.value"></el-option>
                  </el-select>
                  <el-checkbox v-model="whichMonthCheck" class="check"></el-checkbox>
                  <el-select
                    size="mini"
                    v-model="whichMonthChecked"
                    collapse-tags
                    placeholder="请选择"
                    @change
                    id="whichMonthChecked"
                  >
                    <el-option
                      v-for="item in whichMonthCheckOpt"
                      :key="item.value"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                  <el-date-picker
                    v-model="MonthSelected"
                    type="month"
                    placeholder="选择月"
                    size="mini"
                  ></el-date-picker>
                </div>
              </div>
            </fieldset>
            <el-button type="primary" size="mini" id="button" @click="query">查询</el-button>
          </form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="列表" name="list">
        <div style="margin:0 10px;display:block;">
          <div class="message">
            <span>{{whichNumber}} / {{wholeNumber}}</span>
            <span>
              <el-checkbox v-model="checked">展开明细</el-checkbox>
            </span>
            <span>总保费:{{wholeInsuranceMoney}}</span>
          </div>
          <form>
            <!-- <el-table :data="tableData" border stripe style="width: 100%" @row-dblclick="getDetails">
              <el-table-column prop="AchievementMonth" label="计绩年月 /" width="180"></el-table-column>
              <el-table-column prop="chargeDate" label="交费日期" width="180"></el-table-column>
              <el-table-column prop="chargeMonth" label="应收月"></el-table-column>
            </el-table>

            <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
              <el-table :data="gridData">
                <el-table-column property="InsuranceType" label="险种名称 /" width="150"></el-table-column>
                <el-table-column property="chargeTime" label="年度缴次" width="200"></el-table-column>
                <el-table-column property="ChargePeriod" label="缴费年期"></el-table-column>
              </el-table>
            </el-dialog>-->
            <el-table
              highlight-current-row
              :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
              style="width: 100%;"
              border
              height="450"
              :default-sort="{prop:'AchievementMonth', order: 'order'}"
              @row-click="queryEdit"
            >
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left" inline class="demo-table-expand">
                    <el-table :data="props.row.recordList1" border>
                      <el-table-column
                        v-for="item in tableHead1"
                        :key="item.property"
                        :label="item.label"
                        :width="item.width"
                        :property="item.property"
                        :fixed="item.fixed"
                        sortable
                      >
                        <template slot-scope="scope">{{scope.row[item.property]}}</template>
                      </el-table-column>
                    </el-table>
                    <!-- </el-form-item> -->
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column
                v-for="item in tableHead2"
                :key="item.property"
                :label="item.label"
                :property="item.property"
                :width="item.width"
                sortable
                :fixed="item.fixed"
              >
                <template slot-scope="scope">{{scope.row[item.property]}}</template>
              </el-table-column>
              <!-- <el-table-column label="交费日期" prop="chargeDate" sortable></el-table-column>
              <el-table-column label="应收月" prop="chargeMonth" sortable></el-table-column>-->
              <!-- <el-table-column prop="name" width="180" fixed="right" label="操作">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteInfo(scope.$index,tableData)"
                    type="danger"
                    size="mini"
                  >删除</el-button>
                  <el-button type="primary" size="mini" @click="editorBtn(scope.row)">编辑</el-button>
                </template>
              </el-table-column>-->
            </el-table>
            <el-pagination background layout="prev, pager, next" :total="wholeNumber" @current-change="current_change" :current-page="currentPage" :page-size="pageSize"></el-pagination>
            <div class="button">
              <el-button type="primary" size="mini">导出Excel</el-button>
              <el-button type="primary" size="mini" :disabled="disabled" @click="look_edit" ref="look_edit">查看/编辑</el-button>
            </div>
          </form>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      everyCheck: "query",
      branchCheck: false,
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
      date1: "",
      date2: "",
      monthCheck: false,
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
      isCheck: false,
      isCheckOpt: [
        {
          value: "已核佣"
        },
        {
          value: "未核佣"
        }
      ],
      isChecked: "已核佣",
      specifyInsuranceCompanyCheck: false,
      specifyInsuranceCompanyChecked: "指定保险公司",
      specifyInsuranceCompanyCheckOpt: [
        {
          value: "指定保险公司"
        },
        {
          value: "非指定保险公司"
        }
      ],
      insuranceCompanyCheck: false,
      insuranceCompanyCheckOpt: [
        {
          value: "工银安盛(寿)"
        },
        {
          value: "其他公司"
        }
      ],
      insuranceCompanyChecked: "工银安盛(寿)",
      isAllCheck: false,
      contractorCheck: false,
      contractorChecked: "不区分",
      contractorCheckOpt: [
        {
          value: "不区分"
        },
        {
          value: "区分"
        }
      ],
      identifyCheck: false,
      identifyChecked: "姓名",
      identifyCheckOpt: [
        {
          value: "姓名"
        },
        {
          value: "身份证"
        },
        {
          value: "电话号码"
        }
      ],
      identifyInput: "%",
      yearCheck: false,
      yearChecked: "1",
      timesCheck: false,
      timesCheck: false,
      timesChecked: "1",
      receiptCheck: false,
      receiptType: "未交回",
      receiptTypeOpt: [
        {
          value: "未交回"
        },
        {
          value: "已交回"
        }
      ],
      beginTimeCheck: false,
      timeSelected: "",
      queryCheck: false,
      queryChecked: "保单号码",
      queryCheckOpt: [
        {
          value: "保单号码"
        },
        {
          value: "保单编号"
        }
      ],
      queryCheckInput: "%",
      accountStatus: false,
      accountStatusSelected: "预支",
      accountStatusSelectOpt: [
        {
          value: "预支"
        },
        {
          value: "透支"
        }
      ],
      accountsTimeCheck: false,
      accountsTime: "",
      statusCheck: false,
      statusChecked: "待平",
      statusCheckOpt: [
        {
          value: "待平"
        },
        {
          value: "未平"
        }
      ],
      whichMonthCheck: false,
      whichMonthChecked: "无平衡月份",
      whichMonthCheckOpt: [
        {
          value: "无平衡月份"
        },
        {
          value: "平衡月份"
        }
      ],
      MonthSelected: "",
      whichNumber: "",
      wholeNumber: 10,
      checked: false,
      wholeInsuranceMoney: "100000000.00",
      tableData: [
        {
          AchievementMonth: "2015-12",
          chargeDate: "2015-12-03",
          chargeMonth: "2015-12",
          recordList1: [
            {
              insuranceName: "信泰百万重疾",
              spendTimes: "0101",
              spendPeriod: "20"
            },
            {
              insuranceName: "信泰百万重疾",
              spendTimes: "0101",
              spendPeriod: "21"
            }
          ]
        },
        {
          AchievementMonth: "2018-12",
          chargeDate: "2018-12-03",
          chargeMonth: "2018-12",
          recordList1: [
            {
              insuranceName: "信泰百万重疾",
              spendTimes: "0101",
              spendPeriod: "20"
            },
            {
              insuranceName: "信泰百万重疾",
              spendTimes: "0101",
              spendPeriod: "21"
            }
          ]
        },
        {
          AchievementMonth: "2018-12",
          chargeDate: "2018-12-03",
          chargeMonth: "2018-12",
          recordList1: [
            {
              insuranceName: "信泰百万重疾",
              spendTimes: "0101",
              spendPeriod: "20"
            },
            {
              insuranceName: "信泰百万重疾",
              spendTimes: "0101",
              spendPeriod: "21"
            }
          ]
        },
        {
          AchievementMonth: "2018-12",
          chargeDate: "2018-12-03",
          chargeMonth: "2018-12",
          recordList1: [
            {
              insuranceName: "信泰百万重疾",
              spendTimes: "0101",
              spendPeriod: "20"
            },
            {
              insuranceName: "信泰百万重疾",
              spendTimes: "0101",
              spendPeriod: "21"
            }
          ]
        },
        {
          AchievementMonth: "2018-12",
          chargeDate: "2018-12-03",
          chargeMonth: "2018-12",
          recordList1: [
            {
              insuranceName: "信泰百万重疾",
              spendTimes: "0101",
              spendPeriod: "20"
            },
            {
              insuranceName: "信泰百万重疾",
              spendTimes: "0101",
              spendPeriod: "21"
            }
          ]
        },
        {
          AchievementMonth: "2018-12",
          chargeDate: "2018-12-03",
          chargeMonth: "2018-12",
          recordList1: [
            {
              insuranceName: "信泰百万重疾",
              spendTimes: "0101",
              spendPeriod: "20"
            },
            {
              insuranceName: "信泰百万重疾",
              spendTimes: "0101",
              spendPeriod: "21"
            }
          ]
        }
      ],
      tableHead1: [
        { label: "险种名称 /", property: "insuranceName", width: "100" },
        { label: "年度缴次", property: "spendTimes", width: "100" },
        { label: "交费年期", property: "spendPeriod", width: "" }
        // {label: '操作',property: 'oper', fixed: 'right', width:'200',minWidth: '140px',
        //     oper: [
        //         { name: '删除'},
        //         { name: '查看/编辑'}
        //     ]
        // }
      ],
      tableHead2: [
        { label: "计绩年月 /", property: "AchievementMonth", width: "100" },
        { label: "缴费日期", property: "chargeDate", width: "100" },
        { label: "应收月", property: "chargeMonth", width: "" }
      ],
      dialogTableVisible: false,
      gridData: [
        {
          InsuranceType: "2016-05-02",
          chargeTime: "王小虎",
          ChargePeriod: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      // tableData: [
      //   {
      //     id: "12987122",
      //     name: "好滋好味鸡蛋仔",
      //     category: "江浙小吃、小吃零食",
      //     desc: "荷兰优质淡奶，奶香浓而不腻",
      //     address: "上海市普陀区真北路",
      //     shop: "王小虎夫妻店",
      //     shopId: "10333"
      //   },
      //   {
      //     id: "12987123",
      //     name: "好滋好味鸡蛋仔",
      //     category: "江浙小吃、小吃零食",
      //     desc: "荷兰优质淡奶，奶香浓而不腻",
      //     address: "上海市普陀区真北路",
      //     shop: "王小虎夫妻店",
      //     shopId: "10333"
      //   },
      //   {
      //     id: "12987125",
      //     name: "好滋好味鸡蛋仔",
      //     category: "江浙小吃、小吃零食",
      //     desc: "荷兰优质淡奶，奶香浓而不腻",
      //     address: "上海市普陀区真北路",
      //     shop: "王小虎夫妻店",
      //     shopId: "10333"
      //   },
      //   {
      //     id: "12987126",
      //     name: "好滋好味鸡蛋仔",
      //     category: "江浙小吃、小吃零食",
      //     desc: "荷兰优质淡奶，奶香浓而不腻",
      //     address: "上海市普陀区真北路",
      //     shop: "王小虎夫妻店",
      //     shopId: "10333"
      //   }
      // ]
      temp: "",
      disabled:true,
      pageSize:2,
      currentPage:1,

    };
  },

  components: {},

  computed: {},

  mounted:function(){
    this.wholeNumber=this.tableData.length;
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSelectedChange: function(value) {
      if (value[value.length - 1] == "不区分") {
        //如果点击的是不区分的选项，就将其他选项去除
        value.splice(0, value.length - 1);
      } else if (value.indexOf("不区分") != -1) {
        //点击的是其他选项，若是内部含有不区分的选项，就将不区分的选项去除,注意这里的indexOf的O是大写的，真是烦人
        value.splice(value.indexOf("不区分"), 1); //注意这里的indexOf的O是大写的，真是烦人
      }
    },
    handleChange(value) {
      console.log(value);
    },
    query() {
      this.everyCheck = "list";
    },
    look_edit() {
      console.log(this.temp);
      this.$router.push({
        path: "/user/lookEdit",
        query: { information: this.temp }
      });
    },
    getDetails(row) {
      this.dialogTableVisible = true;
      //将Ajax查询到的数据循环赋值给表格
      // var data=[];
      // for(var k=0;k<row.length;k++){
      //   var obj={};
      //   obj.InsuranceType=row[k].AchievementMonth;
      //   obj.chargeTime=row[k].chargeDate;
      //   obj.ChargePeriod=row[k].chargeMonth;
      //   data[k]=obj;
      // }
      // this.gridData=data;
      var data = [];
      var obj = {};
      obj.InsuranceType = row.AchievementMonth;
      obj.chargeTime = row.chargeDate;
      obj.ChargePeriod = row.chargeMonth;
      data[0] = obj;
      this.gridData = data;
      //这里实现末尾添加而不是覆盖原来的数据，是否需要将原来的数据写入到新数组，然后将新数组再赋给原数组？
      // console.log(row.AchievementMonth);
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
      this.$router.push({
        path: "/user/lookEdit",
        query: { address: row.address }
      });
    },
    queryEdit(row,index) {
      this.temp = row;//row是一行的数据
      // console.log(row);
      // console.log(this.tableData.indexOf(row));
      //this.tableData.indexOf(row)可以获取当前点击行的索引
      // console.log(this.disabled);
      this.whichNumber=this.tableData.indexOf(row)+1;
      this.disabled=false;
      //间接修改disabled绑定的disabled，实现间接修改的目的
      // this.$refs.look_edit.disabled=false;
      //直接修改disabled的值，会产生警告，所以采用了修改disabled绑定的disabled，实现间接修改的目的
      // this.tableData.splice(this.tableData.indexOf(row),1);
      //这个是根据行号进行删除的操作
    },
    current_change(currentPage){
      this.currentPage=currentPage;
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../../style/reset.css";
.title {
  display: inline-block;
  width: 200px;
  text-align: right;
  padding: 10px;
}
.content {
  display: inline-block;
}
.select {
  width: 200px;
}
fieldset {
  border: solid 1px rgba(192, 192, 192, 0.603);
  padding: 5px 0px 20px 0px;
  margin: 5px 50px 30px 50px; //顺序为上、右、下、左
  .title {
    margin-left: -50px;
  }
}
#button {
  width: 100px;
  margin-left: 200px;
}
.message {
  margin: 20px;
}
span {
  padding: 20px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.button {
  position: fixed;
  bottom: 40px;
  right: 20px;
}
form {
  margin-left: 20px;
  margin-right: 20px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-pagination {
  margin-top: 10px;
}
</style>