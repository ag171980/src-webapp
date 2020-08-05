<template>
  <div class="matchesresponsive">
      
      <mw></mw>
    
  </div>
</template>
<script>

import mw from '@/components/MatchWeek.vue'
export default {
    name:'matches',
  components: {
    
    mw,
   
  }
}
</script>
<style lang="scss" scoped>
.matchesresponsive{
  background-image: url("../assets/backmobile.jpg");
  background-size: 100% 100%;
}
  .fechas {
  border-style: solid 2px black;
  margin: 20px;
}
.partido {
  margin: 20px;
  width: 100wh;
}
</style>