<template>
  <v-app dark>
    <div style="position: fixed; top: 5px; left: 5px; z-index: 99;" v-show="!drawer">
      <v-icon @click="drawer = !drawer" large>menu</v-icon>
    </div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list class="pa-0" style="background: #e3e3e3">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="ic_launcher_round.png">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title style="color: black; font-size: 22px;">Punkr</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pa-1">
        <v-list-tile
          nuxt
          to="/privacy"
        >
          <v-list-tile-action>
            <v-icon color="white">security</v-icon>
          </v-list-tile-action>
          <v-subheader>
            PRIVACY
          </v-subheader>
        </v-list-tile>
        <v-list-tile
          nuxt
          to="/contact"
        >
          <v-list-tile-action>
            <v-icon color="white">contact_mail</v-icon>
          </v-list-tile-action>
          <v-subheader>
            CONTACT
          </v-subheader>
        </v-list-tile>
        <v-list-tile
          nuxt
          to="/"
        >
          <v-list-tile-action>
            <v-icon color="white">home</v-icon>
          </v-list-tile-action>
          <v-subheader>
            HOME
          </v-subheader>
        </v-list-tile>
        <v-list-tile style="position: absolute; bottom: 5px;">
          <v-content>
            by Huulbæk Titanium
          </v-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
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
    return {
      drawer: null
    }
  }
}
</script>

<style>
  .theme--dark.application {
    background: #444244 !important;
  }
</style>
