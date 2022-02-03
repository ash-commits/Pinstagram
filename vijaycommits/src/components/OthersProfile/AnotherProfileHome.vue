<template>
    <div>
        <div>
            <AnotherProfile />
        </div>
    </div>
</template>

<script>
import AnotherProfile from '@/components/OthersProfile/AnotherProfile.vue'
import NavBar from '@/components/Home/NavBar.vue'
import YourPost from '@/components/Profile/YourPost.vue'
    export default{
        name: 'AnotherProfileHome',
        components: {
            AnotherProfile,
            NavBar,
            YourPost
        }
    }
</script>

<style scoped>
.row{
    margin-left: 80px;
    margin-right: 80px;
}
</style>
