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
      <div class="flex flex-row w-full items-center bg-white z-40" :class="{ fixedSearch: scrollPosition < 0}">
        <svg class="binoc" width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="26.0555" cy="7" r="6" stroke="black" stroke-width="2"/>
        <path d="M13.6111 6.22222L16.5278 4.27777L19.4444 6.22222" stroke="black" stroke-width="2"/>
        <circle cx="7" cy="7" r="6" stroke="black" stroke-width="2"/>
        </svg>

        <div class=" z-50 flex-grow">  
            <input ref="search" class="search-field p-2 text-lg w-full border-2 border-black rounded text-black" type="text" v-model="searchQuery" :placeholder="placeholder" @input="filterList()" />  
        </div>
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


<style sass>
.binoc {
  width: 0;
  height: 0;
  padding: 0;
  @apply transition-all duration-300
}

.fixedSearch {
  @apply space-x-2 p-2
}

.fixedSearch .binoc {  
  @apply w-auto h-auto m-2
}
</style>