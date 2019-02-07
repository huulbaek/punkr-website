<template>
  <v-app dark>
    <v-content>
      <v-container fill-height fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
  .theme--dark.application {
    background: #444244 !important;
  }
</style>
