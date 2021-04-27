<template>
    <div >
    <!-- <nuxt-link
    v-for="locale in availableLocales"
    :key="locale.code"
    :to="switchLocalePath(locale)">
      {{locale}} 
    </nuxt-link> -->

    <v-select 
        :options="availableLocales" 
        @input="localeSelected"
        label="name"
        :clearable="false"
        class="style-chooser"
        :value="currentLocale"
    >
        <template #option="{ code, name }">
          {{name}}
        </template>
    </v-select>
    </div>

    

</template>

<script>

import EbirdClient, { Detail } from "ebird-client";
const ebird = new EbirdClient('l74e03ri8jei'); //Get your API_KEY from eBird
// https://github.com/dannyfritz/ebird-client#readme

export default {
  data () {
    return {
      currentLocale: this.$i18n.locale
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
      localeSelected: function(locale) {
        // console.log(locale);
        // this.switchLocalePath(locale.code);
        this.$i18n.setLocale(locale.code);
        // console.log(this.$i18n.locale)
        // console.log(this.switchLocalePath(locale));
        // router.push({})
        //   this.$i18n.locale = locale
      }
  }
}
</script>


<style>
  .style-chooser .vs__search::placeholder,
  .style-chooser .vs__dropdown-toggle,
  .style-chooser .vs__dropdown-menu {
    /* background: #dfe5fb; */
    border: none;
    /* color: #394066; */
    text-transform: lowercase;
    font-variant: small-caps;
  }

  /* .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: #394066;
  } */
</style>






