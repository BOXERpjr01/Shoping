<template>
  <div class="font-spartan cursor-default border-b-3">
    <div class="pt-9 pb-4 px-[60px]">
      <div class="nav flex items-center justify-between gap-x-60">
        <div class="flex gap-x-28">
          <h1 class="font-bold text-2xl text-start">Online Shop</h1>
          <ul class="flex gap-x-16">
            <router-link to="/">Home</router-link>
            <router-link to="/clothes">Clothes</router-link>
            <router-link to="/jewelery">Jewelery</router-link>
            <router-link to="/electronic">Electronics</router-link>
          </ul>
        </div>
        <div class="flex gap-x-3 text-gray-400 justify-center items-center">
          <p class="flex items-center font-semibold gap-x-2 mr-2">
            <img src="../../image/phone.svg" alt="Phone Number" />(93)797028687
          </p>
          <router-link to="/register">Registration</router-link>
          <div class="h-7 w-[1.5px] bg-gray-400"></div>
          <router-link to="login">Login</router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LoadingButton from '../components/button/LoadingButton.vue';

const isLoading = ref(false);
const onSubmit = () => {
  isLoading.value = true;
  setTimeout(() => (isLoading.value = false), 1000);
};

const isLoad = ref(false);
const onSubmiting = () => {
  isLoad.value = true;
  setTimeout(() => (isLoad.value = false), 1000);
};
</script>
<style>
.nav a {
  color: #2c3e50;
  font-weight: bold;
  padding: 10px;
  border-radius: 4px;
}
.nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
</style>
