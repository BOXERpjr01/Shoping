import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';
import Clothes from '../views/clothing/Clothes.vue';
import ManClothes from '../views/clothing/ManClothes.vue';
import WomanClothes from '../views/clothing/WomanClothes.vue';
import Electronics from '../views/categories/Electronics.vue';
import Jewelery from '../views/categories/Jewelery.vue';
import SingleProducts from '../views/SingleProduct/SingleProducts.vue';
import registration from '../views/registration/registration.vue';
import login from '../views/registration/login.vue';
import product from '../components/product.vue';
import connection from '../components/connection.vue';

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
    },
    {
      path: '/detail/:id',
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
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
  ],
});

export default router;
