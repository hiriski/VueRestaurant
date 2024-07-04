import { AppRoutes } from '@/app/enum/appRoutes.enum'
import type { RouteRecordRaw } from 'vue-router'

const offersRoutes: RouteRecordRaw[] = [
  {
    path: '/offers',
    name: AppRoutes.FRONTEND_OFFERS,
    component: () => import('../views/Offers.view.vue')
  }
]

export default offersRoutes
