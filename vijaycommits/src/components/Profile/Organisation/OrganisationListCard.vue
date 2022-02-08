<template>
    
    <div>
            
             <OrganisationCard v-for='org in orgs' :key="org.id" v-bind:org="org"/>
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
            orgs:[],
            userId:localStorage.getItem("userId")
        }
    },
    methods: {
        // async fetchCards(){
        //     await axios.get('https://jsonplaceholder.typicode.com/photos').then((res)=> {this.cards = res.data}).catch(err=>console.log(err))
        // },
        async fetchOrgs(){
        
            console.log("userId"+this.userId)
            
            await axios.get(`http://10.177.1.207:9000/organisationAdmin/find/${this.userId}`).then((res)=> {this.orgs=res.data}).catch(err=>console.log(err))
            console.log("test"+this.orgs)
        }
    },
    mounted() {
        this.userId=localStorage.getItem('userId')
        console.log(this.userId)

        this.fetchOrgs()
    }
}
</script>