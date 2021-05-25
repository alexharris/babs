<template >
  <div class="h-full flex flex-col" >
    <template v-if="loading" >
      <LoadingAnimation />
    </template>
    <template v-else>
  
      <Tabs>
        <template v-slot:tab1>
          <SearchList 
            :list="recentObservationsInARegion" 
            titleProp="comName"  
            placeholder="Search species"
            v-on:filter-query="filteredSpecies = $event" 
          />   
          <ShadowBox>
            <h1>{{hotspotInfo.name}}</h1>
            <p><SpeciesListForARegion /> different species have been viewed at {{hotspotInfo.name}}, here are the ones that have been recorded in the last 30 days</p>
          </ShadowBox>                    
          <List 
            :list="filteredSpecies"
          >
            <template v-slot:header1>
              <span class="flex flex-row" @click="sortByTitle()">Bird <svg v-bind:class="{ 'rotate-180': sortTitle == 'titleDesc' }" class="mt-1 mx-1 transform transition-all duration-250" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
            </template>
            <template v-slot:header2>
              <span class="flex flex-row justify-end" @click="sortByQuantity()">Obs  <svg v-bind:class="{ 'rotate-180': sort == 'hotDesc' }" class="mt-1 mx-1 transform transition-all duration-250" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
            </template>            
            <template v-slot:column1="slotProps">
                <span @click="speciesSelected(slotProps.item.speciesCode)">{{slotProps.item.comName}}</span>
            </template>
            <template v-slot:column2="slotProps">
              {{howMany(slotProps.item.howMany)}} 
            </template>            
          </List>          
        </template> 
        <template v-slot:tab2>
          <span class="pb-4">{{hotspotInfo.name}}</span>
          <Map
            :center="[hotspotInfo.latitude,hotspotInfo.longitude]"
            :list="[hotspotInfo]"
            latProp="latitude"
            lngProp="longitude"
            :popup="false"
            v-on:hotspot-selected="hotspotSelected($event)" 
          />          
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
      sortTitle: 'titleAsc'
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
    sortByTitle() {
      
      if(this.sortTitle !== 'titleAsc') {
        this.filteredSpecies = this.filteredSpecies.sort(function(a, b) {
          return a.comName.toLowerCase() > b.comName.toLowerCase();
        });
        this.sortTitle = 'titleAsc'
      } else {
        this.filteredSpecies = this.filteredSpecies.sort(function(a, b) {
          return b.comName.toLowerCase() > a.comName.toLowerCase();
        });        
        this.sortTitle = 'titleDesc'
      }

    },      
    sortByQuantity() {
      if(this.sort !== 'hotAsc') {
        this.filteredSpecies = this.filteredSpecies.sort(function(a, b) {
          return a.howMany - b.howMany;
        });
        this.sort = 'hotAsc'
      } else {
        this.filteredSpecies = this.filteredSpecies.sort(function(a, b) {
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






