<template>

    <div id="map-wrap" class="w-full z-10 flex flex-col flex-grow">   
        <client-only>
            <l-map :zoom=9 :center="center">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <template v-for="spot in list">
                <l-marker :lat-lng="[spot.lat,spot.lng]" >
                 
                <l-popup v-if="popup">
                    <span class="cursor-pointer font-bold" @click="hotspotSelected(spot.locId)">{{spot.locName}}</span>
                    <br />
                    <span> {{spot.numSpeciesAllTime}} observations</span>
                    <br />
                    <span class="link" @click="hotspotSelected(spot.locId)">view</span>
                    
                </l-popup>
                </l-marker>
            </template>
            </l-map>
        </client-only>
    </div>  

</template>


<script>

export default {
  
  props: ['list', 'center', 'latProp', 'lngProp', "popup"],
  mounted() {

  },
  data() {
    return {

    }
  },
  methods: {
   hotspotSelected(spot) {
       this.$emit('hotspot-selected', spot)
   }
  }
}
</script>


