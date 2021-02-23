<template>
  <div id="list-category" class="container">
    <Banner :banners="banners"></Banner>
    <h3 class="mt-5 mb-3">Recomended For You</h3>
    <div class="row d-flex flex-wrap">
      <div v-for="product in products" :key="product.id" class="col-2 m-4">
        <Product :product="product"></Product>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Category/Carousel.vue'
import Product from '../components/Product/Product.vue'
export default {
  components: { Banner, Product },
  computed: {
    banners () {
      return this.$store.state.banners
    },
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchBannersByCategory', { CategoryId: this.$route.params.CategoryId })
    this.$store.dispatch('fetchProducts', { CategoryId: this.$route.params.CategoryId })
  }
}
</script>

<style>
</style>
