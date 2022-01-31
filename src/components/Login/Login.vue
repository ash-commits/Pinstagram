<template>
  <div class="container">
    <div class="card">
      <div class="heading">
        <h1 class="title mt-3 mb-5">
          <i>Pinstagram</i>
        </h1>
        </div>
        <form action="" class="login-form">
          <div class="form-group mb-0" style="margin-left:10%;margin-right:10%">
            <input type="text" v-model="username" class="form-control" id="username" placeholder="Phone number, username or Email" aria-required="true" style="font-size:small"/>
          </div>
          <div class="form-group mt-1 " style="margin-left:10%;margin-right:10%">
            <input type="password" v-model="password" class="form-control" id="password" placeholder="Password" aria-required="true" style="font-size:small"/>
          </div>
          <div class="form-group " style="margin-left:10%;margin-right:10%">
          <button class="form-control btn-primary mt-3" style="background-color:blue;font-size:small" @click="login" v-cloak>Log in</button>
          </div>
        </form>
        <div class="seperator">
        <!-- <p>----------------------OR----------------------</p> -->
        <h6 class="background "><span>OR</span></h6>
        </div>
        <div class="pagebook-login mt-4">
          <a href="#" style="font-size:normal;font-weight:bold;text-decoration:none">Log in with Pagebook</a>
        </div>
        <div class="forgot-password mt-2">
          <a href="#" style="font-size:smaller;font-weight:normal;text-decoration:none">Forgot Password?</a>
        </div>
    </div>
    <div class="card mt-3">
      <div class="signup" style="padding:5px">
        <p style="display:inline;font-size:small">Don't have an account?</p> <a href="#" style="font-size:medium;font-weight:bold;text-decoration:none">Sign up</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card{
  width: 26%;
  height: auto;
  margin: 0;
  margin-left: 30%;
}

h6 {
    font: 15px sans-serif;
    margin-top: 30px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    color: grey;
}
h6.background {
    position: relative;
    z-index: 1;
}
    h6:before {
        border-top: 2px solid #dfdfdf;
        content:"";
        margin: 0 auto; /* this centers the line to the full width specified */
        position: absolute; /* positioning must be absolute here, and relative positioning must be applied to the parent */
        top: 50%; left: 0; right: 0; bottom: 0;
        margin-left: 10%;
        margin-right: 10%;
        z-index: -1;
    }

    span {
        /* to hide the lines from behind the text, you have to set the background color the same as the container  */
        background: #fff;
        padding: 0 15px;
    }
</style>
<script>

export default({
  name: 'Login',
  data () {
    return {
      isLogin: false,
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log(this.username, this.password)
    }
  }
})
</script>
