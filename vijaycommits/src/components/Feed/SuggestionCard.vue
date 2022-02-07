<template>
    <div>
        <div class="row">
            <div class="col"><hr></div>
        </div>
        <!-- <p><b> {{ suggestion.title }}</b> from {{ suggestion.id }} <b> ok we are fetching </b> </p> -->
        <img :src='suggestion[0].url' style="margin-left:5px ;width:550px; border-radius: 20%; height:500px; ">
                <img :src='suggestion[1].url' style="margin-left:5px ;width:550px; border-radius: 20%; height:500px;">
                        <img :src='suggestion[2].url' style="margin-left:5px ;width:550px; border-radius: 20%; height:500px; ">
                                <img :src='suggestion[3].url' style="margin-left:5px ;width:550px; border-radius: 20%; height:500px; ">



                <div class="row">
            <div class="col"><hr></div>
        </div>
    </div>
</template>

<script>
export default{
    props:['suggestion'],
    name: 'SuggestionCard',
}
</script>

<style scoped>
hr{
  margin-top: 0px;
  margin-bottom: 0px;  
}

</style>
