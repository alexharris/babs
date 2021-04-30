<template>
  <div>
    
      
  
    <div class="p-4 flex flex-column justify-between w-full z-50 ">  
      <div><GoBack  v-if="this.$route.path !== '/'" /></div>
      <Menu />
    </div>
    <div class="p-4">
      <Nuxt />
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