<template>
  <div class="container" >
    <template v-if="user.email == 'admin@gmail.com'">
      <h2>Contact</h2>
    <div class="content-cards" v-for="(msg,index) in messages" :key="index">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">De: {{msg.email}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Asunto: {{msg.asunto}}</h6>
          <p
            class="card-text"
          >Descripcion: {{msg.msg}}</p>
          <a :href="'mailto:' + msg.email" class="card-link">Responder</a>
          
        </div>
      </div>
      
    </div>
    </template>
    <template v-else>
      <div class="alert alert-danger mt-3 text-center" role="alert">
        No tiene permisos para ver esta pestaña, vuelva a home o ingrese con cuenta de administrador.
        <router-link class="text-center" to="/dashboard" >Home</router-link>
      </div>
    </template>
    
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import firebase from "firebase";
import { db } from "@/firebase/init.js";
import router from '../router';
let bd = firebase.database();
export default {
  name: "messagescontact",
  data(){
      return{
        user: null,
          messages:[]
      }
  },
  created(){
      db.ref(`Support`)
      .once("value")
      .then(snap => {
        this.messages = snap.val();
      });
      firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
};
</script>
<style lang="scss" scoped>
@import '@/scss/mixin_flex.scss';
.container {
  @include flex-column;
  .content-cards {
      
      .card{
          margin: 2vh 0;
      }
  }
}
</style>