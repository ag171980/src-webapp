<template>
  <div class="dashboard">
    
    
    <carousel />
    <matchesLive />
   
  </div>
</template>
<script>
/* ------------ import  components ----- */


import carousel from '@/components/carousel.vue'
import matchesLive from '@/components/matchLive.vue'

/*import firebase */
import firebase from 'firebase';
import { db } from "@/firebase/init.js";
export default {
  name: "home",
  components: {
    
    carousel,
    matchesLive
  },
  data(){
    return{
      user:null
    }
  },
  created() {
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
.dashboard{
  background-image: url("../assets/backmobile.jpg");
  background-size: 100% 100%;
}
</style>