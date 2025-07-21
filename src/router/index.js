import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  //首頁
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home-View.vue'),
  },

  //會員-購物商城

  //會員-商品詳細頁面

  //會員-購物車

  //會員-我的訂單

  //管理員-商品管理

  //404頁面
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
