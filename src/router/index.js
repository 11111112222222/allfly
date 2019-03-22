import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login/Login.vue'
import User from 'components/User/User.vue'
import OrderAccept from 'components/Order/OrderAccept.vue'
import NewOrder from 'components/Order/NewOrder.vue'
import PayRecord from 'components/Order/PayRecord.vue'
import NewOrderData from 'components/Order/NewOrderData.vue'
import PayEditor from 'components/Order/PayEditor.vue'

import AutoReceive from 'components/order/AutoReceive.vue'

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

import balanceRecordWork from 'components/balanceAccounts/inCheck/balanceRecordWork.vue'
import carInsuranceLawCheck from 'components/balanceAccounts/inCheck/carInsuranceLawCheck.vue'
import lawAutoCheck from 'components/balanceAccounts/inCheck/lawAutoCheck.vue'
import carInsuranceEveryCheck from 'components/balanceAccounts/outCheck/carInsuranceEveryCheck.vue'
import carInsuranceSomeCheck from 'components/balanceAccounts/outCheck/carInsuranceSomeCheck.vue'
import everyCheck from 'components/balanceAccounts/outCheck/everyCheck.vue'
import insuranceDetailCheck from 'components/balanceAccounts/outCheck/insuranceDetailCheck.vue'
import lookEdit from 'components/balanceAccounts/outCheck/lookEdit.vue'
import someCheck from 'components/balanceAccounts/outCheck/someCheck.vue'
import someCheckNext from 'components/balanceAccounts/outCheck/someCheckNext.vue'
import RateReorganisation from 'components/balanceAccounts/RateReorganisation.vue'
import parameterDeploy from 'components/parameter/system/parameterDeploy.vue'
import journalManage from 'components/parameter/system/journalManage.vue'
import branchHandle from 'components/parameter/assignParameterDeploy/branchHandle.vue'
import addFirstNode from 'components/parameter/assignParameterDeploy/addFirstNode.vue'
import CooperateInsuranceCompanyManage from 'components/parameter/assignParameterDeploy/CooperateInsuranceCompanyManage.vue'
import insuranceCompanyAdd from 'components/parameter/assignParameterDeploy/insuranceCompanyAdd.vue'
import insuranceAssignParameter from 'components/parameter/moduleParameterConfiguration/insurance/insuranceAssignParameter.vue'
import personnalityAssignParameter from 'components/parameter/moduleParameterConfiguration/personnality/personnalityAssignParameter.vue'
import rankDefineDeploy from 'components/parameter/moduleParameterConfiguration/personnality/rankDefineDeploy.vue'
import customerAssignParameter from 'components/parameter/moduleParameterConfiguration/customer/customerAssignParameter.vue'
import agentInsuranceMoneyAdministrate from 'components/parameter/moduleParameterConfiguration/balance/agentInsuranceMoneyAdministrate.vue'
import balanceMoneyParameter from 'components/parameter/moduleParameterConfiguration/balance/balanceMoneyParameter.vue'
import agentInsuranceMoneyPrint from 'components/parameter/moduleParameterConfiguration/balance/agentInsuranceMoneyPrint.vue'
import insuranceInfoEdit from 'components/parameter/moduleParameterConfiguration/balance/insuranceInfoEdit.vue'
import insuranceMoneyEdit from 'components/parameter/moduleParameterConfiguration/balance/insuranceMoneyEdit.vue'
import insuranceInfoAdd from 'components/parameter/moduleParameterConfiguration/balance/insuranceInfoAdd.vue'
import authorityDeploy from 'components/parameter/moduleParameterConfiguration/authority/authorityDeploy.vue'
import addChildNode from 'components/parameter/assignParameterDeploy/addChildNode.vue'
import authorityAdministrate from 'components/parameter/moduleParameterConfiguration/authority/authorityAdministrate.vue'
import employMoneyDetails from 'components/balanceAccounts/inCheck/employMoneyDetails.vue'

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
          path: 'carInsurAccept',
          name: 'carInsurAccept',
          component: CarInsurAccept
        }, {
          path: 'carNewOrder',
          name: 'carNewOrder',
          component: CarNewOrder
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
            keepAlive: false // 不需要缓存
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
            keepAlive: true // 需要缓存
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
          path: 'agencyManage',
          name: 'agencyManage',
          component: AgencyManage
        }, {
          path: 'humanResource0',
          name: 'humanResource0',
          component: resolve => require(["components/humanResource/HumanResource0.vue"], resolve)
        }, {
          path: 'humanResource1',
          name: 'humanResource1',
          component: resolve => require(["components/humanResource/HumanResource1.vue"], resolve)
        },
        {
          path: 'humanResource2',
          name: 'humanResource2',
          component: resolve => require(["components/humanResource/HumanResource2.vue"], resolve)
        },
        {
          path: 'humanResource3',
          name: 'humanResource3',
          component: resolve => require(["components/humanResource/HumanResource3.vue"], resolve)
        },
        {
          path: 'humanResource4',
          name: 'humanResource4',
          component: resolve => require(["components/humanResource/HumanResource4.vue"], resolve)
        },
        {
          path: 'humanResource5',
          name: 'humanResource5',
          component: resolve => require(["components/humanResource/HumanResource5.vue"], resolve)
        },
        {
          path: 'humanResource6',
          name: 'humanResource6',
          component: resolve=>require(["components/humanResource/HumanResource6.vue"], resolve)
        },
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
        },
        {
          path: "ContinueQueryStatistics",
          name: "ContinueQueryStatistics",
          component: resolve =>
            require(["components/ContinueRate/ContinueQueryStatistics.vue"], resolve)
        },
        {
          path: "ContinueRateReorg",
          name: "ContinueRateReorg",
          component: resolve =>
            require(["components/ContinueRate/ContinueRateReorg.vue"], resolve)
        },
        {
          path: "InsurCompanyContinueRateQuerystatistics",
          name: "InsurCompanyContinueRateQuerystatistics",
          component: resolve =>
            require(["components/ContinueRate/InsurCompanyContinueRateQuerystatistics.vue"], resolve)
        },
        {
          path: 'addInformation',
          name: 'addInformation',
          component: resolve=>require(["components/humanResource/AddInformation.vue"], resolve)
        },
        {
          path: 'updateCard',
          name: 'updateCard',
          component: resolve=>require(["components/SingleCard/UpdateCard.vue"], resolve)
        },
        {
          path: 'enterRepertory',
          name: 'enterRepertory',
          component: resolve=>require(["components/SingleCard/EnterRepertory.vue"], resolve)
        },
        {
          path: 'outRepertory',
          name: 'outRepertory',
          component: resolve=>require(["components/SingleCard/OutRepertory.vue"], resolve)
        },
        {
          path: 'panku',
          name: 'panku',
          component: resolve=>require(["components/SingleCard/Panku.vue"], resolve)
        },
        {
          path: 'addSingleCard',
          name: 'addSingleCard',
          component: resolve=>require(["components/SingleCard/AddSingleCard.vue"], resolve)
        },
        {
          path: 'changeSingleCard',
          name: 'changeSingleCard',
          component: resolve=>require(["components/SingleCard/ChangeSingleCard.vue"], resolve)
        }, {
          path: 'balanceRecordWork',
          name: 'balanceRecordWork',
          component: balanceRecordWork
        },
        {
          path: 'carInsuranceLawCheck',
          name: 'carInsuranceLawCheck',
          component: carInsuranceLawCheck
        }, {
          path: 'lawAutoCheck',
          name: 'lawAutoCheck',
          component: lawAutoCheck
        }, {
          path: 'carInsuranceEveryCheck',
          name: 'carInsuranceEveryCheck',
          component: carInsuranceEveryCheck
        }, {
          path: 'carInsuranceSomeCheck',
          name: 'carInsuranceSomeCheck',
          component: carInsuranceSomeCheck
        },
        {
          path: 'everyCheck',
          name: 'everyCheck',
          component: everyCheck
        }, {
          path: 'insuranceDetailCheck',
          name: 'insuranceDetailCheck',
          component: insuranceDetailCheck
        }, {
          path: 'lookEdit',
          name: 'lookEdit',
          component: lookEdit
        }, {
          path: 'someCheck',
          name: 'someCheck',
          component: someCheck
        }, {
          path: 'RateReorganisation',
          name: 'RateReorganisation',
          component: RateReorganisation
        }, {
          path: 'AutoReceive',
          name: 'AutoReceive',
          component: AutoReceive
        },
        {
          path: 'parameterDeploy',
          name: 'parameterDeploy',
          component: parameterDeploy
        },
        {
          path: 'journalManage',
          name: 'journalManage',
          component: journalManage
        },
        {
          path: 'branchHandle',
          name: 'branchHandle',
          component: branchHandle
        },
        {
          path: 'addFirstNode',
          name: 'addFirstNode',
          component: addFirstNode
        },
        {
          path: 'CooperateInsuranceCompanyManage',
          name: 'CooperateInsuranceCompanyManage',
          component: CooperateInsuranceCompanyManage
        },
        {
          path: 'insuranceCompanyAdd',
          name: 'insuranceCompanyAdd',
          component: insuranceCompanyAdd
        },
        {
          path: 'insuranceAssignParameter',
          name: 'insuranceAssignParameter',
          component: insuranceAssignParameter
        },
        {
          path: 'personnalityAssignParameter',
          name: 'personnalityAssignParameter',
          component: personnalityAssignParameter
        },
        {
          path: 'rankDefineDeploy',
          name: 'rankDefineDeploy',
          component: rankDefineDeploy
        },
        {
          path: 'customerAssignParameter',
          name: 'customerAssignParameter',
          component: customerAssignParameter
        },
        {
          path: 'agentInsuranceMoneyAdministrate',
          name: 'agentInsuranceMoneyAdministrate',
          component: agentInsuranceMoneyAdministrate
        },
        {
          path: 'balanceMoneyParameter',
          name: 'balanceMoneyParameter',
          component: balanceMoneyParameter
        },
        {
          path: 'agentInsuranceMoneyPrint',
          name: 'agentInsuranceMoneyPrint',
          component: agentInsuranceMoneyPrint
        },
        {
          path: 'insuranceInfoEdit',
          name: 'insuranceInfoEdit',
          component: insuranceInfoEdit
        },
        {
          path: 'insuranceMoneyEdit',
          name: 'insuranceMoneyEdit',
          component: insuranceMoneyEdit
        },
        {
          path: 'insuranceInfoAdd',
          name: 'insuranceInfoAdd',
          component: insuranceInfoAdd
        },
        {
          path: 'authorityDeploy',
          name: 'authorityDeploy',
          component: authorityDeploy
        },
        {
          path: 'addChildNode',
          name: 'addChildNode',
          component: addChildNode
        },
        {
          path: 'authorityAdministrate',
          name: 'authorityAdministrate',
          component: authorityAdministrate
        },
        {
          path: 'someCheckNext',
          name: 'someCheckNext',
          component: someCheckNext
        },
        {
          path: 'employMoneyDetails',
          name: 'employMoneyDetails',
          component: employMoneyDetails
        },
        {
          path: "COSDetail",
          name: "COSDetail",
          component: resolve =>
            require(["components/ContinueRate/COSDetail.vue"], resolve)
        }
      ]
  }
]
})
