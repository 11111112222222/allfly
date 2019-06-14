<!-- 应收查看 -->
<template>
  <div id="main">
    <header>
      <i class="el-icon-back" @click="goBack"></i>
      <span>应收查看</span>
    </header>
    <table>
      <tr>
        <td>投保人</td>
        <td>{{person.name}}</td>
        <td>出生日期</td>
        <td>{{person.date}}</td>
        <td>性别</td>
        <td>{{person.sex}}</td>
        <td>联系电话</td>
        <td>{{person.telephone}}</td>
      </tr>
      <tr>
        <td>联系地址</td>
        <td colspan="5">{{person.address}}</td>
        <td>邮编</td>
        <td>{{person.email}}</td>
      </tr>
    </table>
    <table>
      <tr>
        <td>保险公司</td>
        <td>{{person.insuranceCompany}}</td>
        <td>保单号码</td>
        <td>{{person.insuranceNumber}}</td>
        <td>应收编号</td>
        <td>{{person.shouldRecieveNumber}}</td>
      </tr>
      <tr>
        <td>交费方式</td>
        <td>{{person.spendType}}</td>
        <td>应收月份</td>
        <td>{{person.shouldRecieveMonth}}</td>
        <td>年度缴次</td>
        <td>{{person.spendTimes}}</td>
      </tr>
    </table>
    <el-table
      ref="singleTable"
      :data="person.tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
      max-height="400"
      border
    >
      <el-table-column type="index" width="50" label="序号"></el-table-column>
      <el-table-column property="insuranceTypeNumber" label="险种代码" width="120"></el-table-column>
      <el-table-column property="insuranceName" label="险种名称" width="120"></el-table-column>
      <el-table-column property="protectedMan" label="被保人" width="120"></el-table-column>
      <el-table-column property="effectiveDay" width="120" label="生效日期"></el-table-column>
      <el-table-column property="yearPeriod" label="年期" width="120"></el-table-column>
      <el-table-column property="yearSpendTimes" label="年度缴次" width="120"></el-table-column>
      <el-table-column property="coverage" label="保额" width="120"></el-table-column>
      <el-table-column property="unit" width="120" label="单位"></el-table-column>
      <el-table-column property="investMoney" label="投资保费" width="120"></el-table-column>
      <el-table-column property="orderMoney" label="保单保费"></el-table-column>
    </el-table>
    <table style="margin-top:20px;">
        <tr>
            <td rowspan="2">承揽类别</td>
            <td rowspan="2">{{person.whose}}</td>
            <td>承揽人A：</td>
            <td>{{person.accepterA}}</td>
            <td>承揽人B：</td>
            <td>{{person.accepterB}}</td>
            <td>承揽人C：</td>
            <td>{{person.accepterC}}</td>
        </tr>
        <tr>
            
            <td>保全员D：</td>
            <td>{{person.securerD}}</td>
            <td>收费员E：</td>
            <td>{{person.chargerE}}</td>
            <td>邮编：</td>
            <td>{{person.postCode}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {
        name: "小明",
        date: "1975-10-14",
        sex: "男",
        telephone: "13264569755",
        address: "湖北省北京市大水胡同",
        email: "46456456@qq.com",
        insuranceCompany: "广大永明（寿）",
        insuranceNumber: "2010202000064396",
        shouldRecieveNumber: "0301-2667",
        spendType: "年交",
        shouldRecieveMonth: "2020-02",
        spendTimes: "0301",
        tableData: [{
          insuranceTypeNumber: '0312',
          insuranceName: '光大永明',
          protectedMan: '陈明杨',
          effectiveDay: '2016-05-02',
          yearPeriod: '20',
          yearSpendTimes: '0301',
          coverage: '300',
          unit: '元',
          investMoney: '0.00',
          orderMoney: '2400.00',
        }, {
          insuranceTypeNumber: '0312',
          insuranceName: '光大永明',
          protectedMan: '陈明杨',
          effectiveDay: '2016-05-02',
          yearPeriod: '20',
          yearSpendTimes: '0301',
          coverage: '300',
          unit: '元',
          investMoney: '0.00',
          orderMoney: '2500.00',
        }],
        currentRow: null,
        whose:'个人件',
        accepterA:"周荣",
        accepterB:"",
        accepterC:"",
        securerD:"",
        chargerE:"",
        postCode:"",
      }
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    goBack() {
      history.go(-1);
    }
  }
};
</script>
<style lang='scss' scoped>
#main {
  header {
    font-size: 16px;
    // font-weight:bold;
    padding-left: 10px;
    background-color: #dddefe;
    height: 30px;
    line-height: 30px;
    span {
      margin-left: 10px;
    }
    margin-left: -20px;
    margin-right: -20px;
    margin-bottom: 10px;
  }
  padding: 0px 20px 20px 20px;
  width: 100%;
  table {
    width: 100%;
    border: 1px solid #ddd;
    td {
      border: 1px solid #ddd;
      padding: 5px;
      font-size: 16px;
    }
    td:nth-child(even) {
      color: blue;
    }
    td:nth-child(odd) {
      font-weight: bold;
    }
    margin-bottom: 20px;
  }
}
</style>