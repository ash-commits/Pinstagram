<template>
    <div class="feedTop">
        <div class="feed">
            <center><Feed /></center>
        </div>
        <div class="suggestions">
            Suggestions
        </div>
    </div>
</template>

<script>
import Feed from '@/components/Feed/Feed.vue'
export default {
    name: 'FeedHome',
    components: {
        Feed
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
    margin-left: 300px;
    position: relative;
}
.suggestions{
    margin-left: 200px;
}
</style>