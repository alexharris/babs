// Implement like this:
//       <SearchList 
//        :list="hotspotsInARegion" 
//        titleProp="locName"  
//        v-on:filter-query="filteredHotspots = $event" 
//      />


<template>

    <div class="w-full ">  
        <input class="search-field p-2 mb-2 text-lg w-full bg-gray-200 rounded text-black" type="text" v-model="searchQuery" placeholder="Search" @input="filterList()" />  
    </div>
</template>


<script>

export default {
  
  props: ['list', 'titleProp'],
  mounted() {
  },
  data() {
    return {
      searchQuery: null,
    }
  },
  methods: {
    filterList(){
        if(this.searchQuery !== null){ 

            var newList = this.list.filter((item)=>{

                return this.searchQuery.toLowerCase().split(' ').every(v => item[this.titleProp].toLowerCase().includes(v))
            })
            this.$emit('filter-query', newList)
        }else{
            this.$emit(this.list)
        }        
    }
  }
}
</script>


