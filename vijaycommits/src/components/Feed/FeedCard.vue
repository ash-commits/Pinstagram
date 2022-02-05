<template>
    <div class="container">
        <div class="container">
            <div class="top">
            <div class="proImage"><img :src="feed.url" class="insidePro" height="30px" width="30px"></div>
            <div class="card-body"><p>{{feed.userId}}</p></div>
            <div class="setting"><i class="bi bi-three-dots"></i></div>
            </div>
        <div class="gallery">
    	<div class="gallery-item" tabindex="0" v-if="feed.type===true">
            <img :src="feed.url" class="gallery-image" alt="">
				<div class="gallery-item-info">
					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="bi bi-heart"></i> {{feed.numberOfLikes}} </li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="bi bi-chat" aria-hidden="true"></i> 2</li>
					</ul>
				</div>
		</div>
        <div class="gallery-item" tabindex="0" v-if="feed.type===false">
                <v-card class="program-train-card">
                    <video height="300px" width="500px" controls :src="feed.url"></video>
                    <br>
                    <v-btn>play/stop</v-btn>
                </v-card>
		    </div>
		</div>
        <div class="top">
                <div><i v-if="!hasLiked" class="bi bi-heart like-heart" @click="toggleLike()">{{ feed.numberOfLikes }}</i>
                <i v-if="hasLiked" class="bi bi-heart-fill like-heart" @click="toggleLike()">{{ feed.numberOfLikes+1 }}</i></div>
                <div class="commentHeart">{{ feed.postedOn }}</div>
                <div><i v-if="!hasDisLiked" class="bi bi-hand-thumbs-down like-hand-thumbs-down" @click="toggleDisLike()">{{ feed.numberOfLikes }}</i>
                <i v-if="hasDisLiked" class="bi bi-hand-thumbs-down-fill like-hand-thumbs-down" @click="toggleDisLike()">{{ feed.numberOfLikes+1 }}</i></div>
        </div>
        <div class="comments">
            <CommentListCard/>
        </div>
        <form>
            <div class="post-footer">
                <div class="emojis" style="margin-left:0">&#128512;</div>
                <div><textarea placeholder="Add comment..." aria-required="true"></textarea></div>
                <div>
                    <button class=" post btn btn-outline-primary" @click="postComment()">Post</button>
                </div>
            </div>
            </form>
		</div>
    </div>
</template>
<script>
import CommentListCard from "@/Components/Profile/Comment/CommentListCard.vue"
export default {
<<<<<<< Updated upstream
    props: ["feed"],
    name: "FeedCard",
    data() {
        return {
            hasLiked: false,
            likes: 0
        };
    },
    methods: {
        toggleLike() {
            this.hasLiked = !this.hasLiked;
            if (this.hasLiked) {
                this.likes += 1;
            }
            else {
                this.likes -= 1;
            }
            console.log(this.likes);
        }
    },
    components: { CommentListCard }
=======
    props:['feed'],
    name: 'FeedCard',
    data(){
        return{
            hasDisLiked: false,
            hasLiked: false,    
            postLikes : this.feed.numberOfLikes,
            postDislikes: this.feed.numberOfDisLikes
        }
    },
    methods: {
        toggleLike () {
            this.hasLiked = !this.hasLiked
            if(this.hasLiked)
            {this.postLikes+=1}
            else{
                this.postLikes-=1
            }
            console.log(this.postLikes)
            // this.sendToBack()
        },
        toggleDisLike () {
            this.hasDisLiked = !this.hasDisLiked
            if(this.hasDisLiked)
            {this.postDisLikes+=1}
            else{
                this.postDisLikes-=1
            }
            console.log(this.postDisLikes)
        }        
    }
>>>>>>> Stashed changes
}
</script>


<style scoped>
.post{
    margin-left: 20px;
}
textarea{
    height: 30px;
    width: 470px;
}
.post-footer {
    display: flex;
    margin-top:3%
}
.like-heart {
    cursor: pointer;
}
.bi-heart-fill {
    color: red;
}
.like-hand-thumbs-down {
    cursor: pointer;
}
.bi-hand-thumbs-down-fill {
    color: black;
}
.commentHeart{
    margin-left: 20px;
}
.setting{
    float: right;
    margin-right: 10px;
    margin-top: 10px;
}
.proImage{
    margin-left: 25px;
    margin-right: 0px;
}
.insidePro{
    margin-top: 12px;
}
.top{
    display: flex;
    background-color: white;
}
.card-body{
    text-align: left;
    margin-bottom: 0px;
}
p{
    margin-bottom: 0px;
}
:root {
    font-size: 10px;
}
*::before,
*::after {
    box-sizing: border-box;
}

body {
    font-family: "Open Sans", Arial, sans-serif;
    min-height: 10vh;
    background-color: #fafafa;
    color: #262626;
    padding-bottom: 3rem;
}

img {
    display: block;
    border-radius: 40px;
}

.container {
    max-width: 43.5rem;
    margin: 0 auto;
    padding: 0 2rem;
    margin-bottom: 20px;
}

.btn {
    display: inline-block;
    font: inherit;
    background: none;
    border: none;
    color: inherit;
    padding: 0;
    cursor: pointer;
}

.btn:focus {
    outline: 0.5rem auto #4d90fe;
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
    border-radius: 40px;
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


</style>