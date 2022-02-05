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
            <h3>{{org.organisationName}}</h3>
            </div>
            <div>
                <span class="dropdown">
                  <button class="popsUps" @click="showModal = true" ><i class="bi bi-box-arrow-up"></i></button>
                  <transition name = "fade" appear>
                    <div class="modal-overlay" v-if="showModal"></div>
                  </transition>
                  <transition name = "slide" appear>
                   <div class="mod" v-if="showModal"> 
                     <div class="modal-header mt-10">
                       <p style="margin-top:4;margin-bottom:0%;margin-left:25%;margin-right:20%"><b>Create new Post</b></p><span><button type="button" class="btn btn-outline-danger" @click="showModal=false" >X</button></span>
                     </div>

                     <div class="modal-body"><p style="margin-top:45%;margin-bottom:3%;font-size:larger;color:black">Drag photos and videos here</p>
                    <div>
    <select v-model="user.type">
        <option disabled value="">Please select one</option>
        <option>Image</option>
        <option>Audio</option>
        <option>Video</option>
    </select>
    <span>Selected: {{ user.type }}</span>
    <hr />
    <input type="file" @change="handleFileUpload($event)" />
  <div v-if="image">
    <img :src="image.src" />
    </div>
  	<br>
      <div  >
      <input class ="cap" type ="text" name="description" v-model="description" placeholder = "Add Caption . . .">
      </div>
	<button v-on:click="handleSubmit()">Submit</button>
  </div>
                    </div>
                     <br>
                    </div>
                  </transition>
            </span>

            </div>
        </div>
        </center>
            <!-- <router-link :to ="{name: 'AnotherProfile', params: {id: card.id}}"><h4 class="router">{{card.title}}</h4></router-link> -->
        <!-- <div class="follow-btn" style="margin-right:25%"> -->
            <!-- <button class="btn btn-primary" style="height: 30px;width: 60px;font-size: small;">Follow</button> -->
        <!-- </div> -->
    </div>
</template>
<script>
import firebase from 'firebase'
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
      }
        }
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

    async handleSubmit() {
				console.log(this.user)
				console.log(this.file)
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
        var metaData = {

        contentType: contentTypeLocal

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
        // console.log(org.id)
        const body = {

            userId : org.id,
            url : downloadUrl,
            description: this.description,
            category: "common",
            postedOn: Math.round(+new Date()/1000),
            type: this.type
        }
        console.log(body)

        await axios.post('http://10.177.1.207:9000/post',body).then((res)=>{
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
        }
        }
        catch(error){
        }
      }
    }
}
</script>
<style>
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
.follower-card{
    display: flex;
    justify-content: space-between;
    margin-top:2%;
    margin-bottom: 2%;
    /* border-bottom: 2px solid black; */
}

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
