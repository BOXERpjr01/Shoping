<template>
  <div class="font-spartan w-full">
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
          <p
            class="flex items-center text-center text-sm font-semibold gap-x-2 mr-2"
          >
            <img
              class="w-6"
              src="../../image/phone.svg"
              alt="Phone Number"
            />(93)797 - 028 - 687
          </p>
          <div class="h-5 w-[1.5px] bg-gray-400 ml-1 mr-4"></div>
          <router-link to="login">Login</router-link>
          <div class="h-5 w-[1px] bg-gray-400"></div>
          <router-link to="/register">Join</router-link>
          <div
            @click="router.push({ name: 'Cart' })"
            class="group mr-4 transition-all duration-500 delay-300 ease-linear w-10 flex justify-center"
          >
            <p
              class="absolute ml-4 -mt-[3.5px] bg-green-400 text-center rounded-full px-[5px] text-xs text-white"
            >
              {{ cartLength }}
            </p>
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
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const cartLength = computed(() => store.getters.cartLength);
const router = useRouter();
</script>
<style>
.navheader a {
  color: #2c3e50;
  font-weight: bold;
  padding: 10px;
  border-radius: 4px;
}
.navheader a.router-link-exact-active {
  color: white;
  background: crimson;
}
.navregister a {
  color: #2c3e50;
  font-weight: bold;
  padding: 10px;
  font-size: 13px;
  border-radius: 4px;
}
.navregister a.router-link-exact-active {
  color: white;
  background: crimson;
}
</style>
