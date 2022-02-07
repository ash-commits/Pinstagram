<template>
    <div>
             <YourPostCard v-for='post in posts' :key="post.id" v-bind:post="post"/>
        </div>
</template>

<script>
import YourPostCard from '@/components/Profile/YourPostCard.vue'
import axios from 'axios'
export default {
    name: 'YourPost',
    components: {
        YourPostCard,
    },
    props:[ 'id' ],
    data()
    {
      return{
          posts:[],
          userId:null
      }
    },
    methods: {
        async fetchPosts(){
            if(!this.id)
            {
                await axios.get(`http://10.177.1.207:9000/post/getPostsByUserId/${this.userId}`).then((res)=> {this.posts = res.data}).catch(err=>console.log(err))
            }
            else if(this.id)
            {
                await axios.get(`http://10.177.1.207:9000/post/getPostsByUserId/${this.id}`).then((res)=> {this.posts = res.data}).catch(err=>console.log(err))
            }
            // else
            // {
                console.log("Problem with props in YOURPOST")
            // }
        }
    },
    mounted() {
        this.userId=localStorage.getItem('userId')
        this.fetchPosts()
    }
}
</script>
