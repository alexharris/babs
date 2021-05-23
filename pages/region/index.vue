<template>
    <div class="h-full flex flex-col" v-if="!loading">
      <h1 class="mt-2"> {{regionInfo.data.result}} County Hotspots</h1>
      <p>A list of birding hotspots in  {{regionInfo.data.result}} and how many species have ever been recorded there</p>
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






