<template>
    <div class="border border-red-200 m-8 p-4">
    <h2>Recent Obersvations @ {{hotspotInfo.name}}</h2>
    <ul>
      <li v-for="ob in recentObservationsInARegion">
        <a :href="'https://www.allaboutbirds.org/guide/' + ob.speciesCode">{{ob.comName}}</a> ({{ob.howMany}})
      </li>  
    </ul>  
    </div>
</template>

<script>

import EbirdClient, { Detail } from "ebird-client";
const ebird = new EbirdClient('l74e03ri8jei'); //Get your API_KEY from eBird
// https://github.com/dannyfritz/ebird-client#readme

export default {
  props: ['selectedHotspot'],
  data() {
    return {
      recentObservationsInARegion: [],
      hotspotInfo: ''
    }
  },
  mounted() {
      if(this.$route.query.hotspot !== '') {
        this.getRecentObservationsInARegion(this.$route.query.hotspot)
        this.getSelectedHotspotInfo(this.$route.query.hotspot)             
      } 
  },
  watch: {
     selectedHotspot: function(newVal, oldVal) { // watch it
      this.getRecentObservationsInARegion(newVal)
      this.getSelectedHotspotInfo(newVal)
    }
  },
  methods: {
    getRecentObservationsInARegion(value) {
      ebird.recentObservationsInARegion({
        regionCode: this.selectedHotspot,
        back: 30,
        sppLocale: this.$i18n.locale
      }).then((data) => {
        this.recentObservationsInARegion = data
      })           
    },
   getSelectedHotspotInfo() {
      ebird.hotspotInfo({
        locId: this.selectedHotspot
      }).then((data) => {
        this.hotspotInfo = data
      })      
    },          
  }
}
</script>






