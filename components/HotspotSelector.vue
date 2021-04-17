<template>
    <div class="border border-red-200 m-8 p-4">
      <h2>Hotspots in Region</h2>
      <select name="region" :value="selectedHotspot" @change="$emit('selected-hotspot', $event.target.value)">
          <option value="" disabled selected>Select your option</option>
          <option v-for="hotspot in hotspotsInARegion" :value="hotspot.locId">

              {{hotspot.locName}} <!-- ({{hotspot.numSpeciesAllTime}}) -->
          </option>  
      </select> 
    </div>
</template>

<script>

import EbirdClient, { Detail } from "ebird-client";
const ebird = new EbirdClient('l74e03ri8jei'); //Get your API_KEY from eBird
// https://github.com/dannyfritz/ebird-client#readme

export default {
  props: ['selectedRegion'],
  data() {
    return {
      hotspotsInARegion: []
    }
  },
  mounted() {
    // if there is no region in the URL
    if(!this.$route.query.region){
      //don't do anything
    } else {
      // if there is, find all of the hotspots for that region
      this.getHotspotsInARegion(this.$route.query.region)
     
    }


  },
  computed: {
    selectedHotspot() {
      // if(!this.$route.query.region) {
      //   return 'choose'
      // } else {
        return this.$route.query.hotspot
      // }
      
    }
  },  
  watch: {
    // watch to see if a new region is selected
    selectedRegion: function(newVal, oldVal) { 
      this.getHotspotsInARegion(newVal)
    }
  },
  methods: {
    getHotspotsInARegion(value) {
      ebird.hotspotsInARegion({
        fmt: 'json',
        regionCode: value        
      }).then((data) => {
        this.hotspotsInARegion = data
        // this.getRecentObservationsInARegion(data)
      })  
    },
    getRecentObservationsInARegion(data) {
      for(let i = 0; i < data.length; i++){
        ebird.recentObservationsInARegion({
          regionCode: data[i].locId,
          back: 30,
        }).then((data) => {
          //console.log(data.length) // this is the number of observations for each hotspot in the last 30 days
        })          
      }
         
    },    
  }
}
</script>






