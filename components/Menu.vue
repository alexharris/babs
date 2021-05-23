<template>

<div class="flex flex-col justify-end">
    <div class="z-50 cursor-pointer link" @click="menu = !menu">
        <span v-if="menu">Close</span>
        <span v-else>Menu</span>
    </div>
    
    <div v-if="menu" class="fixed w-full h-screen top-0 left-0 bg-white z-40 flex flex-col p-4 pt-16">
        <LocaleSelector />
    </div>
</div>
    

</template>

<script>


export default {
  data () {
    return {
      menu: false
    }
  },
}
</script>







