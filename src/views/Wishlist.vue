<template>
  <div id="wishlist" class="container">
    <h2>Wishlist</h2>
    <Item v-for="wishlist in wishlists" :key="wishlist.id" :wishlist="wishlist"></Item>
  </div>
</template>

<script>
import Item from '../components/Wishlist/Item.vue'
export default {
  components: { Item },
  computed: {
    wishlists () {
      return this.$store.state.wishlists
    }
  },
  created () {
    this.$store.dispatch('fetchWishlists')
  }
}
</script>

<style>
#wishlist {
    margin-top: 50px;
    margin-bottom: 130px;
}
</style>
