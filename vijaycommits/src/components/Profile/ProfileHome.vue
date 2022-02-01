<template>
    <div>
        <div>
            <NavBar />
        </div>
        <div>
            <Profile />
        </div>
        <div class="row">
            <div class="col"><hr></div>
            <div class="col-auto">Your Posts</div>
            <div class="col"><hr></div>
        </div>
    </div>
</template>

<script>
import Profile from '@/components/Profile/Profile.vue'
import NavBar from '@/components/Home/NavBar.vue'
    export default{
        name: 'ProfileHome',
        components: {
            Profile,
            NavBar
        }
    }
</script>

<style scoped>
.row{
    margin-left: 80px;
    margin-right: 80px;
}
</style>
