<template>
  <v-layout
    row
    wrap
    justify-center
    align-center
    d-flex
  >
    <v-flex sm12 xs12 md6 grow>
      <div style="text-align: center;">
        <img src="ic_launcher_round.png" style="height: 70px">
        <h3 class="display-3" style="display: inline-block; vertical-align: bottom">notSocks</h3>

        <div class="subheading">a <em>location first</em>, <b>action oriented</b> app for iOS and Android.</div>

        <div class="title mt-3 mb-4">Coming to a store near you soon!</div>
      </div>
    </v-flex>
    <v-flex sm12 xs12 md6>
      <div style="text-align: center;">
        <video autoplay loop muted poster="poster.png">
          <source src="device_small.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style>
video {
  width: 50%    !important;
  height: auto   !important;
  max-height: 100%;
}
@media only screen and (max-width: 900px) {
  video {
    width: 85%    !important;
    height: auto   !important;
    max-height: 100%;
  }
  .theme--dark.application {
    /* background: #393939 !important; */
  }
}
</style>
