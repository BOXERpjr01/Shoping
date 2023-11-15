<template>
  <div>
    <section>
      <div class="flex flex-col justify-between items-center">
        <div class="group">
          <router-link :to="{ name: 'Single', params: { id: posts.id } }">
            <div class="divimage bg-grayf4 p-6">
              <img class="w-72 h-72" :src="posts.image" :alt="posts.title" />
            </div>
            <div
              class="hidden hoverelem text-white justify-center items-center -mt-[335px] h-[335px] w-[335px] absolute group-hover:flex group-hover:bg-gray-700/50"
            >
              View Product
            </div>
          </router-link>
        </div>
        <ul class="flex flex-col w-[315px] pl-2 gap-y-1">
          <span class="font-semibold text-xl text-black mt-3">{{
            snippet
          }}</span>
          <span class="font-semibold text-sm text-gray-300">{{
            posts.category
          }}</span>
          <p class="flex justify-between items-center">
            <span class="font-semibold text-xl">${{ posts.price }}</span>
            <span>{{ starRating }} </span>
          </p>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps(['posts']);

const snippet = computed(() => {
  return props.posts.title.substring(0, 15);
});
const starRating = computed(() => {
  const rate = props.posts.rating.rate;
  const roundedRate = Math.round(rate);
  const starIcons = '⭐'.repeat(roundedRate);
  return starIcons;
});
</script>

<style>
.body {
  background: rgb(236, 224, 224);
}
</style>
