<template>
    <div class="container">
		<div class="profile">
			<div class="profile-image">
				<img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" height="250px" width="250px">
			</div>

			<div class="profile-user-settings">
            	<h1 class="profile-user-name">{{ this.userId }}</h1><br>
				<button class="btn profile-edit-btn popUps" @click="showModal = true" >Edit Profile</button>
                <transition name = "fade" appear>
                    <div class="modal-overlay" v-if="showModal"></div>
                  </transition>
                  <transition name = "slide" appear>
                   <div class="mod" v-if="showModal"> 
                     <div class="modal-header mt-10">
                         <div class="profile-image">
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
                             <label>Name</label><input type="text" name="orName" v-model="orName" required/><br>
                             <label class="label mt-5 mb-2">Description</label><textarea name="textArea" v-model="textArea" style="margin-left:20%;resize:none"/><br>
                             <!-- <label class="label">Website</label><input/><br> -->
                             <button class="btn btn-primary mt-5" type="button" @click="createOrg">Create Organisation</button>
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
                    <li @mousedown="goToListOfOrganisations()" id="organisation"><span class="profile-stat-count">{{orgCount}}</span> Organisation</li>
				
                </ul>
                <!-- <h2>Organisations</h2> -->
                <!-- <div v-for='card in orgs' :key="card.id" v-bind:card="card"> -->
                <!-- <div>{{card.organisationName}}</div> -->
                <!-- </div> -->

			</div>

			<div class="profile-bio">
				<!-- <p><span class="profile-real-name">BIO or ABOUT</span>  Team 3 is working collectively on Pinstagram 🏕️</p> -->
                
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
        connection:[],
        orName:'',
        textArea:'',
        orgs:[],
        orgCount:0

      }
    },
        methods: {

        async createOrg(){
        const body = {
                name:this.orName,
                userId:localStorage.getItem("userId"),
                description:this.textArea
            }
            await axios.post(`http://10.177.1.207:9000/organisation/add`,body).then((res)=> {}).catch(err=>console.log(err))
            this.orgs     
        },

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
        
        async fetchOrgs(){
            await axios.get(`http://10.177.1.207:9000/organisationAdmin/find/${this.userId}`).then((res)=> {this.orgs=res.data}).catch(err=>console.log(err))
            console.log(this.orgs)
        },

        async fetchOrgCount(){
            await axios.get(`http://10.177.1.207:9000/organisationAdmin/get/${this.userId}`).then((res)=> {this.orgCount=res.data}).catch(err=>console.log(err))
            console.log(this.orgs)
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
        this.fetchOrgs()
        this.fetchOrgCount()
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