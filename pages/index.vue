
<template>
  <div class="w-full h-full flex flex-col justify-around md:items-center">
    <h1 class="mainTitle">{{ $t("title") }}</h1>
    <Logo />
    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
      <Button route="/bycounty">
        Start by choosing a county
      </Button>
      <!-- <Button>
        Find a bird
      </Button>  -->
    </div>   
  </div>
</template>

<script>

import Button from '~/components/Button.vue'


export default {
  components: {
    Button
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

