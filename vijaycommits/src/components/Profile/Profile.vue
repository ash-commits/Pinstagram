<template>
    <div class="container">
		<div class="profile">
			<div class="profile-image">
				<img :src="profileUser.url" alt="" height="250px" width="250px">
			</div>

			<div class="profile-user-settings">
            	<h1 class="profile-user-name">{{ profileUser.id }}</h1><br>
				<button class="btn profile-edit-btn popUps" @click="showModal = true" >Edit Profile</button>
                <transition name = "fade" appear>
                    <div class="modal-overlay" v-if="showModal"></div>
                  </transition>
                  <transition name = "slide" appear>
                   <div class="mod" v-if="showModal"> 
                     <div class="modal-header mt-10">
                         <div class="profile-image">
				            <img src="data:image/jpeg;base64,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" alt="" style="height:40%;width:40%">
			             </div>

			            <div class="profile-user-settings">
            	        <h6 class="profile-user-name">UserName</h6>
                        <button class="btn btn-outline-danger" @click="showModal = false" style="font-size:smaller;">&times;</button>
				<!-- <button class="btn profile-settings-btn" aria-label="profile settings"><i class="bi bi-gear"></i></button> -->
			            </div>
                     </div>

                     <div class="modal-body">
                         <form action="">
                             <label>Name</label><input/>
                             <p>Help people discover your account by using the name you're known by: either your full name, nickname, or business name.
You can only change your name twice within 14 days.</p>
                             <label>Username</label><input/>
                             <p>In most cases, you'll be able to change your username back to ----{}{}--- for another 14 days.</p>
                             <label>Website</label><input/><br><br>
                             <label>Bio</label><input/><br>
                             <br>
                             <h4>Personal Information</h4>
                             <p style="margin-top:0">Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile.</p>
                             <br>
                             <label>Email</label><input/><br>
                             <label style="">Phone Number</label><input/><br><br>
                             <label>Gender</label>
                             <select name="gender">
                                 <option value="none" selected>Gender</option>
                                 <option value="male" >Male</option>
                                 <option value="female" >Female</option>
                                 <option value="prefer-not-say" >Prefer not say</option>
                             </select><br><br>
                             <button class="btn btn-primary" type="button">Submit</button>
                         </form>
                    </div>
                     <br>
                    </div>
                  </transition>
                  <button class="btn profile-edit-btn popUps" @click="showModel = true" >Create Organisation</button>
                <transition name = "fade" appear>
                    <div class="modal-overlay" v-if="showModel"></div>
                  </transition>
                  <transition name = "slide" appear>
                   <div class="mod" v-if="showModel"> <!-- <div clas="modal" v-if="showModal"> -->
                     <div class="modal-header mt-100">
                        <div class="profile-user-settings">
            	        <center><h1 style="display:inline;">Become an Organiser</h1><button @click="showModel = false" class="btn-close w-1em"  aria-label="close"></button></center>
			            </div>
                     </div>

                     <div class="modal-body">
                         <form action="">
                             <label>Name</label><input type="text" id="name" required/><br>
                             <label class="label mt-5 mb-2">Description</label><textarea/><br>
                             <label class="label">Website</label><input/><br>
                             <button class="btn btn-primary mt-5" type="button" @click="sendOrg">Create Organisation</button>
                         </form>
                    </div>
                     <br>
                    </div>
                  </transition>
			</div>

			<div class="profile-stats">
				<ul>
					<li @mousedown="goToListOfPosts()"><span class="profile-stat-count">{{numberOfPost}}</span> posts</li>
					<li @mousedown="goToListOfFollowers()"><span class="profile-stat-count">{{connection[1]}}</span> followers</li>
					<li @mousedown="goToListOfFollowing()"><span class="profile-stat-count">{{connection[0]}}</span> following</li>
                    <li @mousedown="goToListOfOrganisations()" id="organisation"><span class="profile-stat-count">96</span> Organisation</li>
				</ul>
			</div>

			<div class="profile-bio">
				<p><span class="profile-real-name">BIO or ABOUT</span>  Team 3 is working collectively on Pinstagram 🏕️</p>
			</div>
            <!-- https://jsonplaceholder.typicode.com/photos/1 -->

		</div>
	</div>
</template>

<script>
import axios from 'axios'
    export default{
        name: 'Profile',
        pop: 'popup',
    data () {
      return {
        showModal:false,
        showModel:false,
        profileUser: [],
        numberOfPost:null,
        userId: null,
        followerCount: null,
        followingCount: null,
        connection:[]
      }
    },
        methods: {
        // async fetchFollowerCount(){
        //     await axios.get(`http://10.177.1.207:9000/connection/getNoOfConnection/${this.userId}/false`).then((res)=> {this.followerCount=res.data}).catch(err=>console.log(err))
        //     console.log(followerCount)
        // },
        async getConnectionCount(){
            await axios.get(`http://10.177.1.207:9000/connection/getNoOfConnection/${this.userId}`).then((res)=> {this.connection=res.data}).catch(err=>console.log(err))
            console.log(this.followingCount)
        },
        async postCount(){
            await axios.get(`http://10.177.1.207:9000/post/getNumberOfPosts/${this.userId}`).then((res)=> {this.numberOfPost=res.data}).catch(err=>console.log(err))
            console.log(this.followingCount)
        },
        
        goToListOfFollowers () {
            this.$router.push('Followers')
        },
        goToListOfFollowing () {
            this.$router.push('Following')
        },
        goToListOfOrganisations () {
            this.$router.push('Organisation')
        },
        goToListOfPosts()
        {
            this.$router.push('Profile')
        }
    },
    mounted() {
        this.userId = localStorage.getItem('userId')
        // this.fetchFollowerCount()
        // this.fetchFollowingCount()
        this.getConnectionCount()
        this.postCount()
    }
}
</script>



