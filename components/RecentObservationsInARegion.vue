<template >
  <div class="h-full flex flex-col" >
    <template v-if="loading" >
      <LoadingAnimation />
    </template>
    <template v-else>
  
      <Tabs>
        <template v-slot:tab1>
          <span class="pb-4">RECENT OBSERVATIONS</span>
          <SearchList 
            :list="recentObservationsInARegion" 
            titleProp="comName"  
            v-on:filter-query="filteredSpecies = $event" 
          />             
          <table class="w-full border-t border-gray-100">
            <thead class="text-left">
                <tr>
                    <th class="py-2 cursor-pointer ">Bird</th>
                    <th class="cursor-pointer" @click="sortByQuantity()">#</th>
                </tr>
            </thead>   
            <tbody>   
              <tr v-for="ob in filteredSpecies">
                <td class="border-t border-gray-100 py-2 cursor-pointer "><span @click="speciesSelected(ob.speciesCode)">{{ob.comName}}</span></td>
                <td class="border-t border-gray-100 py-2">{{howMany(ob.howMany)}}  </td>
              </tr> 
            </tbody> 
          </table>  
        </template> 
        <template v-slot:tab2>
          <span class="pb-4">LOCATION</span>
          <Map
            :center="[hotspotInfo.latitude,hotspotInfo.longitude]"
            :list="[hotspotInfo]"
            latProp="latitude"
            lngProp="longitude"
            :popup="false"
            v-on:hotspot-selected="hotspotSelected($event)" 
          />          
          <!-- <div id="map-wrap" class="w-full z-10 flex flex-col flex-grow">
            <client-only>
              <l-map :zoom=11 :center="[hotspotInfo.latitude,hotspotInfo.longitude]">
                <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                <l-marker  :lat-lng="[hotspotInfo.latitude,hotspotInfo.longitude]">
                  <l-popup>Hello!</l-popup>
                </l-marker>
              </l-map>
            </client-only>
          </div>   -->
        </template>         
      </Tabs>
    </template>
  </div>
</template>

<script>

import LoadingAnimation from '~/components/LoadingAnimation.vue'

export default {
  components: {
    LoadingAnimation
  },
  data() {
    return {
      selectedHotspot: this.$route.query.hotspot,
      recentObservationsInARegion: [],
      filteredSpecies: [],
      hotspotInfo: '',
      loading: true,
      sort: 'hotAsc',
      popupContent: 'hello'
    }
  },
  mounted() {
    this.getRecentObservationsInARegion(this.$route.query.hotspot)
  },
  methods: {
    getRecentObservationsInARegion(value) {
      this.$axios.get('https://api.ebird.org/v2/data/obs/' + this.$route.query.hotspot + '/recent', {
        params: {
          back: 30,
          sppLocale: this.$i18n.locale
        }
      })
      .then((response) => {
        console.log(response.data);
        response.data.sort(function(a, b) {
          var textA = a.comName.toUpperCase();
          var textB = b.comName.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        this.recentObservationsInARegion = response.data
        this.filteredSpecies = response.data
        this.getHotspotInfo(value)
      }, (error) => {
        console.log(error);
      }); 
         
    },
    getHotspotInfo(value) {
      this.$axios.get('https://api.ebird.org/v2/ref/hotspot/info/' + value, {
      })
      .then((response) => {
        this.hotspotInfo = response.data
        this.loading = false
      }, (error) => {
        console.log(error);
      }); 
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
      // this.$store.commit('setHotspot', value)
      this.$router.push({ path: '/region/hotspot/species', query: {region: this.$route.query.region, hotspot: this.$route.query.hotspot, species: code} })
    }             
  }
}
</script>






