<template >
  
    
    <div v-else>
      <template v-if="loading" >
        <LoadingAnimation />
      </template>
      <template v-else>
    <!-- {{recentObservationsOfASpecies[0]}} -->
    <!-- HEllo:<img src="~/assets/mewgul.png" /> -->
    <h1>{{recentObservationsOfASpecies[0].comName}}</h1>
    <h2>{{recentObservationsOfASpecies[0].sciName}}</h2>
        <table class=" w-full my-2">
          <thead class="text-left">
              <tr>
                  <th>Bird</th>
                  <th>#</th>
              </tr>
          </thead>   
          <tbody>   
            <tr v-for="ob in recentObservationsOfASpecies">
              <pre>{{ob}}</pre>
              <td class="border-t border-gray-400 py-2">{{ob.locName}}</td>
              <td class="border-t border-gray-400 py-2">{{ob.howMany}}</td>
            </tr> 
          </tbody> 
        </table>          
      </template>
    </div>
</template>

<script>

import EbirdClient, { Detail } from "ebird-client";
const ebird = new EbirdClient('l74e03ri8jei'); //Get your API_KEY from eBird
// https://github.com/dannyfritz/ebird-client#readme

import LoadingAnimation from '~/components/LoadingAnimation.vue'

export default {
  components: {
    LoadingAnimation
  },
  data() {
    return {
      recentObservationsOfASpecies: [],
      selectedSpecies: this.$route.query.species,
      loading: false
    }
  },
  mounted() {
    this.getRecentObservationsOfASpecies()
  },
  methods: {
    getRecentObservationsOfASpecies(value) {
      this.loading = true
      ebird.recentObservationsOfASpeciesInARegion({
        regionCode: this.$route.query.region,
        speciesCode: this.$route.query.species,
      }).then((data) => {
        console.log('hello')
        this.recentObservationsOfASpecies = data
        this.loading = false
      })           
    },
     
  }
}
</script>






