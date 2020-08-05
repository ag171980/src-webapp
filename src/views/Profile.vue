<template>
  <div class="profile">   
      <formprofile /> 
  </div>
</template>
<script>

import formprofile from '@/components/form-profile.vue'
import firebase from 'firebase';
export default {
    name:'profile',
  components: {
    
    formprofile,
    
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
<style lang="scss" scoped>
  
</style>