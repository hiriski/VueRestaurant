import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// routes
import homeRoutes from '@/modules/home/routes/home.route'
import menuRoutes from '@/modules/menu/routes/menu.route'
import offersRoutes from '@/modules/offers/routes/offers.route'
import adminDashboardRoutes from '@/modules/admin/dashboard/routes/admin-dashboard.route'
import adminMenuCategoryRoutes from '@/modules/admin/menu-category/routes/admin-menu-category.route'

// enums
import { AppRoutes } from '@/app/enum/appRoutes.enum'

// components
import PageNotFound from '@/modules/error/views/PageNotFound.vue'

/**
 * base routes
 */
const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: {
      name: AppRoutes.FRONTEND_HOME
    }
  },
  {
    path: '/admin',
    redirect: {
      name: AppRoutes.ADMIN_DASHBOARD
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: AppRoutes.NOT_FOUND,
    component: PageNotFound
  }
]

/**
 * Public routes
 */
const publicRoutes: RouteRecordRaw[] = [...homeRoutes, ...menuRoutes, ...offersRoutes]

/**
 * Admin routes
 */
const adminRoutes: RouteRecordRaw[] = [...adminDashboardRoutes, ...adminMenuCategoryRoutes]

const routes = baseRoutes.concat(publicRoutes, adminRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
