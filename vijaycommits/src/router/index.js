import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Register from '@/components/logs/Register.vue'
import Login from '@/components/logs/Login.vue'
import ProfileHome from '@/components/Profile/ProfileHome.vue'
import NotificationHome from '@/components/Notification/NotificationHome'
import ViewStory from '@/components/Stories/ViewStory.vue'
import FollowersHome from '@/components/Profile/Followers/FollowersHome.vue'
import AnotherProfile from '@/components/OthersProfile/AnotherProfile.vue'
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
      name: 'ProfileHome',
      component: ProfileHome
    },
    {
      path: '/notification',
      name: 'NotificationHome',
      component: NotificationHome
    },
    {
      path: '/view/:id',
      name: 'ViewStory',
      component: ViewStory,
      props: true
    },
    {
      path: '/followers',
      name: 'FollowersHome',
      component: FollowersHome
    },
    {
      path: '/another/:id',
      name: 'AnotherProfile',
      component: AnotherProfile,
      props: true
    }
  ]
})
