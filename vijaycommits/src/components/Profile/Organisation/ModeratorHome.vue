<template>
<div>
    <div>
        hello
        <NavBar/>
    </div>
    <div>
        <!-- <Profile/> -->
    </div>
    <div class="row">
            <div class="col"><hr></div>
            <div class="col-auto">Your Organisats</div>
            <div class="col"><hr></div>
    </div>
    <div>
        <div>
             <div v-for='card in cards' :key="card.id" v-bind:card="card">
                 {{card}}  <br> &nbsp; <button v-on:click="getModerator()">Moderator</button>
             </div>
    </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import Profile from '@/components/Profile/Profile.vue'
import NavBar from '@/components/Home/NavBar.vue'
import ModeratorCard from '@/components/Profile/Organisation/ModeratorCard.vue'
    export default{
       name: 'ModeratorHome',
        components: {
    NavBar,
    Profile,
    ModeratorCard
},
data()
{
    return{
        cards:[],
        org:''
    }
},
 async mounted() {
        this.org = this.$route.params.id
        console.log(this.org)
            await axios.get(`http://10.177.1.207:9000/connection/${this.org}/following`).then((res)=> {this.cards = res.data}).catch(err=>console.log(err))
            console.log(cards)
            },
            methods:{
                async getModerator()
                {
                    const body={
                        userId:localStorage.getItem('userId'),
                        organisationId:this.org,
                        isOwner:false
                    }
                    await axios.post(`http://10.177.1.207:9000/organisationAdmin/addMod`,body).then((res)=>{console.log(res)})
                }
            }
    }
   
</script>

<style scoped>
.row{
    margin-left: 80px;
    margin-right: 80px;
}
</style>