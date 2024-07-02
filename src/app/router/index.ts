import { createRouter, createWebHistory } from 'vue-router'

// routes
import homeRoutes from '@/modules/home/routes/home.route'
import menuRoutes from '@/modules/menu/routes/menu.route'
import offersRoutes from '@/modules/offers/routes/offers.route'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...homeRoutes, ...menuRoutes, ...offersRoutes]
})

export default router
