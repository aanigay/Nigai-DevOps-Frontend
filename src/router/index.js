import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheChat from "@/components/chat/TheChat.vue";
import TheLogin from "@/components/login/TheLogin.vue";
import AnotherLogin from "@/components/login/AnotherLogin.vue";
import TheFeed from "@/components/feed/TheFeed.vue";
import TheDashboard from "@/components/dashboard/TheDashboard.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: TheLogin
    },
    {
      path: '/chat',
      name: 'chat',
      component: TheChat
    },
    {
      path: '/feed',
      name: 'feed',
      component: TheFeed
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: TheDashboard
    }
  ]
})

export default router
