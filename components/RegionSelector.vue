<template>
    <div class="border border-red-200 p-4 m-8">
        <h2>Region Info</h2>
        <select name="region" :value="selectedRegion" @change="$emit('selected-region', $event.target.value)">
            <option value="" disabled selected>Select your option</option>
            <option v-for="region in allRegionInfo" :value="region.id">
                {{region.name}}
            </option>  
        </select> 
    </div>
</template>

<script>

import EbirdClient, { Detail } from "ebird-client";
const ebird = new EbirdClient('l74e03ri8jei'); //Get your API_KEY from eBird
// https://github.com/dannyfritz/ebird-client#readme

export default {
  mounted() {
      this.getAllRegionInfo()
  },
  data() {
    return {
      regionCodes: [
        'US-CA-001', // alameda
        'US-CA-075', // san francisco
        'US-CA-041', // marin
        'US-CA-013', // contra costa
        'US-CA-085', // santa clara
        'US-CA-097', // sonoma 
        'US-CA-055', // napa
        'US-CA-081', // san mateo
        'US-CA-095', // solano
      ],
      // selectedRegion: this.$route.query.region,
      allRegionInfo: [],   
    }
  },
  computed: {
    selectedRegion() {
      // if(!this.$route.query.region) {
      //   return 'choose'
      // } else {
        return this.$route.query.region
      // }
      
    }
  },
  methods: {
    getAllRegionInfo() {
      this.regionCodes.forEach(element => {
        ebird.regionInfo({
          regionCode: element
        }).then((data) => {
          this.allRegionInfo.push({
            id: element,
            name: data.result
          })
        }) 
      });
    },
    regionSelected(e) {
        // console.log(e.target.value)
        // this.selectedRegion = e.target.value
    //    this.$emit('selected-region', e.target.value)
    }
  }
}
</script>






