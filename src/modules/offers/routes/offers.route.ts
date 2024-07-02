import type { RouteRecordRaw } from 'vue-router'

const offersRoutes: RouteRecordRaw[] = [
  {
    path: '/offers',
    name: 'offers',
    component: () => import('../views/Offers.view.vue')
  }
]

export default offersRoutes
