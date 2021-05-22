<template>
    <div >
      <SearchList :list="regions" titleProp="name" placeholder="Search counties" v-on:filter-query="filteredRegions = $event" />
      <List 
        :list="filteredRegions"
        cols="1"
      >
        <template v-slot:header1>
          <span class="flex flex-row" @click="sortByTitle()">County <svg v-bind:class="{ 'rotate-180': sortTitle == 'titleDesc' }" class="mt-1 mx-1 transform" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
        </template>
        <template v-slot:header2>
        </template>            
        <template v-slot:column1="slotProps">
            <span class="link" @click="regionSelected(slotProps.item)">{{slotProps.item.name}}</span>
        </template>
        <template v-slot:column2="slotProps">
          
        </template>            
      </List>        
      <!-- <table class="w-full">          
        <tbody>   
          <tr v-for="region in filteredRegions">
            <td class="border-t border-gray-100 py-2 cursor-pointer"><span class="link" @click="regionSelected(region)">{{region.name}}</span> </td>
          </tr> 
        </tbody> 
      </table>          -->
    </div>
</template>

<script>

export default {
  
  mounted() {
      // this.getAllRegionInfo()
  },
  data() {
    return {
      regions: [
        {"code":"US-CA-001","name":"Alameda"},{"code":"US-CA-003","name":"Alpine"},{"code":"US-CA-005","name":"Amador"},{"code":"US-CA-007","name":"Butte"},{"code":"US-CA-009","name":"Calaveras"},{"code":"US-CA-011","name":"Colusa"},{"code":"US-CA-013","name":"Contra Costa"},{"code":"US-CA-015","name":"Del Norte"},{"code":"US-CA-017","name":"El Dorado"},{"code":"US-CA-019","name":"Fresno"},{"code":"US-CA-021","name":"Glenn"},{"code":"US-CA-023","name":"Humboldt"},{"code":"US-CA-025","name":"Imperial"},{"code":"US-CA-027","name":"Inyo"},{"code":"US-CA-029","name":"Kern"},{"code":"US-CA-031","name":"Kings"},{"code":"US-CA-033","name":"Lake"},{"code":"US-CA-035","name":"Lassen"},{"code":"US-CA-037","name":"Los Angeles"},{"code":"US-CA-039","name":"Madera"},{"code":"US-CA-041","name":"Marin"},{"code":"US-CA-043","name":"Mariposa"},{"code":"US-CA-045","name":"Mendocino"},{"code":"US-CA-047","name":"Merced"},{"code":"US-CA-049","name":"Modoc"},{"code":"US-CA-051","name":"Mono"},{"code":"US-CA-053","name":"Monterey"},{"code":"US-CA-055","name":"Napa"},{"code":"US-CA-057","name":"Nevada"},{"code":"US-CA-059","name":"Orange"},{"code":"US-CA-061","name":"Placer"},{"code":"US-CA-063","name":"Plumas"},{"code":"US-CA-065","name":"Riverside"},{"code":"US-CA-067","name":"Sacramento"},{"code":"US-CA-069","name":"San Benito"},{"code":"US-CA-071","name":"San Bernardino"},{"code":"US-CA-073","name":"San Diego"},{"code":"US-CA-075","name":"San Francisco"},{"code":"US-CA-077","name":"San Joaquin"},{"code":"US-CA-079","name":"San Luis Obispo"},{"code":"US-CA-081","name":"San Mateo"},{"code":"US-CA-083","name":"Santa Barbara"},{"code":"US-CA-085","name":"Santa Clara"},{"code":"US-CA-087","name":"Santa Cruz"},{"code":"US-CA-089","name":"Shasta"},{"code":"US-CA-091","name":"Sierra"},{"code":"US-CA-093","name":"Siskiyou"},{"code":"US-CA-095","name":"Solano"},{"code":"US-CA-097","name":"Sonoma"},{"code":"US-CA-099","name":"Stanislaus"},{"code":"US-CA-101","name":"Sutter"},{"code":"US-CA-103","name":"Tehama"},{"code":"US-CA-105","name":"Trinity"},{"code":"US-CA-107","name":"Tulare"},{"code":"US-CA-109","name":"Tuolumne"},{"code":"US-CA-111","name":"Ventura"},{"code":"US-CA-113","name":"Yolo"},{"code":"US-CA-115","name":"Yuba"}
      ],      
      allRegionInfo: [],   
      filteredRegions: [
        {"code":"US-CA-001","name":"Alameda"},{"code":"US-CA-003","name":"Alpine"},{"code":"US-CA-005","name":"Amador"},{"code":"US-CA-007","name":"Butte"},{"code":"US-CA-009","name":"Calaveras"},{"code":"US-CA-011","name":"Colusa"},{"code":"US-CA-013","name":"Contra Costa"},{"code":"US-CA-015","name":"Del Norte"},{"code":"US-CA-017","name":"El Dorado"},{"code":"US-CA-019","name":"Fresno"},{"code":"US-CA-021","name":"Glenn"},{"code":"US-CA-023","name":"Humboldt"},{"code":"US-CA-025","name":"Imperial"},{"code":"US-CA-027","name":"Inyo"},{"code":"US-CA-029","name":"Kern"},{"code":"US-CA-031","name":"Kings"},{"code":"US-CA-033","name":"Lake"},{"code":"US-CA-035","name":"Lassen"},{"code":"US-CA-037","name":"Los Angeles"},{"code":"US-CA-039","name":"Madera"},{"code":"US-CA-041","name":"Marin"},{"code":"US-CA-043","name":"Mariposa"},{"code":"US-CA-045","name":"Mendocino"},{"code":"US-CA-047","name":"Merced"},{"code":"US-CA-049","name":"Modoc"},{"code":"US-CA-051","name":"Mono"},{"code":"US-CA-053","name":"Monterey"},{"code":"US-CA-055","name":"Napa"},{"code":"US-CA-057","name":"Nevada"},{"code":"US-CA-059","name":"Orange"},{"code":"US-CA-061","name":"Placer"},{"code":"US-CA-063","name":"Plumas"},{"code":"US-CA-065","name":"Riverside"},{"code":"US-CA-067","name":"Sacramento"},{"code":"US-CA-069","name":"San Benito"},{"code":"US-CA-071","name":"San Bernardino"},{"code":"US-CA-073","name":"San Diego"},{"code":"US-CA-075","name":"San Francisco"},{"code":"US-CA-077","name":"San Joaquin"},{"code":"US-CA-079","name":"San Luis Obispo"},{"code":"US-CA-081","name":"San Mateo"},{"code":"US-CA-083","name":"Santa Barbara"},{"code":"US-CA-085","name":"Santa Clara"},{"code":"US-CA-087","name":"Santa Cruz"},{"code":"US-CA-089","name":"Shasta"},{"code":"US-CA-091","name":"Sierra"},{"code":"US-CA-093","name":"Siskiyou"},{"code":"US-CA-095","name":"Solano"},{"code":"US-CA-097","name":"Sonoma"},{"code":"US-CA-099","name":"Stanislaus"},{"code":"US-CA-101","name":"Sutter"},{"code":"US-CA-103","name":"Tehama"},{"code":"US-CA-105","name":"Trinity"},{"code":"US-CA-107","name":"Tulare"},{"code":"US-CA-109","name":"Tuolumne"},{"code":"US-CA-111","name":"Ventura"},{"code":"US-CA-113","name":"Yolo"},{"code":"US-CA-115","name":"Yuba"}
      ],
      sortTitle: 'titleAsc'
    }
  },
  computed: {
    selectedRegion() {
      return this.$store.state.region
    }
  },
  methods: {
    regionSelected(value) {
      this.$store.commit('setRegion', value)
      this.$router.push({ path: 'region', query: {region: this.selectedRegion.code} })
    },
    sortByTitle() {
      
      if(this.sortTitle !== 'titleAsc') {
        this.filteredRegions = this.filteredRegions.sort(function(a, b) {
          return a.name.toLowerCase() > b.name.toLowerCase();
        });
        this.sortTitle = 'titleAsc'
      } else {
        this.filteredRegions = this.filteredRegions.sort(function(a, b) {
          return b.name.toLowerCase() > a.name.toLowerCase();
        });        
        this.sortTitle = 'titleDesc'
      }

    },      
    
  }
}
</script>

<style>
.search-field {

}
</style>





