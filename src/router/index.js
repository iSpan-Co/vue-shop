import { createRouter, createWebHistory } from "vue-router"

const routes = [
  //首頁
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home-View.vue"),
  },
  //會員-登入
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Blank-View.vue"),
  },
  //會員-購物商城
  {
    path: "/shop",
    name: "product-shop",
    component: () => import("../views/Shop-View.vue"),
  },
  //會員-商品詳細頁面
  {
    path: "/detail/:id",
    name: "product-detail",
    component: () => import("../views/Detail-View.vue"),
  },
  //會員-購物車
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/Cart-View.vue"),
  },
  //會員-我的訂單
  {
    path: "/order",
    name: "order",
    component: () => import("../views/Blank-View.vue"),
  },
  //會員-結帳付款
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/Blank-View.vue"),
  },
  //會員-個人資料
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Blank-View.vue"),
  },
  //管理員-商品管理
  {
    path: "/admin/product",
    name: "admin-product",
    component: () => import("../views/Blank-View.vue"),
  },
  //404頁面
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("../views/404-View.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
