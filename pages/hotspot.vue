<template>
  <div >
    <RecentObservationsInARegion 
      :selected-hotspot="selectedHotspot"    
    />       
  </div>
</template>

<script>
export default {
  computed: {
    selectedHotspot () {
      return this.$store.state.hotspot
    }
  },
  methods: {

  }
}
</script>
