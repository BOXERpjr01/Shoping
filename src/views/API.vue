<template>
  <div class="font-spartan w-full">
    <div
      class="navpadding bg-gray-100 fixed w-full top-0 left-0 z-50 bg-white pt-9 pb-4 px-[60px]"
    >
      <div class="menu hidden" v-if="show" @click="menu">
        <img src="../../image/list.svg" alt="" />
      </div>
      <div class="nav flex items-center justify-between gap-x-60">
        <div class="navbar flex w-[50%] justify-between">
          <img
            class="logo w-[80px]"
            src="../../image/logo-removebg-preview.png"
            alt=""
          />
          <ul :style="{ left: `${left}px` }" class="navheader flex gap-x-[10%]">
            <div class="close flex justify-end" @click="close">
              <img src="../../image/x.svg" alt="" />
            </div>
            <router-link to="/">Home</router-link>
            <router-link to="/clothes">Clothes</router-link>
            <router-link to="/jewelery">Jewelery</router-link>
            <router-link to="/electronic">Electronics</router-link>
            <div class="reglogin hidden">
              <router-link to="login">Login</router-link>
            </div>
          </ul>
        </div>
        <div
          class="navregister text-[1.2vw] flex w-[50%] text-gray-400 justify-end items-center"
        >
          <p
            class="flex text-[1.2vw] items-center text-center text-sm font-semibold gap-x-2 mr-2"
          >
            <img
              class="w-6"
              src="../../image/phone.svg"
              alt="Phone Number"
            />(93)797 - 028 - 687
          </p>

          <div class="line h-5 w-[1.5px] bg-gray-400 ml-1 mr-4"></div>
          <router-link to="login">Login</router-link>
          <div class="line h-5 w-[1px] mx-2 bg-gray-400"></div>
          <router-link to="/register">Join</router-link>
          <div
            @click="router.push({ name: 'Cart' })"
            class="group cart mr-4 transition-all duration-500 delay-300 ease-linear w-10 flex justify-center"
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
import { ref } from 'vue';

const store = useStore();
const cartLength = computed(() => store.getters.cartLength);
const router = useRouter();

const show = ref(true);
const left = ref('');
const menu = () => {
  left.value = 0;
  show.value = !show.value;
};
const close = () => {
  left.value = -140;
  show.value = !show.value;
};
</script>
<style>
.navheader a {
  font-weight: bold;
  padding: 10px;
  border-radius: 4px;
}
.navheader a.router-link-exact-active {
  color: white;
  background: crimson;
}
.navregister a {
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
