<template>
    <div>
             <SearchCard v-for='card in cards' :key="card.id" v-bind:card="card"/>
    </div>
</template>
<script>
import axios from 'axios'
import SearchCard from '@/components/Search/SearchCard'
export default{
    name: 'SearchListCard',
    components: {
        SearchCard
    },
    data () {
        return {
            cards: [],
            userId: null
        }
    },
    methods: {
        async fetchCards(){
            await axios.get(`http://10.177.1.207:9000/connection/${this.userId}/following`).then((res)=> {this.cards = res.data}).catch(err=>console.log(err))
            console.log(this.cards)
        }
    },
    mounted() {
        this.userId = localStorage.getItem('userId')
        this.fetchCards()
    }
}
</script>