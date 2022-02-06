<template>
    <div class="body">
       <center>
           <div class="card" style="width: 22rem">
               <img class="card-img-top" src="@/assets/logoInsta.jpeg" alt="Card image cap" height="160px" width="50px">
                    <div class="card-body">
                            <p class="card-text">You can see images, posts and people by creating an account</p>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-secondary btn-block mb-2 mt-2">LogIn with PageBook</button>
                    </div>
                    <div class="row">
                        <div class="col"><hr></div>
                        <div class="col-auto">Register</div>
                        <div class="col"><hr></div>
                    </div>
                <form class="insideForm">
                    <div class="form-group">
                        <input type="text" class="form-control mb-2" id="inputNumber" aria-describedby="emailHelp" placeholder="Enter mobile Number" name="contact" v-model="contact" required>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control mb-2" id="fullName" aria-describedby="emailHelp" placeholder="Enter name " name="name" v-model="name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" v-model="email" required>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" v-model="password" required>
                    </div>
                    <!-- <span class="dropdown">
                        <button class="popsUps" @click="showModal = true" >Upload A Photo To get Registered<i class="bi bi-box-arrow-up"></i></button>
                            <transition name = "fade" appear>
                            <div class="modal-overlay" v-if="showModal"></div>
                            </transition>
                            <transition name = "slide" appear>
                                <div class="mod" v-if="showModal"> 
                                <div class="modal-header mt-10">
                                <p style="margin-top:4;margin-bottom:0%;margin-left:25%;margin-right:20%"><b>Upload your picture</b></p><span><button type="button" class="btn btn-outline-danger" @click="showModal=false" >X</button></span>
                                </div>

                            <div class="modal-body"><p style="margin-top:45%;margin-bottom:3%;font-size:larger;color:black">Drag photos and videos here</p>
                            <div>
                                <select v-model="user.type">
                                <option disabled value="">Please select one</option>
                                <option>Image</option>
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
                    </span> -->
                    <button type="button" class="btn btn-info mt-2" v-on:click="getRegistered()">Submit</button>
                </form>
                <div class="card-body">
                    <p class="card-text">By signing up, you <b>agree to our Terms, Data Policy</b> and <b>Cookie Policy</b>.</p>
                </div>
            </div> 
            <div>
                <div class="card" style="width: 22rem">
                        <div class="card-body">
                            <p>Have an account?<a href="#/login" class="card-link"><b>SignIn</b></a></p>
                        </div>
                </div>
            </div>
            <div class="down">
                <div class="data">
                    <p><a href="/#" class="link-secondary">META</a></p>
                </div>
                <div class="data">
                    <p><a href="/#" class="link-secondary">About</a></p>
                </div>
                <div class="data">
                    <p><a href="/#" class="link-secondary">Blog</a></p>
                </div>
                <div class="data">
                    <p><a href="/#" class="link-secondary">Help</a></p>
                </div>
                <div class="data">
                    <p><a href="/#" class="link-secondary">API</a></p>
                </div>
                <div class="data">
                    <p><a href="/#" class="link-secondary">GitSource</a></p>
                </div>
            </div>
            <div class="copyRight">
                <p>&copy; 2022 Pnstagram from TeamRaj</p> 
            </div>
        </center>
    </div>
</template>

<script>
import firebase from 'firebase';
import axios from 'axios'
import swal from 'sweetalert'
export default{
    name: 'Register',
    pop: 'popup',
    data()
    {
        return{
            showModal:false,
            contact: '',
            name: '',
            email: '',
            password: '',
            user: {
        type: '',
      }
        }
    },
    methods: {
        checking()
        {
            console.log("i got you bro", this.phoneNo,this.fullName,this.email,this.password)
            this.$router.push({name: 'Login' })
        },
        async getRegistered(){
            const body = {
                userEmail: this.email,
                contact: this.contact,
                password: this.password,
                appId:2,
                name:this.name,
           }
            await axios.post('http://10.177.1.200:8000/authentication/authenticate/register',body).then((res)=>{
            if(res.status === 200){
                swal({
                    text: "Successfully Registerd",
                    icon: 'success'
                }),
                this.$router.push({name: 'Login'})
                this.sendToSearch()
            }
            else{
                swal({
                    text: "Failed To Register",
                    icon: 'error'
                })
            }              
            })
        },
         async sendToSearch()
        {
            const body = {
                id: this.email,
                name: this.name,
                type:false
            }
            await axios.post('http://10.177.1.207:9000/user/add',body)
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

        const body = {
                userEmail: this.email,
                contact: this.contact,
                password: this.password,
                appId:2,
                name:this.name,
                profileUrl:downloadUrl
        }

        await axios.post('http://10.177.1.200:8000/authentication/authenticate/register',body).then((res)=>{
                    if(res.status === 200){
                        swal({
                            text: "file uploaded",
                            icon: 'success'
                        }),
                        console.log(res.status)
                    this.$router.push({name: 'Login'})
                    }
                    else{
                        swal({
                            text: " File Not uploaded",
                            icon: 'error'
                        })
                    }              
                })
        // await axios.post('http://10.177.1.207:')   
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
.insideForm
{
    margin-left: 20px;
    margin-right: 20px;
}
.card{
    margin-bottom: 10px;
}
.card-link{
    text-decoration: none;
}
.body{
    background-color: whitesmoke;
}
.down
{
    display: flex;
}
.data
{
    margin-top: 70px;
    width: 10000px;
    font-size: 10px;
}
.copyRight
{
    color: grey;
    font-size: 10px;
}
.link-secondary{
    text-decoration: none;
}
.row{
    margin-left: 20px;
    margin-right: 20px;
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
  background-color: skyblue;
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