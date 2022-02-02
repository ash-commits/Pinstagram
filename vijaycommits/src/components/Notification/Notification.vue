<template>
    <div>
        <div class="row">
            <div class="col"><hr></div>
        </div>
        <p><b> {{ Notification.title }}</b> from {{ Notification.id }} <b> ok we are fetching </b> </p>
        <div class="row">
            <div class="col"><hr></div>
        </div>
    </div>
</template>

<script>
export default{
    props:['Notification'],
    name: 'Notification',
}
</script>

<style scoped>
hr{
  margin-top: 0px;
  margin-bottom: 0px;  
}

</style>
