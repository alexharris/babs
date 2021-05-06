<template>
    <div class="h-full flex flex-col">
      <div v-if="!loading" class="h-full flex flex-col">

        <h1>{{speciesInfo.data[0].comName}}</h1>
        <p>{{speciesInfo.data[0].sciName}}</p>
          
      <Tabs>
        <template v-slot:tab1>
        <div class="bg-white">
          <img class="pb-4 bg-white" :src="require(`~/assets/dither_by/dither_it_${speciesInfo.data[0].speciesCode}.jpg`)" />
        </div>   
        <SearchList 
          :list="speciesInfo.data" 
          titleProp="locName"  
          v-on:filter-query="filteredList = $event" 
        />                 
            <table class="w-full border-t border-gray-100">
              <thead class="text-left">
                  <tr>
                      <th class="py-2">Location</th>
                      <th @click="sortByQuantity()">#</th>
                  </tr>
              </thead>   
              <tbody>         
                  <tr v-for="ob in filteredList">
                      <td class="border-t border-gray-100 py-2">{{ob.locName}}</td>
                      <td class="border-t border-gray-100 py-2">{{ob.howMany}}</td>
                  </tr>
              </tbody>
          </table>          
        </template>   
        <template v-slot:tab2>
        <SearchList 
          :list="speciesInfo.data" 
          titleProp="locName"  
          v-on:filter-query="filteredList = $event" 
        />            
          <div id="map-wrap" class="w-full h-full pb-16 z-30">
            <client-only>
              <l-map :zoom=11 :center="[speciesInfo.data[0].lat,speciesInfo.data[0].lng]">
                <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                <template v-for="spot in filteredList">
                  <l-marker :lat-lng="[spot.lat,spot.lng]" @click="hotspotSelected(spot.locId)"></l-marker>
                </template>
              </l-map>
            </client-only>
          </div>            
        </template>
      </Tabs>     
        

        </div>
        <div v-else>
            <LoadingAnimation />
        </div>
    </div>
    
</template>

<script>


export default {
  mounted() {
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
    }
  },
  methods: {
    getSpeciesInfo() {

      
      this.$axios.get('https://api.ebird.org/v2/data/obs/' + this.$route.query.region + '/recent/' + this.$route.query.species , {

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






