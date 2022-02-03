<template>
    <div>
             <FollowingCard v-for='followingCard in followingCards' :key="followingCard.id" v-bind:card="followingCard"/>
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
            followingCards: []
        }
    },
    methods: {
        async fetchFollowingCards(){
            await axios.get('https://jsonplaceholder.typicode.com/photos').then((res)=> {this.followingCards = res.data}).catch(err=>console.log(err))
        }
    },
    mounted() {
        this.fetchFollowingCards()
    }
}
</script>