import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import RegisterView from '../views/Auth/RegisterView.vue'
import LoginView from '../views/Auth/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      isAuth: true // Add a custom meta field to indicate authentication requirement
    }
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView,
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
