<template>
    <div class="search-card">
        <!-- <div><img class="card-details" style="" src="@/assets/logo.png"/></div>
        <div><h4 class="card-details" style="display:inline">Username</h4></div>
        <div><button class="card-details btn btn-primary">Follow</button></div> -->
        <div class="img" style="margin-left:25%">
            <!-- <img :src="searchResult.url" style="display: inline;width: 30px;height: 30px;padding:5px;border-radius:40px"> -->
        </div>
        <div class="username" style="">
            <router-link :to ="{name: 'AnotherProfile', params: {searchResult: searchResult}}"><h4 class="router">{{searchResult.name}}&nbsp;&nbsp;&nbsp;{{ searchResult.id }}</h4></router-link>
        </div>
        <div class="follow-btn" style="margin-right:25%">
            <!-- <button class="btn btn-primary" style="height: 30px;width: 60px;font-size: small;">{{searchResult.id}}</button> -->
        </div>
    </div>
</template>
<script>
export default{
    name: 'SearchCard',
    props: ['searchResult']
}
</script>
<style>
a {
    color: black;
    text-decoration: none;
}
a:hover{
    color: skyblue;
}
.img{
    width: 30
}
.search-card{
    display: flex;
    justify-content: space-between;
    margin-top:2%;
    margin-bottom: 2%;
    /* border-bottom: 2px solid black; */
}
</style>
