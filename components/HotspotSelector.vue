<template>
  <div class="h-full flex flex-col">
    <template v-if="loading" >
      <LoadingAnimation />
    </template>
    <template v-else>

      <SearchList 
        :list="hotspotsInARegion" 
        titleProp="locName"  
        placeholder="Search hotspots"
        v-on:filter-query="filteredHotspots = $event" 
      />
      <Tabs>
        <template v-slot:tab1>
          <ShadowBox>
            <h1> {{regioninfo.data.result}} County Hotspots</h1>
            <p>A list of birding hotspots in  {{regioninfo.data.result}} and how many species have ever been recorded there</p>
          </ShadowBox>          
          <List 
            :list="filteredHotspots"
          >
            <template v-slot:header1>
              <span class="flex flex-row" @click="sortByTitle()">Hotspot <svg v-bind:class="{ 'rotate-180': sortTitle == 'titleAsc' }" class="mt-1 mx-1 transform transition-all duration-250" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
            </template>
            <template v-slot:header2>
              <span class="flex flex-row justify-end" @click="sortByQuantity()">Obs <svg v-bind:class="{ 'rotate-180': sort == 'hotAsc' }" class="mt-1 mx-1 transform transition-all duration-250" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
            </template>            
            <template v-slot:column1="slotProps">
             <!-- {{determineHotness(slotProps.hotspot.numSpeciesAllTime)}} {{slotProps.hotspot.locName}} -->
             
              <span @click="hotspotSelected(slotProps.item.locId)">{{slotProps.item.locName}} </span>
            </template>
            <template v-slot:column2="slotProps">
              <!-- {{determineHotness(slotProps.item.numSpeciesAllTime)}} 
              {} -->
              <!-- {{getHotSpotCount(slotProps.item.locId)}} -->
               <!-- {{slotProps.item.locId}} -->
              {{determineHotness(slotProps.item.numSpeciesAllTime)}} {{slotProps.item.numSpeciesAllTime}}
            </template>            
          </List>
        </template>
        <template v-slot:tab2>
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
      selectedRegion: this.$route.query.region,
      title: 'name',
      hotspotsInARegion: [],
      filteredHotspots: [],
      hotspotInfo: [],
      loading: true,
      sortTitle: 'titleDesc',
      sort: 'hotDesc',
      hotSpotCounts: {}
     
    }
  },
  mounted() {
    this.getHotspotsInARegion(this.selectedRegion)
  },
  computed: {

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
        this.getRecentObservationsInARegion(response.data)
        this.loading = false
      }, (error) => {
        console.log(error);
      });      
    },
    getRecentObservationsInARegion(data) {
        for (let i = 0; i < data.length; i++) {
          this.$axios.get('https://api.ebird.org/v2/data/obs/' + data[i].locId + '/recent', {
            params: {
              back: 30
            }
          })
          .then((response) => {
            var id = data[i].locId
            var count = response.data.length
            this.$set( this.hotSpotCounts, id, count )
            
          }, (error) => {
            console.log(error);
          });             
        }
        
           
    
    },
    getHotSpotCount(id) {
      console.log(this.hotSpotCounts[id])
      return this.hotSpotCounts[id]
    },    
    determineHotness(obs) {
      if(obs > 80) {
        return '🔥🔥🔥'
        } else if (obs > 40) {
          return '🔥🔥'
      } else if (obs > 20) {
        return '🔥'
      } else {
        return ''
      }
    },
    sortByQuantity() {
      if(this.sort !== 'hotAsc') {
        this.filteredHotspots = this.filteredHotspots.sort(function(a, b) {
          return a.numSpeciesAllTime - b.numSpeciesAllTime;
        });
        this.sort = 'hotAsc'
      } else {
        this.filteredHotspots = this.filteredHotspots.sort(function(a, b) {
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




