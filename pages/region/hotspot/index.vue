<template>
  <div class="h-full flex flex-col">
    <RecentObservationsInARegion />
  </div>
</template>

<script>

export default {
  watchQuery(newQuery, oldQuery) {
    // Only execute component methods if the old query string contained `bar`
    // and the new query string contains `foo`
    console.log(newQuery)
    this.loading = true
    this.selectedRegion = newQuery.hotspot
    this.getHotspotInfo(newQuery.hotspot)
  },  
  data() {
    return {
      selectedHotspot: this.$route.query.hotspot,
      hotspotInfo: [],
      mapLoading: true,
    }
  },
  mounted() {
    if(this.$route.query.hotspot == null) {
      this.$router.push({ path: '/' })
    }    
    this.getHotspotInfo(this.$route.query.hotspot)
  },
  computed: {
    // selectedHotspot () {
    //   return this.$store.state.hotspot
    // },

  },
// https://api.ebird.org/v2/ref/hotspot/info/{{locId}}
  methods: {
    getHotspotInfo(value) {
      console.log(value)
      this.$axios.get('https://api.ebird.org/v2/ref/hotspot/info/' + value, {
        params: {
 
        }
      })
      .then((response) => {
        
        this.hotspotInfo = response.data

      }, (error) => {
        console.log(error);
      });   

    },
  }
}
</script>
