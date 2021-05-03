<template >
  <div v-else>
    <template v-if="loading" >
      <LoadingAnimation />
    </template>
    <template v-else>
      <SearchList 
        :list="recentObservationsInARegion" 
        titleProp="comName"  
        v-on:filter-query="filteredSpecies = $event" 
      />      
      <div id="map-wrap" class="w-full h-64 rounded-full">
        <client-only>
          <l-map :zoom=11 :center="[hotspotInfo.latitude,hotspotInfo.longitude]">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker  :lat-lng="[hotspotInfo.latitude,hotspotInfo.longitude]"></l-marker>
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
          <tr v-for="ob in filteredSpecies">
            <td class="border-t border-gray-400 py-2"><span @click="speciesSelected(ob.speciesCode)">{{ob.comName}}</span></td>
            <td class="border-t border-gray-400 py-2">{{howMany(ob.howMany)}}  </td>
          </tr> 
        </tbody> 
      </table>  
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
    }
  },
  mounted() {
    this.getRecentObservationsInARegion(this.$route.query.hotspot)
  },
  methods: {
    getRecentObservationsInARegion(value) {
      console.log(value)
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






