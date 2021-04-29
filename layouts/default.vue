<template>
  <div>
    <div class="p-4 flex flex-row justify-between w-full z-50">  
      <div><GoBack  v-if="this.$route.path !== '/'" /></div>
      <div><LocaleSelector /></div>
    </div>
    <div class="p-4">
      <Nuxt />
    </div>
  </div>
</template>

<script>


export default {

  mounted() {
    console.log(this.$route.path)
  },

}
</script>