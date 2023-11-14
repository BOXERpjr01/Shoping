<template>
  <div class="px-16">
    <div
      class="navclothes flex justify-center items-center text-black gap-x-12 bg-gray-200 py-3"
    >
      <router-link to="/menClothes">Men CLothes</router-link>
      <router-link to="/womenClothes">Women CLothes</router-link>
    </div>

    <img class="h-[500px] w-full" src="../../../../image/men.jpeg" alt="" />
    <div
      v-if="products.length"
      class="grid grid-cols-4 pt-10 pb-12 justify-center gap-y-16"
    >
      <div v-for="post in products" :key="post.id">
        <product :posts="post" />
      </div>
    </div>
    <div v-else class="flex items-center justify-center gap-x-3 mt-20">
      <span class="font-semibold text-2xl">Loding</span>
      <svg
        class="animate-spin mt-2"
        height="20px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import product from '../../../components/product.vue';

const products = ref([]);
onMounted(async () => {
  try {
    const all = await fetch(
      "https://fakestoreapi.com/products/category/men's clothing"
    );
    const data = await all.json();
    products.value = data;
    console.log(all);
  } catch (error) {
    console.log(error);
  }
});
</script>

<style>
.navclothes a {
  color: #2c3e50;
  font-weight: bold;
  padding: 10px;
  border-radius: 4px;
}
.navclothes a.router-link-exact-active {
  color: white;
  background: crimson;
}
</style>
