<template>
  <AppHeader />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './app/components/shared/AppHeader.vue'
</script>
