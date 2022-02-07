<template>
    <div class="container">
            <div class="status-wrapper">
                <div class="wrapper">
                  <div class="wrapper" style="margin-right:40px;">
<span class="dropdown">
<button class="popsUps" @click="showModal = true" style="margin-top: 79px;text-align: center;background-color: rgb(95, 135, 167);width: 70px;height: 70px;-o-object-fit: cover;object-fit: cover;
border-radius: 50%;border: 2px solid #fff;background: linear-gradient(45deg, rgb(255, 230, 0), rgb(255, 0, 128) 80%)"><i class="bi bi-plus mb-5" style="font-size:50px;color:black;padding-bottom:15%" ></i></button>
<br><p style="display:inline;font-size:smaller">Your Story</p>
                  <transition name = "fade" appear>
                    <div class="modal-overlay" v-if="showModal"></div>
                  </transition>
                  <transition name = "slide" appear>
                   <div class="mod" v-if="showModal"> 
                     <div class="modal-header mt-10">
                       <p style="margin-top:4;margin-bottom:0%;margin-left:25%;margin-right:20%"><b>My Story. . . </b></p><span><button type="button" class="btn btn-outline-danger" @click="showModal=false" >X</button></span>
                     </div>

                     <div class="modal-body"><p style="margin-top:45%;margin-bottom:3%;font-size:larger;color:black">Drag photos and videos here</p>
                    <div>
                    <select v-model="user.type">
                        <option disabled value="">Please select one</option>
                        <option>Image</option>
                        <option>Video</option>
                    </select>
    <span>Selected: {{ user.type }}</span>
    <hr />
    <input type="file" @change="handleFileUpload($event)" />
  <div v-if="image">
    <img :src="image.src" />
    </div>
  	<br>
	<button v-on:click="handleSubmit()">Submit</button>
  </div>
                    </div>
                     <br>
                    </div>
                  </transition>
            </span>
                </div>
                    <StoryCard v-for='story in stories' :key="story.id" v-bind:story="story"/>
                </div>
            </div>
    </div>
</template>

<script>
import StoryCard from '@/components/Stories/StoryCard.vue'
import firebase from 'firebase'
import axios from 'axios'
export default {
    name: 'StoryHome',
        pop: 'popup',

    components: {
        StoryCard
    },
    data()
    {
      return{
          userId:'',
          expiryTime: '',
          showModal: false,
          stories:[],
          file: "",
          time:0,
          ten:0,
      image: {},
      user: {
		type: '',
         }
    };
    },
    methods: {
        async fetchStories(){
            await axios.get(`http://10.177.1.207:9000/feed/stories/${this.userId}`).then((res)=> {this.stories = res.data}).catch(err=>console.log(err))
        },
        handleFileUpload(event) {
      this.file = event.target.files[0];
    },

    async handleSubmit() {
				console.log(this.user)
				console.log(this.file)
        console.log("hLLOOO");
        var contentTypeLocal

        try{

        contentTypeLocal = '';
        if( this.user.type === "Image")

        {
            this.type=true
        this.contentTypeLocal= 'image/png'
        }
        else if(this.user.type === "Audio")
        {
            this.contentTypeLocal= 'audio/mp3'
        }
        else if(this.user.type === "Video")
        {   
            this.type=false
            this.contentTypeLocal = "video/mp4"
        }
        else if(this.user.type = "Text"){
          this.contentTypeLocal = "text/plain" //-------
        }
        var metaData = {

        contentType: contentTypeLocal

        }
        if(this.user.type === "Text"){ //---
          console.log("text type")

        }
        if(this.user.type !== "Text")
        {
        const storageRef = firebase.storage().ref();
        console.log("Storage ref"+storageRef)

        const imageRef = storageRef.child(`images/${this.file.name}`);

        console.log("image ref"+this.imageRef)
        console.log(metaData);

        await imageRef.put(this.file, metaData);

        const downloadUrl = await imageRef.getDownloadURL()

        this.user.sourceUrl = downloadUrl
        console.log(downloadUrl)
        this.time=new Date().getTime()
        this.ten=(600000)
        const body = {

            userId : localStorage.getItem('userId'),
            url : downloadUrl,
            // expiryTime: this.time + this.ten,
            type: this.type
        }
        await axios.post('http://10.177.1.207:9000/story',body).then((res)=>{
                    if(res.status === 200){
                        swal({
                            text: "file uploaded",
                            icon: 'success'
                        }),
                        console.log(res.status)
                    this.$router.push({name: 'Home'})
                    }
                    else{
                        swal({
                            text: " File Not uploaded",
                            icon: 'error'
                        })
                    }
                })
                console.log(this.time)  
                this.$router.go(0) 
        }


        }

        catch(error){

        console.log(error)

        }
      }
    },
    mounted() {
        this.userId = localStorage.getItem('userId')
        this.fetchStories()
    }
}
</script>

<style scoped>
.mod .mt-10{
font-family: "billabong", sans-serif;
color: rgb(219, 31, 94);
font-size: 25px;
}

.mod .modal-body{
font-family: "billabong", sans-serif;
color: rgb(219, 31, 94);
font-size: 20px;
}

.options{
font-family: "billabong", sans-serif;
color: rgb(219, 31, 94);
font-size: 20px;
}
.dropdown-menu .dropdown-item{
font-family: "billabong", sans-serif;
color: rgb(219, 31, 94);
font-size: 20px;
}
.cap{
  font-family: "billabong", sans-serif;
  color: rgb(219, 31, 94);
  font-size: 20px;
  margin-bottom: 20px;
}

.wrapper{
    width: 200%;
    max-width:5553000px;
    display: flex;
    grid-template-columns: 100% 200%;
    grid-gap: 5px;
    border-radius: 30px;
    /* position: fixed; */
    /* border: 2px solid black; */
}

.status-wrapper{
    width: 2000%;
    height: 120px;
    background: #fff;
    border: 1px solid white;
    border-radius: 2px;
    padding: 1px;
    padding-right: 0;
    display: flex;
    align-items: center;
    overflow: hidden;
    overflow-x: auto;
}

.status-wrapper::-webkit-scrollbar{
    display: none;
} 

.popsUps{
    background-color: white;
    border: none;
    border-radius: 40px;
}

/* end header */


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

.container{
    display: flex;
    /* justify-content: space-between; */
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
.modal-header .modal-footer .modal-body {
  margin-left: 15%;
  margin-right: 15%;
}
#select-file {
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 5;
}

.mod{
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  z-index: 99;

  width: 100%;
  max-width: 400px;
  background-color: whitesmoke;
  border-radius: 16px;
  padding: 25px;
  height: 80%;
  border-color: black;
}
label, input {
  color: rgb(22, 103, 209);
  font: 14px/20px Arial;
}

label {
  display: inline-block;
  width: 5em;
  padding: 0 1em;
  text-align: right;
}
.bi-plus::before {
    content: "\f4d7";
    margin-bottom: 25%;
    margin-left: 5%;
}
.container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1450px;
}
    
</style>