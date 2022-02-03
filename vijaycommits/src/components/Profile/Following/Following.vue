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
            <div class="col-auto">Your are Following</div>
            <div class="col"><hr></div>
    </div>
    <div>
        <FollowingListCard/>
    </div>
</div>
</template>
<script>
import Profile from '@/components/Profile/Profile.vue'
import NavBar from '@/components/Home/NavBar.vue'
import FollowingListCard from '@/components/Profile/Following/FollowingListCard.vue'
    export default{
        name: 'ProfileHome',
        components: {
            Profile,
            NavBar,
            FollowingListCard
        }
    }
</script>

<style scoped>
.row{
    margin-left: 80px;
    margin-right: 80px;
}
</style>