import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
require('@/assets/main.scss')

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAgEy76g3k3D3yJ_Pyd-3zsbGrROEZGPSc",
  authDomain: "tingeso-55880.firebaseapp.com",
  databaseURL: "https://tingeso-55880.firebaseio.com",
  projectId: "tingeso-55880",
  storageBucket: "tingeso-55880.appspot.com",
  messagingSenderId: "752771580740",
  appId: "1:752771580740:web:33728d44da8eb1f1634d11"
}
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

new Vue({
  render: h => h(App),
}).$mount('#app')
