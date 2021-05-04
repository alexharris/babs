<template>
  <div class="flex flex-col h-screen">
    
      
  
    <div class="py-2 px-4 justify-between w-full z-50 ">  
      <div><GoBack  v-if="this.$route.path !== '/'" /></div>
      <!-- <Menu /> -->
    </div>
    <div class="px-4 h-full">
      <Nuxt keep-alive />
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
    }
  },
  mounted() {
    console.log(this.$route.path)
  },

}
</script>