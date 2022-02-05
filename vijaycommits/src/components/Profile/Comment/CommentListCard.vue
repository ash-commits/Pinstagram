<template>
    <div>
             <CommentCard v-for='card in cards' :key="card.id" v-bind:card="card"/>
    </div>
</template>
<script>
import axios from 'axios'
import CommentCard from '@/components/profile/Comment/CommentCard'
export default{
    name: 'CommentListcard',
    components: {
    CommentCard
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