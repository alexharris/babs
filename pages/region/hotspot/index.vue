<template>
  <div class="h-full flex flex-col">
    <h1>{{hotspotInfo.name}}</h1>

    <RecentObservationsInARegion />       
  </div>
</template>

<script>

import EbirdClient, { Detail } from "ebird-client";
const ebird = new EbirdClient('l74e03ri8jei'); //Get your API_KEY from eBird
// https://github.com/dannyfritz/ebird-client#readme


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

  methods: {
    getHotspotInfo(value) {
      ebird.hotspotInfo({
        locId: value        
      }).then((data) => {
        this.hotspotInfo = data
      })  
    },
  }
}
</script>
