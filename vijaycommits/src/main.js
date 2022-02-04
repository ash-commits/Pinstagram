// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'

Vue.config.productionTip = false
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
apiKey: "AIzaSyDi1412LFqPlD0F-MrtbqPb0c4TaRvdHlM",
authDomain: "quinstagram-29f24.firebaseapp.com",
projectId: "quinstagram-29f24",
storageBucket: "quinstagram-29f24.appspot.com",
messagingSenderId: "630331921687",
appId: "1:630331921687:web:27180fb4cefb297596d352",
measurementId: "G-7Z1VRK92ZE"
};// Initialize Firebase
firebase.initializeApp(firebaseConfig);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
