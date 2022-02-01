<template>
    <div>
        <div>
            <NavBar />
        </div>
        <div>
            <Notification />
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/Home/NavBar.vue'
import Notification from '@/components/Notification/Notification.vue'
export default {
    name:'NotificationHome',
    components: {
        Notification,
        NavBar
    }
}
</script>