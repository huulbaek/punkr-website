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
        <div style="margin-bottom: 15px;">
          <div style="background-color: black; display: inline-block; width: 80px; height: 80px; border-radius: 50%; padding-top: 9px;">
            <img src="icon_colors.svg" style="height: 60px;">
          </div>
          <h3 class="display-3" style="display: inline-block; vertical-align: bottom; font-style: oblique; font-weight: 600">PUNKR</h3>
        </div>
        <div class="subheading">a <em>location first</em>, <b>action oriented</b> app for iOS and Android. If you're going to Reeperbahn Festival, this is the app for you!</div>
        <div class="title mt-3 mb-2">Get it in a store near you!</div>
        <div class="badge" style="opacity: 1; cursor: pointer"><img alt='Get it on Google Play' src='google_play_badge.png' style="width: 230px;" @click="openGooglePlay" /></div>
        <div class="badge mb-4" style="opacity: 1; cursor: pointer"><img alt='Download from App Store' src='app_store_badge.png' style="width: 200px;" @click="openAppStore" /></div>
      </div>
      <!-- div style="">
        <v-carousel>
          <v-carousel-item
            dark
            v-for="(item,i) in items"
            :key="i"
            :src="item"
          ></v-carousel-item>
        </v-carousel>
      </div>-->
    </v-flex>
    <v-flex sm12 xs12 md6>
      <div style="text-align: center;">
        <video
          loop
          poster="poster.jpg"
          playsinline
          controls="true"
        >
          <source src="device_small.mov" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      items: [ 'screenshot-1.png', 'screenshot-2.png', 'screenshot-3.png', 'screenshot-4.png' ]
    }
  },
  methods: {
    openGooglePlay () {
      window.open('https://play.google.com/store/apps/details?id=net.sikker.lodgeapp')
    },
    openAppStore () {
      window.open('https://itunes.apple.com/us/app/punkr/id1448126469')
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
