<!-- 联系人信息 -->
<template>
  <div>
    <div>选择查找的位置：</div>
    <el-input
      style="width:250px; color:blue;font-size:16px;"
      placeholder="请输入内容"
      v-model="companyName"
      :disabled="true"
    ></el-input>
    <el-button type="primary" @click="dialogVisible = true">位置</el-button>
    <!-- 点击位置按钮弹出的对话框 -->
    <el-dialog title="位置" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="一般查询" name="first">
        <div class="line">
          <div class="title">姓名：</div>
          <div class="content">
            <el-input placeholder="请输入内容" v-model="name"></el-input>
          </div>
        </div>
        <div class="line">
          <div class="title">员工编号：</div>
          <div class="content">
            <el-input placeholder="请输入内容" v-model="number"></el-input>
          </div>
        </div>
        <div class="line">
          <div class="title">身份证号：</div>
          <div class="content">
            <el-input placeholder="请输入内容" v-model="IDCard"></el-input>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="高级查询" name="second">
        <el-checkbox style="margin-left:30px;margin-top:20px;" v-model="checked">合并使用一下高级查询选项</el-checkbox>
        <div class="line">
          <div class="title">手机号码：</div>
          <div class="content">
            <el-input placeholder="请输入内容" v-model="telephone"></el-input>
          </div>
        </div>
        <div class="line">
          <div class="title">职称名称：</div>
          <div class="content">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button type="primary">载入选项</el-button>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-button type="primary" style="margin-left:20px;margin-bottom:20px;">立即查找</el-button>
    <el-button type="primary">停止</el-button>
    <el-table :data="gridData" border height="200">
      <el-table-column property="date" label="日期" width="150"></el-table-column>
      <el-table-column property="name" label="姓名" width="200"></el-table-column>
      <el-table-column property="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      companyName: "合翔保险经纪有限公司",
      activeName2: "first",
      name: "%",
      number: "%",
      IDCard: "%",
      checked: false,
      telephone: "%",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ],
      value: "",
      dialogVisible: false,
      data: [
        {
          label: "合翔保险经纪有限公司",
          children: [
            {
              label: "安徽分公司",
              children: [
                {
                  label: "营销部"
                },
                {
                  label: "运营部"
                }
              ]
            }
          ]
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>
<style lang='scss' scoped>
.line {
  display: inline-block;
  width: 100%;
  margin-top: 10px;
  .title {
    display: inline-block;
    width: 100px;
    text-align: right;
  }
  .content {
    // float:right;
    display: inline-block;
  }
}
.el-input {
  width: 250px;
}
.el-tabs {
  margin: 20px 0px 20px;
}
.el-input.is-disabled /deep/ .el-input__inner {
  color: blue;
}
</style>