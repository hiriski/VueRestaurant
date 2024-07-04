import { AppRoutes } from '@/app/enum/appRoutes.enum'
import type { RouteRecordRaw } from 'vue-router'

const adminMenuCategoryRoutes: RouteRecordRaw[] = [
  {
    path: '/admin/menu-category',
    name: AppRoutes.ADMIN_MENU_CATEGORY,
    component: () => import('../views/AdminMenuCategory.view.vue')
  }
]

export default adminMenuCategoryRoutes
