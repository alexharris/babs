export const state = () => ({
    region: '',
    hotspot: ''
  })
  
  export const mutations = {
    setRegion(state, region) {
      state.region = region
    },
    setHotspot(state, hotspot) {
        state.hotspot = hotspot
      }    
  }
  