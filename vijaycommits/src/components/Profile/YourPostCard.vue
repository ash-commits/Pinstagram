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
                <div><i class="bi bi-heart"></i></div>
                <div class="commentHeart"><i class="bi bi-chat"></i></div>
        </div>
		</div>
    </div>
</template>

<script>
export default {
    props:['post'],
    name: 'YourPostCard',

}
</script>


<style scoped>
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