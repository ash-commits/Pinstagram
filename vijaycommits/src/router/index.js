import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Register from '@/components/logs/Register.vue'
import Login from '@/components/logs/Login.vue'
import ProfileHome from '@/components/Profile/ProfileHome.vue'
import FollowerCard from '@/components/profile/FollowerCard'
import FollowerListCard from '@/components/profile/FollowerListCard'
import NotificationHome from '@/components/Notification/NotificationHome'
import ViewStory from '@/components/Stories/ViewStory.vue'
import Followers from '@/components/Profile/Followers.vue'
import Following from '@/components/Profile/Following/Following'
import FollowingCard from '@/components/Profile/Following/FollowingCard'
import FollowingListCard from '@/components/Profile/Following/FollowingListCard'
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
      path: '/followercard',
      name: 'FollowerCard',
      component: FollowerCard
    },
    {
      path: '/followerlistcard',
      name: 'FollowerListCard',
      component: FollowerListCard
    },
    {
      path: '/followers',
      name: 'Followers',
      component: Followers
    },
    {
      path: '/followingcard',
      name: 'FollowingCard',
      component: FollowingCard
    },
    {
      path: '/followinglistcard',
      name: 'FollowingListCard',
      component: FollowingListCard
    },
    {
      path: '/following',
      name: 'Following',
      component: Following
    }
  ]
})
