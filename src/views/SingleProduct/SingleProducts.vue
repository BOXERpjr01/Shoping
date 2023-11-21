<template>
  <div class="border-t-3 py-8 px-20">
    <transition name="fade">
      <div v-if="item">
        <div class="flex justify-center gap-x-40 items-center py-10">
          <div>
            <div class="w-500px h-500px">
              <img :src="item.image" :alt="item.title" />
            </div>
          </div>
          <div class="flex flex-col w-400px gap-y-10">
            <div>
              <div
                class="flex justify-between w-500px font-semibold text-3xl py-2 rounded"
              >
                <p class="font-bold flex flex-col">
                  {{ item.category }}
                  <span v-if="item.rating" class="text-sm mt-2">{{
                    starRating(item.rating.rate)
                  }}</span>
                </p>
                <span class="font-medium">${{ item.price }}</span>
              </div>
              <p class="text-base font-bold text-gray-400">{{ item.title }}.</p>
            </div>
            <div class="mt-5">
              <span>WIDTH:</span>
              <div class="flex gap-3">
                <button
                  @click="click"
                  :class="btnclass"
                  class="px-6 py-2 border-[4px] rounded bg-gray-300/60 border-gray-400/0 font-semibold text-xs"
                >
                  MIDIUM
                </button>
                <button
                  disabled="isDisabled"
                  class="px-6 py-2 border-[4px] rounded bg-gray-300/60 opacity-50 cursor-not-allowed border-gray-300/0 font-bold text-xs"
                >
                  WIDTH NOT AVAILABE
                </button>
              </div>
            </div>
            <div class="w-300px h-[220px]">
              <span>SIZE:</span>
              <ul class="grid grid-cols-5 gap-2 mt-3">
                <li v-for="item in list" :key="item.id">
                  <span
                    v-if="show"
                    class="transation-all transition-opacity duration-700 cursor-pointer border-3 border-gray-300 py-3 flex justify-center px-[17px]"
                    :class="{ activate: item.clicked }"
                    @click="handlClicked(item)"
                  >
                    {{ item.siz }}
                  </span>
                </li>
              </ul>
            </div>

            <router-link to="/cart">
              <LoadingButton
                @click="addToCart"
                :is-loading="isLoading"
                class="text-white w-300px text-center mt-12 bg-rose-600 font-semibold py-2 hover:bg-rose-600/75 rounded"
              >
                ADD TO CART
              </LoadingButton>
            </router-link>
          </div>
        </div>
        <div class="grid grid-cols-12 justify-center items-center px-12 mb-12">
          <span class="flex items-end justify-end">
            <img
              class=""
              @click="scrollToPrevious"
              src="../../../image/caret-left.svg"
              alt=""
            />
          </span>

          <div
            ref="scrollContent"
            class="carousel-content flex col-span-4 overflow-x-scroll"
          >
            <div class="flex-none grid grid-cols-5">
              <img class="w-12 mx-5" :src="item.image" :alt="item.title" />
              <img class="w-12 mx-5" :src="item.image" :alt="item.title" />
              <img class="w-12 mx-5" :src="item.image" :alt="item.title" />
              <img class="w-12 mx-5" :src="item.image" :alt="item.title" />
              <img class="w-12 mx-5" :src="item.image" :alt="item.title" />
            </div>
            <div class="flex-none grid grid-cols-5">
              <img class="w-12 mx-5" :src="item.image" :alt="item.title" />
              <img class="w-12 mx-5" :src="item.image" :alt="item.title" />
              <img class="w-12 mx-5" :src="item.image" :alt="item.title" />
              <img class="w-12 mx-5" :src="item.image" :alt="item.title" />
              <img class="w-12 mx-5" :src="item.image" :alt="item.title" />
            </div>
          </div>
          <span class="flex items-center justify-start col-start-6">
            <img
              @click="scrollToNext"
              src="../../../image/caret-right.svg"
              alt=""
            />
          </span>
        </div>

        <div class="flex justify-between mt-6 px-12">
          <button
            class="bg-grayf4 py-4 px-12 text-sm rounded text-gray-500 font-bold"
          >
            <i class="fa-solid fa-calendar fa-2xl mr-4"></i>
            Usally ships within ONE business day
          </button>
          <button
            class="bg-grayf4 py-4 px-12 text-sm rounded text-gray-500 font-bold"
          >
            <i class="fa-solid fa-box fa-2xl mr-4"></i>
            Free returns & exchanges for 45 days
          </button>
          <button
            class="bg-grayf4 py-4 px-12 text-sm rounded text-gray-500 font-bold"
          >
            <i class="fa-solid fa-truck fa-2xl mr-4"></i>
            Free shiping on all ground domanatic orders
          </button>
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
    </transition>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref, computed, getCurrentInstance } from 'vue';

import { useRouter, useRoute } from 'vue-router';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import LoadingButton from '../../components/button/LoadingButton.vue';

const route = useRoute();
const store = useStore();
defineComponent({
  name: 'Single',
  // Your component options here
});

const props = defineProps(['id']);
const productId = props.id;

const item = ref(null);
const fetchProduct = async () => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    const data = await response.json();
    item.value = data;
    console.log(item);
    item.value = data.map((item) => ({
      ...item,
      rating: item.rating ? starRating(item.rating.rate) : null,
    }));

    console.log(data.image);
  } catch (error) {
    console.log(error);
  }
};

fetchProduct();

const isLoading = ref(false);
const addToCart = () => {
  const payload = item.value;
  store.commit('addToCart', payload);
  isLoading.value = true;
  setTimeout(() => (isLoading.value = false), 1000);
  console.log('text');
};

function starRating(rating) {
  const roundedRate = Math.round(rating);
  return '⭐'.repeat(roundedRate);
}

const isDisabled = ref(false);
const btnclass = ref('');
const show = ref(false);
const click = () => {
  show.value = !show.value;
  btnclass.value = btnclass.value === '' ? 'style' : '';
};

const list = ref([
  { id: 1, siz: 6, clicked: false },
  { id: 2, siz: 6.5, clicked: false },
  { id: 3, siz: 7, clicked: false },
  { id: 4, siz: 7.5, clicked: false },
  { id: 5, siz: 8, clicked: false },
  { id: 6, siz: 8.5, clicked: false },
  { id: 7, siz: 9, clicked: false },
  { id: 8, siz: 9.5, clicked: false },
  { id: 9, siz: 10, clicked: false },
  { id: 10, siz: 10.5, clicked: false },
  { id: 11, siz: 10, clicked: false },
]);

const handlClicked = (item) => {
  item.clicked = !item.clicked;
};
//////////////////////scrolling
const scrollContent = ref(null);

onMounted(() => {
  scrollContent.value = document.querySelector('.carousel-content');
});

const scrollToPrevious = () => {
  if (scrollContent.value) {
    scrollContent.value.scrollLeft -= 100;
  }
  console.log('scrollp');
};
const scrollToNext = () => {
  if (scrollContent.value) {
    scrollContent.value.scrollLeft += 100;
  }
  console.log('scrolln');
};
</script>
<style>
span.activate {
  background-color: inherit;
  --tw-border-opacity: 1;
  border: 3px solid rgb(17 24 39 / var(--tw-border-opacity));
}
.style {
  background-color: inherit;
  --tw-border-opacity: 1;
  border: 4px solid rgb(17 24 39 / var(--tw-border-opacity));
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.carousel-content::-webkit-scrollbar {
  display: none;
}
</style>
