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
                <div><i v-if="!hasDisLiked" class="bi bi-hand-thumbs-down like-hand-thumbs-down" @click="toggleDisLike()">{{ feed.numberOfDisLikes }}</i>
                <i v-if="hasDisLiked" class="bi bi-hand-thumbs-down-fill like-hand-thumbs-down" @click="toggleDisLike()">{{ feed.numberOfDisLikes+1 }}</i></div>
        </div>
                <div class="desc"><b>{{ feed.userId }}</b>  {{ feed.description }}</div><br>
                <div class="prevCmnt" v-for='oneComment in comments' :key="oneComment.id" v-bind:oneComment="oneComment">
                    <div>{{oneComment.userEmail}}      {{oneComment.comment}}</div><br></div>
                <div v-for='oneComment in currentComments' :key="oneComment.id" v-bind:oneComment="oneComment">
                    <div>
                    {{oneComment.userId}}    {{oneComment}}</div>
                </div>
            <div class="post-footer">
                <div class="emojis" style="margin-left:0">&#128512;</div>

                <div><textarea placeholder="Add comment..." aria-required="true" name="cmnt" v-model="currentComment"></textarea></div>
                <div>
                    <button class=" post btn btn-outline-primary" @click="sendComment()">Post</button>
                </div>
            </div>
		</div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    props:['feed'],
    name: 'FeedCard',
    mounted(){
        this.fetchComments()
    },
    data(){
        return{
            like :false,
            disLike :false,
            hasDisLiked: false,
            hasLiked: false,    
            postLikes : this.feed.numberOfLikes,
            postDislikes: this.feed.numberOfDisLikes,
            postId: '',
            comment:'',
            currentComment: '',
            comments:[],
            tmp:[],
            user:localStorage.getItem("userId"),
            currentComments:[]
        }
    },
    methods: {
        toggleLike () {
            this.flag=true
            this.hasLiked = !this.hasLiked
            if(this.hasLiked)
            {this.postLikes+=1}
            else{
                this.postLikes-=1
            }
            if(this.hasDisLiked)
            {
                this.postDislikes-=1
            }
            console.log(this.postLikes)
            // this.sendToBack()
            this.sendLike()
        },
        toggleDisLike () {
            this.flag = false
            this.hasDisLiked = !this.hasDisLiked
            if(this.hasDisLiked)
            {this.postDisLikes+=1}
            else{
                this.postDisLikes-=1
            }
            if(this.hasLiked)
            {
                this.postLikes-=1
            }
            console.log(this.postDisLikes)
            this.sendDisLike()
        },
        async sendLike(){
                        this.like=true
                        this.disLike=false

            console.log("came here!!")
            console.log("disLike"+this.disLike)
            console.log("like"+this.like)
            if(this.disLike){
                this.numberOfDisLikes-1;
            }
            const body = {
                postId : this.feed.id,
                reactionType : true,
                reactionBy : localStorage.getItem('userId')
            }
            await axios.post(`http://10.177.1.207:9000/reaction`,body).then((res)=> {this.connection=res.data}).catch(err=>console.log(err))
        },
        async sendDisLike(){
                        this.disLike = true
                        this.like=false

            console.log("disLike"+this.disLike)
            console.log("like"+this.like)
            if(this.like){
                this.numberOfLikes-1;
            }
            console.log("came here!!")
            const body = {
                postId : this.feed.id,
                reactionType : false,
                reactionBy : localStorage.getItem('userId')
            }
            await axios.post(`http://10.177.1.207:9000/reaction`,body).then((res)=> {this.connection=res.data}).catch(err=>console.log(err))
        },
        async sendComment(){
            console.log("skdjnflkn")
            const body ={
                postId: this.feed.id,
                userEmail: localStorage.getItem('userId'),
                comment:this.currentComment,
            }
            await axios.post(`http://10.177.1.207:9000/comment/add`,body).then((res)=> {}).catch(err=>console.log(err))
            this.currentComments.push(this.currentComment)
    },
        async fetchComments(){
            console.log("called")
            console.log(this.feed.id)
            await axios.get(`http://10.177.1.207:9000/comment/post/${this.feed.id}`).then((res)=> {this.comments = res.data}).catch(err=>console.log(err))
                // console.log(this.tmp.id)
        }
    }
}
</script>


<style scoped>
.prevCmnt{
    margin-top: -30px;
    margin-bottom: 3px;
}
.desc{
    float: left;
    margin-top: 5px;
    margin-bottom: 5px;
}
.post{
    margin-left: 20px;
}
textarea{
    height: 30px;
    width: 470px;
}
.post-footer {
    display: flex;
    margin-top:10px;
    margin-left: 0px;
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