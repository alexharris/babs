<template >
  <div v-else>
    <template v-if="loading" >
      <LoadingAnimation />
    </template>
    <template v-else>
      <div id="map-wrap" class="w-full h-64">
        <client-only>
          <l-map :zoom=10 :center="[hotspotInfo.latitude,hotspotInfo.longitude]">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker :lat-lng="[hotspotInfo.latitude,hotspotInfo.longitude]"></l-marker>
          </l-map>
        </client-only>
      </div>      
      <table class=" w-full my-2">
        <thead class="text-left">
            <tr>
                <th>Bird</th>
                <th @click="sortByQuantity()">#</th>
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
  components: {
    LoadingAnimation
  },
  data() {
    return {
      selectedHotspot: this.$route.query.hotspot,
      recentObservationsInARegion: [],
      hotspotInfo: '',
      loading: true,
      sort: 'hotAsc',
    }
  },
  mounted() {
    this.getRecentObservationsInARegion(this.$route.query.hotspot)
  },
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
        this.getHotspotInfo(value)
      })           
    },
    getHotspotInfo(value) {
      ebird.hotspotInfo({
        locId: value        
      }).then((data) => {
        this.hotspotInfo = data
        this.loading = false
      })  
    },
    sortByQuantity() {
      if(this.sort !== 'hotAsc') {
        this.recentObservationsInARegion = this.recentObservationsInARegion.sort(function(a, b) {
          return a.howMany - b.howMany;
        });
        this.sort = 'hotAsc'
      } else {
        this.recentObservationsInARegion = this.recentObservationsInARegion.sort(function(a, b) {
          return b.howMany - a.howMany;
        });        
        this.sort = 'hotDesc'
      }

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
  }
}
</script>






