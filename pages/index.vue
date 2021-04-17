
<template>
  <div class="container">
    <div class="border border-red-200 m-8 p-4">
      <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale)">
      {{locale}} </nuxt-link>
    </div>
    <div class="border border-red-200 m-8 p-4 flex flex-row justify-between">    
      <h1>{{ $t("title") }}</h1>
      <a href="/">reset</a>
    </div>
    <RegionSelector 
      @selected-region="onSelectedRegion" 
    />   
    <HotspotSelector 
      v-show="selectedRegion"
      :selected-region="selectedRegion" 
      @selected-hotspot="onSelectedHotspot" 
    />
    <RecentObservations 
      v-show="selectedHotspot"
      :selected-hotspot="selectedHotspot"    
    />
  </div>
</template>

<script>

import EbirdClient, { Detail } from "ebird-client";
const ebird = new EbirdClient('l74e03ri8jei'); //Get your API_KEY from eBird

import RegionSelector from '~/components/RegionSelector.vue'
import HotspotSelector from '~/components/HotspotSelector.vue'
import RecentObservations from '~/components/RecentObservations.vue'

export default {
  components: {
    RegionSelector,
    HotspotSelector,
    RecentObservations
  },  
  data() {
    return {
      selectedRegion: this.$route.query.region,
      selectedHotspot: this.$route.query.hotspot


    }
    
  },
  computed: {
    availableLocales () {
      // console.log(this.$i18n.locales.filter(i => i.code !== this.$i18n.locale));
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
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
  },
  methods: {
    onSelectedRegion(value) {
      this.$router.push({ query: {region: value} })
      this.selectedRegion = value
      // this.getHotspotsInARegion();
    },
    onSelectedHotspot(value) {

      this.$router.push({ query: {region: this.selectedRegion, hotspot: value} })
      this.selectedHotspot = value
      // this.getRecentObservationsInARegion();
    },

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
