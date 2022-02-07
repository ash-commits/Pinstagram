<template>
    <div class="home">
        <div>
        <NavBar />
        </div>
        <div class="stopX">
            <StroyHome />
        </div>
        <div class="feedHome">
            <FeedHome />
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/Home/NavBar.vue'
import FeedHome from '@/components/Feed/FeedHome.vue'
import StroyHome from '@/components/Stories/StoryHome.vue'
export default{
    name: 'Home',
    components: {
        NavBar,
        FeedHome,
        StroyHome
    }
}
</script>

<style scoped>
.stopX{
    position: fixed;
    z-index: 1;
}
.feedHome{
    padding-top: 150px;
    /* position: fixed; */
}
.home{
    overflow-y: hidden;
}
</style>
