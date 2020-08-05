<template>
  <div id="app">
    <headerPage />
    <router-view/>
    <MenuBottom />
  </div>
</template>
<script>
import "bootstrap"
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import MenuBottom from '@/components/MenuBottom.vue'
import headerPage from '@/components/headerPage.vue'
export default {
  name:'app',
  components: {
    headerPage,
    MenuBottom
  },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Baloo+Da+2&display=swap%27');
*{
  font-family: 'Baloo Da 2', cursive;
}
</style>
