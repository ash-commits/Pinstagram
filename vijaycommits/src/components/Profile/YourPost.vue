<template>
    <div class="Post">
             <YourPostCard v-for='post in posts' :key="post.id" v-bind:post="post"/>
        </div>
</template>

<script>
import YourPostCard from '@/components/Profile/YourPostCard.vue'
import axios from 'axios'
export default {
    name: 'YourPost',
    components: {
        YourPostCard
    },
    data()
    {
      return{
          posts:[]
      }  
    },
    methods: {
        async fetchPosts(){
            await axios.get('https://jsonplaceholder.typicode.com/photos').then((res)=> {this.posts = res.data}).catch(err=>console.log(err))
        }
    },
    mounted() {
        this.fetchPosts()
    }
}
</script>