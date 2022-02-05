<template>
    <div>
             <OrganisationCard v-for='card in orgs' :key="card.id" v-bind:card="card"/>
    </div>
</template>
<script>
import axios from 'axios'
import OrganisationCard from '@/components/profile/Organisation/OrganisationCard'
export default{
    name: 'OrganisationListCard',
    components: {
    OrganisationCard
},
    data () {
        return {
            orgs:[]
        }
    },
    methods: {
        // async fetchCards(){
        //     await axios.get('https://jsonplaceholder.typicode.com/photos').then((res)=> {this.cards = res.data}).catch(err=>console.log(err))
        // },
        async fetchOrgs(){
            await axios.get(`http://10.177.1.207:9000/organisationAdmin/find/${this.userId}`).then((res)=> {this.orgs=res.data}).catch(err=>console.log(err))
            console.log(this.orgs)
        }
    },
    mounted() {
        this.fetchOrgs()
    }
}
</script>