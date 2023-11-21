<template>
  <div>
    <router-link :to="{ name: 'Single', params: { id: posts.id } }">
      <div class="groups px-10 py-10 bg-grayf4">
        <div class="divimage flex justify-center items-center">
          <img class="w-64 h-64" :src="posts.image" :alt="posts.title" />
        </div>
        <div
          class="hidden hoverelem text-white justify-center items-center -mt-[40.5px] h-[335px] w-[340px] absolute groups-hover:flex groups-hover:bg-gray-700/50"
        >
          View Product
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
