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
      path: '/category/:name',
      name: 'Category',
      component: () => import('../views/Category.vue')
    },
    {
      path: '/recipe/:recipeId',
      name: 'Recipe',
      component: () => import('../views/RecipeView.vue')
    }

  ]
});

export default router;