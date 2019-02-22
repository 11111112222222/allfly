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
          component: OrderAccept
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
          component: PayRecord
        },
        {
          path: "payEditor",
          name: "payEditor",
          component: PayEditor
        },
        {
          path: "carInsurAccept",
          name: "carInsurAccept",
          component: CarInsurAccept
        },
        {
          path: "carNewOrder",
          name: "carNewOrder",
          component: CarNewOrder
        },
        {
          path: "carNewOrderData",
          name: "carNewOrderData",
          component: CarNewOrderData
        },
        {
          path: "claimAccept",
          name: "claimAccept",
          component: ClaimAccept
        },
        {
          path: "claimEditor",
          name: "claimEditor",
          component: ClaimEditor
        },
        {
          path: "clientRelation",
          name: "clientRelation",
          component: ClientRelation
        },
        {
          path: "clientEditor",
          name: "clientEditor",
          component: ClientEditor
        },
        {
          path: "agencyManage",
          name: "agencyManage",
          component: AgencyManage
        },
        {
          path: "humanResource0",
          name: "humanResource0",
          component: resolve =>
            require(["components/humanResource/HumanResource0.vue"], resolve)
        },
        {
          path: "humanResource1",
          name: "humanResource1",
          component: resolve =>
            require(["components/humanResource/HumanResource1.vue"], resolve)
        },
        {
          path: "humanResource2",
          name: "humanResource2",
          component: resolve =>
            require(["components/humanResource/HumanResource2.vue"], resolve)
        },
        {
          path: "humanResource3",
          name: "humanResource3",
          component: resolve =>
            require(["components/humanResource/HumanResource3.vue"], resolve)
        },
        {
          path: "humanResource4",
          name: "humanResource4",
          component: resolve =>
            require(["components/humanResource/HumanResource4.vue"], resolve)
        },
        {
          path: "humanResource5",
          name: "humanResource5",
          component: resolve =>
            require(["components/humanResource/HumanResource5.vue"], resolve)
        },
        {
          path: "humanResource6",
          name: "humanResource6",
          component: resolve =>
            require(["components/humanResource/HumanResource6.vue"], resolve)
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
        }
      ]
    }
  ]
})
