<template>
    <div class="body">
        <div class="top">
            <div class="slider">
                <transition-group name="fade" tag="div">
                    <div v-for="i in [currentIndex]" :key="i">
                        <img class="imagedisplay" :src="currentImg" height="600px" />
                    </div>
                </transition-group>
            </div>
            <div class="login">
                <div class="card" style="width: 22rem">
               <img class="card-img-top" src="@/assets/logoInsta.jpeg" alt="Card image cap" height="160px" width="50px">
               <div class="row">
                    <div class="col"><hr></div>
                    <div class="col-auto">Login</div>
                    <div class="col"><hr></div>
                </div>
                <form class="insideForm">
                    <div class="form-group">
                        <input type="email" class="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" v-model="email" required>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control mb-3" id="exampleInputPassword1" placeholder="Password" name="password" v-model="password" required>
                    </div>
                    <button type="button" class="btn btn-info" v-on:click="getMeLogIn()"> Login </button>
                </form>
                <div class="row mt-4">
                    <div class="col"><hr></div>
                    <div class="col-auto">OR</div>
                    <div class="col"><hr></div>
                </div>
                <div>
                    <div class="mt-4 mb-3">
                        <a href="#" class="pageBook link-primary"><i class="icon bi bi-facebook"></i><b>Login With PageBook</b></a>
                    </div>
                    <div class="mt-4 mb-4">
                        <a href="#" class="pageBook link-secondary">Forgotten Password?</a>
                    </div>
                </div>
            </div>
            <div class="card mt-3">
                <p class="mt-3">Don't Have an Account <a href="#/register" class="pageBook link-primary">Register</a></p>
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
                <p>&copy; 2022 Pinstagram from TeamRaj</p>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default{
        name: 'Login',
        data ()
        {
            return{ images: [
                'https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg',
                'https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg',
                'https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg',
                'https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg'
                ],
                currentIndex: 0,
                timer: null,
                email: '',
                password: ''
            }
        },
        mounted: function () {
            this.startSlide()
        },
        methods: {
            startSlide: function () {
            this.timer = setInterval(this.next, 2000)
            },
            next: function () {
                this.currentIndex += 1
            },
            prev: function () {
                this.currentIndex -= 1
            },
            
            async getMeLogIn(){
                const body = {
                    userEmail: this.email,
                    password: this.password,
                    appId:"2"
                }  
                await axios.post('http://10.177.1.200:8000/authentication/authenticate/login',body).then((res)=>{
                    if(res.status === 200){
                        swal({
                            text: "Login is Successful",
                            icon: 'success'
                        }),
                        this.$router.push({name: 'Home'})
                        localStorage.setItem('userId',this.email)
                            //   localStorage.setItem('storedData', this.input)


                    }
                    else{
                        swal({
                            text: "Failed To Login",
                            icon: 'error'
                        })
                    }              
                })
            }
        },
    computed: {
            currentImg: function () {
            return this.images[Math.abs(this.currentIndex) % this.images.length]
            }
        }
}
</script>

<style scoped>
.body{
    background-color: whitesmoke;
}
.top
{
    display: flex;
    align-content: center;
}
.login{
    margin-left: 70px;
}
.row{
    margin-left: 20px;
    margin-right: 20px;
}
.slider
{
    margin-left: 320px;
}
.insideForm
{
    margin-left: 20px;
    margin-right: 20px;
}
.pageBook
{
    text-decoration: none;
}
.icon{
    margin-right: 5px;
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
.link-secondary{
    text-decoration: none;
}
.imagedisplay{
    border: 2px solid black;
    border-radius: 20px;
}
</style>