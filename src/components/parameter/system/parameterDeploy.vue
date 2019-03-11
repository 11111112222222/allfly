<!-- 系统参数配置 -->
<template>
  <div id="main">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="企业图标" name="first" id="el-tab-pane1">
        <fieldset>
          <legend>登入页面图标</legend>
          <p>
            <img src="../../../common/images/loginPicture.png">
          </p>
        </fieldset>
        <fieldset>
          <legend>报表表头图标</legend>
          <p>
            <img src="../../../common/images/formHeader.png">
          </p>
        </fieldset>
        <el-button type="primary" plain class="button">应用</el-button>
        <el-button type="warning" plain class="button">取消</el-button>
      </el-tab-pane>
      <el-tab-pane label="注册" name="second" id="el-tab-pane2">
        <div>
          <div class="title">系统版本号：</div>
          <div class="content">合翔保险经济有限公司核心业务处理系统</div>
        </div>
        <div>
          <div class="title">启用状态：</div>
          <div class="content">已启用
            <a href="#" id="beginUse">启用模块内容</a>
            <!-- <p>已启用</p>
            <p><a href="#" id="beginUse">启用模块内容</a></p>-->
          </div>
        </div>
        <div>
          <div class="title">客户号：</div>
          <div class="content">1001-20080101-ABC</div>
        </div>
        <div>
          <div class="title">知识产权登记证号：</div>
          <div class="content">DGY-2008-0006</div>
        </div>
        <div>
          <div class="title">工作站授权数：</div>
          <div class="content">25/17
            <el-button type="primary" plain class="button" id="registDeploy">注册管理</el-button>
          </div>
        </div>
        <div>
          <div class="title">接入许可授权数：</div>
          <div class="content">83/25</div>
        </div>
        <div>
          <div class="title">注册给：</div>
          <div class="content">合翔保险经济有限公司</div>
        </div>
        <div>
          <div class="title">已授权分支机构：</div>
          <div class="content">
            <el-button type="primary" plain class="button">授权机构管理</el-button>
          </div>
        </div>
        <div>
          <div class="title">注册日期：</div>
          <div class="content">2018-01-11</div>
        </div>
        <div>
          <div class="title">系统维护方案：</div>
          <div class="content">云托管多机构运营型</div>
        </div>
        <div>
          <div class="title">导入服务厂商：</div>
          <div class="content">淞菱科技有限公司</div>
        </div>
        <div>
          <div class="title">系统开发商：</div>
          <div class="content">青岛淞菱科技有限公司</div>
        </div>
        <div class="bottomButton">
          <el-button type="primary" plain class="button">应用</el-button>
          <el-button type="warning" plain class="button">取消</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="保监局" name="third" id="el-tab-pane3">
        <el-table
          ref="singleTable"
          :data="tableData"
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 100%"
          border
        >
          <el-table-column type="index" width="50">序号</el-table-column>
          <el-table-column property="date" label="名称" width="120"></el-table-column>
          <el-table-column property="name" label="开通" width="120"></el-table-column>
          <el-table-column property="address" label="局长"></el-table-column>
          <el-table-column property="address" label="副局长"></el-table-column>
          <el-table-column property="address" label="地址"></el-table-column>
          <el-table-column property="address" label="邮编"></el-table-column>
          <el-table-column property="address" label="局长"></el-table-column>
          <el-table-column property="address" label="局长"></el-table-column>
        </el-table>
        <el-button type="primary" plain class="button">应用</el-button>
        <el-button type="warning" plain class="button">取消</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName2: "first",
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentRow: null

    };
  },

  components: {},

  computed: {},

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  }
};
</script>
<style lang='scss' scoped>
@import "../../../style/reset.css";

#main {
  padding: 20px;
  #el-tab-pane1 {
    text-align: center;
    fieldset {
      text-align: center;
    }
    .button {
      display: inline-block;
      margin: 10px;
    }
  }

  #el-tab-pane2 {
    margin-top: 20px;
    .title {
      display: inline-block;
      width: 200px;
      text-align: right;
      padding: 10px;
    }
    .content {
      display: inline-block;
    }
    .bottomButton {
      margin-left: 120px;
      margin-top: 20px;
      button {
        margin-left: 20px;
      }
    }
    #beginUse {
      color: #2a06f8;
      text-decoration: underline;
      padding-left: 10px;
    }
    #registDeploy {
      margin-left: 10px;
    }
  }

  #el-tab-pane3{
    text-align:center;
    .button{
      margin:10px;
    }
  }
}
</style>