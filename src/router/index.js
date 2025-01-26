import { createRouter, createWebHistory } from 'vue-router'
import TodosView from '../views/TodosView.vue'
import TemplateView from '@/views/TemplateView.vue'
import ReactivityView from '@/views/ReactivityView.vue'
import ComputedView from '@/views/ComputedView.vue'
import BindingView from '@/views/BindingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todos',
      component: TodosView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/template',
      name: 'template',
      component: TemplateView,
    },
    {
      path: '/reactivity',
      name: 'reactivity',
      component: ReactivityView,
    },
    {
      path: '/computed',
      name: 'computed',
      component: ComputedView,
    },
    {
      path: '/binding',
      name: 'binding',
      component: BindingView,
    },
  ],
})

export default router
