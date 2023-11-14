import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Clothes from '../views/clothing/Clothes.vue';
import ManClothes from '../views/clothing/ManClothes.vue';
import WomanCLothes from '../views/clothing/WomanCLothes.vue';
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
      path: '/menClothes',
      name: 'menClothes',
      component: ManClothes,
    },
    {
      path: '/womenClothes',
      name: 'womenClothes',
      component: WomanCLothes,
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
