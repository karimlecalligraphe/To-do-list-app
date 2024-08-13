import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../components/ToDo/DashboardTask.vue'
import TaskView from '@/views/TaskView.vue'
import FormView from '@/views/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: DashboardView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/form',
      name: 'form',
      component: FormView
    },
    {
      path: '/task',
      name: 'task',
      component: TaskView
    }
  ]
})

export default router
