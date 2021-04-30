<template>
    <div v-if="!loading">

      <h1> {{regionInfo.data.result}} County</h1>
      <HotspotSelector 
        :regioninfo="regionInfo"
      />      
    </div> 
    <div v-else>
      <LoadingAnimation />
    </div>
</template>

<script>

import HotspotSelector from '~/components/HotspotSelector.vue'

export default {
  components: {
    HotspotSelector,
  },
  mounted() {
      this.getRegionInfo()
  },
  data() {
    return {
      regionInfo: {},
      loading: true
    }
  },
  methods: {
    getRegionInfo() {

      
      this.$axios.get('https://api.ebird.org/v2/ref/region/info/' + this.$route.query.region, {
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






