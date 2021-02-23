<template>
  <div id="list-category" class="container">
    <Carousel :banners="banners"></Carousel>
    <h3 class="mt-5 mb-3">What Category you Looking For ?</h3>
    <div class="row d-flex flex-wrap">
      <div v-for="category in categories" :key="category.id" class="col-2 m-4">
        <Category :category="category"></Category>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Category/Carousel.vue'
import Category from '../components/Category/Category.vue'
export default {
  components: { Carousel, Category },
  computed: {
    categories () {
      return this.$store.state.categories
    },
    banners () {
      return this.$store.state.banners
    }
  },
  created () {
    this.$store.dispatch('fetchAllCategories')
    this.$store.dispatch('fetchAllBanners')
  }
}
</script>

<style>
</style>
