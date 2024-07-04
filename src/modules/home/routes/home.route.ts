import { AppRoutes } from '@/app/enum/appRoutes.enum'
import type { RouteRecordRaw } from 'vue-router'

const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: AppRoutes.FRONTEND_HOME,
    component: () => import('../views/Home.view.vue')
  }
]

export default homeRoutes
