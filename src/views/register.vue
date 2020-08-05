<template>
  <div class="FormRegister">
    <formregister />
    
    
  </div>
</template>
<script>

import formregister from '@/components/form-register.vue'

export default {
  name: "register",
  components: {
    
    formregister
  }
};
</script>
<style scoped>
.FormRegister {
  background-image: url("../assets/backlogin2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>