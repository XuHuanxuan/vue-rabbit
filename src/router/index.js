import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/Cart/index.vue'
import CheckOut from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/Member/index.vue'
import MemberInfo from '@/views/Member/components/UserInfo.vue'
import MemberOrder from '@/views/Member/components/UserOrder.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'category/:id',
          name: 'category',
          component: Category
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: Detail
        },
        {
          path: 'cartlist',
          name: 'cartlist',
          component: CartList
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: CheckOut
        },
        {
          path: 'pay',
          name: 'pay',
          component: Pay
        },
        {
          path: 'paycallback',
          name: 'payback',
          component: PayBack
        },
        {
          path: 'member',
          name: 'member',
          component: Member,
          children: [
            {
              path: '',
              name: 'memberinfo',
              component: MemberInfo
            },
            {
              path: 'order',
              name: 'memberorder',
              component: MemberOrder
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
  // 路由行为
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
