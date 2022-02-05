<template>
  <div>
    <select v-model="user.type">
        <option disabled value="">Please select one</option>
        <option>Text</option>
        <option>Image</option>
        <option>Audio</option>
        <option>Video</option>
    </select>
    <span>Selected: {{ user.type }}</span>
    <hr />
    <!-- <div >
      <p>Upload an image to Firebase:</p>
      <input type="file" @change="previewImage" >
    </div> -->
    <!-- <div>
        <p>video</p>
        <input type="file" @change="previewVideo" accept="video/*">
    </div> -->
    <!-- <div>
      <p>Progress: {{uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
    </div>
    <div v-if="imageData!=null">
        <img class="preview" :src="picture">
        <br>
      <button @click="onUpload()">Upload</button>
    </div> -->
    <input type="file" @change="handleFileUpload($event)" />
  <div v-if="image">
    <img :src="image.src" />
    </div>
  	<br>
	<button v-on:click="handleSubmit()">Submit</button>
  </div>
</template>

<script>

import firebase from 'firebase';

export default {
  name: 'Createpost',
  data(){
	return{
     file: "",
      image: {},
      user: {
		type: '',
         }
    };
	},
  methods:{
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
this.contentTypeLocal= 'image/png'
}
else if(this.user.type === "Audio")
{
    this.contentTypeLocal= 'audio/mp3'
}
else if(this.user.type === "Video")
{
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
}


}

catch(error){

console.log(error)

}
    }
}
}
</script>
<style scoped="">
img.preview {
    width: 200px;
}

</style>