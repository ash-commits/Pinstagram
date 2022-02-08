<template>
    <div>
             <FollowingCard v-for='card in cards' :key="card" v-bind:card="card"/>
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
            userId:null,
            cards: []
        }
    },
    methods: {
        async fetchCards(){
            this.userId= localStorage.getItem("userId")
            await axios.get(`http://10.177.1.207:9000/connection/${this.userId}`).then((res)=> {this.cards = res.data}).catch(err=>console.log(err))
            console.log(this.cards)
        }
    },
    mounted() {
        this.fetchCards()
    }
}
</script>