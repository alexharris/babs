<template>
    <div @click="goBack()" class="cursor-pointer">
        Back
    </div>
</template>

<script>


export default {

  methods: {
    goBack() {
        
       console.log(this.$route.path)
        
        if(this.$route.path == '/region') {
          this.$router.push({ path: '/' })
        } else if (this.$route.path == '/region/hotspot') {
          this.$router.push({ path: '/region', query: { region: this.$route.query.region } })
        } else if (this.$route.path == '/region/hotspot/species') {
          this.$router.push({ path: '/region/hotspot', query: { region: this.$route.query.region, hotspot: this.$route.query.hotspot } })
        }

    },
  }
}
</script>






