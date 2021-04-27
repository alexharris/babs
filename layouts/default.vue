<template>
  <div>
    <div class="bg-gray-100 p-2 flex flex-row justify-between fixed w-full z-50">  
      <GoBack v-if="this.$route.path !== '/'" />
      <LocaleSelector />
    </div>
    <div class="pt-16 p-2">
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