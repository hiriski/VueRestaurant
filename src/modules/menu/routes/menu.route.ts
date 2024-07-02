import type { RouteRecordRaw } from 'vue-router'

const menuRoutes: RouteRecordRaw[] = [
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/Menu.view.vue')
  }
]

export default menuRoutes
