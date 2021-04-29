<template>
    <div @click="goBack()">
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
        } else if (this.$route.path == '/hotspot') {
          this.$router.push({ path: '/region', query: { region: this.$route.query.region } })
        }

    },
  }
}
</script>






