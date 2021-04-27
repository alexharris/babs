<template>
    <div >
      <h1>{{selectedRegion}}</h1>
      <HotspotSelector 
        :selected-region="selectedRegion.code" 

      />      
    </div>
</template>

<script>

import EbirdClient, { Detail } from "ebird-client";
const ebird = new EbirdClient('l74e03ri8jei'); //Get your API_KEY from eBird
// https://github.com/dannyfritz/ebird-client#readme

import HotspotSelector from '~/components/HotspotSelector.vue'

export default {
  components: {
    HotspotSelector,
  },
  mounted() {
      // this.getAllRegionInfo()
  },
  data() {
    return {

    }
  },
  computed: {
    selectedRegion() {
      return this.$store.state.region
      
    }
  },
  methods: {

  }
}
</script>






