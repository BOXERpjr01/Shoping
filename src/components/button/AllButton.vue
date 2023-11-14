<script setup>
import { ref } from 'vue'
import LoadingButton from './LoadingButton.vue'

const isLoading = ref(false)

const onSubmit = () => {
  isLoading.value = true
  setTimeout(()=>isLoading.value=false, 1000)
}
</script>
<template>
  <div class="flex justify-center items-center h-screen bg-primary gap-10">
    <LoadingButton @click="onSubmit" :is-loading="isLoading" class="text-white bg-rose-600 hover:bg-rose-600/80 rounded"/>
    <LoadingButton @click="onSubmit" :is-loading="isLoading" class="text-white bg-sky-600 hover:bg-sky-600/80 rounded"/>
  </div>
</template>


<style lang="scss" scoped></style>
