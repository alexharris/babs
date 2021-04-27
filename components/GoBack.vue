<template>
    <div @click="goBack()">
        Back
    </div>
</template>

<script>


export default {

  mounted() {

},
  data() {
    return {

    }
  },
  methods: {
    goBack() {
        this.$router.go(-1)

    },
  }
}
</script>






