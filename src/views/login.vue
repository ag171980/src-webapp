<template>
  <div class="FormLogin">
    <formlogin />
    
  </div>
</template>
<script>
/*----IMPORT COMPONENTS-----*/
import formlogin from '@/components/form-login.vue'

/*----IMPORT FIREBASE-----*/
import auth from '@/firebase/init.js'
import firebase from "firebase";
import router from '../router'
export default {
  name: 'login',
  components:{
    
    formlogin
  },
};
</script>
<style scoped>
.FormLogin{
  background-image: url("../assets/backlogin2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>