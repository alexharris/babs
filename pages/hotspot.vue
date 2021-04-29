<template>
  <div class="h-full">
    <h2>{{hotspotInfo.name}}</h2>

    <RecentObservationsInARegion />       
  </div>
</template>

<script>

import EbirdClient, { Detail } from "ebird-client";
const ebird = new EbirdClient('l74e03ri8jei'); //Get your API_KEY from eBird
// https://github.com/dannyfritz/ebird-client#readme


export default {
  data() {
    return {
      hotspotInfo: [],
      mapLoading: true,
    }
  },
  mounted() {
    this.getHotspotInfo(this.$route.query.hotspot)
  },
  computed: {
    selectedHotspot () {
      return this.$store.state.hotspot
    },

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
