
<template>
  <div class="w-full">
    <h1 class="logo mb-4">{{ $t("title") }}</h1>
    <RegionSelector 
      @selected-region="onSelectedRegion" 
    />   
  </div>
</template>

<script>

import EbirdClient, { Detail } from "ebird-client";
const ebird = new EbirdClient('l74e03ri8jei'); //Get your API_KEY from eBird

import RegionSelector from '~/components/RegionSelector.vue'

// import HotspotSelector from '~/components/HotspotSelector.vue'
// import RecentObservationsInARegion from '~/components/RecentObservationsInARegion.vue'

export default {
  components: {
    RegionSelector
    // HotspotSelector,
    // RecentObservationsInARegion
  },  
  data() {
    return {
      selectedRegion: this.$route.query.region,
      // selectedHotspot: this.$route.query.hotspot,  
      // selectedSpecies: this.$route.query.species,
      // view: 'intro' ,
      // regionInfo: ''
    }
    
  },

  // computed: {
  //   regionSelected(e) {
  //       this.selectedRegion = e.target.value
  //       // this.getSelectedRegionInfo();
  //       // this.getHotspotsInARegion();
  //   },       
  // },
  mounted() {
    // this.getRecentNearbyNotableObservations();
    // this.getAllRegionInfo()
    // this.startingView()
    // this.getSelectedRegionInfo()
  },
  methods: {
    onSelectedRegion(value) {
      this.selectedRegion = value
      this.$router.push({ query: {region: value} })
      this.view = 'region'
      // this.getSelectedRegionInfo()
      // this.getHotspotsInARegion();
    },
    // onSelectedHotspot(value) {
    //   this.$router.push({ query: {region: this.selectedRegion, hotspot: value} })
    //   this.selectedHotspot = value
    //   this.view = 'hotspot'
    //   // this.getRecentObservationsInARegion();
    // },
    // onSelectedSpecies(value) {
    //   this.$router.push({ query: {region: this.selectedRegion, hotspot: this.selectedHotspot, species: value} })
    //   this.view = 'species'
    // },    
    // startingView() {
    //   if(this.selectedHotspot !== undefined) {
    //     this.view = 'hotspot'
    //   } else if(this.selectedRegion !== undefined) {
    //     this.view = 'region'
    //   } else {
    //     this.view = 'intro'
    //   }
    // },


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
    // getSelectedRegionInfo() {
    //   ebird.regionInfo({
    //     regionCode: this.selectedRegion
    //   }).then((data) => {
    //     this.regionInfo = data
    //   })      
    // },    
 
    // getRecentNearbyNotableObservations() {
    //   ebird.recentNearbyNotableObservations({
    //     lat: this.location.lat,
    //     lng: this.location.long,
    //     maxResults: 10,
    //   })
    //   .then((data) => {
    //     this.recentNearbyNotableObservations = data
    //   });
    // },




  }
}


</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

</style>
