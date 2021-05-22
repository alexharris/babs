// Implement like this:
//       <SearchList 
//        :list="hotspotsInARegion" 
//        titleProp="locName"  
//        placeholder="Whatever"
//        v-on:filter-query="filteredHotspots = $event" 
//      />


<template>
  <div>
      <span ref="thing"></span>
      <div :class="{ fixedSearch: scrollPosition < 0}" class="w-full py-4 bg-white z-50">  
          <input ref="search" class="search-field p-2 text-lg w-full border-2 border-black rounded text-black" type="text" v-model="searchQuery" :placeholder="placeholder" @input="filterList()" />  
      </div>
    </div>
</template>


<script>

export default {
  
  props: ['list', 'titleProp', 'placeholder'],
  mounted() {
    window.addEventListener('scroll', this.updateScroll);    
  },
  data() {
    return {
      searchQuery: null,
      scrollPosition: null
    }
  },
  // computed: {
  //   isFixed() {
  //     if (this.scrollPosition > 0) {

  //     }
  //   }
  // },
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
    },
    updateScroll() {
      if(this.$refs.thing) {
        this.scrollPosition = this.$refs.thing.getBoundingClientRect().y
      }
      
    }    
  }
}
</script>


