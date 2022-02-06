<template>
    <div class="bg">
        <center>
        <div class="stayTogether">
            <div>
                <p><b>{{ storyLocalId.userId }}</b> has posted this story</p>
            </div>
            <div style="margin-left:50px;margin-bottom:15px">
                <button class="btn btn-outline-danger" v-on:click="goHome()">X</button>
            </div>
        </div>
        <div class="container">
        <div class="gallery">
    	<div class="gallery-item" tabindex="0" v-if="story.type===true">
            <img :src="story.url" class="gallery-image" alt="">
				<div class="gallery-item-info">
					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> </li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i></li>
					</ul>
				</div>
		</div>
         <div class="gallery-item" tabindex="0" v-if="story.type===false">
                <v-card class="program-train-card">
                    <video height="300px" width="500px" controls :src="story.url"></video>
                    <br>
                    <v-btn>play/stop</v-btn>
                </v-card>
		    </div>
		</div>
		</div>
        </center>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props:['story'],
    name: 'ViewStory',
    data () {
    return {
      storyLocalId: null,
      localId: null
    }
  },
    mounted () {
        this.storyLocalId = this.story
        console.log(this.storyLocalId)
        // this.fetchStory(this.id)
        // this.localId = this.$route.query.localIdKey
  },
  methods: {
      goHome(){
          this.$router.push({name:'Home'})
      },
      goToNext()
      {
        this.localId = ++(this.id)
        this.fetchStory(this.localId)
      },
      goToPrev()
      {
        this.localId = --(this.id)
        this.fetchStory(this.localId)
      },
      async fetchStory(id){
            await axios.get(`http://10.177.1.207:9000/feed/stories/${id}`).then((res)=> {this.storyLocalId = res.data}).catch(err=>console.log(err))
        }
    },
    watch: {
        '$route' () {
        this.localId = this.$route.query.localIdKey
        this.fetchData(this.localId)
        }
    }

}
</script>

<style scoped>
.bg
{
    background-color: pink;
}
.leftClass{
    float: left;
    margin-top: 400px;
    background-color: white;
    border-color: white;
    border: none
}
.rightClass{
    float: right;
    margin-top: 400px;
    background-color: white;
    border-color: white;
    border: none
    /* margin-bottom: 400px; */
}
.stayTogether{
    display: flex;
    margin-left: 400px;
}

.container {
    max-width: 50.5rem;
    margin: 0 auto;
    padding: 0 2rem;
    /* position: fixed; */
}

.visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
}
/* Gallery Section */

.gallery {
    display: flex;
    flex-wrap: wrap;
    margin: -1rem -1rem;
    padding-bottom: 1rem;
}

.gallery-item {
    position: relative;
    flex: 1 0 2rem;
    margin: 0.5rem;
    color: #fff;
    cursor: pointer;
}

.gallery-item:hover .gallery-item-info,
.gallery-item:focus .gallery-item-info {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}

.gallery-item-info {
    display: none;
}

.gallery-item-info li {
    display: inline-block;
    font-size: 1.7rem;
    font-weight: 600;
}

.gallery-item-likes {
    margin-right: 2.2rem;
}

.gallery-item-type {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2.5rem;
    text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
}

.fa-clone,
.fa-comment {
    transform: rotateY(180deg);
}

.gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
img{
    border-radius: 20px;
}
.goRight{
    margin-left: 600px;
    margin-right: 0px;
    position: fixed;
}
</style>