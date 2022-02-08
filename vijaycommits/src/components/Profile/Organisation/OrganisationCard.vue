<template>
    <div class="organisation-card">
        <!-- <div><img class="card-details" style="" src="@/assets/logo.png"/></div>
        <div><h4 class="card-details" style="display:inline">Username</h4></div>
        <div><button class="card-details btn btn-primary">Follow</button></div> -->
        <!-- <div class="img" style="margin-left:25%">
            <img :src="card.url" style="display: inline;width: 30px;height: 30px;padding:5px;border-radius:40px">
        </div> -->
        <center>
        <div class="org">
            <div class="naming">
            <!-- <h3>{{org.name}}Upload from Here</h3> -->
            <router-link :to ="{name: 'OtherProfile', params: {'card': org.id}}">
                <h4>{{org.name}}</h4> 
                 </router-link>
            </div>
            <div>
                <span class="dropdown">
                  <button class="popsUps" @click="showModal = true" ><i class="bi bi-box-arrow-up"></i></button>
                  <!-- <button class="btn btn-primary" v-on:click="goToModerators()">Moderators</button> -->
                  <transition name = "fade" appear>
                    <div class="modal-overlay" v-if="showModal"></div>
                  </transition>
                  <transition name = "slide" appear>
                   <div class="mod" v-if="showModal"> 
                     <div class="modal-header mt-10">
                       <p style="margin-top:4;margin-bottom:0%;margin-left:25%;margin-right:20%"><b>Create </b></p><span><button type="button" class="btn btn-outline-danger" @click="showModal=false" >X</button></span>
                     </div>

                     <div class="modal-body">
                       <!-- <p style="margin-top:45%;margin-bottom:3%;font-size:larger;color:black">Drag photos and videos here</p> -->
                    <div>
                        <center>
                    <select v-model="user.type">
                        <option disabled value="">Please select one</option>
                        <option>Image</option>
                        <option>Video</option>
                    </select><br>
                <span>Selected: {{ user.type }}</span><br>
                <select v-model="user.cat">
        <option disabled value="">Please select one</option>
        <option>sport</option>
        <option>lifestyle</option>
        <option>e-commercial</option>
        <option>education</option>
        <option>Cinematic</option>
    </select><br>
        <span>Selected: {{ user.cat }}</span></center><br>
                <hr />
                <input type="file" @change="handleFileUpload($event)" />
                <div v-if="image">
                    <img :src="image.src" />
                </div>
  	            <br>
                <div>
                <input class ="cap" type ="text" name="description" v-model="description" placeholder = "Add Caption . . .">
            </div>
	<center><button v-on:click="handleSubmit()" style="margin-right:0px;font-family:sans-serif;background-color:white;border:2px solid black">Submit</button></center>
  </div>
                    </div>
                     <br>
                    </div>
                  </transition>
            </span>

            </div>
        </div>
                    <!-- <router-link :to ="{name: 'AnotherProfile', params: {id: org.organisationId}}"><h4 class="router">{{org.organisationName}}</h4></router-link> -->
        </center>

        <!-- <div class="follow-btn" style="margin-right:25%"> -->
            <!-- <button class="btn btn-primary" style="height: 30px;width: 60px;font-size: small;">Follow</button> -->
        <!-- </div> -->
        <div class="Notification">
             <!-- <Moderatorcard v-for='moderator in moderators' :key="moderator" v-bind:moderator="moderator"/> -->
             
        </div>
    </div>
</template>
<script>
import firebase from 'firebase'
import axios from 'axios'
export default{
    name: 'OrganisationCard',
    props: ['org'],
    data()
    {
        return{
            showModal:false,
        imageData: null,
        picture: null,
        uploadValue: 0,
        url: '',
        file: "",
        description:"",
        category: '',
      image: {},
      type:true,
      user: {
        type: '',
      },
      moderators:[],
        card:this.org.organisationId,
        }
    },
    mounted(){
      
    },
    methods: {
        previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },
        handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    goToModerators(){
      this.$router.push(`ModeratorHome/${this.card}`)
      //this.$router.push({ path: '/ModeratorHome', params: { 'id':this.org.organisationId } })
    },

    async handleSubmit() {
				console.log(this.user)
				console.log(this.file)
        var contentTypeLocal

        try{

        contentTypeLocal = '';
        if( this.user.type === "Image")

        {
            this.type=true
        contentTypeLocal= 'image/png'
        }
        else if(this.user.type === "Audio")
        {
            contentTypeLocal= 'audio/mp3'
        }
        else if(this.user.type === "Video")
        {   
            this.type=false
            contentTypeLocal = "video/mp4"
        }
        var metaData = {

        'contentType': contentTypeLocal

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
        console.log("ksjdnfkjndsfkj")
        console.log("Testing")
//         if(downloadUrl === "" || downloadUrl === undefined || downloadUrl === null)
// {        console.log("NULL SOURCE URL")


// }
        // console.log(org.id)
        const bodyObj = {

            'userId' : this.org.id,
            'url' : downloadUrl,
            'description': this.description,
            'category': this.category,
            'postedOn': Math.round(+new Date()),
            'type': this.type
        }
        console.log(bodyObj)


        axios.post('http://10.177.1.207:9000/post',bodyObj).then((res)=>{
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
                }).catch(err => console.log(err))   
        }
        }
        catch(error){
            console.log("In catch"+error)
        }
      }
    }
}
</script>
<style scoped>
.naming{
    margin-left: 450px;
}
button{
    margin-right: 400px;
}
.org{
    display: flex;
    justify-content: space-between;
}
a {
    color: black;
    text-decoration: none;
}
a:hover{
    color: skyblue;
}
.img{
    width: 30
}
.organisation-card{
    display: flex;
    justify-content: space-between;
    margin-top:2%;
    margin-bottom: 2%;
    /* border-bottom: 2px solid black; */
}

.popsUps{
    background-color: white;
    border: none;
    border-radius: 40px;
}

/* end header */

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

</style>
