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
          feeds:[]
      }  
    },
    methods: {
        async fetchFeeds(){
            await axios.get('https://jsonplaceholder.typicode.com/photos').then((res)=> {this.feeds = res.data}).catch(err=>console.log(err))
        }
    },
    mounted() {
        this.fetchFeeds()
    }
}
</script>

<style scoped>
.trail{
    display: flex;
}
</style>