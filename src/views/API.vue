<template>
  <div class="font-spartan cursor-default border-b-3 w-full">
    <div class="navpadding pt-9 pb-4 px-[60px]">
      <div class="nav flex items-center justify-between gap-x-60">
        <div class="navbar flex w-[50%] justify-between">
          <img
            class="w-[80px]"
            src="../../image/logo-removebg-preview.png"
            alt=""
          />
          <ul class="navheader flex gap-x-[10%]">
            <router-link to="/">Home</router-link>
            <router-link to="/clothes">Clothes</router-link>
            <router-link to="/jewelery">Jewelery</router-link>
            <router-link to="/electronic">Electronics</router-link>
          </ul>
        </div>
        <div
          class="navregister flex w-[50%] text-gray-400 justify-end items-center"
        >
          <p class="flex items-center text-sm font-semibold gap-x-2 mr-2">
            <img
              class="w-6"
              src="../../image/phone.svg"
              alt="Phone Number"
            />(93)797028687
          </p>
          <router-link to="/register">Registration</router-link>
          <div class="h-7 w-[1.5px] bg-gray-400"></div>
          <router-link to="login">Login</router-link>
          <div
            class="group transition-all duration-500 delay-300 ease-linear w-10 flex justify-center"
          >
            <span
              class="absolute ml-4 -mt-[3.5px] cursor-pointer bg-green-400 rounded-full px-[5px] text-xs text-white"
              >5</span
            >
            <img
              class="group-hover:cursor-pointer group-hover:w-7"
              src="../../image/shopping-cart.svg"
              alt=""
            />
          </div>
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
