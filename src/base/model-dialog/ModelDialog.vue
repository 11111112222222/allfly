<!--  -->
<template>
  <el-dialog title="标准字段选择" :visible.sync="dialogFormVisible" :before-close="handleClose">
    <el-container>
      <!-- <el-header></el-header> -->
      <el-container>
        <el-container>
          <el-aside>
            <el-table
              :data="tableData"
              highlight-current-row
              @current-change="handleCurrentChange"
              show-header="false"
              border
              height="250"
            >
              <el-table-column property="name" label="标准模板选择">
              </el-table-column>
            </el-table>
            <p>寿险标准模板</p>
          </el-aside>
          <el-main style="border: 1px solid #ddd;">
            <h4>模板字段选择</h4>
            <div class="container">
              <el-tree
                :data="data2"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                :props="defaultProps"
                style="height:300px"
              >
              </el-tree>
            </div>
          </el-main>
        </el-container>
        <el-footer>
          <div class="button-down">
            <el-button class="btn" size="mini" type="primary">保存</el-button>
            <el-button class="btn" size="mini" type="primary"
              >添加为新模板</el-button
            >

            <el-button class="btn" size="mini" type="primary"
              >删除模板</el-button
            >
          </div>
        </el-footer>
      </el-container>
      <el-footer>
        <div class="line"></div>
        <el-button
          class="btn"
          size="mini"
          type="primary"
          @click="toggle"
          >取消</el-button
        >
        <el-button
          class="btn"
          size="mini"
          type="primary"
          @click="toggle"
          >确定</el-button
        >
      </el-footer>
    </el-container>
  </el-dialog>
</template>

