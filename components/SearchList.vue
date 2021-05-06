// Implement like this:
//       <SearchList 
//        :list="hotspotsInARegion" 
//        titleProp="locName"  
//        v-on:filter-query="filteredHotspots = $event" 
//      />


<template>
  <div>
      <span ref="thing"></span>
      <div :class="{ fixedSearch: scrollPosition < 0}" class="w-full mb-4 ">  
          <input ref="search" class="search-field p-2 text-lg w-full bg-gray-100 rounded text-black" type="text" v-model="searchQuery" placeholder="Search" @input="filterList()" />  
      </div>
    </div>
</template>


<script>

export default {
  
  props: ['list', 'titleProp'],
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
                console.log(item[this.titleProp])
                return this.searchQuery.toLowerCase().split(' ').every(v => item[this.titleProp].toLowerCase().includes(v))
            })
            console.log(newList)
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


