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
    //   imageData: null,
    //   picture: null,
    //   uploadValue: 0
     file: "",
      image: {},
      user: {
		// questionText: '',			
        // Option1: '',
        // Option2: '',
        // Option3: '',
		// Option4: '',
		// difficultyLevel: '',
		type: '',
		// answers: [],
		// sourceUrl: ''
         }
    };
	},
  methods:{
    // previewImage(event) {
    //   this.uploadValue=0;
    //   this.picture=null;
    //   this.imageData = event.target.files[0];
    // },

    // onUpload(){
    //   this.picture=null;
    //   const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
    //   storageRef.on(`state_changed`,snapshot=>{
    //     this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    //   }, error=>{console.log(error.message)},
    //   ()=>{this.uploadValue=100;
    //     storageRef.snapshot.ref.getDownloadURL().then((url)=>{
    //       this.picture =url;
    //     });
    //   }
    //   );
    // }

//     async onUpload(){
//         var metaData = {
        
// contentType: "image/png"

// }
//         const storageRef = firebase.storage().ref();
// console.log(storageRef)

// const imageRef = storageRef.child(`images/${this.imageData.name}`);

// console.log(metaData);

// await imageRef.put(this.imageData, metaData);

// const downloadUrl = await imageRef.getDownloadURL()

// console.log(downloadUrl)
//     }

//   }
handleFileUpload(event) {
      this.file = event.target.files[0];
    },

    async handleSubmit() {
				console.log(this.user)
				console.log(this.file)
console.log("hLLOOO");


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