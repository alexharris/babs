<template>
  <div class="h-full flex flex-col">
    <template v-if="loading" >
      <LoadingAnimation />
    </template>
    <template v-else>

      <SearchList 
        :list="hotspotsInARegion" 
        titleProp="locName"  
        v-on:filter-query="filteredHotspots = $event" 
      />
      <Tabs>
        <template v-slot:tab1>
          <table class="w-full border-t border-gray-100">
            <thead class="text-left">
                <tr>
                    <th class="cursor-pointer py-2" @click="sortByTitle()">Hotspot Name</th>
                    <th class=" cursor-pointer py-2" @click="sortByQuantity()">Obs</th>
                </tr>
            </thead>   
            <tbody>   
              <tr v-for="hotspot in filteredHotspots">
                <td class="border-t border-gray-100 py-2 cursor-pointer link"><span @click="hotspotSelected(hotspot.locId)">{{determineHotness(hotspot.numSpeciesAllTime)}} {{hotspot.locName}}</span></td>
                <td class="border-t border-gray-100 py-2">{{hotspot.numSpeciesAllTime}}</td>
              </tr> 
            </tbody> 
          </table>            
        </template>
        <template v-slot:tab2>
          <!-- <div id="map-wrap" class="w-full z-10 flex flex-col flex-grow" v-show="hotspotsInARegion">       
            <client-only>
              <l-map :zoom=9 :center="[hotspotsInARegion[0].lat, hotspotsInARegion[0].lng]">
                <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                <template v-for="spot in filteredHotspots">
                  <l-marker :lat-lng="[spot.lat,spot.lng]" >
                    <l-popup>
                      <span class="cursor-pointer font-bold" @click="hotspotSelected(spot.locId)">{{spot.locName}}</span>
                      <br />
                      <span> {{spot.numSpeciesAllTime}} observations</span>
                      <br />
                      <span class="link" @click="hotspotSelected(spot.locId)">view</span>
                      
                    </l-popup>
                  </l-marker>
                </template>
              </l-map>
            </client-only>
          </div>              -->
          
          <Map
            :center="[hotspotsInARegion[0].lat, hotspotsInARegion[0].lng]"
            :list="filteredHotspots"
            latProp="lat"
            lngProp="lng"
            :popup="true"
            v-on:hotspot-selected="hotspotSelected($event)" 
          />          
        </template>        
      </Tabs>
    </template>
    </div>
</template>

<script>
import Map from './Map.vue'


export default {
  components: { Map },
  props: ['regioninfo'],
  data() {
    return {
      sort: 'hotAsc',
      sortTitle: 'titleAsc',
      selectedRegion: this.$route.query.region,
      title: 'name',
      hotspotsInARegion: [],
      filteredHotspots: [],
      hotspotInfo: [],
      loading: true,
     
    }
  },
  mounted() {
    this.getHotspotsInARegion(this.selectedRegion)
  },
  computed: {
    resultQuery() {
      return this.hotspotsInARegion
    }
  },
  methods: {
    getHotspotsInARegion(value) {

      this.$axios.get('https://api.ebird.org/v2/ref/hotspot/' + this.$route.query.region, {
        params: {
          back: 30,
          fmt: 'json'
        }
      })
      .then((response) => {
        this.hotspotsInARegion = response.data
        this.filteredHotspots = response.data
        this.loading = false
      }, (error) => {
        console.log(error);
      });      
    },
    determineHotness(obs) {
      if(obs > 300) {
        return '🔥🔥🔥'
        } else if (obs > 200) {
          return '🔥🔥'
      } else if (obs > 100) {
        return '🔥'
      } else {
        return ''
      }
    },
    sortByQuantity() {
      if(this.sort !== 'hotAsc') {
        this.hotspotsInARegion = this.hotspotsInARegion.sort(function(a, b) {
          return a.numSpeciesAllTime - b.numSpeciesAllTime;
        });
        this.sort = 'hotAsc'
      } else {
        this.hotspotsInARegion = this.hotspotsInARegion.sort(function(a, b) {
          return b.numSpeciesAllTime - a.numSpeciesAllTime;
        });        
        this.sort = 'hotDesc'
      }

    }, 
    sortByTitle() {
      if(this.sortTitle !== 'titleAsc') {
        this.hotspotsInARegion = this.hotspotsInARegion.sort(function(a, b) {
          return a.locName.toLowerCase() > b.locName.toLowerCase();
        });
        this.sortTitle = 'titleAsc'
      } else {
        this.hotspotsInARegion = this.hotspotsInARegion.sort(function(a, b) {
          return b.locName.toLowerCase() > a.locName.toLowerCase();
        });        
        this.sortTitle = 'titleDesc'
      }

    },        
    hotspotSelected(value) {
      this.$store.commit('setHotspot', value)
      this.$router.push({ path: '/region/hotspot', query: {region: this.selectedRegion, hotspot:value} })
    }, 
  }
}
</script>




