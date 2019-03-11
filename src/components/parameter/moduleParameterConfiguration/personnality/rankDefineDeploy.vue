<!-- 逐笔核佣检查 -->
<template>
  <div style="height:100%">
    <el-tabs v-model="everyCheck" type="card" @tab-click="handleClick">
      <el-tab-pane label="查询" name="query">
        <div class="tableContent">
          <form id="form">
            <div>
              <div class="title">职级代码</div>
              <div class="content">
                <el-input size="mini" v-model="rankCode" style="width:200px"></el-input>
                <a href="#">Remove</a>
              </div>
            </div>
            <div>
              <div class="title">职级名称</div>
              <div class="content">
                <el-input size="mini" v-model="rankName" style="width:200px"></el-input>
                <a href="#">Remove</a>
              </div>
            </div>
            <div>
              <div class="title">勤务类型</div>
              <div class="content">
                <el-select
                  size="mini"
                  v-model="workerTypeSelected"
                  collapse-tags
                  placeholder="请选择"
                  @change="handleSelectedChange"
                  id="branchSelected"
                >
                  <el-option v-for="item in workerType" :key="item.value" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
            <div>
              <div class="title">使用配置</div>
              <div class="content">
                <el-select
                  size="mini"
                  v-model="useDeploySelected"
                  collapse-tags
                  placeholder="请选择"
                  @change="handleSelectedChange"
                >
                  <el-option v-for="item in useDeploy" :key="item.value" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>

            <div>
              <div class="title">已绑定的分支机构</div>
              <div class="content">
                <el-select
                  size="mini"
                  v-model="boundBranchSelected"
                  collapse-tags
                  placeholder="请选择"
                  @change="handleSelectedChange"
                >
                  <el-option v-for="item in boundBranch" :key="item.value" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
            <div>
              <div class="title">已使用部门</div>
              <div class="content">
                <el-select
                  size="mini"
                  v-model="usedApartmentSelected"
                  collapse-tags
                  placeholder="请选择"
                  @change="handleSelectedChange"
                >
                  <el-option v-for="item in usedApartment" :key="item.value" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
          </form>
          <el-button type="primary" size="mini" id="button" @click="query">查询</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="列表" name="list">
        <div style="margin:0 10px;">
          <div class="message">
            <span style="padding-right:0px;">已绑定的分支机构：</span>
            <span class="colorChange">{{boundBranchSelected}}</span>
            <span style="padding-right:0px;">使用部门:</span>
            <span class="colorChange">{{usedApartmentSelected}}</span>
          </div>
          <form>
            <el-table
              :data="tableData"
              border
              stripe
              style="height:400px;overflow:auto;"
              @row-dblclick="getDetails"
            >
              <el-table-column type="index" label="序号"></el-table-column>
              <el-table-column prop="rankCode" label="职级代码 /" width="180"></el-table-column>
              <el-table-column prop="rankName" label="职级名称" width="180"></el-table-column>
              <el-table-column prop="type" label="类型"></el-table-column>
              <el-table-column prop="rankContent" label="职级内容"></el-table-column>
              <el-table-column prop="rank" label="职阶"></el-table-column>
            </el-table>

            <div class="button">
              <el-button type="primary" size="mini">移 除</el-button>
              <el-button type="primary" size="mini" @click="dialogFormVisible = true">查看 / 编辑</el-button>
              <el-button type="primary" size="mini" @click="dialogFormVisible = true">新 增</el-button>
            </div>
          </form>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="职级定义内容页面" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="职级代码" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
          <el-button type="primary">检查</el-button>
        </el-form-item>
        <el-form-item label="职级名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="勤务类型" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职级阶段" :label-width="formLabelWidth">
          <el-input-number
            v-model="num8"
            controls-position="right"
            @change="handleChange"
            :min="1"
            :max="10"
          ></el-input-number>
          <span>数字越大->职级越高</span>
        </el-form-item>
        <el-form-item label="职级内容" :label-width="formLabelWidth">
          <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      everyCheck: "query",
      rankCode: "%",
      rankName: "%",
      workerTypeSelected: "所有",
      workerType: [
        {
          value: "所有"
        },
        {
          value: "内勤"
        },
        {
          value: "外勤"
        }
      ],
      useDeploySelected: "所有",
      useDeploy: [
        {
          value: "所有"
        },
        {
          value: "已经使用"
        },
        {
          value: "尚未使用"
        }
      ],
      boundBranchSelected: "",
      boundBranch: [
        {
          value: "不区分"
        },
        {
          value: "左支"
        },
        {
          value: "右支"
        }
      ],
      usedApartmentSelected: "",
      usedApartment: [
        {
          value: "不区分"
        },
        {
          value: "左部"
        },
        {
          value: "右部"
        }
      ],
      tableData: [
        {
          rankCode: "BMJL",
          rankName: "部门经理",
          type: "内勤",
          rankContent: "",
          rank: "100"
        }
      ],
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      num8: 1,
      textarea: '',
    };
  },

  components: {},

  computed: {},

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSelectedChange: function(value) {
      if (value[value.length - 1] == "不区分") {
        //如果点击的是不区分的选项，就将其他选项去除
        value.splice(0, value.length - 1);
      } else if (value.indexOf("不区分") != -1) {
        //点击的是其他选项，若是内部含有不区分的选项，就将不区分的选项去除,注意这里的indexOf的O是大写的，真是烦人
        value.splice(value.indexOf("不区分"), 1); //注意这里的indexOf的O是大写的，真是烦人
      }
    },
    handleChange(value) {
      console.log(value);
    },
    query() {
      this.everyCheck = "list";
    },
    look_edit() {
      this.$router.push({ path: "/user/lookEdit" });
    },
    getDetails(row) {
      this.dialogTableVisible = true;
      //将Ajax查询到的数据循环赋值给表格
      // var data=[];
      // for(var k=0;k<row.length;k++){
      //   var obj={};
      //   obj.InsuranceType=row[k].AchievementMonth;
      //   obj.chargeTime=row[k].chargeDate;
      //   obj.ChargePeriod=row[k].chargeMonth;
      //   data[k]=obj;
      // }
      // this.gridData=data;
      var data = [];
      var obj = {};
      obj.InsuranceType = row.AchievementMonth;
      obj.chargeTime = row.chargeDate;
      obj.ChargePeriod = row.chargeMonth;
      data[0] = obj;
      this.gridData = data;
      //这里实现末尾添加而不是覆盖原来的数据，是否需要将原来的数据写入到新数组，然后将新数组再赋给原数组？
      // console.log(row.AchievementMonth);
    },
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../../../style/reset.css";
.title {
  display: inline-block;
  width: 200px;
  text-align: right;
  padding: 10px;
}
.content {
  display: inline-block;
}
.select {
  width: 200px;
}
fieldset {
  border: solid 1px rgba(192, 192, 192, 0.603);
  padding: 5px 0px 20px 0px;
  margin: 5px 50px 30px 50px; //顺序为上、右、下、左
  .title {
    margin-left: -50px;
  }
}
#button {
  width: 100px;
  margin-left: 200px;
  margin-top: 40px;
}
.message {
  margin: 20px;
  span {
    font-weight: bold;
  }
  .colorChange {
    color: rgb(26, 115, 231);
    padding-right: 80px;
  }
}
span {
  padding: 20px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.button {
  position: fixed;
  bottom: 40px;
  right: 20px;
}
form {
  margin: 20px;
  border-bottom: 1px solid #ddd;

  a {
    color: rgb(64, 111, 211);
    border-bottom: 1px solid rgb(64, 111, 211);
  }
  a:hover {
    color: rgb(207, 68, 43);
    border-bottom: 1px solid rgb(207, 68, 43);
  }
}

#form {
  padding-bottom: 20px;
}
.el-input {
  width: 300px;
}
</style>