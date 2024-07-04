<template>
  <section class="pt-16 pb-12 flex flex-col items-center justify-center text-center">
    <h3 class="capitalize text-[26px] font-medium leading-[40px] mb-2">404</h3>
    <p class="text-lg font-normal leading-[34px] mb-8">Page not found</p>
    <RouterLink :to="{ name: AppRoutes.FRONTEND_HOME }"
      class="w-full max-w-[250px] py-3 rounded-3xl capitalize primary-font text-base font-medium leading-6 text-center bg-primary">
      GO HOME
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
import { AppRoutes } from '@/app/enum/appRoutes.enum';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

defineComponent({
  name: 'PageNotFound'
})
</script>

<style lang="scss" scoped></style>