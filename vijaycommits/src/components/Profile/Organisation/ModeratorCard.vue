<template>
    <div>
        <div class="row">
            <div class="col"><hr></div>
        </div>
        <!-- <p><b> {{ card }}</b> from {{ card.id }} <b> ok we are fetching </b> </p><button v-on:click="getModerator()">Moderator</button> -->
        <div class="row">
            <div class="col"><hr></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    props:['card'],
    name: 'ModeratorCard',
    methods:{
                async getModerator()
                {
                    const body={
                        userId:localStorage.getItem('userId'),
                        organisationId:this.card,
                        isOwner:false
                    }
                    await axios.post(`http://10.177.1.207:9000/organisationAdmin/addmod`,body).then((res)=>{console.log(res)})
                }
            }
}
</script>

<style scoped>
hr{
  margin-top: 0px;
  margin-bottom: 0px;  
}

</style>
