<template>
    <div>
            <div class="status-wrapper">
                <div class="wrapper"><StoryCard v-for='story in stories' :key="story.id" v-bind:story="story"/></div>
            </div>
    </div>
</template>

<script>
import StoryCard from '@/components/Stories/StoryCard.vue'
import axios from 'axios'
export default {
    name: 'StoryHome',
    components: {
        StoryCard
    },
    data()
    {
      return{
          stories:[]
      }  
    },
    methods: {
        async fetchStories(){
            await axios.get('https://jsonplaceholder.typicode.com/photos').then((res)=> {this.stories = res.data}).catch(err=>console.log(err))
        }
    },
    mounted() {
        this.fetchStories()
    }
}
</script>

<style scoped>

.wrapper{
    width: 70%;
    max-width: 1000px;
    display: flex;
    grid-template-columns: 100% 200%;
    grid-gap: 5px;
    /* position: fixed; */
    /* border: 2px solid black; */
}

.status-wrapper{
    width: 1000%;
    height: 120px;
    background: #fff;
    border: 1px solid white;
    border-radius: 2px;
    padding: 1px;
    padding-right: 0;
    display: flex;
    align-items: center;
    overflow: hidden;
    overflow-x: auto;
}

.status-wrapper::-webkit-scrollbar{
    display: none;
} 
</style>