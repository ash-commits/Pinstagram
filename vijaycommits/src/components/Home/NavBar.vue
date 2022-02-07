<template>
<div>
    <div class="navigation"> 
        <div class="logo">
            <a class="no-underline" href="#/">Pinstagram</a>
        </div>
  
        <div class="navigation-search-container">
            <input class="search-field" type="text" placeholder="Search" name="searching" v-model="searching"><button class="searchBtn" v-on:click="goSearch()"><i class="bi bi-search"></i></button>
        </div>
  
        <div class="navigation-icons">
            <div class="navigation-link">
            <a href="#/" class="target"><i class="focus bi bi-house"></i></a>
            <a href="#/notification" class="target"><i class="bi bi-heart"></i></a>
            <i class="bi bi-bell"></i>
            <span class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-gear"></i></button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><button class="dropdown-item" href="#">DeleteAccount</button></li>
                    <li><button class="dropdown-item" href="#" v-on:click="getMeLogOut()">LogOut</button></li>
                </ul>
            </span>

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
    </select></center>
        <span>Selected: {{ user.cat }}</span><br>
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


            <a href="#/profile"><i class="bi bi-person"></i></a>


            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import firebase from 'firebase';
export default{
    name: 'NavBar',
    pop: 'popup',
    data () {
      return {
          searching:'',
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
      category: '',
      user: {
        type: '',
        cat:''
      }
      }
    },
    methods:{
        goSearch()
        {
            console.log(this.searching)
            this.$router.push({name:'SearchHome', query: { searchQuery: this.searching}}).catch(()=>{})
            this.$router.go(0)
        },
        async getMeLogOut(){
                const body = {
                    userEmail: this.email,
                    appId:2
                }  
                await axios.post('http://10.177.1.200:8000/authentication/authenticate/logout',body).then((res)=>{
                    if(res.status === 200){
                        swal({
                            text: "Logout is Successful",
                            icon: 'success'
                        }),
                        this.$router.push({name: 'Login'})
                        localStorage.clear()                            
                    }
                    else{
                        swal({
                            text: "Failed To Login",
                            icon: 'error'
                        })
                    }              
                })
            },
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
        console.log("hLLOOO");
        var contentTypeLocal

        try{

        contentTypeLocal = '';
        if( this.user.type === "Image")

        {
            this.type=true
        this.contentTypeLocal= 'image/png'
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
        console.log(this.user.cat)

        const body = {

            userId : localStorage.getItem('userId'),
            url : downloadUrl,
            description: this.description,
            category: this.user.cat,
            postedOn: Math.round(+new Date()/1000),
            type: this.type,
        }

        await axios.post('http://10.177.1.207:9000/post',body).then((res)=>{
                    if(res.status === 200){
                        swal({
                            text: "file uploaded",
                            icon: 'success'
                        }),
                        console.log(res.status)
                    // this.$router.push({name: 'Home'})
                    this.$router.go(0)
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
        console.log(error)
        }
      }
    
    }
}

</script>


<style scoped>
@import url('//fonts.cdnfonts.com/css/billabong');
.cap{
  font-family: "billabong", sans-serif;
  color: rgb(219, 31, 94);
  font-size: 20px;
  margin-bottom: 20px;
}

body {
  background: #fafafa;
}


/* .feed{
    width: 100%;
  height: 100%;
  overflow-y: scroll; 
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
} */
.split {
  height: 100%;
  /* width: 33%; */
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

/* Control the left side */
.left {
  left: 0;
  background-color: rgb(136, 218, 243);
  margin-top: 50px;
  width:75%;
}
.left .scrollable{
  width: 100%;
  height: 100%;
  overflow-y: scroll; 
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

/* Control the right side */
.center {
  right: 0;
  background-color: rgb(203, 248, 121);
  margin-top: 50px;
}
.right {
  right: 0;
  background-color: rgb(248, 165, 223);
  margin-top: 50px;
  width: 25%;
}

.navigation {
  background-color: #ffffff;
  height: 80px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 50px;
  box-sizing: border-box;
  z-index: 2;
  /* animation magic */
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
}

.shrink {
  height: 50px;
}

.navigation .logo a {
  position: relative;
  color: #000000;
  font-size: 30px;
  font-family: "billabong", sans-serif;
  text-decoration: none;
}

.navigation-search-container {
  position: relative;
}

.navigation-search-container input {
  background-color: #fafafa;
  padding: 3px 20px;
  padding-left: 25px;
  height: 30px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.0975);
  border-radius: 3px;
  font-size: 14px;
}

.navigation-search-container .fa-search {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.5);
}

@media only screen and (min-width: 320px) and (max-width: 650px) {
  /* Navigation */
  .navigation {
    padding: 0 20px;
    justify-content: space-between;
  }
  .navigation-search-container {
    display: none;
  }
  .navigation-icons {
    display: flex;
  }
}

.navigation-icons {
  display: flex;
  fill: black;
}

.navigation-search-container input:focus {
  outline: none;
}

.navigation-search-container input::placeholder {
  text-align: center;
}

.navigation-icons a {
  text-decoration: none;
}

.navigation-link i {
  margin-left: 30px;
  color: black;
  text-decoration: none;
  font-size: 22px;
  display: inline;
}

.notification-bubble-wrapper {
  position: relative;
  top: -30px;
  left: 17px;
}

.notification-bubble {
  position: absolute;
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  background: #ff2c74;
  color: #fff;
  text-align: center;
  font-size: 13px;
  padding: 5px 5px 3px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
  display: none;
}
.search-field
{
    margin-right: 2px;
    width: 350px;
}
.dropdown-toggle::after {
        display: none !important;
 }

.searchBtn{
    background-color: white;
    border: none;
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
