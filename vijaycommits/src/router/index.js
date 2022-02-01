import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Register from '@/components/Logs/Register.vue'
import Login from '@/components/Logs/Login.vue'
import ProfileHome from '@/components/Profile/ProfileHome.vue'
import NotificationHome from '@/components/Notification/NotificationHome.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: ProfileHome,
      component: ProfileHome
    },
    {
      path: '/notification',
      name: NotificationHome,
      component: NotificationHome
    }
  ]
})
