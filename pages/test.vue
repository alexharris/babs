
<template>
  <div class="w-full">
    <div id="map-wrap" class="w-full h-96 z-20 flex flex-col flex-grow">   
        <client-only>
            <l-map :zoom=9 :center="[1,1]">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                <l-marker :lat-lng="[1,1]" >
                 
                <l-popup >
                        hello
                </l-popup>
                </l-marker>
            </l-map>
        </client-only>
    </div>  
  </div>
</template>

<script>




export default {
  components: {

  },  
  data() {
    return {

    }
    
  },

  mounted() {


  },
  methods: {






  }
}


</script>


