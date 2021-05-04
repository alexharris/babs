<template>
    <div>
      <div v-if="!loading">
        <div class="bg-white">
        <img class="pb-4 bg-white" :src="require(`~/assets/birds/${speciesInfo.data[0].speciesCode}.png`)" />
        </div>
        <h1>{{speciesInfo.data[0].comName}}</h1>
        <p>{{speciesInfo.data[0].sciName}}</p>
      <div id="map-wrap" class="w-full h-64 rounded-full">
        <client-only>
          <l-map :zoom=11 :center="[speciesInfo.data[0].lat,speciesInfo.data[0].lng]">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <template v-for="spot in speciesInfo.data">
              <l-marker :lat-lng="[spot.lat,spot.lng]" @click="hotspotSelected(spot.locId)"></l-marker>
            </template>
          </l-map>
        </client-only>
      </div>          
            <table class=" w-full my-2">
            <thead class="text-left">
                <tr>
                    <th>Location</th>
                    <th>#</th>
                    <th>Date</th>
                </tr>
            </thead>   
            <tbody>         
                <tr v-for="ob in speciesInfo.data">
                    <td class="border-t border-gray-400 py-2">{{ob.locName}}</td>
                    <td class="border-t border-gray-400 py-2">{{ob.howMany}}</td>
                    <td class="border-t border-gray-400 py-2">{{ob.obsDate}}</td>
                </tr>
            </tbody>
        </table>
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
      loading: true
    }
  },
  methods: {
    getSpeciesInfo() {

      
      this.$axios.get('https://api.ebird.org/v2/data/obs/' + this.$route.query.region + '/recent/' + this.$route.query.species , {

      })
      .then((response) => {
        this.speciesInfo = response
        this.loading = false
        console.log(response.data)
      }, (error) => {
        console.log(error);
      });
     
    }
  }
}
</script>






