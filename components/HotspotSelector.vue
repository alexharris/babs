<template>
    <div v-if="!loading">
      <div class="fixed bottom-0 left-0 bg-white w-full border-t-2 border-black">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
</svg>        
        <input class="search-field p-2 text-lg border border-gray-200 w-full" type="text" v-model="searchQuery" placeholder="Search" />
      </div>

      <div id="map-wrap" class="w-full h-64 relative z-30" v-show="hotspotsInARegion">       
        <client-only>
          <l-map :zoom=9 :center="[hotspotsInARegion[0].lat, hotspotsInARegion[0].lng]">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <template v-for="spot in resultQuery">
              <l-marker :lat-lng="[spot.lat,spot.lng]" @click="hotspotSelected(spot.locId)"></l-marker>
            </template>
          </l-map>
        </client-only>
      </div>  
      <table class=" w-full my-2">
        <thead class="text-left">
            <tr>
                <th @click="sortByTitle()">Hotspot</th>
                <th @click="sortByQuantity()">#</th>
            </tr>
        </thead>   
        <tbody>   
          <tr v-for="hotspot in resultQuery">
            <td class="border-t border-gray-400 py-2"><span @click="hotspotSelected(hotspot.locId)">{{determineHotness(hotspot.numSpeciesAllTime)}} {{hotspot.locName}}</span></td>
            <td class="border-t border-gray-400 py-2">{{hotspot.numSpeciesAllTime}}</td>
          </tr> 
        </tbody> 
      </table>        
    </div>
</template>

<script>


export default {
  props: ['regioninfo'],
  data() {
    return {
      searchQuery: null,
      sort: 'hotAsc',
      sortTitle: 'titleAsc',
      selectedRegion: this.$route.query.region,
      hotspotsInARegion: [],
      hotspotInfo: [],
      loading: true
    }
  },
  mounted() {
    this.getHotspotsInARegion(this.selectedRegion)
  },
  computed: {
    resultQuery(){
      if(this.searchQuery !== null){ 
        return this.hotspotsInARegion.filter((item)=>{
          return this.searchQuery.toLowerCase().split(' ').every(v => item.locName.toLowerCase().includes(v))
        })
      }else{
        return this.hotspotsInARegion;
      }        
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




