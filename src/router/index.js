import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView')
  },
  {
    path: '/hair',
    name: 'hair',
    component: () => import('@/views/HairView')
  },
  {
    path: '/nails',
    name: 'nails',
    component: () => import('@/views/NailsView')
  },
  {
    path: '/lush',
    name: 'lush',
    component: () => import('@/views/LushView')
  },
  {
    path: '/make',
    name: 'make',
    component: () => import('@/views/MakeView')
  },
  {
    path: '/cosmetology',
    name: 'cosmetology',
    component: () => import('@/views/CosmetologyView')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/BlogView')
  },
  {
    path: '/price',
    name: 'price',
    component: () => import('@/views/PriceView')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('@/views/ServiceView')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return to = top
  }
})

export default router
