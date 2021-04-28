<template>
    <div >
      <!-- <select name="region" :value="selectedHotspot" @change="$emit('selected-hotspot', $event.target.value)">
          <option value="" disabled selected>Select your option</option>
          <option v-for="hotspot in hotspotsInARegion" :value="hotspot.locId">

              {{hotspot.locName}} ({{hotspot.numSpeciesAllTime}}) {{determineHotness(hotspot.numSpeciesAllTime)}}
          </option>  
      </select>  -->
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
      <!-- <v-select 
        label="locName" 
        :options="hotspotsInARegion" 
        @input="hotspotSelected"
        :resetOnOptionsChange="true"
        :clearable="false"
        :value="selectedHotspot"
      >
        <template #selected-option="{ locName, numSpeciesAllTime }">
          {{locName}} {{determineHotness(numSpeciesAllTime)}}
        </template>        
        <template #option="{ locName, numSpeciesAllTime }">
          {{locName}} {{determineHotness(numSpeciesAllTime)}}
        </template>
      </v-select>         -->
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
      hotspotsInARegion: []
    }
  },
  mounted() {

    this.getHotspotsInARegion(this.selectedRegion)
    // // if there is no region in the URL
    // if(!this.$route.query.region){
    //   //don't do anything
    // } else {
    //   // if there is, find all of the hotspots for that region
    //   this.getHotspotsInARegion(this.$route.query.region)
     
    // }


  },
  computed: {
    selectedHotspot() {
      // if(!this.$route.query.region) {
      //   return 'choose'
      // } else {
        return this.$route.query.hotspot
      // }
      
    },
    resultQuery(){
      //  return this.searchQuery.split('').reverse().join('')
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
        console.log(data)
        this.hotspotsInARegion = data
        // this.getRecentObservationsInARegion(data)
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
    getRecentObservationsInARegion(data) {
      for(let i = 0; i < data.length; i++){
        ebird.recentObservationsInARegion({
          regionCode: data[i].locId,
          back: 30,
        }).then((data) => {
          //console.log(data.length) // this is the number of observations for each hotspot in the last 30 days
        })          
      }
         
    },  
    hotspotSelected(value) {
      console.log(value)
        // console.log(e.target.value)
        // this.selectedRegion = e.target.value
        
        // if(value != null) {
        //   this.$emit('selected-hotspot', value.locId)
        // }
      this.$store.commit('setHotspot', value)
      this.$router.push({ path: 'hotspot', query: {region: this.selectedRegion, hotspot:value} })
   
    }
  }
}
</script>






