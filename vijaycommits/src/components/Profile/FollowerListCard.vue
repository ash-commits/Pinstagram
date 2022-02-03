<template>
    <div>
             <FollowerCard v-for='card in cards' :key="card.id" v-bind:card="card"/>
    </div>
</template>
<script>
import axios from 'axios'
import FollowerCard from '@/components/profile/FollowerCard'
export default{
    name: 'FollowerListCard',
    components: {
        FollowerCard
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