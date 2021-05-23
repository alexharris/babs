
<template>
  <div class="w-full h-full flex flex-col justify-around ">
    <h1 class="mainTitle">{{ $t("title") }}</h1>
    <Logo />

    <Button route="/bycounty">
      Browse by county
    </Button>
    <Button>
      Find a bird
    </Button>    
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

