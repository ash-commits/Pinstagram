<template>
    <div class="feedTop">
        <div class="feed">
            <center><Feed /></center>
        </div>
        <div class="suggestions">
            <center>Advertisements / Endorsements</center>
            <Suggestions />
        </div>
    </div>
</template>

<script>
import Feed from '@/components/Feed/Feed.vue'
import Suggestions from './Suggestions.vue'
export default {
    name: 'FeedHome',
    components: {
        Feed,
        Suggestions
    }
}
</script>

<style>
.feedTop{
    display: flex;
    margin-top: 20px;
    /* overflow: hidden; */
}
.feed{
    flex: 2;
    height: 100vh;
    margin-right:5px;
    margin-left: 5px;
    position: relative;
    overflow: scroll;
    line-height: 30px;
}
.suggestions{
    flex: 3;
    height: 100vh;
    margin-left: 5px;
    overflow: scroll;
    /* position: fixed; */
    max-width: 500px;
    line-height: 30px;
}
</style>