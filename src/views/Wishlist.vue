<template>
  <div id="wishlist" class="container">
    <h2>Wishlist</h2>
    <Item v-for="wishlist in wishlists" :key="wishlist.id" :wishlist="wishlist"></Item>
    <h4 class="mt-3" v-if="wishlists.length === 0">You have no wishlist</h4>
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
