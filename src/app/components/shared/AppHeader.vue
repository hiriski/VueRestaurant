<template>
  <header id="app-header" class="flex items-center mx-auto max-w-screen-lg py-4">
    <div class="mr-2 app-header-logo">
      <LogoVue />
    </div>
    <h1 class="text-xl font-semibold text-slate-600 primary-font">{{ appConfig.appName }}</h1>
    <nav class="ml-auto">
      <ul class="flex items-center">
        <li v-for="menu in headerMenus" :key="menu.path" class="ml-5">
          <RouterLink
            :to="menu.path"
            :class="checkIsRouteAndPathSame(menu.path) ? 'text-indigo-600' : 'text-slate-600'"
            class="text-base font-medium primary-font"
            >{{ menu.label }}</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import LogoVue from '@/app/components/icons/Vue.vue'
import { appConfig } from '@/app/configs'

defineComponent({
  name: 'AppHeader'
})

const route = useRoute()

const headerMenus = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Menu',
    path: '/menu'
  },
  {
    label: 'Offers',
    path: '/offers'
  }
]

const checkIsRouteAndPathSame = (path: string) => {
  return route.path === path
}
</script>

<style scoped>
.app-header-logo > svg {
  width: 20px;
  height: auto;
}
</style>
