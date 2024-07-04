import { AppRoutes } from '@/app/enum/appRoutes.enum'
import type { RouteRecordRaw } from 'vue-router'

const adminDashboardRoutes: RouteRecordRaw[] = [
  {
    path: '/admin/dashboard',
    name: AppRoutes.ADMIN_DASHBOARD,
    component: () => import('../views/AdminDashboard.view.vue')
  }
]

export default adminDashboardRoutes
