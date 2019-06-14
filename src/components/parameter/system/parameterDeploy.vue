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
        <div id="container">
          <div>
            <div class="title">系统版本号：</div>
            <div class="content">合翔保险经济有限公司核心业务处理系统</div>
          </div>
          <div>
            <div class="title">启用状态：</div>
            <div class="content">
              已启用
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
            <div class="content">
              25/17
              <el-button
                type="primary"
                plain
                class="button"
                id="registDeploy"
                @click="dialogTableVisible = true"
              >注册管理</el-button>
            </div>
          </div>
          <!-- 注册管理点击后显示的Dialog对话框 -->
          <el-dialog title="注册码" :visible.sync="dialogTableVisible">
            <div style="margin-bottom:10px;color:rgb(38, 230, 214)">
              <p>可以批量生成注册码，并且可以禁用或注销某个注册信息</p>
            </div>
            <el-table
              :data="gridData"
              border
              size="mini"
              height="250"
              :header-cell-style="{background:'rgb(38, 230, 214)',color:'white'}"
              highlight-current-row
            >
              <el-table-column type="index" sortable label="序号" width="50"></el-table-column>
              <el-table-column
                show-overflow-tooltip
                v-for="item in tableHead"
                :key="item.property"
                :property="item.property"
                :label="item.label"
                :width="item.property"
              >
                <template slot-scope="scope">{{scope.row[item.property]}}</template>
              </el-table-column>
            </el-table>
            <div id="button">
              <el-button type="primary" size="mini">导出Excel</el-button>
              <el-button type="primary" size="mini">启 用</el-button>
              <el-button type="warning" size="mini">禁 用</el-button>
              <el-button type="danger" size="mini">注 销</el-button>
              <el-button type="primary" size="mini">产生注册码</el-button>
              <el-button type="danger" size="mini">取 消</el-button>
            </div>
          </el-dialog>

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
              <el-button
                type="primary"
                plain
                class="button"
                @click="dialogTableVisible1=true"
              >授权机构管理</el-button>
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
        </div>
        <div class="bottomButton">
          <el-button type="primary" plain class="button">应用</el-button>
          <el-button type="warning" plain class="button">取消</el-button>
        </div>

        <!-- 授权机构管理点击后显示的Dialog对话框 -->
        <el-dialog title="已授权分支机构" :visible.sync="dialogTableVisible1" style="width:50%">
          <fieldset style="border:1px solid #eee" filterable>
            <legend>已授权分支机构</legend>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </fieldset>
        </el-dialog>
      </el-tab-pane>
      <el-tab-pane label="保监局" name="third" id="el-tab-pane3">
          <el-table
            ref="singleTable"
            :data="tableData"
            highlight-current-row
            style="width: 100%"
            border
            max-height="500"
          >
            <el-table-column type="index" width="50" label="序号"></el-table-column>
            <el-table-column
              v-for="item in tableHead1"
              :key="item.property"
              :property="item.property"
              :label="item.label"
              :width="item.width"
            >
              <template slot-scope="scope">
                <!-- <input type="image" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1638079650,2146947483&fm=27&gp=0.jpg" width="40px"> -->
                <div>{{scope.row[item.property]}}</div>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            hide-on-single-page
            :page-size="pageSize"
            :current-page.sync="currentPage"
            @current-change="currentChange"
            background
            layout="prev, pager, next"
            :total="total"
            style="float:left;margin-top:10px;"
          ></el-pagination>
          <!-- <img src="http://www.runoob.com/images/pulpit.jpg" alt="picture loading false" min-width="70" max-height="100%"> -->
          <el-button type="primary" plain class="button">应用</el-button>
          <el-button type="warning" plain class="button">取消</el-button>
      </el-tab-pane>
      <!-- <table>
        <tr>
          <td><img src="http://www.runoob.com/images/pulpit.jpg" max-width="100%" max-height="100%" width="100" height="auto"></td>
        </tr>
      </table>-->
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName2: "first",
      tableHead1: [
        { label: "名称", property: "bureauName", width: "100px" },
        { label: "开通", property: "isOpen", width: "100px" },
        { label: "局长", property: "director", width: "100px" },
        { label: "副局长", property: "deputyDirector", width: "100px" },
        { label: "地址", property: "address", width: "100px" },
        { label: "邮编", property: "zipCode", width: "100px" },
        { label: "电话", property: "phone", width: "100px" },
        { label: "传真", property: "fax", width: "100px" },
        { label: "备注", property: "remark" }
        // { label: "头像", property: "headPhoto" },
        // { label: "音乐", property: "music" }
      ],
      tableData: [
        {
          bureauName: "北京监管局",
          isOpen: "是",
          director: "",
          deputyDirector: "",
          address: "",
          zipCode: "",
          phone: "",
          fax: "",
          remark: ""
          // headPhoto: 'http://www.runoob.com/images/pulpit.jpg',
          // music:"../../../common/张学友 - 如果·爱.mp3"
        }
      ],
      currentRow: null,
      tableHead: [
        { label: "产生日期", property: "produceDate", width: "100px" },
        { label: "作者", property: "author", width: "100px" },
        { label: "注册码", property: "registerID", width: "100px" },
        { label: "是否启用", property: "idUsed", width: "100px" },
        { label: "启动日期", property: "startDate", width: "100px" },
        { label: "状态", property: "status" }
      ],
      gridData: [
        {
          produceDate: "2016-05-02",
          author: "王小虎",
          registerID: "上海市普陀区金沙江路 1518 弄",
          idUsed: "2016-05-02",
          startDate: "王小虎",
          status: "上海市普陀区金沙江路 1518 弄"
        },
        {
          produceDate: "2016-05-02",
          author: "王小虎",
          registerID: "上海市普陀区金沙江路 1518 弄",
          idUsed: "2016-05-02",
          startDate: "王小虎",
          status: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      dialogTableVisible: false,
      options: [
        {
          value: "选项",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      dialogTableVisible1: false,
      pageSize: 10,
      currentPage: 1,
      total: 0,
      test: 7234.6775
    };
  },

  filters:{
    filter(value){
      return value.toFixed(2);
    }
  },

  components: {},

  computed: {},

  mounted:function(){
    // fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {
    //     method: "post",
    //     headers:{'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'},
    //     // formdata:true,
    //     // headers:{'Content-Type':'multipart/form-data'},
    //     // body:"pageNum="+this.currentPage+"&pageSize="+this.pageSize,
    //     body: formData
    //   })
    //     .then(response => response.json())
    //     .then(json => {
    //       console.log("json", json);
    //       this.tableData = json.list;
    //       this.total = json.total;
    //     })
    //     .catch(error => {
    //       console.log("error is ", error);
    //     });
  },

  methods: {
    fetchData() {
      let formData = new FormData();
      formData.append("pageNum", this.currentPage);
      formData.append("pageSize", this.pageSize);
      fetch("http://10.0.0.2:9004/insuranceBureauInfo/list", {
        method: "post",
        // headers:{'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'},
        // formdata:true,
        // headers:{'Content-Type':'multipart/form-data'},
        // body:"pageNum="+this.currentPage+"&pageSize="+this.pageSize,
        body: formData
      })
        .then(response => response.json())
        .then(json => {
          console.log("json", json);
          this.tableData = json.list;
          this.total = json.total;
        })
        .catch(error => {
          console.log("error is ", error);
        });
    },
    handleClick(tab, event) {
      console.log(tab, event);
      if (tab.index === "2") {
        this.fetchData();
      }
    },
    currentChange() {
      console.log("this.currentPage", this.currentPage);
      this.fetchData();
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../../style/reset.css";

#main {
  overflow-y: hidden;
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

  #el-tab-pane3 {
    text-align: center;
    .button {
      margin: 10px;
    }
  }
  #button {
    margin-top: 10px;
  }
}
.right-con {
  width: 100px;
  height: 100px;
}
#container {
  height: 60vh;
  overflow: auto;
}
</style>