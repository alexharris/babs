<template>
  <div class="flex flex-col h-screen">
    <div class="py-2 px-4 justify-between w-full z-50 flex flex-row sm:mb-4">  
      <div class="w-1/3">
        <GoBack  v-if="this.$route.path !== '/'" />
      </div>
      <!-- <div class="w-1/3 text-right"><Menu /></div> -->
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

  },

}
</script>