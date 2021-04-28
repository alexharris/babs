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
        <v-select label="name" :options="regions" @input="regionSelected" :clearable="false" />
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

{"code":"US-CA-001","name":"Alameda"},{"code":"US-CA-003","name":"Alpine"},{"code":"US-CA-005","name":"Amador"},{"code":"US-CA-007","name":"Butte"},{"code":"US-CA-009","name":"Calaveras"},{"code":"US-CA-011","name":"Colusa"},{"code":"US-CA-013","name":"Contra Costa"},{"code":"US-CA-015","name":"Del Norte"},{"code":"US-CA-017","name":"El Dorado"},{"code":"US-CA-019","name":"Fresno"},{"code":"US-CA-021","name":"Glenn"},{"code":"US-CA-023","name":"Humboldt"},{"code":"US-CA-025","name":"Imperial"},{"code":"US-CA-027","name":"Inyo"},{"code":"US-CA-029","name":"Kern"},{"code":"US-CA-031","name":"Kings"},{"code":"US-CA-033","name":"Lake"},{"code":"US-CA-035","name":"Lassen"},{"code":"US-CA-037","name":"Los Angeles"},{"code":"US-CA-039","name":"Madera"},{"code":"US-CA-041","name":"Marin"},{"code":"US-CA-043","name":"Mariposa"},{"code":"US-CA-045","name":"Mendocino"},{"code":"US-CA-047","name":"Merced"},{"code":"US-CA-049","name":"Modoc"},{"code":"US-CA-051","name":"Mono"},{"code":"US-CA-053","name":"Monterey"},{"code":"US-CA-055","name":"Napa"},{"code":"US-CA-057","name":"Nevada"},{"code":"US-CA-059","name":"Orange"},{"code":"US-CA-061","name":"Placer"},{"code":"US-CA-063","name":"Plumas"},{"code":"US-CA-065","name":"Riverside"},{"code":"US-CA-067","name":"Sacramento"},{"code":"US-CA-069","name":"San Benito"},{"code":"US-CA-071","name":"San Bernardino"},{"code":"US-CA-073","name":"San Diego"},{"code":"US-CA-075","name":"San Francisco"},{"code":"US-CA-077","name":"San Joaquin"},{"code":"US-CA-079","name":"San Luis Obispo"},{"code":"US-CA-081","name":"San Mateo"},{"code":"US-CA-083","name":"Santa Barbara"},{"code":"US-CA-085","name":"Santa Clara"},{"code":"US-CA-087","name":"Santa Cruz"},{"code":"US-CA-089","name":"Shasta"},{"code":"US-CA-091","name":"Sierra"},{"code":"US-CA-093","name":"Siskiyou"},{"code":"US-CA-095","name":"Solano"},{"code":"US-CA-097","name":"Sonoma"},{"code":"US-CA-099","name":"Stanislaus"},{"code":"US-CA-101","name":"Sutter"},{"code":"US-CA-103","name":"Tehama"},{"code":"US-CA-105","name":"Trinity"},{"code":"US-CA-107","name":"Tulare"},{"code":"US-CA-109","name":"Tuolumne"},{"code":"US-CA-111","name":"Ventura"},{"code":"US-CA-113","name":"Yolo"},{"code":"US-CA-115","name":"Yuba"}


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






