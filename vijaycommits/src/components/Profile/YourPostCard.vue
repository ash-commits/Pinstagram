<template>
    <div class="container">
        <div class="container">
            <div class="top">
            <div class="proImage"><img :src="post.url" class="insidePro" height="30px" width="30px"></div>
            <div class="card-body"><p>UserName</p></div>
            <div class="setting"><i class="bi bi-three-dots"></i></div>
            </div>
        <div class="gallery">
    	<div class="gallery-item" tabindex="0">
            <img :src="post.url" class="gallery-image" alt="">
				<div class="gallery-item-info">
					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="bi bi-heart"></i> 56</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="bi bi-chat" aria-hidden="true"></i> 2</li>
					</ul>
				</div>
		</div>
		</div>
        <div class="top">
                <div><button @click="heartClicked(isVisible)"><i class="bi bi-heart" id = "heart-icon" ></i></button></div>
                <!-- <div><i class="bi bi-heart" id = "heart-icon" v-on:click="isVisible = !isVisible"></i></div> -->
                <!-- <div><i class="bi bi-heart-fill red-color" id = "heart-icon" v-on:click="isVisible = !isVisible"></i></div> -->
                <div v-if="isVisible"></div>
                <div class="commentHeart"><i class="bi bi-chat" style="border-radius: 5%"></i></div>
        </div>
        <form>
                    <div class="post-footer">
                        <div class="emojis">&#128512;</div>
                        <div><textarea placeholder="Add comment..." aria-required="true" style="resize:none;border: white;height:20px;text-decoration:none;width:200%;margin-left:0%;font-family: -apple-system,BlinkMacSystemFont"></textarea></div>
                        <!-- <div><button @click="postComment()" style="margin-left:200%;border:white">Post</button></div> -->
                        <div>
                        <button @click="postComment()" style="background-color: white;margin-left: 500%;border: white !important;">Post</button>
                        </div>
                    </div>
                </form>
		</div>
    </div>
</template>

<script>
export default {
    props:['post'],
    name: 'YourPostCard',
    data() {
        return {
            isVisible: false
        }
    },
    methods:{
        postComment () {
            window.alert('Comment posted')
        },
        heartClicked (isVisible) {
            if (isVisible){
            document.getElementById('heart-icon').style.backgroundColor="red";
            isVisible = !isVisible;
            }
            else{
            document.getElementById('heart-icon').style.backgroundColor="none";

            }
        }
    }

}
</script>


<style scoped>
.post-footer {
    display: flex;
    /* justify-content: space-between; */
    margin-top: 3%;
}
.red-color {
    color:red;
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
.bi-heart:hover{
    background-color: red;
    /* fill-content:red */

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
    max-width: 38.5rem;
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