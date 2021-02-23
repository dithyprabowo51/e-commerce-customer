<template>
  <div class="home">
    <Carousel></Carousel>
    <BigBanner v-for="(banner, index) in banners" :key="banner.id" :index="index" :banner="banner"></BigBanner>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import BigBanner from '../components/Category/BigBanner.vue'
export default {
  name: 'Home',
  components: { Carousel, BigBanner },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  created () {
    this.$store.dispatch('fetchAllBanners')
  }
}
</script>