<script>
export default {
  components: {},
 props:['dialogFormVisible'],
  data() {
    return {
      // dialogVisible: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "寿险标准模板",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "卡单标准模板",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "预收件导入模板",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "保险经纪寿险模板",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-01",
          name: "默认全部字段",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "寿险团单导入模板",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      currentRow: null,
      data2: [
        {
          id: 1,
          label: "保单基本信息",
          children: [
            {
              id: 3,
              label: "保险公司"
            },
            {
              id: 4,
              label: "保单号码"
            },
            {
              id: 4,
              label: "相关号码内容"
            },
            {
              id: 4,
              label: "相关号码名称"
            },
            {
              id: 4,
              label: "保单受理日期"
            },
            {
              id: 4,
              label: "保单签发日期"
            },
            {
              id: 4,
              label: "保单生效日期"
            },
            {
              id: 4,
              label: "交费日期"
            },
            {
              id: 4,
              label: "缴费受理日期"
            },
            {
              id: 4,
              label: "回执日期"
            },
            {
              id: 4,
              label: "交费方式"
            },
            {
              id: 4,
              label: "交费类别"
            },
            {
              id: 4,
              label: "保单状态"
            },
            {
              id: 4,
              label: "交费承揽型别"
            }
          ]
        },
        {
          id: 2,
          label: "险种信息",
          children: [
            {
              id: 5,
              label: "险种1简称"
            },
            {
              id: 6,
              label: "险种1保单金额"
            }, {
              id: 4,
              label: "险种1保额单位"
            },
            {
              id: 4,
              label: "险种1保费"
            },
            {
              id: 4,
              label: "险种1缴费年期"
            },
            {
              id: 5,
              label: "险种2简称"
            },
            {
              id: 6,
              label: "险种2保单金额"
            }, {
              id: 4,
              label: "险种2保额单位"
            },
            {
              id: 4,
              label: "险种2保费"
            },
            {
              id: 4,
              label: "险种2缴费年期"
            },{
              id: 5,
              label: "险种3简称"
            },
            {
              id: 6,
              label: "险种3保单金额"
            }, {
              id: 4,
              label: "险种3保额单位"
            },
            {
              id: 4,
              label: "险种3保费"
            },
            {
              id: 4,
              label: "险种3缴费年期"
            },{
              id: 5,
              label: "险种4简称"
            },
            {
              id: 6,
              label: "险种4保单金额"
            }, {
              id: 4,
              label: "险种4保额单位"
            },
            {
              id: 4,
              label: "险种4保费"
            },
            {
              id: 4,
              label: "险种4缴费年期"
            },{
              id: 5,
              label: "险种5简称"
            },
            {
              id: 6,
              label: "险种5保单金额"
            }, {
              id: 4,
              label: "险种5保额单位"
            },
            {
              id: 4,
              label: "险种5保费"
            },
            {
              id: 4,
              label: "险种5缴费年期"
            },{
              id: 5,
              label: "险种6简称"
            },
            {
              id: 6,
              label: "险种6保单金额"
            }, {
              id: 4,
              label: "险种6保额单位"
            },
            {
              id: 4,
              label: "险种6保费"
            },
            {
              id: 4,
              label: "险种6缴费年期"
            },{
              id: 5,
              label: "险种7简称"
            },
            {
              id: 6,
              label: "险种7保单金额"
            }, {
              id: 4,
              label: "险种7保额单位"
            },
            {
              id: 4,
              label: "险种7保费"
            },
            {
              id: 4,
              label: "险种7缴费年期"
            },{
              id: 5,
              label: "险种8简称"
            },
            {
              id: 6,
              label: "险种8保单金额"
            }, {
              id: 4,
              label: "险种8保额单位"
            },
            {
              id: 4,
              label: "险种8保费"
            },
            {
              id: 4,
              label: "险种8缴费年期"
            },{
              id: 5,
              label: "险种9简称"
            },
            {
              id: 6,
              label: "险种9保单金额"
            }, {
              id: 4,
              label: "险种9保额单位"
            },
            {
              id: 4,
              label: "险种9保费"
            },
            {
              id: 4,
              label: "险种9缴费年期"
            }
          ]
        },
        {
          id: 3,
          label: "承揽人信息",
          children: [
            {
              id: 7,
              label: "承揽人A姓名"
            },
            {
              id: 8,
              label: "承揽人A编号"
            },
            {
              id: 7,
              label: "承揽人B姓名"
            },
            {
              id: 8,
              label: "承揽人B编号"
            },{
              id: 7,
              label: "承揽人C姓名"
            },
            {
              id: 8,
              label: "承揽人C编号"
            },
           {
              id: 7,
              label: "承揽人D姓名"
            },
            {
              id: 8,
              label: "承揽人D编号"
            },
 {
              id: 8,
              label: "一级渠道网点分支"
            },
           {
              id: 7,
              label: "二级渠道网点分支"
            },
            {
              id: 8,
              label: "三级渠道网点分支"
            },
            {
              id: 7,
              label: "渠道网店"
            },
            {
              id: 8,
              label: "客户经理"
            },
          ]
        },
        {
          id: 3,
          label: "投保人信息",
          children: [
            {
              id: 7,
              label: "投保人姓名"
            },
            {
              id: 8,
              label: "投保人性别"
            },
            {
              id: 7,
              label: "投保人身份证号"
            },
            {
              id: 8,
              label: "投保人出生日期"
            },{
              id: 7,
              label: "投保人联系电话（座机）"
            },
            {
              id: 8,
              label: "投保人联系电话（手机）"
            },
            {
              id: 8,
              label: "投保人家庭地址"
            }

          ]
        },
        {
          id: 3,
          label: "被保人信息",
          children: [
            {
              id: 7,
              label: "被保人姓名"
            },
            {
              id: 8,
              label: "被保人性别"
            },
            {
              id: 7,
              label: "被保人身份证号"
            },
            {
              id: 8,
              label: "被保人出生日期"
            },{
              id: 7,
              label: "被保人联系电话（座机）"
            },
            {
              id: 8,
              label: "被保人联系电话（手机）"
            },
            {
              id: 8,
              label: "被保人家庭地址"
            }

          ]
        },
        {
          id: 3,
          label: "受益人信息",
          children: [

            {
              id: 8,
              label: "身故受益人1证件号"
            },
            {
              id: 7,
              label: "身故受益人1姓名"
            },
            {
              id: 8,
              label: "身故受益人1与投保人关系"
            },{
              id: 7,
              label: "身故受益人1出生日期"
            },

            {
              id: 8,
              label: "身故受益人2证件号"
            },
            {
              id: 7,
              label: "身故受益人2姓名"
            },
            {
              id: 8,
              label: "身故受益人2与投保人关系"
            },{
              id: 7,
              label: "身故受益人2出生日期"
            },
            {
              id: 8,
              label: "身故受益人3证件号"
            },
            {
              id: 7,
              label: "身故受益人3姓名"
            },
            {
              id: 8,
              label: "身故受益人3与投保人关系"
            },{
              id: 7,
              label: "身故受益人3出生日期"
            },
          ]
        },
        {
          id: 3,
          label: "单证信息",
          children: [
            {
              id: 7,
              label: "投保单"
            },
            {
              id: 8,
              label: "保单"
            },
            {
              id: 7,
              label: "照会单"
            },
            {
              id: 8,
              label: "体检单"
            },{
              id: 7,
              label: "投保单位"
            },
            {
              id: 8,
              label: "投保人数"
            },
            {
              id: 8,
              label: "身份证"
            },
            {
              id: 8,
              label: "银行卡"
            },
            {
              id: 8,
              label: "其他"
            }

          ]
        },
        {
          id: 3,
          label: "车辆信息",
          children: [
            {
              id: 7,
              label: "车身号码"
            },
            {
              id: 8,
              label: "发动机号码"
            },
            {
              id: 7,
              label: "厂牌号码"
            },
            {
              id: 8,
              label: "车辆信息"
            }

          ]
        },
         {
          id: 3,
          label: "银行账号",
          children: [
            {
              id: 7,
              label: "首期交费账号"
            },
            {
              id: 8,
              label: "续期交费账号"
            },
          ]
        },
         {
          id: 3,
          label: "保单服务",
          children: [
            {
              id: 7,
              label: "保全服务"
            },
            {
              id: 8,
              label: "批改服务"
            },
             {
              id: 7,
              label: "理赔服务"
            },
            {
              id: 8,
              label: "其他"
            },
          ]
        },
         {
          id: 3,
          label: "服务提醒",
          children: [
            {
              id: 7,
              label: "保单回访记录"
            },
            {
              id: 8,
              label: "生存金提醒"
            },
             {
              id: 7,
              label: "前保单号"
            },
            {
              id: 8,
              label: "保障期限"
            },
          ]
        },
        {
          id: 3,
          label: "保单状态前台受理",
          children: [
            {
              id: 7,
              label: "保单状态前台受理"
            },
            {
              id: 8,
              label: "保单预收受理"
            },
             {
              id: 7,
              label: "保单承保受理"
            },
            {
              id: 8,
              label: "保单回执受理"
            },
             {
              id: 7,
              label: "保单契撤受理"
            },
            {
              id: 8,
              label: "保单停效受理"
            },
             {
              id: 7,
              label: "保单失效受理"
            },
            {
              id: 8,
              label: "保单解约受理"
            },
            {
              id: 8,
              label: "保单终止受理"
            },
          ]
        },
         {
          id: 3,
          label: "车险费率",
          children: [
            {
              id: 7,
              label: "收项费率"
            },
            {
              id: 8,
              label: "支项费率"
            },
             
          ]
        },
        {
          id: 3,
          label: "车险信息",
          children: [
            {
              id: 7,
              label: "业务员信息"
            }
             
          ]
        },
        {
          id: 3,
          label: "投保客户相关信息",
          children: [
            {
              id: 7,
              label: "身份证件"
            },
            {
              id: 8,
              label: "客户分类"
            },
             {
              id: 7,
              label: "车辆信息"
            },
            {
              id: 8,
              label: "首期交费账号"
            },{
              id: 8,
              label: "续期交费账号"
            },
            
          ]
        },
        {
          id: 3,
          label: "车辆信息",
          children: [
            {
              id: 7,
              label: "车牌号码"
            },
            {
              id: 8,
              label: "使用性质"
            },
             {
              id: 7,
              label: "厂牌型号"
            },
            {
              id: 8,
              label: "发动机号"
            },{
              id: 8,
              label: "车型号"
            },
            {
              id: 8,
              label: "车型种类"
            },
             {
              id: 7,
              label: "座位/吨位"
            },
            {
              id: 8,
              label: "初次登记日期"
            },{
              id: 8,
              label: "车主姓名"
            },
          ]
        },
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },

  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          // done();
          this.$emit('change')
        })
        .catch(_ => {
          this.$emit('change')
        });
    },
     toggle(){
      this.$emit('change')
    },
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {}
};
</script>
<style lang='scss' scoped>
h4 {
  margin-top: -20px;
}
.btn {
  float: right;
  margin: 10px;
}
.line {
  border: 1px solid #ddd;
}

.button-down {
  margin-top: 10px;
}
</style>