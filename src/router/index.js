import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login/Login.vue'
import User from 'components/User/User.vue'
import OrderAccept from 'components/Order/OrderAccept.vue'
import NewOrder from 'components/Order/NewOrder.vue'
import PayRecord from 'components/Order/PayRecord.vue'
import NewOrderData from 'components/Order/NewOrderData.vue'
import PayEditor from 'components/Order/PayEditor.vue'
import CarInsurAccept from 'components/Car/CarInsurAccept.vue'
import CarNewOrder from 'components/Car/CarNewOrder.vue'
import CarNewOrderData from 'components/Car/CarNewOrderData.vue'
import NocarInsurAccept from 'components/Car/NocarInsurAccept.vue'
import NocarNewOrder from 'components/Car/NocarNewOrder.vue'
import NocarNewOrderData from 'components/Car/NocarNewOrderData.vue'
import ClaimAccept from 'components/Claim/ClaimAccept.vue'
import ClaimEditor from 'components/Claim/ClaimEditor.vue'
import ClientRelation from 'components/Client/ClientRelation.vue'
import ClientEditor from 'components/Client/ClientEditor.vue'
import AgencyManage from 'components/feilv/AgencyManage.vue'
import DailyChannelPer from "components/report/DailyChannelPer.vue";
import PerOnlineStorePer from "components/report/PerOnlineStorePer.vue";
import EleDocManage from "components/report/EleDocManage.vue";
import PersBasInfReport from "components/report/PersBasInfReport.vue";
import PersOrgInfList from "components/report/PersOrgInfList.vue";
import ChangePerRankCurVi from "components/report/ChangePerRankCurVi.vue";
import PrePolDetBefSettle from "components/report/PrePolDetBefSettle.vue";
import AgentCostRatePrint from "components/report/AgentCostRatePrint.vue";
import SystemUsageAccManange from "components/Authority/SystemUsageAccManange.vue";
import AccountIncrease from "components/Authority/AccountIncrease.vue";
import AccountLook from "components/Authority/AccountLook.vue";
import Password from "components/Authority/Password.vue";
import PolicyCusDataImp from "components/Order/PolicyCusDataImp.vue";
import GroupCorresAuthorityManage from "components/Authority/GroupCorresAuthorityManage.vue";
import PermModuleConfDefi from "components/Authority/PermModuleConfDefi.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/index",
      redirect: "/"
    },
    {
      path: "/user",
      name: "user",
      component: User,
      children: [
        {
          path: "orderAccept",
          name: "orderAccept",
          component: OrderAccept,
          meta: {
            keepAlive: true // 需要缓存
          }
        },
        {
          path: "neworderdata",
          name: "neworderdata",
          component: NewOrderData
        },
        {
          path: "newOrder",
          name: "newOrder",
          component: NewOrder
        },
        {
          path: "payRecord",
          name: "payRecord",
          component: PayRecord,
          meta: {
            keepAlive: true // 需要缓存
          }
        },
        {
          path: "payEditor",
          name: "payEditor",
          component: PayEditor,
          meta: {
            keepAlive: false // 需要缓存
          }
        },
        {
          path: "carInsurAccept",
          name: "carInsurAccept",
          component: CarInsurAccept,
          meta: {
            keepAlive: true // 需要缓存
          }
        },
        {
          path: "carNewOrder",
          name: "carNewOrder",
          component: CarNewOrder,
          meta: {
            keepAlive: true // 需要缓存
          }
        },
        {
          path: "carNewOrderData",
          name: "carNewOrderData",
          component: CarNewOrderData,
          meta: {
            keepAlive: false // 需要缓存
          }
        }, {
          path: 'carOrderLeadin',
          name: 'carOrderLeadin',
          component: resolve => require(["components/car/carOrderLeadin.vue"], resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        }, {
          path: 'carOrderEditor',
          name: 'carOrderEditor',
          component: resolve => require(["components/car/carOrderEditor.vue"], resolve),
          meta: {
            keepAlive: true // 不需要缓存
          }
        }, {
          path: "nocarInsurAccept",
          name: "nocarInsurAccept",
          component: NocarInsurAccept,
          meta: {
            keepAlive: true // 需要缓存
          }
        }, {
          path: "nocarNewOrder",
          name: "nocarNewOrder",
          component: NocarNewOrder,
          meta: {
            keepAlive: true // 需要缓存
          }
        }, {
          path: "nocarNewOrderData",
          name: "nocarNewOrderData",
          component: NocarNewOrderData,
          meta: {
            keepAlive: false // 需要缓存
          }
        }, {
          path: 'nocarOrderLeadin',
          name: 'nocarOrderLeadin',
          component: resolve => require(["components/car/nocarOrderLeadin.vue"], resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        }, {
          path: 'nocarOrderEditor',
          name: 'nocarOrderEditor',
          component: resolve => require(["components/car/nocarOrderEditor.vue"], resolve),
          meta: {
            keepAlive: false // 不需要缓存
          }
        },
        {
          path: "claimAccept",
          name: "claimAccept",
          component: ClaimAccept,
          meta: {
            keepAlive: true // 需要缓存
          }
        },
        {
          path: "claimEditor",
          name: "claimEditor",
          component: ClaimEditor,
          meta: {
            keepAlive: false // 需要缓存
          }
        },
        {
          path: "clientRelation",
          name: "clientRelation",
          component: ClientRelation,
          meta: {
            keepAlive: true // 需要缓存
          }
        },
        {
          path: "clientEditor",
          name: "clientEditor",
          component: ClientEditor,
          meta: {
            keepAlive: false // 需要缓存
          }
        },
        {
          path: "agencyManage",
          name: "agencyManage",
          component: AgencyManage,
          meta: {
            keepAlive: true // 需要缓存
          }
        }, {
          path: 'ruleManage',
          name: 'ruleManage',
          component: resolve => require(["components/feilv/RuleManage.vue"], resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        }, {
          path: 'carManage',
          name: 'carManage',
          component: resolve => require(["components/feilv/CarManage.vue"], resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        }, {
          path: 'rateParam',
          name: 'rateParam',
          component: resolve => require(["components/feilv/RateParam.vue"], resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        }, {
          path: 'rateSearch',
          name: 'rateSearch',
          component: resolve => require(["components/feilv/RateSearch.vue"], resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        }, {
          path: 'insuranceDetail',
          name: 'insuranceDetail',
          component: resolve => require(["components/feilv/InsuranceDetail.vue"], resolve),
          meta: {
            keepAlive: false // 不需要缓存
          }
        },  {
          path: 'ruleEditor',
          name: 'ruleEditor',
          component: resolve => require(["components/feilv/ruleEditor.vue"], resolve),
          meta: {
            keepAlive: false // 不需要缓存
          }
        }, {
          path: 'carRateEditor',
          name: 'carRateEditor',
          component: resolve => require(["components/feilv/carRateEditor.vue"], resolve),
          meta: {
            keepAlive: false // 不需要缓存
          }
        }, {
          path: 'humanResource0',
          name: 'humanResource0',
          component: resolve=>require(["components/humanResource/HumanResource0.vue"], resolve)
        },{
          path: 'humanResource1',
          name: 'humanResource1',
          component: resolve=>require(["components/humanResource/HumanResource1.vue"], resolve)
        },
        {
          path: 'humanResource2',
          name: 'humanResource2',
          component: resolve=>require(["components/humanResource/HumanResource2.vue"], resolve)
        },
        {
          path: 'humanResource3',
          name: 'humanResource3',
          component: resolve=>require(["components/humanResource/HumanResource3.vue"], resolve)
        },
        {
          path: 'humanResource4',
          name: 'humanResource4',
          component: resolve=>require(["components/humanResource/HumanResource4.vue"], resolve)
        },
        {
          path: 'humanResource5',
          name: 'humanResource5',
          component: resolve=>require(["components/humanResource/HumanResource5.vue"], resolve)
        },
        {
          path: 'humanResource6',
          name: 'humanResource6',
          component: resolve=>require(["components/humanResource/HumanResource6.vue"], resolve)
        },
        // {
        //   path: 'humanResource',
        //   name:'humanResource',
        //   component: HumanResource,
        //   children:[
        //   {
        //     path: 'plan',
        //     name: 'plan',
        //     component: Plan
        //   },
        //   {
        //     path: 'findpeople',
        //     name: 'findpeople',
        //     component: FindPeople
        //   },
        //   ]
        // }
        {
          path: "DailyChannelPer",
          name: "DailyChannelPer",
          component: resolve =>
            require(["components/report/DailyChannelPer.vue"], resolve)
        },
        {
          path: "PerOnlineStorePer",
          name: "PerOnlineStorePer",
          component: resolve =>
            require(["components/report/PerOnlineStorePer.vue"], resolve)
        },
        {
          path: "EleDocManage",
          name: "EleDocManage",
          component: resolve =>
            require(["components/report/EleDocManage.vue"], resolve)
        },
        {
          path: "PersBasInfReport",
          name: "PersBasInfReport",
          component: resolve =>
            require(["components/report/PersBasInfReport.vue"], resolve)
        },
        {
          path: "PersOrgInfList",
          name: "PersOrgInfList",
          component: resolve =>
            require(["components/report/PersOrgInfList.vue"], resolve)
        },
        {
          path: "ChangePerRankCurVi",
          name: "ChangePerRankCurVi",
          component: resolve =>
            require(["components/report/ChangePerRankCurVi.vue"], resolve)
        },
        {
          path: "PrePolDetBefSettle",
          name: "PrePolDetBefSettle",
          component: resolve =>
            require(["components/report/PrePolDetBefSettle.vue"], resolve)
        },
        {
          path: "AgentCostRatePrint",
          name: "AgentCostRatePrint",
          component: resolve =>
            require(["components/report/AgentCostRatePrint.vue"], resolve)
        },
        {
          path: "SystemUsageAccManange",
          name: "SystemUsageAccManange",
          component: resolve =>
            require(["components/Authority/SystemUsageAccManange.vue"], resolve)
        },
        {
          path: "AccountIncrease",
          name: "AccountIncrease",
          component: resolve =>
            require(["components/Authority/AccountIncrease.vue"], resolve)
        },
        {
          path: "AccountLook",
          name: "AccountLook",
          component: resolve =>
            require(["components/Authority/AccountLook.vue"], resolve)
        },
        {
          path: "Password",
          name: "Password",
          component: resolve =>
            require(["components/Authority/Password.vue"], resolve)
        },
        {
          path: "PolicyCusDataImp",
          name: "PolicyCusDataImp",
          component: resolve =>
            require(["components/Order/PolicyCusDataImp.vue"], resolve)
        },
        {
          path: "GroupCorresAuthorityManage",
          name: "GroupCorresAuthorityManage",
          component: resolve =>
            require(["components/Authority/GroupCorresAuthorityManage.vue"], resolve)
        },
        {
          path: "PermModuleConfDefi",
          name: "PermModuleConfDefi",
          component: resolve =>
            require(["components/Authority/PermModuleConfDefi.vue"], resolve)
        }
      ]
    }
  ]
})
