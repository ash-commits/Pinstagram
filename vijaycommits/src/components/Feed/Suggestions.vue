<template>
    <div>
        <div class="Suggestion">
             <SuggestionCard v-for='suggestion in suggestions' :key="suggestion.id" v-bind:suggestion="suggestion"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import SuggestionCard from './SuggestionCard.vue'
export default {
    name:'Suggestions',
    components: {
        SuggestionCard
    },
    data()
    {
      return{
          suggestions:[]
      }  
    },
    methods: {
        async fetchSuggestions(){
            await axios.get('https://jsonplaceholder.typicode.com/photos').then((res)=> {this.suggestions = res.data}).catch(err=>console.log(err))
        }
    },
    mounted() {
        this.fetchSuggestions()
    }
}
</script>

<style scoped>
.Suggestion{
    margin-top: 30px;
}
</style>