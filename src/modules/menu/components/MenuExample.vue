<template>
  <div class="flex items-center justify-center h-screen">
    <div class="flex flex-col items-center justify-center">
      <img :src="img" class="mx-auto app-home-img" />
      <h2 class="text-slate-500 text-sm mb-6 font-semibold primary-font">
        {{ appConfig.appName }}
      </h2>
      <p class="primary-font text-xl text-slate-500">Menu screen</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { appConfig } from '@/app/configs'
import img from '@/app/assets/images/3569457.webp'
</script>

<style scoped>
.app-home-img {
  width: 240px;
  height: auto;
}
</style>
