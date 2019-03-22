<!-- 保单作业参数 -->
<template>
  <div>
    <div id="main">
      <header>
        <dl>
          <dt>保单作业参数</dt>
        </dl>
      </header>
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="保单状态" name="first">
          <fieldset>
            <legend>说明</legend>
            <p>例如：1.受理件 2.承保件 3.续期件 4.契撒件 5.追佣件 6.变更件</p>
          </fieldset>
          <el-table
            ref="singleTable"
            :data="tableData1"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%;height:250px;overflow:auto;"
            border
          >
            <el-table-column type="index" width="50"  label="ID"></el-table-column>
            <el-table-column property="insuranceStateName" label="保单状态名称" width="120"></el-table-column>
            <el-table-column property="remark1" label="说明"></el-table-column>
          </el-table>
          <div id="tableBottomButton">
            <el-button type="danger" class="lf">移除</el-button>
            <el-button type="primary" class="rt">编辑</el-button>
            <el-button type="primary" class="rt">新增</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="缴费方式" name="second">
          <fieldset>
            <legend>说明</legend>
            <p>例如：0.趸交 1.年交 2.半年交 3.季交 4.月交</p>
          </fieldset>
          <el-table
            ref="singleTable"
            :data="tableData2"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%;height:250px;overflow:auto;"
            border
          >
            <el-table-column type="index" width="50"  label="ID"></el-table-column>
            <el-table-column property="payType" label="交费方式" width="120"></el-table-column>
            <el-table-column property="remark2" label="说明"></el-table-column>
          </el-table>
          <div id="tableBottomButton">
            <el-button type="danger" class="lf">移除</el-button>
            <el-button type="primary" class="rt">编辑</el-button>
            <el-button type="primary" class="rt">新增</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="险种类别" name="third">
          <fieldset>
            <legend>说明</legend>
            <p>例如：0.终身寿险 1.定期寿险 2.健康险 3.防癌险 4.年金险 5.伤害险 6.伤害医疗险</p>
          </fieldset>
          <el-table
            ref="singleTable"
            :data="tableData3"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%;height:250px;overflow:auto;"
            border
          >
            <el-table-column type="index" width="50"  label="ID"></el-table-column>
            <el-table-column property="insuranceType" label="险种类别" width="120"></el-table-column>
            <el-table-column property="remark3" label="说明" width="120"></el-table-column>
            <el-table-column property="flag" label="Flag"></el-table-column>
          </el-table>
          <div id="tableBottomButton">
            <el-button type="danger" class="lf">移除</el-button>
            <el-button type="primary" class="rt">编辑</el-button>
            <el-button type="primary" class="rt">新增</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="承揽型别" name="fourth">
          <fieldset>
            <legend>说明</legend>
            <p>例如：0.个人件 1.共同件 2.公司件</p>
          </fieldset>
          <el-table
            ref="singleTable"
            :data="tableData4"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%;height:250px;overflow:auto;"
            border
          >
            <el-table-column type="index" width="50"  label="ID"></el-table-column>
            <el-table-column property="hireTypeName" label="承揽型别名称" width="120"></el-table-column>
            <el-table-column property="remark4" label="备注" width="120"></el-table-column>
            <el-table-column property="order" label="order" width="120"></el-table-column>
            <el-table-column property="visible" label="visible"></el-table-column>
          </el-table>
          <div id="tableBottomButton">
            <el-button type="danger" class="lf">移除</el-button>
            <el-button type="primary" class="rt">编辑</el-button>
            <el-button type="primary" class="rt">新增</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="交费类型" name="fifth">
          <fieldset>
            <legend>说明</legend>
            <p>例如：0.现金（汇款） 1.支票 2.银行转账（信用卡/存簿） 3.其他</p>
          </fieldset>
          <el-table
            ref="singleTable"
            :data="tableData5"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%;height:250px;overflow:auto;"
            border
          >
            <el-table-column type="index" width="50"  label="ID"></el-table-column>
            <el-table-column property="payCategory" label="交费类别" width="120"></el-table-column>
            <el-table-column property="remark5" label="说明"></el-table-column>
          </el-table>
          <div id="tableBottomButton">
            <el-button type="danger" class="lf">移除</el-button>
            <el-button type="primary" class="rt">编辑</el-button>
            <el-button type="primary" class="rt">新增</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div id="BottomButton" class="rt">
        <el-button type="warning">取 消</el-button>
        <el-button type="primary">确 定</el-button>
        <el-button type="primary">应 用</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName2: "first",
      tableData1: [
        {
          insuranceStateName: "预收件",
          remark1: "40"
        },
        {
          insuranceStateName: "承保件",
          remark1: "41"
        },
        {
          insuranceStateName: "契撒件",
          remark1: "43"
        },
        {
          insuranceStateName: "停效件",
          remark1: "44"
        },
        {
          insuranceStateName: "失效件",
          remark1: "45"
        },
        {
          insuranceStateName: "解约件",
          remark1: "46"
        },
        {
          insuranceStateName: "终止件",
          remark1: "47"
        },
        {
          insuranceStateName: "新保",
          remark1: "49"
        },
        {
          insuranceStateName: "续保",
          remark1: "50"
        },
        {
          insuranceStateName: "承保件",
          remark1: "41"
        }
      ],
       tableData2: [
        {
          payType: "趸交",
          remark2: "0",
        },
        {
          payType: "年交",
          remark2: "12",
        },
        {
          payType: "半年交年交",
          remark2: "6",
        },
        {
          payType: "季交",
          remark2: "3",
        },
        {
          payType: "月交",
          remark2: "1",
        }
      ],
       tableData3: [
        {
          insuranceType: "人寿-非分红-定期寿险",
          remark3: "",
          flag: "0",
        },
        {
          insuranceType: "人寿-非分红-两全寿险",
          remark3: "",
          flag: "0",
        }
      ],
       tableData4: [
        {
          hireTypeName: "个人件",
          remark4: "",
          order: "0",
          visible: "1",
        },
        {
           hireTypeName: "电销件",
          remark4: "",
          order: "1",
          visible: "1",
        },
        {
           hireTypeName: "公司件",
          remark4: "",
          order: "2",
          visible: "1",
        }
      ],
       tableData5: [
        {
          payCategory: "银行划账",
          remark5: "",
        },
        {
          payCategory: "信用卡",
          remark5: "",
        },
        {
          payCategory: "支票",
          remark5: "",
        },
        {
          payCategory: "现金",
          remark5: "",
        }
      ],
      currentRow: null
    };
  },

  components: {},

  computed: {},

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../../../style/reset.css";
#main {
  position: relative;
  padding: 0 30px 30px 30px;
  header {
    margin-bottom: 10px;
    margin-left: -10px;
  }
  fieldset {
    padding-left: 20px;
    padding-bottom: 50px;
    margin: 20px 0px;
  }
  #tableBottomButton {
    margin-top: 10px;
  }
}
#BottomButton {
  position: absolute;
  top: 600px;
  right: 30px;
  text-align: right;
}
</style>