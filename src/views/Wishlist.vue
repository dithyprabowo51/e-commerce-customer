<template>
  <div id="wishlist" class="container">
    <h2>Wishlist</h2>
    <Item></Item>
    <Item></Item>
  </div>
</template>

<script>
import Item from '../components/Wishlist/Item.vue'
export default {
  components: { Item }
}
</script>

<style>
#wishlist {
    margin-top: 50px;
    margin-bottom: 130px;
}
</style>
