<template>
  <div class="home px-16 mt-32">
    <div class="homedivimage">
      <div
        class="homemedai h-[550px] w-[1424px] right-[63px] z-0 absolute flex px-20 justify-end items-center"
      >
        <div
          class="p-16 w-500px flex flex-col text-[1vw] justify-center bg-rose-950/30 text-white rounded"
        >
          <h1 class="font-semibold text-[3vw] mb-[3vw]">Products</h1>
          <p class="lorem text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            culpa molestiae illum explicabo exercitationem totam. Officiis
            eveniet assumenda non minus, consequatur voluptatibus delectus
            excepturi veniam vel amet qui exercitationem facilis?
          </p>
          <p class="homepragraph mt-[2vw] text-[1vw]">
            A shoe that makes you this happy is more then a shoe
          </p>
        </div>
      </div>
      <img
        class="homeimage h-[550px] w-full"
        src="../../image/make-your-customers-happy-min_jpg.jpg"
        alt=""
      />
    </div>
    <div class="homeproduct flex justify-between items-start mt-6">
      <button
        class="homebtns flex bg-grayddd items-center justify-between px-2 py-[10px] text-gray-400 font-semibold rounded"
        disabled="isDisabled"
      >
        filter products
        <svg
          class="ml-12"
          xmlns="http://www.w3.org/2000/svg"
          height="18"
          fill="gray"
          viewBox="0 0 256 256"
        >
          <path
            d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
          ></path>
        </svg>
      </button>
      <h1
        class="hommehead text-[2.4vw] col-start-3 col-span-3 font-semibold flex flex-col items-center justify-center"
      >
        OUR PRODUCTS
      </h1>
      <div class="homeselection flex flex-col gap-4">
        <div
          class="flex col-start-6 col-span-2 gap-x-3 items-center justify-end text-gray-500"
        >
          <span class="font-bold"> Sort by: </span>
          <div class="border-3 py-2 px-2 rounded font-semibold">
            <select name="" id="" class="pr-6">
              <option value="">Featured products</option>
              <option value="">Featured products</option>
              <option value="">Featured products</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="redline flex justify-center">
      <div class="h-[0.2vw] w-[5.5vw] -ml-20 rounded mt-4 bg-red-900"></div>
    </div>

    <transition name="slide-fade">
      <input
        class="search border-[3px] flex justify-end items-end rounded w-24 focus:w-80 py-[3px] px-[6px]"
        v-model="search"
        type="search"
        name=""
        id=""
        placeholder="Search"
      />
    </transition>

    <div
      v-if="filteredProducts.length"
      class="producting grid grid-cols-4 my-10 justify-center gap-x-3 gap-y-12"
    >
      <div v-for="post in filteredProducts" :key="post">
        <transition name="fade">
          <product :posts="post" />
        </transition>
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
import product from '../components/product.vue';
import { ref, onMounted, computed } from 'vue';
import { defineComponent } from 'vue';
import axios from 'axios';

defineComponent({
  name: 'home',
  // Your component options here
});
const search = ref('');

const products = ref([]);

onMounted(async () => {
  try {
    const all = await fetch('https://fakestoreapi.com/products');
    const data = await all.json();
    products.value = data;
    console.log(all);
  } catch (error) {
    console.log(error);
  }
});
const isDisabled = ref(false);

const filteredProducts = computed(() => {
  return products.value.filter((product) =>
    product.category.toLowerCase().includes(search.value.toLowerCase())
  );
});

const searchProducts = () => {
  console.log(filteredProducts);
};

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// serching

// onMounted(async () => {
//   try {
//     const response = await axios.get('https://fakestoreapi.com/products');
//     names.value = response.data.map((product) => product.title);
//   } catch (error) {
//     console.error('Failed to fetch names:', error);
//     names.value = [];
//   }
// });
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
