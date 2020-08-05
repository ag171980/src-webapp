<template>
  <div class="ccc">
    
      
      <infogame />
    
  </div>
</template>
<script>

import infogame from '@/components/infoGame.vue'

import firebase from 'firebase';
export default {
    name:'about',
  components: {
    
    infogame,
    
  },
  data(){
    return{
      user:null
    }
  },
  created(){
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
}
</script>
<style  scoped>
.info{
  margin-top: 20vh;
}
.ccc{
   background-image: url("../assets/backmobile.jpg");
   background-size: 100% 100%;
}
</style>