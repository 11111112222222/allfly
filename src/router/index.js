import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login/Login.vue'
import User from 'components/User/User.vue'
import OrderAccept from 'components/Order/OrderAccept.vue'
import NewOrder from 'components/Order/NewOrder.vue'
import NewOrderData from 'components/Order/NewOrderData.vue'

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
      children:[
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
        }
      ]
    },
    
  ]
})
