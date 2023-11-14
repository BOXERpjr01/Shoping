import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Clothes from '../views/clothing/Clothes.vue';
import ManClothes from '../views/clothing/ManClothes.vue';
import WomanClothes from '../views/clothing/WomanClothes.vue';
import Electronics from '../views/categories/Electronics.vue';
import Jewelery from '../views/categories/Jewelery.vue';
import product from '../components/product.vue';
import connection from '../components/connection.vue';
import SingleProducts from '../components/SingleProduct/SingleProducts.vue';
import registration from '../components/registration/registration.vue';
import login from '../components/registration/login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    {
      path: '/clothes',
      name: 'clothes',
      component: Clothes,
    },
    {
      path: '/man',
      name: 'man',
      component: ManClothes,
    },
    {
      path: '/woman',
      name: 'woman',
      component: WomanClothes,
    },
    {
      path: '/jewelery',
      name: 'jewelery',
      component: Jewelery,
    },
    {
      path: '/electronic',
      name: 'electronic',
      component: Electronics,
    },

    {
      path: '/product',
      name: 'product',
      component: product,
    },
    {
      path: '/connection',
      name: 'connection',
      component: connection,
      props: true,
    },
    {
      path: '/Single/:id',
      name: 'Single',
      component: SingleProducts,
      props: true,
    },
    {
      path: '/register',
      name: 'register',
      component: registration,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
  ],
});

export default router;
