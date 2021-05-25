<template>
    <div class="h-full flex flex-col" v-if="!loading">

        <HotspotSelector 
          :regioninfo="regionInfo"
        />      
      
    </div> 
    <div v-else>
      <!-- <LoadingAnimation /> -->
    </div>
</template>

<script>

import HotspotSelector from '~/components/HotspotSelector.vue'

export default {
  watchQuery(newQuery, oldQuery) {
    // Only execute component methods if the old query string contained `bar`
    // and the new query string contains `foo`
    this.loading = true
    this.selectedRegion = newQuery.region
    this.getRegionInfo()
  },
  components: {
    HotspotSelector,
  },
  mounted() {
      this.getRegionInfo()
      if(this.$route.query.region == null) {
        this.$router.push({ path: '/' })
      }
      
  },
  data() {
    return {
      selectedRegion: this.$route.query.region,
      regionInfo: {},
      loading: true
    }
  },
  methods: {
    getRegionInfo() {

      this.$route.query.region
      this.$axios.get('https://api.ebird.org/v2/ref/region/info/' + this.selectedRegion, {
        params: {
          regionNameFormat: 'nameonly'
        }
      })
      .then((response) => {
        this.regionInfo = response
        this.loading = false
      }, (error) => {
        console.log(error);
      });
     
    }
  }
}
</script>






