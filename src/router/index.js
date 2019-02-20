import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login/Login.vue'
import User from 'components/User/User.vue'
import OrderAccept from 'components/Order/OrderAccept.vue'
import NewOrder from 'components/Order/NewOrder.vue'
import PayRecord from 'components/Order/PayRecord.vue'
import NewOrderData from 'components/Order/NewOrderData.vue'
import PayEditor from 'components/Order/PayEditor.vue'
import CarInsurAccept from 'components/Order/CarInsurAccept.vue'
import CarNewOrder from 'components/Order/CarNewOrder.vue'
import CarNewOrderData from 'components/Order/CarNewOrderData.vue'
import ClaimAccept from 'components/Order/ClaimAccept.vue'
import ClaimEditor from 'components/Order/ClaimEditor.vue'
import ClientRelation from 'components/Order/ClientRelation.vue'
import ClientEditor from 'components/Order/ClientEditor.vue'
import AgencyManage from 'components/Order/AgencyManage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      redirect: '/'
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      children: [
        {
          path: 'orderAccept',
          name: 'orderAccept',
          component: OrderAccept
        },
        {
          path: 'neworderdata',
          name: 'neworderdata',
          component: NewOrderData
        },
        {
          path: 'newOrder',
          name: 'newOrder',
          component: NewOrder
        },
        {
          path: 'payRecord',
          name: 'payRecord',
          component: PayRecord
        },
        {
          path: 'payEditor',
          name: 'payEditor',
          component: PayEditor
        },
        {
          path: 'carInsurAccept',
          name: 'carInsurAccept',
          component: CarInsurAccept
        },{
          path: 'carNewOrder',
          name: 'carNewOrder',
          component: CarNewOrder
        }, {
          path: 'carNewOrderData',
          name: 'carNewOrderData',
          component: CarNewOrderData
        }, {
          path: 'claimAccept',
          name: 'claimAccept',
          component: ClaimAccept
        }, {
          path: 'claimEditor',
          name: 'claimEditor',
          component: ClaimEditor
        }, {
          path: 'clientRelation',
          name: 'clientRelation',
          component: ClientRelation
        }, {
          path: 'clientEditor',
          name: 'clientEditor',
          component: ClientEditor
        }, {
          path: 'agencyManage',
          name: 'agencyManage',
          component: AgencyManage
        },{
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
      ]
    }
  ]
})
