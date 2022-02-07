<template>
    <div>
        <div>
            <NavBar />
        </div>
        <div class="Notification">
             <Notification v-for='notification in Notifications' :key="notification.id" v-bind:notification="notification"/>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/Home/NavBar.vue'
import Notification from '@/components/Notification/Notification.vue'
import axios from 'axios'
export default {
    name:'NotificationHome',
    components: {
        Notification,
        NavBar
    },
    data()
    {
      return{
          Notifications:[]
      }  
    },
    methods: {
        async fetchNotifications(){
            await axios.get('').then((res)=> {this.Notifications = res.data}).catch(err=>console.log(err))
        }
    },
    mounted() {
        this.fetchNotifications()
    }
}
</script>

<style scoped>
.Notification{
    margin-top: 80px;
}
</style>
