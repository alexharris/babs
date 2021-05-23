<template >
  <span >
      {{speciesListForRegion.length}}

  </span>
</template>

<script>


export default {

  data() {
    return {
      selectedHotspot: this.$route.query.hotspot,
      speciesListForRegion: [],
      filteredSpecies: [],
      hotspotInfo: '',
      loading: true,
      sort: 'hotAsc',
      sortTitle: 'titleAsc'
    }
  },
  mounted() {
    this.getSpeciesListForARegion(this.$route.query.hotspot)
  },
  methods: {
    getSpeciesListForARegion(value) {
      this.$axios.get('https://api.ebird.org/v2/product/spplist/' + this.$route.query.hotspot, {

      })
      .then((response) => {
        console.log(response.data);
        // response.data.sort(function(a, b) {
        //   var textA = a.comName.toUpperCase();
        //   var textB = b.comName.toUpperCase();
        //   return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        // });
        this.speciesListForRegion = response.data
        this.filteredSpecies = response.data
        // this.getHotspotInfo(value)
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






