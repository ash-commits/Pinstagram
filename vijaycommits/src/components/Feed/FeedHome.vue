<template>
    <div class="feedTop">
        <div class="feed">
            <center><Feed /></center>
        </div>
        <div class="suggestions">
            <center>Advertisements / EndorseMents</center>
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
    overflow: hidden;
}
.feed{
    margin-right:10px;
    margin-left: 30px;
    position: relative;
}
.suggestions{
    margin-left: 100px;
    position: relative;
    max-width: 600px;
}
</style>