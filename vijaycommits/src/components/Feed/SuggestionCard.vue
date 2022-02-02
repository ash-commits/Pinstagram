<template>
    <div>
        <div class="row">
            <div class="col"><hr></div>
        </div>
        <p><b> {{ suggestion.title }}</b> from {{ suggestion.id }} <b> ok we are fetching </b> </p>
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