<style scoped>
:root {
    font-size: 3px;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    font-family: "Open Sans", Arial, sans-serif;
    min-height: 100vh;
    background-color: #fafafa;
    color: #262626;
    padding-bottom: 3rem;
}

img {
    display: block;
}

.container {
    max-width: 90rem;
    margin: 0 auto;
    padding: 0 2rem;
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

/* Profile Section */

.profile {
    padding: 2rem 0;
}

.profile::after {
    content: "";
    display: block;
    clear: both;
}

.profile-image {
    float: right;
    width: calc(33.333% - 1rem);
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-image img {
    border-radius: 50%;
}

.profile-user-settings,
.profile-stats,
.profile-bio {
    float: left;
    width: calc(66.666% - 2rem);
}

.profile-user-settings {
    margin-top: 1.1rem;
}

.profile-user-name {
    display: inline-block;
    font-size: 2rem;
    font-weight: 300;
}

.profile-edit-btn {
    font-size: 0.8rem;
    line-height: 1.8;
    border: 0.1rem solid #dbdbdb;
    border-radius: 0.3rem;
    padding: 0 2.4rem;
    margin-left: 2rem;
}

.profile-settings-btn {
    font-size: 2rem;
    margin-left: 1rem;
}

.profile-stats {
    margin-top: 2.3rem;
}

.profile-stats li {
    display: inline-block;
    font-size: 1rem;
    line-height: 1.5;
    margin-right: 4rem;
    cursor: pointer;
}

.profile-stats li:last-of-type {
    margin-right: 0;
}

.profile-bio {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 2.3rem;
}

.profile-real-name,
.profile-stat-count,
.profile-edit-btn {
    font-weight: 600;
}

/* Media Query */

@media screen and (max-width: 40rem) {
    .profile {
        display: flex;
        flex-wrap: wrap;
        padding: 4rem 0;
    }

    .profile::after {
        display: none;
    }

    .profile-image,
    .profile-user-settings,
    .profile-bio,
    .profile-stats {
        float: none;
        width: auto;
    }

    .profile-image img {
        width: 7.7rem;
    }

    .profile-user-settings {
        flex-basis: calc(100% - 10.7rem);
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;
    }

    .profile-user-name {
        font-size: 2.2rem;
    }

    .profile-edit-btn {
        order: 1;
        padding: 0;
        text-align: center;
        margin-top: 1rem;
    }

    .profile-edit-btn {
        margin-left: 0;
    }

    .profile-bio {
        font-size: 1.4rem;
        margin-top: 1.5rem;
    }

    .profile-edit-btn,
    .profile-bio,
    .profile-stats {
        flex-basis: 100%;
    }

    .profile-stats {
        order: 1;
        margin-top: 1.5rem;
    }

    .profile-stats ul {
        display: flex;
        text-align: center;
        padding: 1.2rem 0;
        border-top: 0.1rem solid #dadada;
        border-bottom: 0.1rem solid #dadada;
    }

    .profile-stats li {
        font-size: 1.4rem;
        flex: 1;
        margin: 0;
    }

    .profile-stat-count {
        display: block;
    }
}

/* Spinner Animation */

@keyframes loader {
    to {
        transform: rotate(360deg);
    }
}

/*

The following code will only run if your browser supports CSS grid.

Remove or comment-out the code block below to see how the browser will fall-back to flexbox & floated styling. 

*/

@supports (display: grid) {
    .profile {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: repeat(3, auto);
        grid-column-gap: 0rem;
        align-items: center;
    }

    .profile-image {
        grid-row: 1 / -1;
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
        grid-gap: 2rem;
    }

    .profile-image,
    .profile-user-settings,
    .profile-stats,
    .profile-bio,
    .gallery-item,
    .gallery {
        width: auto;
        margin: 0;
    }

    @media (max-width: 40rem) {
        .profile {
            grid-template-columns: auto 1fr;
            grid-row-gap: 1.5rem;
        }

        .profile-image {
            grid-row: 1 / 2;
        }

        .profile-user-settings {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 1rem;
        }

        .profile-edit-btn,
        .profile-stats,
        .profile-bio {
            grid-column: 1 / -1;
        }

        .profile-user-settings,
        .profile-edit-btn,
        .profile-settings-btn,
        .profile-bio,
        .profile-stats {
            margin: 0;
        }
    }
}
.popsUps{
    background-color: white;
    border: none;
    border-radius: 40px;
}
.modal-header .modal-body .modal-footer{
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 5px;
  align-self: start;
  width: 40%;
}

.input-class{
  width: 50%;
}

.center-content{
    text-align: center;
}
.modal-overlay{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-header  .modal-body {
  margin-left: 15%;
  margin-right: 15%;
}
#select-file {
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 5;
}

.mod{
  position:fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  z-index: 99;

  width: auto;
  /* max-width: 400px; */
  background-color: white;
  border-radius: 16px;
  padding: 25px;
  height: auto;
}
label{
    width: 30px;
    margin-left: 10px;
    font-weight: bold;
    font-size: small;
    display: inline-block;
}
input,select{
    width:40%;
    margin-left:20%
}
p{
    margin-left: 42%;
    font-size: smaller;
    display: block;
    width: 40%;

}
h4{
    margin-left: 25%;
    font-size: medium;
}


</style>