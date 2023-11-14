<template>
  <div>
    <div >
      <div >
        <product :post="post" />
      </div>
    </div>
  </div>
  <div >

  </div>
</template>

<script setup>
import product from './product.vue';
import { ref, defineProps } from 'vue';
const props = defineProps(['posts']);
const post = ref(props);
</script>

<style lang="scss" scoped></style>
