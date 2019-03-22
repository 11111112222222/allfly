/<!-- 代理险种费用率打印 -->
<template>
  <div class="page" style="height:100%">
    <header>
      <dl>
        <dt>代理险种费用率打印</dt>
      </dl>
    </header>
    <div class="tabContent">
      <form action>
        <div>
          <div class="title">选择保险公司</div>
          <div class="content">
            <el-checkbox disabled v-model="companyChecked" class="checkbox"></el-checkbox>
            <el-select size="mini" v-model="companySelected" style="width:410px;">
              <el-option v-for="item in company" :key="item.value" :value="item.value"></el-option>
            </el-select>
          </div>
        </div>
        <div>
          <div class="title">费率参数名称</div>
          <div class="content">
            <el-checkbox disabled v-model="moneyParameterNameChecked" class="checkbox"></el-checkbox>
            <el-select size="mini" v-model="moneyParameterNameSelected">
              <el-option
                v-for="item in moneyParameterName"
                :key="item.moneyParameterName"
                :value="item.value"
              ></el-option>
            </el-select>&nbsp;&nbsp;
            <el-select
              disabled
              size="mini"
              v-model="distinguishSelected"
              collapse-tags
            >
              <el-option v-for="item in distinguish" :key="item.value" :value="item.value"></el-option>
            </el-select>
          </div>
        </div>
        <div>
          <div class="title">商品名称代号</div>
          <div class="content">
            <el-checkbox v-model="goodsChineseChecked" class="checkbox"></el-checkbox>
            <el-select size="mini" v-model="goodsChineseSelected" @change="getChange">
              <el-option v-for="item in goodsChinese" :key="item.value" :value="item.value"></el-option>
            </el-select>
            <el-input v-model="input" placeholder="请输入内容" style="width:200px"></el-input>
          </div>
        </div>
        <div>
          <div class="title">险种类别</div>
          <div class="content">
            <el-checkbox v-model="insuranceTypeChecked" class="checkbox"></el-checkbox>
            <el-select size="mini" v-model="insuranceTypeSelected">
              <el-option v-for="item in insuranceType" :key="item.value" :value="item.value"></el-option>
            </el-select>
          </div>
        </div>
        <div>
          <div class="title">商品启售期间</div>
          <div class="content">
            <el-checkbox v-model="dateChecked" class="checkbox"></el-checkbox>
            <el-date-picker
              v-model="dateSelected"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </div>
        </div>
        <div>
          <div class="title">是否停售</div>
          <div class="content">
            <el-checkbox v-model="stopChecked" class="checkbox"></el-checkbox>
            <el-select size="mini" v-model="stopSelected">
              <el-option v-for="item in stop" :key="item.value" :value="item.value"></el-option>
            </el-select>
          </div>
        </div>
        <div>
          <div class="title">打印年期</div>
          <div class="content">
            <el-checkbox v-model="yearPeriodChecked" disabled class="checkbox"></el-checkbox>
            <el-select size="mini" v-model="yearPeriodSelected">
              <el-option v-for="item in yearPeriod" :key="item.value" :value="item.value"></el-option>
            </el-select>
          </div>
        </div>
        <el-button type="primary" class="searchBtn">生成报表预览</el-button>
      </form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      companyChecked: true,
      companySelected: "工银安盛人寿保险有限公司湖北分公司",
      company: [
        {
          value: "工银安盛人寿保险有限公司湖北分公司"
        },
        {
          value: "光大永明人寿保险有限公司湖北分公司"
        }
      ],
      moneyParameterNameChecked: true,
      moneyParameterNameSelected: "首/续年佣金",
      moneyParameterName: [
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
        },
        {
          value: "核发首/续年佣金"
        },
        {
          value: "内部标准保费折标"
        },
        {
          value: "CFYC"
        },
        {
          value: "继续率换算系数"
        }
      ],
      distinguishSelected: "不区分",
      distinguish: "不区分",
      goodsChineseChecked: false,
      goodsChineseSelected: "商品中文名称",
      goodsChinese: [
        {
          value: "商品中文名称"
        },
        {
          value: "商品英文代码"
        }
      ],
      input:"商品中文名称",
      insuranceTypeChecked:false,
      insuranceTypeSelected:"货物运输保险",
      insuranceType: [
        {
          value: "货物运输保险"
        },
        {
          value: "健康险长期"
        }
      ],
      dateSelected:"",
      dateChecked:false,
      stopChecked:false,
      stopSelected:"销售中",
      stop:[
        {
          value: "销售中"
        },
        {
          value: "已停售"
        },
        {
          value: "全部显示"
        }
      ],
      yearPeriodChecked:true,
      yearPeriodSelected:"01~10",
      yearPeriod:[
        {
          value: "01~10"
        },
        {
          value: "11~20"
        },
        {
          value: "21~30"
        }
      ],
    };
  },
  components: {},

  methods: {
    getChange(value){
        this.input=value;
        // console.log(value);
    }
 
  }
};
</script>

<style scoped lang="scss">
@import "../../../../style/reset.css";
header {
  margin: 40px 0px 20px 100px;
}
.tabContent {
  position: relative;
  text-align: left;
  padding: 0 30px;
  // height: 100%;
  // overflow: scroll;
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
  border: 1px solid silver;
}
// legend {
//     padding: .5em;
//     border: 0;
//     width: auto;
// }
.searchBtn {
  width: 100px;
  margin-top: 20px;
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
