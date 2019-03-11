<!-- 车险逐笔核佣检查 -->
<template>
  <div>
    <el-tabs v-model="carEvery" type="card" @tab-click="handleClick">
      <el-tab-pane label="查询" name="query">
        <form>
          <div>
            <div class="title">分支机构</div>
            <div class="content">
              <el-checkbox v-model="branchCheck" class="check"></el-checkbox>
              <el-select v-model="branchChecked" size="mini" placeholder="请选择">
                <el-option
                  v-for="item in brancCheckOpt"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-checkbox v-model="allCheck1" class="check">全选</el-checkbox>
            </div>
          </div>
          <div>
            <div class="title">保险公司</div>
            <div class="content">
              <el-checkbox v-model="companyCheck" class="check"></el-checkbox>
              <el-select v-model="companyChecked" size="mini" placeholder="请选择">
                <el-option
                  v-for="item in companyCheckOpt"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-checkbox v-model="allCheck2" class="check">全选</el-checkbox>
            </div>
          </div>
          <div>
            <div class="title">受理日期</div>
            <div class="content">
              <el-checkbox v-model="dateCheck" class="check"></el-checkbox>
              <el-date-picker
                size="mini"
                v-model="date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </div>
          </div>
          <div>
            <div class="title">是否核佣</div>
            <div class="content">
              <el-checkbox v-model="isCheck" class="check"></el-checkbox>
              <el-select v-model="isChecked" size="mini" placeholder="请选择">
                <el-option
                  v-for="item in isCheckOpt"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div>
            <div class="title">承揽人</div>
            <div class="content">
              <el-checkbox v-model="accepterCheck" class="check"></el-checkbox>
              <el-input
                size="mini"
                style="width:200px"
                placeholder="请输入内容"
                v-model="accepter"
                clearable
              ></el-input>
            </div>
          </div>
        </form>
        <el-button type="success" id="button" size="mini" @click="query">查询</el-button>
      </el-tab-pane>
      <el-tab-pane label="列表" name="list" style="margin:0 20px;">
        <div>
          <div>
            <div class="manyNote" style="padding-left:10px;padding-bottom:5px;">共：{{n}}条记录</div>
          </div>
        </div>
        <div>
          <el-table
            ref="multipleTable"
            highlight-current-row
            @current-change="handleCurrentChange"
            class="listTab"
            height="500"
            border
            :data="tableData3"
            tooltip-effect="dark"
            style="width: 95%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="保险公司" prop="company">
              <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
            </el-table-column>
            <el-table-column prop="InsuranceNumber" label="保单号码"></el-table-column>
            <el-table-column
              prop="InsuranceDate"
              min-width="200"
              label="出单日期"
              show-overflow-tooltip
            ></el-table-column>
          </el-table>
          <el-dialog title="核佣费率编辑" :visible.sync="dialogFormVisible" style="padding:5px;">
            <el-form :model="form">
              <el-form-item label="保险公司:" :label-width="formLabelWidth">
                <div>{{clickData.company}}</div>
              </el-form-item>
              <el-form-item label="保单号码:" :label-width="formLabelWidth">
                <div>{{clickData.InsuranceNumber}}</div>
              </el-form-item>
              <el-form-item label="受理日期:" :label-width="formLabelWidth">
                <div>天安财产保险股份有限公司恩施分公司</div>
              </el-form-item>
              <el-form-item label="核佣状态:" :label-width="formLabelWidth">
                <div style="color:red">未核</div>
              </el-form-item>
              <el-form-item label="计佣状态:" :label-width="formLabelWidth">
                <div style="color:red">未结算</div>
              </el-form-item>
              <el-form-item label="总保费:" :label-width="formLabelWidth">
                <div>天安财产保险股份有限公司恩施分公司</div>
              </el-form-item>
              <fieldset :label-width="formLabelWidth">
                <legend>交强险</legend>
                <el-form-item
                  label="收:"
                  :label-width="formLabelWidth"
                  style="display:inline-block;"
                >
                  <el-input v-model="form.compulsoryCollect" autocomplete="off" style="width:50%;"></el-input>
                </el-form-item>
                <el-form-item
                  label="支:"
                  :label-width="formLabelWidth"
                  style="display:inline-block;"
                >
                  <el-input v-model="form.compulsoryCost" autocomplete="off" style="width:50%;"></el-input>
                </el-form-item>
                <el-form-item label="保费:" :label-width="formLabelWidth">
                  <el-input v-model="form.compulsoryInsuranceMoney" autocomplete="off" style="width:80%;"></el-input>
                </el-form-item>
              </fieldset>
              <fieldset :label-width="formLabelWidth">
                <legend>商业险</legend>
                <el-form-item
                  label="收:"
                  :label-width="formLabelWidth"
                  style="display:inline-block;"
                >
                  <el-input v-model="form.commercialInsuranceCollect" autocomplete="off" style="width:50%;"></el-input>
                </el-form-item>
                <el-form-item
                  label="支:"
                  :label-width="formLabelWidth"
                  style="display:inline-block;"
                >
                  <el-input v-model="form.commercialInsuranceCost" autocomplete="off" style="width:50%;"></el-input>
                </el-form-item>
                <el-form-item label="保费:" :label-width="formLabelWidth">
                  <el-input v-model="form.commercialInsuranceMoney" autocomplete="off" style="width:80%;"></el-input>
                </el-form-item>
              </fieldset>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
        </div>
        <div class="bottom">
          <div class="bottomLeft">
            <el-button type="primary" size="mini">核佣</el-button>
            <el-button type="primary" size="mini">反核佣</el-button>
          </div>
          <div class="bottomRight">
            <el-button type="primary" size="mini">导出Excel</el-button>
            <el-button type="primary" size="mini" @click="getDetails">查看/编辑</el-button>
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
      carEvery: "query",
      branchCheck: false,
      branchChecked: "安徽分公司",
      brancChecked: "安徽分公司",
      brancCheckOpt: [
        {
          value: "安徽分公司"
        },
        {
          value: "湖北总公司"
        }
      ],
      allCheck1: false,
      companyCheck: false,
      companyChecked: "安盛天平(产)",
      companyCheckOpt: [
        {
          value: "安盛天平(产)"
        },
        {
          value: "天下太平"
        }
      ],
      dateCheck: false,
      date: "",
      isCheck: false,
      isChecked:"已核",
      isCheckOpt: [
        {
          value: "已核"
        },
        {
          value: "未核"
        }
      ],
      accepterCheck: false,
      accepter: "%",
      allCheck3: false,
      n: 10,
      tableData3: [
        {
          company: "天安财产保险股份有限公司恩施分公司",
          InsuranceNumber: "134564654154135415-4154156454563453413",
          InsuranceDate: "2018-03-29"
        },
        {
          company: "天安财产保险股份有限公司恩施分公司",
          InsuranceNumber: "134564654154135415-4154156454563453413",
          InsuranceDate: "2018-03-29"
        }
      ],
      multipleSelection: [],
      clickData: {}, //用于鼠标左键点击一行时存储点击的那一行的数据
      dialogFormVisible: false,
      form: {
        nacompulsoryCollect: "",
        compulsoryCost: "",
        compulsoryInsuranceMoney: "",
        commercialInsuranceCollect: "",
        commercialInsuranceCost: "",
        commercialInsuranceMoney: "",
      },
      formLabelWidth: "120px"
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    query() {
      this.carEvery = "list";
    },
    handleCurrentChange(row, val) {
      this.currentRow = val;
      this.clickData.company = row.company;
      this.clickData.InsuranceNumber = row.InsuranceNumber;
      this.clickData.InsuranceDate = row.InsuranceDate;
      console.log(this.clickData);
    },
    getDetails(row) {
      this.dialogFormVisible = true;
      // var data=[];
      // var obj={};
      // obj.InsuranceType=row.AchievementMonth;
      // obj.chargeTime=row.chargeDate;
      // obj.ChargePeriod=row.chargeMonth;
      // data[0]=obj;
      // this.gridData=data;
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
.check {
  margin-left: 10px;
}
#button {
  margin-top: 30px;
  margin-left: 250px;
}
.manyNote {
  display: inline-block;
}
.listTab {
  width: 100%;
  margin: 0 auto;
  overflow-y: scroll;
}
.bottom {
  width: 100%;
  position: relative;
  margin-top: 10px;
}
.bottomLeft {
  float: left;
  margin-left: 30px;
}
.bottomRight {
  float: right;
  margin-right: 30px;
}
</style>