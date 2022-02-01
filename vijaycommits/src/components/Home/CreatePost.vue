<template>
    <div class="container">
      <div class="popup">
                  <button class="button" @click="showModal = true" >Click</button>
                  <transition name = "fade" appear>
                    <div class="modal-overlay" v-if="showModal"></div>
                  </transition>
                  <transition name = "slide" appear>
                   <div class="mod" v-if="showModal"> <!-- <div clas="modal" v-if="showModal"> -->
                     <div class="modal-header mt-10"><p style="margin-top:4;margin-bottom:0%;margin-left:25%;margin-right:20%"><b>Create new modal</b></p><span><button type="button" class="btn btn-outline-danger" @click="showModal=false" >X</button></span></div>

                     <div class="modal-body"><p style="margin-top:45%;margin-bottom:3%;font-size:larger;color:black">Drag photos and videos here</p>
                    <!-- <button class="btn btn-primary">Select from computer</button></div> -->
                    <form>
                    <input class="input-class" type="file" id="select-file" placeholder="Select from computer"/>
                    <label for="select-file" style="font-size:12px;font-weight:strong">Select from computer</label>
                    </form>
                    </div>
                     <br>
                    </div>
                  </transition>
                </div>
    </div>
</template>
<script>
export default {
    name: 'CreatePost',
    pop: 'popup',
    data () {
      return {
        showModal:false
      }
    },
    // computed: {
    //   $("[type=file]").on("change", function(){
    //   var file = this.files[0].name;
    //   var dflt = $(this).attr("placeholder");
    //   if($(this).val()!=""){
    //   $(this).next().text(file);
    //   } else {
    //   $(this).next().text(dflt);
    //    }
    // })
    // }
}
</script>
<style scoped>

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
  background-color: white;
  border-radius: 16px;
  padding: 25px;
  height: 80%;
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