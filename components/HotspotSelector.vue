<template>
    <div >
      <input class="search-field" type="text" v-model="searchQuery" placeholder="Search" />
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

import EbirdClient, { Detail } from "ebird-client";
const ebird = new EbirdClient('l74e03ri8jei'); //Get your API_KEY from eBird
// https://github.com/dannyfritz/ebird-client#readme

export default {
  // props: ['selectedRegion'],
  data() {
    return {
      searchQuery: null,
      sort: 'hotAsc',
      sortTitle: 'titleAsc',
      selectedRegion: this.$route.query.region,
      hotspotsInARegion: [],
      hotspotInfo: [],
    }
  },
  mounted() {
    this.getHotspotsInARegion(this.selectedRegion)
  },
  computed: {

    resultQuery(){
      if(this.searchQuery !== null){
        console.log('hello')
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
      ebird.hotspotsInARegion({
        fmt: 'json',
        regionCode: value        
      }).then((data) => {
        this.hotspotsInARegion = data
      })  
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
      console.log('sort')
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
      console.log('sort')
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
      this.$router.push({ path: 'hotspot', query: {region: this.selectedRegion, hotspot:value} })
    }, 
  }
}
</script>






