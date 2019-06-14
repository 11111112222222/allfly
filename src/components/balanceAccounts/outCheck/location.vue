<!-- 位置 -->
<template>
  <div>
    <div>
      <p>选择查找位置</p>
    </div>
    <div>
      <el-input
        placeholder="请输入内容"
        v-model="input1"
        :disabled="true"
        style="width:450px;margin-top:10px;margin-bottom:10px;"
      ></el-input>
      <el-button type="primary">主要按钮</el-button>
    </div>
    <div>
      <el-tabs v-model="query" type="card" @tab-click="handleClick">
        <el-tab-pane label="一般查询" name="first">
          <div>
            <div class="left" id="username">姓名</div>
            <el-input placeholder="请输入内容" v-model="input1" style="width:450px;"></el-input>
          </div>
          <div>
            <div class="left">员工编号</div>
            <el-input placeholder="请输入内容" v-model="input1" style="width:450px;"></el-input>
          </div>
          <div>
            <div class="left">身份证号</div>
            <el-input placeholder="请输入内容" v-model="input1" style="width:450px;"></el-input>
          </div>
        </el-tab-pane>
        <el-tab-pane label="高级查询" name="second">
          <el-checkbox v-model="checked" id="check">合并使用以下高级查询选项</el-checkbox>
          <div>
            <p class="left">手机号码</p>
            <el-input placeholder="请输入内容" v-model="phoneNumber" style="width:450px;"></el-input>
          </div>
          <div>
            <p class="left">职级名称</p>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button type="primary">主要按钮</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="button">
      <el-button type="primary">立即查找</el-button>
      <el-button type="warning">停 止</el-button>
      <el-button type="primary" id="assure">确 定</el-button>
      <el-button type="warning">取 消</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "合翔保险经纪有限公司",
      checked: true,
      phoneNumber: "%",
      options: [
        {
          value: "选项1",
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
      query: "first",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },

  components: {},

  computed: {},

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang='scss' scoped>
.main {
  .el-tabs {
    height: 200px;
    .left {
      display: inline-block;
      width: 100px;
      margin-right: 20px;
      margin-top: 20px;
      text-align: right;
    }
    #check {
      margin-left: 45px;
    }
    #username {
      margin-top: -20px;
    }
  }
  .button {
    margin-left: 120px;
    margin-bottom:20px;
    #assure {
      margin-left: 100px;
    }
  }

}
.el-input.is-disabled /deep/.el-input__inner{
     color:blue;
 }
</style>