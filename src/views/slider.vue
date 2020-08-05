<template>
  <div>
    <headerPage />
    <messagescontact />
    <MenuBottom />
  </div>
</template>
<script>
import headerPage from '@/components/headerPage'
import MenuBottom from '@/components/MenuBottom'
import messagescontact from '@/components/messagescontact'
export default {
  name:'messages',
  components:{
    headerPage,
    MenuBottom,
    messagescontact
  }
}
</script>
<style lang="scss" scoped>
  
</style>