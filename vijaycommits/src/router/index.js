import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Register from '@/components/logs/Register.vue'
import Login from '@/components/logs/Login.vue'
import ProfileHome from '@/components/Profile/ProfileHome.vue'
import NotificationHome from '@/components/Notification/NotificationHome'
import ViewStory from '@/components/Stories/ViewStory.vue'
import FollowersHome from '@/components/Profile/Followers/FollowersHome.vue'
import FollowingHome from '@/components/Profile/Following/FollowingHome.vue'
import AnotherProfile from '@/components/OthersProfile/AnotherProfile.vue'
import YourPostCard from '@/components/Profile/YourPostCard'
import Createpost from '@/components/Home/Createpost'
import OrganisationHome from '@/components/Profile/Organisation/OrganisationHome'
import SearchHome from '@/components/Search/SearchHome.vue'
import OtherProfile from '@/components/OthersProfile/OtherProfile.vue'
import ModeratorHome from '@/components/Profile/Organisation/ModeratorHome.vue'
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
      path: '/following',
      name: 'FollowingHome',
      component: FollowingHome
    },
    {
      path: '/another/:id',
      name: 'AnotherProfile',
      component: AnotherProfile,
      props: true,
    },
    {
      path: '/other/:id',
      name: 'OtherProfile',
      component: OtherProfile,
      props: true,
    },
    {
      path: '/yourpostcard',
      name: 'YourPostCard',
      component: YourPostCard
    },
    {
      path: '/createpost',
      name: 'Createpost',
      component: Createpost
    },
    {
      path: '/organisation',
      name: 'OrganisationHome',
      component: OrganisationHome
    },
    {
      path: '/search',
      name: 'SearchHome',
      component: SearchHome
    },
    {
      path: '/ModeratorHome/:id',
      name: ModeratorHome,
      component: ModeratorHome,
      props:true
    }
  ]
})
