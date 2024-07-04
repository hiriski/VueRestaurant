import { AppRoutes } from '@/app/enum/appRoutes.enum'
import type { RouteRecordRaw } from 'vue-router'

const menuRoutes: RouteRecordRaw[] = [
  {
    path: '/menu',
    name: AppRoutes.FRONTEND_MENU,
    component: () => import('../views/Menu.view.vue')
  }
]

export default menuRoutes
