<template>
  <div class="h-full flex flex-col">
    <ShadowBox>
      <h1>{{hotspotInfo.name}}</h1>
      <!-- <div class=flex flex-row>
        <span @click="toggle = 'alltime'" class="link">All Time</span>
        <span @click="toggle = '30days'"  class="link">30 days</span>
      </div>
      <SpeciesListForARegion v-if="toggle == 'alltime'" />     
      <RecentObservationsInARegion v-if="toggle == '30days'" />        -->
      <p><SpeciesListForARegion /> different species have been viewed at {{hotspotInfo.name}}, here are the ones that have been recorded in the last 30 days</p>
    </ShadowBox>
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
      toggle: 'alltime'
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
