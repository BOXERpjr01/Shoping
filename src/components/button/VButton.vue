<script setup>
import { ref } from "vue";

const loading = ref(false);

const Loading = () => {
  loading.value = true;
  setTimeout(() => {
        loading.value = false;
      },100);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  label: {
    type: String,
    default: "Button component",
  },
  disabled: Boolean,
});

// const emit= defineEmits('btnclicked');

// const moseOver=()=>{
//   emits('btnhovered', bio)
// }
</script>
<template>
  <div>
    <button
      @click="Loading"
      :disabled="disabled"
      class="btn flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <svg
        v-show="loading"
        class="animate-spin mr-2"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path
          d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z"
        ></path>
      </svg>
      <span class="ml-0">
        {{ label }}
      </span>
    </button>
  </div>
</template>
