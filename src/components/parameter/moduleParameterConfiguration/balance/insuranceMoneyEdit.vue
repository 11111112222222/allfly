<!-- 险种费用率编辑 -->
<template>
  <div id="main">
    <header>
      <dl>
        <dt>
          <i class="el-icon-back" @click="goBack"></i>
          {{insuranceType}} - 险种费率编辑
        </dt>
      </dl>
    </header>
    <div class="line">
      <div class="title">费率参数名称</div>
      <div class="content">
        <el-select v-model="moneyParameterNameSelected" placeholder="请选择">
          <el-option
            v-for="item in moneyParameterName"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="employMoneySelected" placeholder="请选择">
          <el-option
            v-for="item in employMoney"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>

    <fieldset>
      <legend>产生参数表</legend>
      <div class="line" style="margin-left:-30px;">
        <div class="title">年期/分档</div>
        <div class="content">
          <el-input-number
            v-model="num1"
            controls-position="right"
            @change="handleChange"
            :min="1"
            :max="10"
          ></el-input-number>
          <span>-</span>
          <el-input-number
            v-model="num2"
            controls-position="right"
            @change="handleChange"
            :min="1"
            :max="10"
          ></el-input-number>
          <b style="color:red;margin-left:40px;">交费年期0~0表示趸交</b>
        </div>
      </div>
    </fieldset>
    <div class="line">
      <div class="title">使用期间</div>
      <div class="content">
        <el-date-picker
          v-model="datePeriod"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
    </div>
    <div class="line">
      <div class="title">业绩考核</div>
      <div class="content">
        <el-checkbox v-model="achievementChecked" disabled>计入FYC</el-checkbox>
      </div>
    </div>
    <div class="line">
      <div class="title">参数说明</div>
      <div class="content">
        <el-input v-model="paramentRemark" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="line">
      <div class="title">参数值表</div>
      <div class="content">
        <div style="color:blue;border:1px solid #ddd;">险种基本因素</div>
      </div>
    </div>
    <div class="line">
      <div class="title"></div>
      <div class="content">
        <el-table :data="tableData" style="width: 100%;height:200px;" border>
          <el-table-column prop="year" label="年 度" width="180"></el-table-column>
          <el-table-column prop="moneyRate" label="费 率"></el-table-column>
        </el-table>
      </div>
    </div>
    <div id="button">
      <el-button type="warning" @click="goBack">取 消</el-button>
      <el-button type="primary">添 加</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      insuranceType: "建工险",
      moneyParameterNameSelected: "",
      moneyParameterName: [
        {
          value: "收项"
        },
        {
          value: "支项"
        },
        {
          value: "其他"
        }
      ],
      employMoneySelected: "",
      employMoney: [
        {
          value: "首/续年佣金"
        },
        {
          value: "销售奖金"
        },
        {
          value: "续年度服务津贴"
        },
        {
          value: "标准保费折标"
        },
        {
          value: "月度奖金"
        },
        {
          value: "特别奖金换算"
        },
        {
          value: "保险公司继续率换算洗漱"
        },
        {
          value: "代理合同佣金"
        }
      ],
      num1: 0,
      num2: 0,
      datePeriod: "",
      achievementChecked: true,
      paramentRemark: "",
      tableData: [
        {
          year: "1",
          moneyRate: "0"
        }
      ]
    };
  },

  components: {},

  computed: {},

  methods: {
    goBack() {
      history.go(-1);
    },
    handleChange() {}
  }
};
</script>
<style lang='scss' scoped>
@import "../../../../style/reset.css";
#main {
  header {
    margin-top: -20px;
    margin-bottom: 20px;
  }
  padding: 30px;
  overflow-y: auto;
}
.title {
  width: 200px;
  text-align: right;
  display: inline-block;
  margin-right: 20px;
}
.content {
  display: inline-block;
}
.line {
  margin-top: 10px;
}
fieldset {
  padding-bottom: 20px;
}
#button {
  margin-left: 220px;
  margin-top: 20px;
}
</style>