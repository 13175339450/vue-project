import { createRouter, createWebHistory } from 'vue-router'

// TODO: 传统引入方式
import Home from '@/components/Home.vue'
import Category from '@/components/Category.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '', // TODO: 置空，默认子路由
          name: 'Home',
          component: Home
        },
        {
          path: '/category',
          name: 'Category',
          component: Category
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      // TODO: 箭头函数引入方式
      component: () => import('@/views/Login/index.vue')
    }
  ],
})

export default router
