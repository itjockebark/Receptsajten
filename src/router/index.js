import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/category/:categoryId',
      name: 'Categories',
      component: () => import('../views/Category.vue')
    }
  ]
});

export default router;