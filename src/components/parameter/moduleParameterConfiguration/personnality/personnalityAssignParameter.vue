<!-- 人资作业参数 -->
<template>
  <div>
    <div id="main">
      <header>
        <dl>
          <dt>人资作业参数管理</dt>
        </dl>
      </header>
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="民族" name="first">
          <el-table
            ref="singleTable"
            :data="tableData1"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%;height:250px;overflow:auto;"
            border
          >
            <el-table-column type="index" width="50" label="ID"></el-table-column>
            <el-table-column property="insuranceStateName" label="保单状态名称" width="120"></el-table-column>
            <el-table-column property="remark1" label="说明"></el-table-column>
          </el-table>
          <fieldset>
            <legend>说明</legend>
          </fieldset>
          <div id="tableBottomButton">
            <el-button type="danger" disabled class="lf">移 除</el-button>
            <el-button type="primary" disabled class="rt">新 增</el-button>
            <el-button type="primary" class="rt">编 辑</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="上传" name="second">
          <fieldset>
            <legend>上传限制</legend>
            <div class="ridio">
              <el-radio v-model="radio" label="1">全 局</el-radio>
              <el-radio v-model="radio" label="2">自 订</el-radio>
            </div>
            <div class="line">
              <div class="title">
                <span>个人照片大小不大于:</span>
              </div>
              <div class="content">
                <el-input v-model="fiveHundred" disabled placeholder="500"></el-input>
                <el-input v-model="eightHundred" disabled placeholder="800"></el-input>
                <span>KB</span>
              </div>
            </div>
            <div class="line">
              <div class="title">
                <span>个人照片大小不大于:</span>
              </div>
              <div class="content">
                <el-input v-model="twentyHundred" disabled placeholder="2048"></el-input>
                <el-input v-model="twoHundred" disabled placeholder="200"></el-input>
                <span>KB</span>
              </div>
            </div>
            <div class="line">
              <div class="title">
                <span>个人照片大小不大于:</span>
              </div>
              <div class="content">
                <el-input v-model="input1" placeholder="750" class="input1"></el-input>
                <el-input v-model="eightHundred" disabled placeholder="800"></el-input>
                <span>KB</span>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>设置结果</legend>
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="setResult"></el-input>
          </fieldset>
          <div id="tableBottomButton">
            <el-button type="primary">取 消</el-button>
            <el-button type="primary">应 用</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="经营" name="third">
          <el-table
            ref="singleTable"
            :data="tableData3"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%;height:250px;overflow:auto;"
            border
          >
            <el-table-column property="EnglishCode" label="英文代码" width="120"></el-table-column>
            <el-table-column property="businessTypeName" label="经营类型名称"></el-table-column>
          </el-table>
          <fieldset>
            <legend>说明</legend>
            <el-input type="textarea" :rows="3" placeholder="" v-model="instruction1"></el-input>
          </fieldset>
          <div id="tableBottomButton">
            <el-button type="danger" class="lf">移除</el-button>
            <el-button type="primary" class="rt">编辑</el-button>
            <el-button type="primary" class="rt">新增</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="职级变迁" name="fourth">
          <el-table
            ref="singleTable"
            :data="tableData4"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%;height:250px;overflow:auto;"
            border
          >
            <el-table-column type="index" width="50" label="ID"></el-table-column>
            <el-table-column property="changeReason" label="变迁原因"></el-table-column>
          </el-table>
          <fieldset>
            <legend>说明</legend>
            <el-input type="textarea" :rows="3" placeholder v-model="instruction2"></el-input>
          </fieldset>
          <div id="tableBottomButton">
            <el-button type="danger" class="lf">移除</el-button>
            <el-button type="primary" class="rt">编辑</el-button>
            <el-button type="primary" class="rt">新增</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="证件类型" name="fifth">
            <el-table
            ref="singleTable"
            :data="tableData5"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%;height:250px;overflow:auto;"
            border
          >
            <el-table-column property="IDEnglish" label="英文代码" width="120"></el-table-column>
            <el-table-column property="IDChinese" label="中文名称"></el-table-column>
          </el-table>
          <fieldset>
            <legend>说明</legend>
            <el-input type="textarea" :rows="3" placeholder v-model="instruction3"></el-input>
          </fieldset>
          
          <div id="tableBottomButton">
            <el-button type="danger" class="lf">移除</el-button>
            <el-button type="primary" class="rt">编辑</el-button>
            <el-button type="primary" class="rt">新增</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="佣金制度" name="sixth">
            <el-table
            ref="singleTable"
            :data="tableData6"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%;height:250px;overflow:auto;"
            border
          >
            <el-table-column property="commisionEnglish" label="英文代码" width="120"></el-table-column>
            <el-table-column property="commisionChinese" label="中文名称" width="120"></el-table-column>
            <el-table-column property="createdate" label="创建日期"></el-table-column>
          </el-table>
          <fieldset>
            <legend>说明</legend>
            <el-input type="textarea" :rows="3" placeholder v-model="instruction3"></el-input>
          </fieldset>
          
          <div id="tableBottomButton">
            <el-button type="danger" class="lf">移除</el-button>
            <el-button type="primary" class="rt">编辑</el-button>
            <el-button type="primary" class="rt">新增</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="教育程度" name="seventh">
            <el-table
            ref="singleTable"
            :data="tableData7"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%;height:250px;overflow:auto;"
            border
          >
            <el-table-column property="educateEnglish" label="英文代码" width="120"></el-table-column>
            <el-table-column property="educateName" label="中文名称" width="120"></el-table-column>
            <el-table-column property="educateDate" label="创建日期"></el-table-column>
          </el-table>
          <fieldset>
            <legend>说明</legend>
            <el-input type="textarea" :rows="3" placeholder v-model="instruction3"></el-input>
          </fieldset>
          
          <div id="tableBottomButton">
            <el-button type="danger" class="lf">移除</el-button>
            <el-button type="primary" class="rt">编辑</el-button>
            <el-button type="primary" class="rt">新增</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="文档信息类型" name="eighth">
            <el-table
            ref="singleTable"
            :data="tableData8"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%;height:250px;overflow:auto;"
            border
          >
          <el-table-column property="fileMessageID" label="ID" width="120"></el-table-column>
            <el-table-column property="fileMessageTypeName" label="文档信息类型名称"></el-table-column>
          </el-table>
          <fieldset>
            <legend>说明</legend>
            <el-input type="textarea" :rows="3" placeholder v-model="instruction3"></el-input>
          </fieldset>
          
          <div id="tableBottomButton">
            <el-button type="danger" class="lf">移除</el-button>
            <el-button type="primary" class="rt">编辑</el-button>
            <el-button type="primary" class="rt">新增</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div id="BottomButton" class="rt">
        <el-button type="warning">关 闭</el-button>
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
        }
      ],
      tableData2: [
        {
          payType: "趸交",
          remark2: "0"
        }
      ],
      radio: "1",
      input1: "750",
      setResult:
        "人力资源模块现在采用自定义上传参数设置;个人照片大小不大于：800KB;单一上传文档/影像不大于：200KB;单一记录夹档总合不大于：800KB     ",
      fiveHundred: "500",
      eightHundred: "800",
      twentyHundred: "2048",
      twoHundred: "200",
      tableData3: [
        {
          EnglishCode: "zhishu",
          businessTypeName: "一级分支机构",
        },
        {
          EnglishCode: "qudao",
          businessTypeName: "渠道网点",
        },
        {
          EnglishCode: "jiameng",
          businessTypeName: "加盟协作",
        }
      ],
      instruction1: "",
      instruction2: "",
       instruction3: "",
      tableData4: [
        {
          changeReason: "入司",
        },
        {
          changeReason: "转正",
        },
        {
          changeReason: "加盟",
        },
        {
          changeReason: "复职",
        },
        {
          changeReason: "升职",
        },
        {
          changeReason: "降职",
        },
        {
          changeReason: "免职",
        },
        {
          changeReason: "辞职",
        }
      ],
      tableData5: [
        {
          IDEnglish: "shenfenzheng",
          IDChinese: "身份证"
        },
        {
          IDEnglish: "",
          IDChinese: "军官证"
        },
        {
          IDEnglish: "",
          IDChinese: "出生证"
        },
        {
          IDEnglish: "taibaozheng",
          IDChinese: "台胞证"
        },
        {
          IDEnglish: "passport",
          IDChinese: "护照"
        },
        {
          IDEnglish: "",
          IDChinese: "港澳通行证"
        }
      ],
      tableData6: [
        {
          commisionEnglish: "A",
          commisionChinese: "标准基本法",
          createdate: "2008-01-11"
        },
        {
          commisionEnglish: "B",
          commisionChinese: "内勤管理制",
          createdate: "2008-01-11"
        },
        {
          commisionEnglish: "C",
          commisionChinese: "基本法A制",
          createdate: "2008-01-11"
        }
      ],
      tableData7: [
        {
          educateEnglish: "A",
          educateName: "标准基本法",
          educateDate: "2008-01-11"
        },
        {
          educateEnglish: "B",
          educateName: "内勤管理制",
          educateDate: "2008-01-11"
        },
        {
          educateEnglish: "C",
          educateName: "基本法A制",
          educateDate: "2008-01-11"
        }
      ],
      tableData8: [
        {
            fileMessageID:"1",
          fileMessageTypeName: "银行账户",
        },
        {
            fileMessageID:"2",
          fileMessageTypeName: "代理人证",
        },
        {
            fileMessageID:"3",
          fileMessageTypeName: "经纪人证",
        },
        {
            fileMessageID:"4",
          fileMessageTypeName: "驾照",
        },
        {
            fileMessageID:"5",
          fileMessageTypeName: "保证金收据",
        },
        {
            fileMessageID:"11",
          fileMessageTypeName: "执业证号",
        },
        {
            fileMessageID:"12",
          fileMessageTypeName: "单号",
        },
        {
            fileMessageID:"14",
          fileMessageTypeName: "",
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
  height: 100vh;
  overflow-y: auto;
  position: relative;
  padding: 0 30px 30px 30px;
  header {
    margin-bottom: 10px;
    margin-left: -10px;
  }
  fieldset {
    padding-left: 20px;
    padding-bottom: 20px;
    margin: 20px 0px;
    .ridio {
      border-bottom: 1px solid #ddd;
      padding: 20px 0px 20px 240px;
    }
    .line {
      margin-top: 20px;
      .title {
        width: 200px;
        text-align: right;
        display: inline-block;
      }
      .content {
        display: inline-block;
        margin-left: 30px;
        .el-input {
          width: 60px;
          display: inline-block;
          text-align: left;
          margin-right: 20px;
        }
        .input1 /deep/ .el-input__inner {
          color: red;
        }
      }
    }
  }
  #tableBottomButton {
    margin-top: 10px;
    text-align: right;
  }
}
#BottomButton {
  display: block;
  position: absolute;
  top: 650px;
  right: 30px;
  text-align: right;
  margin-bottom: 100px;
}
</style>