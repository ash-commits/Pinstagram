<template>
    <section class="main">
        <div class="status-card">
            <div class="profile-pic">
                <router-link :to ="{name: 'ViewStory', params: {story: story}}"><img :src="story.url"></router-link>
            </div>
                <p class="username">{{story.userId}} </p>
        </div>
</section>
</template>

<script>
export default {
    props: ['story'],
    name: 'StoryCard'
}
</script>

<style scoped>
.main{
    width: 100%;
    padding: 40px 0;
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.status-card{
    flex: 0 0 auto;
    width: 70px;
    max-width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
}

.profile-pic{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
    padding: 3px;
    background: linear-gradient(45deg, rgb(255, 230, 0), rgb(255, 0, 128) 80%);
}

.profile-pic img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #fff;
}
.username{
    width: 100%;
    overflow: hidden;
    text-align: center;
    font-size: 12px;
    margin-top:5px;
    color: rgba(0, 0, 0, 0.5)
}
</style>