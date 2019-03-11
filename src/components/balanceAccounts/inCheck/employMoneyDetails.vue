<!-- 佣金详情 -->
<template>
  <div id="main">
    <header>
      <dl>
        <dt>
          <i class="el-icon-back" @click="goBack"></i> 佣金详情
        </dt>
      </dl>
    </header>
    <section>
      <div>佣金列表</div>
      <div id="left">
        <el-table :data="tableData1" style="width: 100%" border height="calc(100%)">
          <el-table-column
            :show-overflow-tooltip="true"
            prop="branchInstitution"
            label="分支机构"
            width="100"
          ></el-table-column>
          <el-table-column
            :show-overflow-tooltip="true"
            prop="commissionStart"
            label="计佣起"
            width="100"
          ></el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="commissionStop" label="计佣止"></el-table-column>
        </el-table>
      </div>
      <div id="right">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="薪资明细" name="salaryDetails">
            <el-table :data="tableData2" style="width: 100%" border height="calc(100%)">
              <el-table-column :show-overflow-tooltip="true" prop="agency" label="代理人" width="100"></el-table-column>
              <el-table-column
                :show-overflow-tooltip="true"
                prop="branchInstitution"
                label="分支机构"
                width="100"
              ></el-table-column>
              <el-table-column
                :show-overflow-tooltip="true"
                prop="commissionStart"
                label="计佣起"
                width="100"
              ></el-table-column>
              <el-table-column
                :show-overflow-tooltip="true"
                prop="commissionStop"
                label="计佣止"
                width="100"
              ></el-table-column>
              <el-table-column :show-overflow-tooltip="true" prop="payEmployMoney" label="支项佣金"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="保单明细" name="insuranceDetails">
            <el-table :data="tableData3" style="width: 100%" border height="calc(100%)">
              <el-table-column
                :show-overflow-tooltip="true"
                prop="insuranceCompany"
                label="保险公司"
                width="100"
              ></el-table-column>
              <el-table-column
                :show-overflow-tooltip="true"
                prop="insuranceNumber"
                label="保单号码"
                width="100"
              ></el-table-column>
              <el-table-column :show-overflow-tooltip="true" prop="dealDate" label="受理日期"></el-table-column>
              <el-table-column
                :show-overflow-tooltip="true"
                prop="compulsoryInsurance"
                label="交强保费"
                width="100"
              ></el-table-column>
              <el-table-column
                :show-overflow-tooltip="true"
                prop="branchCompulsoryInsurance"
                label="支项（交强）"
                width="100"
              ></el-table-column>
              <el-table-column
                :show-overflow-tooltip="true"
                prop="commercialInsurance"
                label="商业保费"
                width="100"
              ></el-table-column>
              <el-table-column
                :show-overflow-tooltip="true"
                prop="branchCialInsurance"
                label="支项（商业）"
                width="100"
              ></el-table-column>
              <el-table-column :show-overflow-tooltip="true" prop="contracter" label="承揽人"></el-table-column>
              <el-table-column :show-overflow-tooltip="true" prop="totalInsuranceMoney" label="总保费"></el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div id="bottomButton">
        <div id="leftButton">
          <el-button type="primary" size="mini">删除计佣结果</el-button>
        </div>
        <div id="bottomRightButton">
          <el-button type="primary" size="mini">薪资明细导出</el-button>
          <el-button type="primary" size="mini">保单明细导出</el-button>
          <el-button type="danger" size="mini" id="close">关 闭</el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName2: "salaryDetails",
      tableData1: [
        {
          branchInstitution: "无",
          commissionStart: "无",
          commissionStop: "无"
        },
        {
          branchInstitution: "无",
          commissionStart: "无",
          commissionStop: "无"
        }
      ],
      tableData2: [
        {
          agency: "无",
          branchInstitution: "无",
          commissionStart: "无",
          commissionStop: "无",
          payEmployMoney: "无"
        },
        {
          agency: "无",
          branchInstitution: "无",
          commissionStart: "无",
          commissionStop: "无",
          payEmployMoney: "无"
        }
      ],
      tableData3: [
        {
          insuranceCompany: "无",
          insuranceNumber: "保单号码总保费总保费总保费总保费总保费",
          dealDate: "无",
          compulsoryInsurance: "无",
          branchCompulsoryInsurance: "无",
          commercialInsurance: "无",
          branchCialInsurance: "无",
          contracter: "无",
          totalInsuranceMoney: "无"
        },
        {
          insuranceCompany: "无",
          insuranceNumber: "无",
          dealDate: "无",
          compulsoryInsurance: "无",
          branchCompulsoryInsurance: "无",
          commercialInsurance: "无",
          branchCialInsurance: "无",
          contracter: "无",
          totalInsuranceMoney: "无"
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    goBack() {
      history.go(-1);
    }
  }
};
</script>
<style lang='scss' scoped>
#main {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0px 30px 30px 30px;
  header {
    margin-top: 0px;
    margin-bottom: 20px;
    margin-left: -30px;
    background-color: #dddefe;
    height: 28px;
    line-height: 28px;
    padding-left: 10px;
  }
  section {
    position: absolute;
    top: 30px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    overflow-y: auto;
    padding: 10px 30px 0px 30px;
    #left {
      float: left;
      display: block;
      width: 30%;
      height: calc(100% - 100px);
      border: 1px solid #ddd;
      overflow: hidden;
    }
    #right {
      display: inline-block;
      width: 64%;
      height: calc(100% - 100px);
      border: 1px solid #ddd;
      margin-left: 10px;

      overflow: auto;
    }
    #bottomButton {
      margin-top: 10px;
      //   margin-bottom: 100px;
      #leftButton {
        width: 200px;
        float: left;
      }
      #bottomRightButton {
        margin-right: 60px;
        float: right;
        #close {
          margin-left: 50px;
        }
      }
    }
  }
}
</style>