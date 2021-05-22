<template>
  <NuxtLink :to="{path: route}">
      <div class="border-2 border-black rounded p-2 text-2xl text-center cursor-pointer hover:bg-blue-400">
          <slot></slot>
      </div>
  </NuxtLink>
</template>

<script>


export default {
  props: ['route'],
  methods: {

  }
}
</script>






