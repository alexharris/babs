<template>
    <div @click="goBack()" class="link">
        Back
    </div>
</template>

<script>


export default {

  methods: {
    goBack() {
        if(this.$route.path == '/region') {
          this.$router.push({ path: '/bycounty' })
        } else if (this.$route.path == '/region/hotspot') {
          this.$router.push({ path: '/region', query: { region: this.$route.query.region } })
        } else if (this.$route.path == '/region/hotspot/species') {
          this.$router.push({ path: '/region/hotspot', query: { region: this.$route.query.region, hotspot: this.$route.query.hotspot } })
        } else if (this.$route.path == '/bycounty') {
          this.$router.push({ path: '/' })
        }
    },
  }
}
</script>






