<template>
<div>
    <div>
            <NavBar />
    </div>
    <div class="container">
		<div class="profile">
            
			<div class="profile-image">
                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" height="250px" width="250px">
			</div>

			<div class="profile-user-settings">
            	<h2 class="profile-user-name">{{searchResult.name}}</h2>
            	<!-- <h2 class="profile-user-name">{{searchResult.id}}</h2> -->
            
                <div v-if="true === searchResult.type">
                    <i class="bi bi-check"></i>
                </div>
			</div>

			<div class="profile-stats">
				<ul>
					<li><span class="profile-stat-count">{{numberOfPost}}</span> posts</li>
					<li><span class="profile-stat-count">{{connection[1]}}</span> followers</li>
					<li><span class="profile-stat-count">{{connection[0]}}</span> following</li>
				</ul>
			</div>

			<div class="profile-bio">
				<!-- <p><span class="profile-real-name">BIO or ABOUT</span>  Team 3 is collectively working on Pinstagram 🏕️</p> -->
			</div>
                <div v-if="userEmail !== searchResult.id" class="t" for="toggle_button">
                    <span v-if="isActive" class="toggle__label">Following</span>
                    <span v-if="! isActive" class="toggle__label">Follow</span>

                    <input type="checkbox" id="toggle_button" v-model="checkedValue">
                    <span class="toggle__switch"></span>
                </div>
		    </div>
	</div>
    <div class="row">
            <div class="col"><hr></div>
            <div class="col-auto">Their Posts</div>
            <div class="col"><hr></div>
    </div>
    <div v-if="true === this.currentState">
        <YourPost :id="searchResult.id"/>
    </div>
</div>
</template>

<script>
import NavBar from '@/components/Home/NavBar.vue'
import YourPost from '@/components/Profile/YourPost.vue'
import axios from 'axios'
    export default{
        props:['searchResult'],
        name: 'AnotherProfile',
        components:{
            NavBar,
            YourPost
        },
        data() {
        return {
            currentState: false,
            profileUser: null,
            connection:[],
            numberOfPost:0,
            userEmail:localStorage.getItem("userId"),

        }
    },
    methods: {
        async fetchProfile(id){
            await axios.get(`${id}`).then((res)=> {this.profileUser=res.data}).catch(err=>console.log(err))
        },
        async getConnectionCount(){
            await axios.get(`http://10.177.1.207:9000/connection/getNoOfConnection/${this.searchResult.id}`).then((res)=> {this.connection=res.data}).catch(err=>console.log(err))
            console.log(this.followingCount)
        },
        async postCount(){
            await axios.get(`http://10.177.1.207:9000/post/getNumberOfPosts/${this.searchResult.id}`).then((res)=> {this.numberOfPost=res.data}).catch(err=>console.log(err))
            console.log(this.followingCount)
        },
        async ConnectTo()
        {
            this.connection[1]+=1
            const body = {
                userEmail:localStorage.getItem("userId"),
                connectionType:"following",
                targetEmail:this.searchResult.id   
            }
            await axios.post(`http://10.177.1.207:9000/connection/add/`, body).then((res)=> {}).catch(err=>console.log(err))

        },
        async disconnectTo() {
            this.connection[1]-=1;
            await axios.delete(`http://10.177.1.207:9000/connection/delete/${this.userEmail}/${this.searchResult.id}`)
        },
        async sendPageView()
        {
            if(this.searchResult.type !== true)
            return;
            const body={
                pageId: this.searchResult.id,
                userId: localStorage.getItem('userId'),
                pageName: this.searchResult.name
            }
            await axios.post(`http://10.177.1.207:9000/organisation/keepUpdated`,body)
        }
    },
    async mounted() {
        
        this.profileUser = this.id
        await axios.get(`http://10.177.1.207:9000/connection/check/${this.userEmail}/${this.searchResult.id}`).then((res)=>{this.currentState=res.data}).catch(err=>console.log(err))
        console.log(this.currentState)
        this.getConnectionCount()
        this.postCount()
        console.log(this.currentState + "yes here current!!")
        console.log(this.profileUser)
        this.sendPageView()
        },
    computed: {
        isActive() {
            return this.currentState;
        },

        checkedValue: {
            get() {
                return this.defaultState
            },
            set(newValue) {
                if(newValue === false)
                {
                    this.disconnectTo()
                }
                else{
                    this.ConnectTo()
                }
                this.currentState = newValue;
                console.log(this.currentState)
            }
        }
    }
}
</script>



<style scoped>
h2{
    margin-top: 1.5rem;
    margin-bottom: 10px;
}
i{
    font-size: 50px;
    margin-top: 0px;
}
.t{
    outline: 0.5rem auto #4d90fe;
    margin-left: 148%;
    background-color: #0095f6;
    border: 1px solid #0095f6;
    color:#fff;
    border-radius: 3px;
    padding: 6px 38px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 600;
    width:100%;
    transition: 0.9s;
}
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
.follow:hover{
    cursor:pointer; 
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
    display: flex;
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

</style>