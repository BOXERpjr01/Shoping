<template>
  <div>
    <button class="text-center px-2 py-2 font-medium relative">
      <svg
        v-show="isLoading"
        class="w-5 h-5 m-1 font-bold fill-white animate-spin absolute left-1/2 -ml-2"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
      >
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"
        />
      </svg>
      <span :class="{ invisible: isLoading }">
        <slot></slot>
      </span>
    </button>
  </div>
</template>
<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
});
</script>
