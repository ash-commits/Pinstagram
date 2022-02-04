<template>
    <div>
        <FeedCard v-for='feed in feeds' :key="feed.id" v-bind:feed="feed"/>
    </div>
</template>

<script>
import axios from 'axios'
import FeedCard from '@/components/Feed/FeedCard.vue'
export default {
   components: {
        FeedCard
    },
    data()
    {
      return{
          feeds:[],
          userId: ''
      }  
    },
    methods: {
        async fetchFeeds(){
            await axios.get(`http://10.177.1.207:9000/feed/posts/${this.userId}`).then((res)=> {this.feeds = res.data}).catch(err=>console.log(err))
        }
    },
    mounted() {
        this.userId = localStorage.getItem('userId')
        this.fetchFeeds()
    }
}
</script>

<style scoped>
.trail{
    display: flex;
}
</style>