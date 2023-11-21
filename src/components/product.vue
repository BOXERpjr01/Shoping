<template>
  <div class="">
    <section>
      <transition name="fade">
        <div class="flex flex-col justify-between items-center">
          <div
            @click="addSinglePage(posts.id)"
            class="group w-full py-10 bg-grayf4"
          >
            <!-- <router-link :to="{ name: 'Single', params: { id: posts.id } }"> -->
            <div
              class="hidden hoverelem cursor-pointer text-white font-bold text-xl justify-center items-center -mt-[40.5px] h-[335px] w-[340px] absolute group-hover:flex group-hover:bg-gray-700/50"
            >
              VIEW PRODUCT
            </div>
            <div class="divimage flex justify-center items-center">
              <img class="w-64 h-64" :src="posts.image" :alt="posts.title" />
            </div>
            <!-- </router-link> -->
          </div>
          <ul class="flex flex-col w-full justify-between pr-4 gap-y-1">
            <span class="font-semibold text-xl text-black mt-3">{{
              snippet
            }}</span>
            <span class="font-semibold text-sm text-gray-300">{{
              posts.category
            }}</span>
            <p class="flex justify-between items-center">
              <span class="font-semibold text-xl">${{ posts.price }}</span>
              <span>{{ starRating }}</span>
            </p>
          </ul>
        </div>
      </transition>
    </section>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

defineComponent({
  name: 'product',
  // Your component options here
});

// const props = defineProps(['posts']);
const props = defineProps({
  posts: {
    type: Object,
    required: true,
  },
});
const snippet = computed(() => {
  if (props.posts?.title) {
    return props.posts.title.substring(0, 15);
  }
  return '';
});
const starRating = computed(() => {
  const rate = props.posts?.rating?.rate;
  if (rate) {
    const roundedRate = Math.round(rate);
    return '⭐'.repeat(roundedRate);
  }
  return '';
  // const rate = props.posts.rating.rate;
  // const roundedRate = Math.round(rate);
  // const starIcons = '⭐'.repeat(roundedRate);
  // return starIcons;
});

const addSinglePage = (id) => {
  router.push({ name: 'Single', params: { id } });
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.body {
  background: rgb(236, 224, 224);
}
</style>
