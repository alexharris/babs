<template>
    <div class="h-full flex flex-col">
      <div v-if="!loading" class="h-full flex flex-col">      
      <SearchList 
        :list="speciesInfo.data" 
        titleProp="locName"  
        placeholder="Search locations"
        v-on:filter-query="filteredList = $event" 
      />             
      <Tabs>
        <template v-slot:tab1>
          <ShadowBox>
            <div class="flex flex-col sm:flex-row sm:gap-4 justify-between">
              <div class="bg-yellow-50 sm:order-2 mb-4 sm:mb-0">
                <img :src="require(`~/assets/dither_by/dither_it_${speciesInfo.data[0].speciesCode}.jpg`)" />
              </div>   
              <div class="flex flex-col">
                <h1 class="pt-1">{{speciesInfo.data[0].comName}}</h1>
                <p class="text-xl italic">{{speciesInfo.data[0].sciName}}</p>
                <a class="link mt-auto mb-0 hover:bg-yellow-200 rounded border border-black p-2 cursor-pointer flex flex-row space-x-2 justify-center place-items-center" :href="'https://www.allaboutbirds.org/guide/' + speciesInfo.data[0].speciesCode" ><span>View on All About Birds</span> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg> </a>
              </div>
            </div>
          </ShadowBox>
          <h2 class="mb-4">Hotspots where a {{speciesInfo.data[0].comName}} has been seen in the last 30 days </h2>
          <List 
            :list="filteredList"
          >
            <template v-slot:header1>
              <span class="flex flex-row" @click="sortByTitle()">Location <svg v-bind:class="{ 'rotate-180': sortTitle == 'titleDesc' }" class="mt-1 mx-1 transform transition-all duration-250" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
            </template>
            <template v-slot:header2>
              <span class="flex flex-row justify-end" @click="sortByQuantity()">#  <svg v-bind:class="{ 'rotate-180': sort == 'hotDesc' }" class="mt-1 mx-1 transform transition-all duration-250" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
            </template>            
            <template v-slot:column1="slotProps">
                <span @click="goToHotspot(slotProps.item)">{{slotProps.item.locName}}</span>
            </template>
            <template v-slot:column2="slotProps">
              {{slotProps.item.howMany}}
            </template>            
          </List>                         
        </template>   
        <template v-slot:tab2>
          <Map
            :center="[speciesInfo.data[0].lat,speciesInfo.data[0].lng]"
            :list="filteredList"
            latProp="lat"
            lngProp="lng"
            v-on:hotspot-selected="hotspotSelected($event)" 
            :popup="false"
          />                   
        </template>
      </Tabs>     
        

        </div>
        <div class="h-full flex flex-col" v-else>
            <LoadingAnimation />
        </div>
    </div>
    
</template>

<script>


export default {
  mounted() {
      if(this.$route.query.species == null) {
        this.$router.push({ path: '/' })
      }       
      this.getSpeciesInfo()
  },
  watchQuery(newQuery, oldQuery) {
    // Only execute component methods if the old query string contained `bar`
    // and the new query string contains `foo`
    this.loading = true
    this.selectedRegion = newQuery.species
    this.getSpeciesInfo(newQuery.species)
  },    
  data() {
    return {
      speciesInfo: {},
      loading: true,
      filteredList: [],
      sort: 'hotAsc',
      sortTitle: 'titleAsc'
    }
  },
  methods: {
    getSpeciesInfo() {

      
      this.$axios.get('https://api.ebird.org/v2/data/obs/' + this.$route.query.region + '/recent/' + this.$route.query.species , {
        params: {
          hotspot: true,
          sppLocale: this.$i18n.locale
        }
      })
      .then((response) => {
        this.speciesInfo = response
        this.filteredList = response.data
        this.loading = false
        console.log(response.data)
      }, (error) => {
        console.log(error);
      });
     
    },
    goToHotspot(item) {
      this.$store.commit('setHotspot', item.locId)
      this.$router.push({ path: '/region/hotspot', query: {region: this.$route.query.region, hotspot:item.locId} })
    },
    sortByTitle() {
      
      if(this.sortTitle !== 'titleAsc') {
        this.filteredList = this.filteredList.sort(function(a, b) {
          return a.locName.toLowerCase() > b.locName.toLowerCase();
        });
        this.sortTitle = 'titleAsc'
      } else {
        this.filteredList = this.filteredList.sort(function(a, b) {
          return b.locName.toLowerCase() > a.locName.toLowerCase();
        });        
        this.sortTitle = 'titleDesc'
      }

    },      
    sortByQuantity() {
      if(this.sort !== 'hotAsc') {
        this.filteredList = this.filteredList.sort(function(a, b) {
          return a.howMany - b.howMany;
        });
        this.sort = 'hotAsc'
      } else {
        this.filteredList = this.filteredList.sort(function(a, b) {
          return b.howMany - a.howMany;
        });        
        this.sort = 'hotDesc'
      }

    },     
  }
}
</script>






