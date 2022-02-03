<template>
<div>
    <div class="navigation"> 
        <div class="logo">
            <a class="no-underline" href="#/home">Pinstagram</a>
        </div>
  
        <div class="navigation-search-container">
            <input class="search-field" type="text" placeholder="Search"><button class="searchBtn"><i class="bi bi-search"></i></button>
        </div>
  
        <div class="navigation-icons">
            <div class="navigation-link">
            <a href="#/home" class="target"><i class="focus bi bi-house"></i></a>
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
                     <div class="modal-header mt-10"><p style="margin-top:4;margin-bottom:0%;margin-left:25%;margin-right:20%"><b>Create new modal</b></p><span><button type="button" class="btn btn-outline-danger" @click="showModal=false" >X</button></span></div>

                     <div class="modal-body"><p style="margin-top:45%;margin-bottom:3%;font-size:larger;color:black">Drag photos and videos here</p>
                    <form>
                    <input class="input-class" type="file" id="select-file" placeholder="Select from computer"/>
                    <label for="select-file" style="font-size:12px;font-weight:strong">Select from computer</label>
                    </form>
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
export default{
    name: 'NavBar',
    pop: 'popup',
    data () {
      return {
        showModal:false
      }
    },
    methods:{
        getMeLogOut()
        {
            this.$router.push({name:'Login'})
            console.log("ayya vachanayya  !!!")
        }
    }
}
</script>


<style scoped>
@import url('//fonts.cdnfonts.com/css/billabong');
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

/* Hide the file input using
opacity */
[type=file] {
    position: absolute;
    filter: alpha(opacity=0);
    opacity: 0;
}
input,
[type=file] + label {
  border: 1px solid rgb(22, 103, 209);
  border-radius: 3px;
  text-align: left;
  padding: 10px;
  width: 150px;
  margin: 0;
  left: 0;
  position: relative;
}
[type=file] + label {
  text-align: center;
  top: 0.5em;
  /* Decorative */
  background: rgb(22, 103, 209);
  color: #fff;
  border: none;
  cursor: pointer;
}
[type=file] + label:hover {
  background: rgb(22, 103, 209);
}

</style>
