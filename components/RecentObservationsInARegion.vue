<template >
  <div v-else>
    <template v-if="loading" >
      <LoadingAnimation />
    </template>
    <template v-else>
      <h2>Recent Obersvations @ {{hotspotInfo.name}}</h2>
      <table class=" w-full my-2">
        <thead class="text-left">
            <tr>
                <th>Bird</th>
                <th>#</th>
            </tr>
        </thead>   
        <tbody>   
          <tr v-for="ob in recentObservationsInARegion">
            <td class="border-t border-gray-400 py-2"><span @click="speciesSelected(ob.speciesCode)">{{ob.comName}}</span></td>
            <td class="border-t border-gray-400 py-2">{{howMany(ob.howMany)}}</td>
          </tr> 
        </tbody> 
      </table>  
    </template>
  </div>
</template>

<script>

import EbirdClient, { Detail } from "ebird-client";
const ebird = new EbirdClient('l74e03ri8jei'); //Get your API_KEY from eBird
// https://github.com/dannyfritz/ebird-client#readme

import LoadingAnimation from '~/components/LoadingAnimation.vue'

export default {
  // props: ['selectedHotspot'],
  components: {
    LoadingAnimation
  },
  data() {
    return {
      selectedHotspot: this.$route.query.hotspot,
      recentObservationsInARegion: [],
      hotspotInfo: '',
      loading: true
    }
  },
  mounted() {
      // if(this.$route.query.hotspot !== undefined) {
        this.getRecentObservationsInARegion(this.$route.query.hotspot)
        this.getSelectedHotspotInfo(this.$route.query.hotspot)             
      // } 

  },

  // watch: {
  //    selectedHotspot: function(newVal, oldVal) { // watch it
  //     if(newVal !== undefined) {
  //       this.getRecentObservationsInARegion(newVal)
  //       this.getSelectedHotspotInfo(newVal)
  //     }

  //   }
  // },
  methods: {
    getRecentObservationsInARegion(value) {
      this.loading = true
      ebird.recentObservationsInARegion({
        regionCode: value,
        back: 30,
        sppLocale: this.$i18n.locale
      }).then((data) => {
        data.sort(function(a, b) {
          var textA = a.comName.toUpperCase();
          var textB = b.comName.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        this.recentObservationsInARegion = data
        this.loading = false
      })           
    },
   getSelectedHotspotInfo() {
      ebird.hotspotInfo({
        locId: this.selectedHotspot
      }).then((data) => {
        this.hotspotInfo = data
      })      
    },    
    howMany: function(value) {
      if(value) {
        return value
      } else {
        return '?'
      }
    },
    speciesSelected(code) {
      // console.log(code)
      // if(code != null) {
      //   this.$emit('selected-species', code)
      // }
    }
    // getTaxonomicGroups() {
    //   ebird.taxonomicGroups({
    //     speciesGrouping: "merlin",
    //   }).then((data) => {
    //     console.log(data)
    //   })           
    // },              
  }
}
</script>






