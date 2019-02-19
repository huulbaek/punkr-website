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
        <div>
          <img src="ic_launcher_round.png" style="height: 70px">
          <h3 class="display-3" style="display: inline-block; vertical-align: text-bottom">Punksy</h3>
        </div>
        <div class="subheading">a <em>location first</em>, <b>action oriented</b> app for iOS and Android.</div>
        <div class="title mt-3 mb-2">Coming to a store near you soon!</div>
        <div class="title mt-3 mb-2">(in the meantime, you're welcome to beta versions on the links below)!</div>
        <div class="badge" style="opacity: 1; cursor: pointer"><img alt='Get it on Google Play' src='google_play_badge.png' style="width: 230px;" @click="openGooglePlay" /></div>
        <div class="badge mb-4" style="opacity: 1; cursor: pointer"><img alt='Download from App Store' src='app_store_badge.png' style="width: 200px;"/></div>
      </div>
    </v-flex>
    <v-flex sm12 xs12 md6>
      <div style="text-align: center;">
        <video
          autoplay
          loop
          muted
          poster="poster.png"
          playsinline
          controls="true"
        >
          <source src="device_small.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  methods: {
    openGooglePlay () {
      window.open('https://play.google.com/store/apps/details?id=net.sikker.lodgeapp')
    },
    openAppStore () {
      window.open('https://testflight.apple.com/join/8KQYWTPV')
    }
  }
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
}
.badge {
  opacity: 0.4;
}
</style>
