<template>
  <AppHeader />
  <component :is="layout" />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import AppHeader from './app/components/shared/AppHeader.vue'
import { computed } from 'vue'
import { EnumLayout } from './app/enum/layout.enum'

const route = useRoute()

const layout = computed(() => {
  return route.meta.layout || EnumLayout.FRONT
})
</script>
