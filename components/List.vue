<template>

          <table class="w-full border-t border-gray-100 table-fixed">
            <thead class="text-left">
                <tr>
                    <th class="cursor-pointer py-2 w-3/4">
                        <slot name="header1"></slot>
                    </th>
                    <th class=" cursor-pointer py-2 w-1/4">
                        <slot name="header2"></slot>
                    </th>
                </tr>
            </thead>   
            <tbody>   
              <tr v-for="item in list">
                <td class="border-t border-gray-100 py-2 cursor-pointer link">
                    <slot name="column1" v-bind:item="item"></slot>
                </td>
                <td class="border-t border-gray-100 py-2 text-right">
                    <slot name="column2" v-bind:item="item"></slot>
                </td>
              </tr> 
            </tbody> 
          </table>  

</template>


<script>

export default {
  
  props: ['list'],
  mounted() {

  },
  data() {
    return {

    }
  },
  methods: {
   hotspotSelected(spot) {
       this.$emit('hotspot-selected', spot)
   },
    // determineHotness(obs) {
    //   if(obs > 300) {
    //     return '🔥🔥🔥'
    //     } else if (obs > 200) {
    //       return '🔥🔥'
    //   } else if (obs > 100) {
    //     return '🔥'
    //   } else {
    //     return ''
    //   }
    // },  
    // sortByQuantity() {
    //   if(this.sort !== 'hotAsc') {
    //     this.list = this.list.sort(function(a, b) {
    //       return a.numSpeciesAllTime - b.numSpeciesAllTime;
    //     });
    //     this.sort = 'hotAsc'
    //   } else {
    //     this.list = this.list.sort(function(a, b) {
    //       return b.numSpeciesAllTime - a.numSpeciesAllTime;
    //     });        
    //     this.sort = 'hotDesc'
    //   }

    // }, 
    // sortByTitle() {
    //   if(this.sortTitle !== 'titleAsc') {
    //     this.list = this.list.sort(function(a, b) {
    //       return a.locName.toLowerCase() > b.locName.toLowerCase();
    //     });
    //     this.sortTitle = 'titleAsc'
    //   } else {
    //     this.list = this.list.sort(function(a, b) {
    //       return b.locName.toLowerCase() > a.locName.toLowerCase();
    //     });        
    //     this.sortTitle = 'titleDesc'
    //   }

    // },           
  }
}
</script>


