<!-- 继续率重新组织 -->
<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="继续率重新组织" name="RateReorganisation">
        <form>
          <fieldset>
            <legend>继续率重新组织</legend>
            <div id="rateFrame">
              <p>分支机构</p>
              <span>继续率月份</span>
              <div class="block">
                <el-date-picker v-model="value" type="month" placeholder="选择月" size="mini" class="select"></el-date-picker>
              </div>
              <br>
              <el-button id="reCalculate" type="primary" plain size="mini">重新计算</el-button>
              <el-button id="cancel" type="warning" plain size="mini">取消</el-button>
              <br>
            </div>
          </fieldset>
          <el-button id="queryCount" type="primary" plain size="mini" @click="queryCount">继续率查询统计</el-button>
        </form>
      </el-tab-pane>
      <el-tab-pane label="继续率查询统计" name="queryCount">
        <div class="left">
          <p>继续率月份</p>
          <div class="block">
            <el-date-picker
              v-model="value"
              class="select"
              type="month"
              placeholder="选择月"
              size="mini"
              style="width:200px"
            ></el-date-picker>
          </div>
          <p>计算跨度</p>
          <div class="select">
            <el-select
            class="select"
              size="mini"
              v-model="branchSelected"
              collapse-tags
              placeholder="请选择"
              @change="handleSelectedChange"
              id="calculateSelected"
            >
              <el-option v-for="item in calculateOpt" :key="item.value" :value="item.value"></el-option>
            </el-select>
          </div>
          <p>继续率类型</p>
          <div class="select">
            <el-select
            class="select"
              size="mini"
              v-model="rateTypeSelected"
              collapse-tags
              placeholder="请选择"
              @change="handleSelectedChange"
              id="calculateSelected"
            >
              <el-option v-for="item in rateTypeOpt" :key="item.value" :value="item.value"></el-option>
            </el-select>
          </div>
          <p style="padding-bottom:80px;">分支机构节点</p>
          <p>对象</p>
          <div class="select">
            <el-select
            class="select"
              size="mini"
              v-model="objectSelected"
              collapse-tags
              placeholder="请选择"
              @change="handleSelectedChange"
              id="calculateSelected"
            >
              <el-option v-for="item in objectOpt" :key="item.value" :value="item.value"></el-option>
            </el-select>
          </div>
          <p>查询维度</p>
          <div class="select">
            <el-select
            class="select"
              size="mini"
              v-model="queryDimensionSelected"
              collapse-tags
              placeholder="请选择"
              @change="handleSelectedChange"
              id="calculateSelected"
            >
              <el-option v-for="item in queryDimensionOpt" :key="item.value" :value="item.value"></el-option>
            </el-select>
          </div>
          <el-button type="primary" plain size="mini">查询</el-button>
        </div>
        <div class="right">
          <p>记录标识：{{number}}/{{all}}</p>
          <el-table
            ref="singleTable"
            :data="tableData"
            @current-change="handleCurrentChange"
            border
            height="500"
            style="width: 100%"
          >
            <el-table-column type="index" width="50" label="索引"></el-table-column>
            <el-table-column property="date" label="继续率发生月份" width="120"></el-table-column>
            <el-table-column property="company" label="单位" id=""></el-table-column>
            <el-table-column property="rank" label="职级" id=""></el-table-column>
            <el-table-column property="number" label="员工编号" id=""></el-table-column>
            <el-table-column property="name" label="姓名" id=""></el-table-column>
            <el-table-column property="shouldCost" label="应收继续保费" id=""></el-table-column>
            <el-table-column property="realCost" label="实收继续保费" id=""></el-table-column>
            <el-table-column property="R13" label="R13" width="250" id=""></el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button type="primary" id="table-content" size="mini">Excel导出</el-button>
            <el-button type="primary" size="mini">所选机构保单明细导出</el-button>
            <el-button type="primary" size="mini" style="float:right">保单明细</el-button>
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
      value: "", //月份选择接收容器
      activeName: "RateReorganisation",
      calculateOpt: [
        {
          value: "年度"
        },
        {
          value: "季度"
        },
        {
          value: "月度"
        },
        {
          value: "星期度"
        }
      ],
      branchSelected: "年度",
      rateTypeOpt: [
        {
          value: "R13"
        },
        {
          value: "R12"
        },
        {
          value: "R11"
        }
      ],
      rateTypeSelected: "R13",
      objectOpt: [
        {
          value: "个人"
        },
        {
          value: "团队"
        },
        {
          value: "公司"
        }
      ],
      objectSelected: "个人",
      queryDimensionOpt: [
        {
          value: "个人"
        },
        {
          value: "团队"
        },
        {
          value: "公司"
        }
      ],
      queryDimensionSelected: "个人",
      number: 1, //列表中选择的第几项
      all: 100, //列表中总共有多少项
      tableData: [
        {
          date: "2016-05-02",
          company: "航特",
          rank: "总裁",
          number: "111111",
          name: "王小虎",
          shouldCost: "100000",
          realCost: "10000",
          R13: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      currentRow: null
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    queryCount() {
      this.activeName = "queryCount";
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../../style/reset.css";
#rateFrame {
  margin: 0px 40px 0px 40px;
}
span {
  margin-right: 10px;
}
.block {
  display: inline-block;
}
#recalculate {
  margin-left: 200px;
  margin-top: 30px;
}
#cancel {
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom:10px;
}
#queryCount {
  margin-left: 100px;
  margin-top: 20px;
  margin-bottom:10px;
}
.left {
  float: left;
  // display: inline-block;
  width: 270px;
  margin-left: 30px;
}
.right {
  display: inline-block;
}
p {
  margin: 0px;
  padding: 0px;
}
.select {
  margin-top: 3px;
  margin-bottom: 10px;
}
</style>