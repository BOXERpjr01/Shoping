<template>
  <div class="border-t-3 px-10 pb-12">
    <LoadingButton
      @click="onSubmit"
      :is-loading="isLoading"
      class="text-white w-300px text-center mt-12 bg-rose-600 font-semibold py-2 hover:bg-rose-600/75 rounded"
    >
      Back To Home
    </LoadingButton>
    <div v-if="cartItems.length" class="mt-5">
      <div class="flex flex-col gap-y-5 bg-grayf4 py-3 px-4 rounded">
        <div
          class="flex gap-y-5 justify-between items-center bg-grayddd py-3 px-4 rounded"
          v-for="cart in cartItems"
          :key="cart.id"
        >
          <img
            class="w-32 h-32 rounded-l"
            :src="cart.image"
            :alt="cart.title"
          />
          <p class="text-gray-900">{{ cart.title }}</p>
          <p>{{ cart.price }}</p>
          <button
            @click="removeFromCart(cart.id)"
            class="bg-red-400 font-bold py-2 px-4 rounded hover:bg-red-400/70"
          >
            <span class="mr-2">❌</span>Remove
          </button>
        </div>
        <div>
          <span v-if="isLoadingIs">Removing item...</span>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="text-xl font-semibold text-center">🈳 🛒 Empty Cart .....</h1>
    </div>
  </div>
</template>

<script setup>
import LoadingButton from '../components/button/LoadingButton.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter();

const store = useStore();

const cartItems = computed(() => store.getters.getCartItems);
const isLoading = ref(false);

const onSubmit = () => {
  isLoading.value = true;
  router.push({ name: 'home' });
  setTimeout(() => (isLoading.value = false), 1000);
  console.log('text');
};
console.log(cartItems.value);
///////////////////////////////////////////
///////removing item

const isLoadingIs = ref(false);

// const itemscart = store.getters.cartItems;

const removeFromCart = (itemId) => {
  store.dispatch('removeFromCart', itemId);
};
</script>

<style lang="scss" scoped></style>
