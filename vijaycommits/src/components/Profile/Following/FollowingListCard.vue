<template>
    <div>
             <FollowingCard v-for='card in cards' :key="card.id" v-bind:card="card"/>
    </div>
</template>
<script>
import axios from 'axios'
import FollowingCard from '@/components/profile/Following/FollowingCard'
export default{
    name: 'FollowingListCard',
    components: {
        FollowingCard
    },
    data () {
        return {
            cards: []
        }
    },
    methods: {
        async fetchCards(){
            await axios.get('https://jsonplaceholder.typicode.com/photos').then((res)=> {this.cards = res.data}).catch(err=>console.log(err))
        }
    },
    mounted() {
        this.fetchCards()
    }
}
</script>