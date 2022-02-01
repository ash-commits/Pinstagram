import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Register from '@/components/Register/Register.vue'
import Login from '@/components/Register/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})
