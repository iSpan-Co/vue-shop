import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home-View.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("../views/Product-View.vue"),
  },
  {
    path: "/detail/:id",
    name: "product-detail",
    component: () => import("../views/ProductDetail-View.vue"),
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: () => import("../views/Blank-View.vue"),
  },
  {
    path: "/order",
    name: "order",
    component: () => import("../views/Blank-View.vue"),
  },
  //個人資料、登入、商品頁面、購物車、結帳、付款、訂單、我的訂單
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("../views/404-View.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
