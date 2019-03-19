<!-- 用戶界面 -->
<template>
  <div>
    <header>
      <span>合翔保险经纪有限公司核心业务处理系统</span>
      <el-button type="info" size="mini" class="logout" @click="logout">退出</el-button>
    </header>
    <section>
      <aside>
        <el-tree
          :data="menu"
          :props="defaultProps"
          :highlight-current="true"
          @node-click="handleNodeClick"
        ></el-tree>
      </aside>
      <content>
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"/>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"/>
        <!-- <div>展示第一个组件</div>
        <div>展示第二个组件</div>
        <div>展示第三个组件</div>-->
      </content>
    </section>
  </div>
</template>

<script>
import Address from "api/addressService.js";
export default {
  components: {},

  data() {
    return {
      menu: [
        {
          label: "人身险",
          children: [
            {
              label: "保单受理作业"
            },
            {
              label: "新契约受理报表"
            },
            {
              label: "保单交费记录查询"
            },
            {
              label: "保单回执回销录入"
            },
            {
              label: "续期应收自动化作业"
            },
            {
              label: "保单及客户数据导入"
            }
          ]
        },
        {
          label: "财险",
          children: [
            {
              label: "车险",
              children: [
                {
                  label: "车险受理作业"
                },
                {
                  label: "车险新契约报表"
                },
                {
                  label: "车险保单导入"
                }
              ]
            },
            {
              label: "非车险",
              children: [
                {
                  label: "非车险受理作业"
                },
                {
                  label: "非车险新契约报表"
                },
                {
                  label: "非车险保单导入"
                }
              ]
            }
          ]
        },
        {
          label: "人资",
          children: [
            {
              label: "人事信息/职级管理"
            },
            {
              label: "业绩数据重新组织"
            },
            {
              label: "动态晋升考核管理"
            },
            {
              label: "个人绩效预警"
            },
            {
              label: "车险动态晋升考核"
            },
            {
              label: "车险个人绩效预警"
            },
            {
              label: "人事组织结构"
            }
          ]
        },
        {
          label: "理赔",
          children: [
            {
              label: "理赔受理作业"
            }
          ]
        },
        {
          label: "客户",
          children: [
            {
              label: "客户关系管理"
            }
          ]
        },
        {
          label: "报表",
          children: [
            {
              label: "业绩数据重新组织"
            },
            {
              label: "银行渠道",
              children: [
                {
                  label: "渠道绩效日报表"
                },
                {
                  label: "个人网店绩效日报表"
                }
              ]
            },
            {
              label: "保监会",
              children: [
                {
                  label: "电子文档管理"
                }
              ]
            },
            {
              label: "保单",
              children: [
                {
                  label: "新契约受理报表"
                }
              ]
            },
            {
              label: "人资",
              children: [
                {
                  label: "人事基本信息报表"
                },
                {
                  label: "人事组织信息列表"
                },
                {
                  label: "人事职级履历变迁表"
                }
              ]
            },
            {
              label: "结算",
              children: [
                {
                  label: "结算前保单明细预校"
                }
              ]
            },
            {
              label: "费率",
              children: [
                {
                  label: "代理险种费用率打印"
                }
              ]
            }
          ]
        },
        // {
        //   label: "结算",
        //   children: [
        //     {
        //       label: "理赔受理作业"
        //     }
        //   ]
        // },
        {
          label: "权限",
          children: [
            {
              label: "系统使用账号管理"
            },
            {
              label: "群组相应权限管理"
            },
            {
              label: "权限模组配置定义"
            },
            {
              label: "更改我的密码"
            }
          ]
        },
        {
          label: "费率",
          children: [
            {
              label: "代理险种费用率管理"
            },
            {
              label: "核保规则管理"
            },
            {
              label: "车险费率管理"
            },
            {
              label: "结算费率参数"
            },
            {
              label: "代理险种费用率查询/导入"
            }
          ]
        },
        {
          label: "单证",
          children: [
            {
              label: "单证状态更新/结存"
            },
            {
              label: "新增入库及查询管理"
            },
            {
              label: "新增交接及查询管理"
            },
            {
              label: "单证盘库"
            }
          ]
        },
        {
          label: "结算",
          children: [
            {
              label: "继续率重新组织"
            },
            {
              label: "外部结算",
              children: [
                {
                  label: "逐笔核佣检查"
                },
                {
                  label: "批量核佣检查"
                },
                {
                  label: "车险逐笔核佣检查"
                },
                {
                  label: "车险批量核佣检查"
                },
                {
                  label: "结算前保单明细预校"
                }
              ]
            },
            {
              label: "内部结算",
              children: [
                {
                  label: "标准基本法自动结算"
                },
                {
                  label: "结算备档作业"
                },
                {
                  label: "车险标准基本法结算"
                }
              ]
            }
          ]
        },
        {
          label: "参数",
          children: [
            {
              label: "系统",
              children: [
                {
                  label: "参数配置"
                },
                {
                  label: "日志管理"
                }
              ]
            },
            {
              label: "作业参数配置",
              children: [
                {
                  label: "分支协作机构管理"
                },
                {
                  label: "协同保险公司管理"
                }
              ]
            },
            {
              label: "模块参数配置",
              children: [
                {
                  label: "保单",
                  children: [
                    {
                      label: "保单作业参数"
                    }
                  ]
                },
                {
                  label: "人资",
                  children: [
                    {
                      label: "人资作业参数"
                    },
                    {
                      label: "职级定义配置"
                    }
                  ]
                },
                {
                  label: "客户",
                  children: [
                    {
                      label: "客户作业参数"
                    }
                  ]
                },
                {
                  label: "结算",
                  children: [
                    {
                      label: "代理险种费用率管理 "
                    },
                    {
                      label: "代理险种费用率打印"
                    },
                    {
                      label: "结算费率参数"
                    }
                  ]
                },
                {
                  label: "权限",
                  children: [
                    {
                      label: "群组相应权限管理"
                    },
                    {
                      label: "权限模组配置定义"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },

  methods: {
    logout() {
      this.$router.push({ path: "/" });
    },
    handleNodeClick(data) {
      //console.log(data.$treeNodeId);
      switch (data.label) {
        case "保单受理作业":
          this.$router.push({ path: "/user/orderAccept" });
          break;
        case "新契约受理报表":
          this.$router.push({ path: "/user/newOrder" });
          break;
        case "保单交费记录查询":
          this.$router.push({ path: "/user/payRecord" });
          break;
        case "保单及客户数据导入":
          this.$router.push({ path: "/user/PolicyCusDataImp" });
          break;
        case "车险受理作业":
          this.$router.push({
            path: "/user/carInsurAccept",
            query: { carOrder: true }
          });
          break;
        case "车险新契约报表":
          this.$router.push({
            path: "/user/carNewOrder",
            query: { carOrder: true }
          });
          break;
        case "车险保单导入":
          this.$router.push({
            path: "/user/carOrderLeadin",
            query: { carOrder: true }
          });
          break;
        case "非车险受理作业":
          this.$router.push({
            path: "/user/nocarInsurAccept",
            query: { carOrder: false }
          });
          break;
        case "非车险新契约报表":
          this.$router.push({
            path: "/user/nocarNewOrder",
            query: { carOrder: false }
          });
          break;
        case "非车险保单导入":
          this.$router.push({
            path: "/user/nocarOrderLeadin",
            query: { carOrder: false }
          });
          break;
        case "理赔受理作业":
          this.$router.push({ path: "/user/claimAccept" });
          break;
        case "客户关系管理":
          this.$router.push({ path: "/user/clientRelation" });
          break;
        case "代理险种费用率管理":
          this.$router.push({ path: "/user/agencyManage" });
          break;
        case "核保规则管理":
          this.$router.push({ path: "/user/ruleManage" });
          break;
        case "车险费率管理":
          this.$router.push({ path: "/user/carManage" });
          break;
        case "结算费率参数":
          this.$router.push({ path: "/user/rateParam" });
          break;
        case "代理险种费用率查询/导入":
          this.$router.push({ path: "/user/rateSearch" });
          break;
        case "人事信息/职级管理":
          this.$router.push({ path: "/user/HumanResource0" });
          break;
        case "业绩数据重新组织":
          this.$router.push({ path: "/user/HumanResource1" });
          break;
        case "动态晋升考核管理":
          this.$router.push({ path: "/user/HumanResource2" });
          break;
        case "个人绩效预警":
          this.$router.push({ path: "/user/HumanResource3" });
          break;
        case "车险动态晋升考核":
          this.$router.push({ path: "/user/HumanResource4" });
          break;
        case "车险个人绩效预警":
          this.$router.push({ path: "/user/HumanResource5" });
          break;
        case "人事组织结构":
          this.$router.push({ path: "/user/HumanResource6" });
          break;
        case "渠道绩效日报表":
          this.$router.push({ path: "/user/DailyChannelPer" });
          break;
        case "个人网店绩效日报表":
          this.$router.push({ path: "/user/PerOnlineStorePer" });
          break;
        case "电子文档管理":
          this.$router.push({ path: "/user/EleDocManage" });
          break;
        case "人事基本信息报表":
          this.$router.push({ path: "/user/PersBasInfReport" });
          break;
        case "人事组织信息列表":
          this.$router.push({ path: "/user/PersOrgInfList" });
          break;
        case "人事职级履历变迁表":
          this.$router.push({ path: "/user/ChangePerRankCurVi" });
          break;
        case "结算前保单明细预校":
          this.$router.push({ path: "/user/PrePolDetBefSettle" });
          break;
        case "代理险种费用率打印":
          this.$router.push({ path: "/user/AgentCostRatePrint" });
          break;
        case "系统使用账号管理":
          this.$router.push({ path: "/user/SystemUsageAccManange" });
          break;
        case "更改我的密码":
          this.$router.push({ path: "/user/Password" });
          break;
        case "群组相应权限管理":
          this.$router.push({ path: "/user/GroupCorresAuthorityManage" });
          break;
        case "权限模组配置定义":
          this.$router.push({ path: "/user/PermModuleConfDefi" });
          break;
        case "单证状态更新/结存":
          this.$router.push({ path: "/user/updateCard" });
          break;
        case "新增入库及查询管理":
          this.$router.push({ path: "/user/enterRepertory" });
          break;
        case "新增交接及查询管理":
          this.$router.push({ path: "/user/outRepertory" });
          break;
        case "单证盘库":
          this.$router.push({ path: "/user/panku" });
          break;
        case "续期应收自动化作业":
          this.$router.push({ path: "/user/AutoReceive" });
          break;
        case "结算备档作业":
          this.$router.push({ path: "/user/balanceRecordWork" });
          break;
        case "车险标准基本法结算":
          this.$router.push({ path: "/user/carInsuranceLawCheck" });
          break;
        case "标准基本法自动结算":
          this.$router.push({ path: "/user/lawAutoCheck" });
          break;
        case "车险逐笔核佣检查":
          this.$router.push({ path: "/user/carInsuranceEveryCheck" });
          break;
        case "车险批量核佣检查":
          this.$router.push({ path: "/user/carInsuranceSomeCheck" });
          break;
        case "逐笔核佣检查":
          this.$router.push({ path: "/user/everyCheck" });
          break;
        case "结算前保单明细预校":
          this.$router.push({ path: "/user/insuranceDetailCheck" });
          break;
        case "逐笔核佣检查查看编辑":
          this.$router.push({ path: "/user/lookEdit" });
          break;
        case "批量核佣检查":
          this.$router.push({ path: "/user/someCheck" });
          break;
        case "继续率重新组织":
          this.$router.push({ path: "/user/RateReorganisation" });
          break;
        case "参数配置":
          this.$router.push({ path: "/user/parameterDeploy" });
          break;
        case "日志管理":
          this.$router.push({ path: "/user/journalManage" });
          break;
        case "分支协作机构管理":
          this.$router.push({ path: "/user/branchHandle" });
          break;
        case "协同保险公司管理":
          this.$router.push({ path: "/user/CooperateInsuranceCompanyManage" });
          break;
        case "保单作业参数":
          this.$router.push({ path: "/user/insuranceAssignParameter" });
          break;
        case "人资作业参数":
          this.$router.push({ path: "/user/personnalityAssignParameter" });
          break;
        case "职级定义配置":
          this.$router.push({ path: "/user/rankDefineDeploy" });
          break;
        case "客户作业参数":
          this.$router.push({ path: "/user/customerAssignParameter" });
          break;
        case "代理险种费用率管理 ":
          this.$router.push({ path: "/user/agentInsuranceMoneyAdministrate" });
          break;
        case "结算费率参数":
          this.$router.push({ path: "/user/balanceMoneyParameter" });
          break;
        case "代理险种费用率打印":
          this.$router.push({ path: "/user/agentInsuranceMoneyPrint" });
          break;
        case "权限模组配置定义":
          this.$router.push({ path: "/user/authorityDeploy" });
          break;
        case "群组相应权限管理":
          this.$router.push({ path: "/user/authorityAdministrate" });
          break;
        default:
          break;
      }
    }

    // pushToOrderData(findOrderItem){
    //   this.$router.push({name:'neworderdata',query:{findOrderItem:findOrderItem}})
    // }
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {
    // this.$root.eventHub.$on('pushToOrderData', this.pushToOrderData)
  },

  destroyed() {}
};
</script>
<style lang='scss' scoped>
@import "common/scss/variable.scss";

header {
  height: 40px;
  line-height: 40px;
  text-align: left;
  padding: 0 10px;
  background-color: rgb(114, 151, 230);
  // display: flex;
  // align-items: center;
  // justify-content: center;
  position: relative;
  .logout {
    position: absolute;
    top: 20px;
    right: 20px;
    transform: translateY(-50%);
  }
}
section {
  display: flex;
  height: calc(100vh - 40px);
  overflow-y: hidden;
  aside {
    width: 230px;
    overflow-y: auto;
    background-color: #cccfff;
    padding-bottom: 30px;
    .el-tree {
      background-color: #cccfff !important;
    }
  }
  content {
    width: calc(100vw - 230px);
    flex-grow: 1;

    // background-color:#DCDFE6;
    background-color: #fff;
    // padding:10px;
    height: 100%;
  }
}
</style>