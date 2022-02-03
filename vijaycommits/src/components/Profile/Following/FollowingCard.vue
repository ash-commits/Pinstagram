<template>
    <div class="following-card">
        <!-- <div><img class="card-details" style="" src="@/assets/logo.png"/></div>
        <div><h4 class="card-details" style="display:inline">Username</h4></div>
        <div><button class="card-details btn btn-primary">Follow</button></div> -->
        <div class="img" style="margin-left:25%">
            <img :src="followingCard.url" style="display: inline;width: 30px;height: 30px;padding:5px;border-radius:40px">
        </div>
        <div class="username" style="">
            <h4 style="display: inline;">{{followingCard.title}}</h4>
        </div>
        <div class="following-btn" style="margin-right:25%">
            <button class="btn btn-primary" style="height: 30px;width: 80px;font-size: small;">Following</button>
        </div>
    </div>
</template>
<script>
export default{
    name: 'FollowingCard',
    props: ['followingCard']
}
</script>
<style>
.img{
    width: 30
}
.following-card{
    display: flex;
    justify-content: space-between;
    margin-top:2%;
    margin-bottom: 2%;
    /* border-bottom: 2px solid black; */
}
</style>
