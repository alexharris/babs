<template>
    <div >
        <!-- <template v-if="selectedRegion == undefined"> -->
        <h2>Select a region</h2>
        <!-- <select name="region" :value="selectedRegion" @change="$emit('selected-region', $event.target.value)">
            <option value="" disabled selected>Select your option</option>
            <option v-for="region in allRegionInfo" :value="region.id">
                {{region.name}}
            </option>  
        </select>  -->
        <v-select :options="regions" @input="regionSelected" :clearable="false" />
        <!-- </template>
        <template v-else>
          {{selectedRegion}}
        </template> -->
    </div>
</template>

<script>

import EbirdClient, { Detail } from "ebird-client";
const ebird = new EbirdClient('l74e03ri8jei'); //Get your API_KEY from eBird
// https://github.com/dannyfritz/ebird-client#readme

export default {
  mounted() {
      // this.getAllRegionInfo()
  },
  data() {
    return {
      regions: [
        {label: 'alameda', code: 'US-CA-001'}, // alameda
        {label: 'san francisco', code: 'US-CA-075'}, // san francisco
        {label: 'marin', code: 'US-CA-041'}, // marin
        {label: 'contra costa', code: 'US-CA-013'}, // contra costa
        {label: 'santa clara', code: 'US-CA-085'}, // santa clara
        {label: 'sonoma ', code: 'US-CA-097'}, // sonoma 
        {label: 'napa', code: 'US-CA-055'}, // napa
        {label: 'san mateo', code: 'US-CA-081'}, // san mateo
        {label: 'solano', code: 'US-CA-095'}, // solano
      ],
      // selectedRegion: this.$route.query.region,
      allRegionInfo: [],   
    }
  },
  computed: {
    selectedRegion() {
      return this.$store.state.region
      
    }
  },
  methods: {
    // getAllRegionInfo() {
    //   this.regionCodes.forEach(element => {
    //     ebird.regionInfo({
    //       regionCode: element
    //     }).then((data) => {
    //       this.allRegionInfo.push({
    //         id: element,
    //         name: data.result
    //       })
    //     }) 
    //   });
    // },
    regionSelected(value) {

      // if(value != null) {
      //   this.$emit('selected-region', value.code)
      // }
      this.$store.commit('setRegion', value)
      this.$router.push({ path: 'region', query: {region: this.selectedRegion.code} })
    }
  }
}
</script>






