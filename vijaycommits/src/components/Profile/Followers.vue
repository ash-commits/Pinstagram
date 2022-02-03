<template>
<div>
    <div>
        <NavBar/>
    </div>
    <div>
        <Profile/>
    </div>
    <div class="row">
            <div class="col"><hr></div>
            <div class="col-auto">Your Followers</div>
            <div class="col"><hr></div>
    </div>
    <div>
        <FollowerListCard/>
    </div>
</div>
</template>
<script>
import Profile from '@/components/Profile/Profile.vue'
import NavBar from '@/components/Home/NavBar.vue'
import FollowerListCard from '@/components/Profile/FollowerListCard.vue'
    export default{
        name: 'ProfileHome',
        components: {
            Profile,
            NavBar,
            FollowerListCard
        }
    }
</script>

<style scoped>
.row{
    margin-left: 80px;
    margin-right: 80px;
}
</style>