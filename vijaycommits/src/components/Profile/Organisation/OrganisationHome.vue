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
            <div class="col-auto">Your Organisations</div>
            <div class="col"><hr></div>
    </div>
    <div>
        <OrganisationListCard/>
    </div>
</div>
</template>
<script>
import Profile from '@/components/Profile/Profile.vue'
import NavBar from '@/components/Home/NavBar.vue'
import OrganisationListCard from '@/components/Profile/Organisation/OrganisationListCard.vue'
    export default{
       name: 'OrganisationHome',
        components: {
    NavBar,
    Profile,
    OrganisationListCard
}
    }
</script>

<style scoped>
.row{
    margin-left: 80px;
    margin-right: 80px;
}
</style>