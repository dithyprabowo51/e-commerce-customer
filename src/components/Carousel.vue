<template>
  <div class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="http://www.sanctuaryrecordsgroup.com/wp-content/uploads/2017/05/banner-eCommerce-Solutions.jpg" class="d-block w-100" height="600px" alt="...">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    banners () {
      return this.$store.state.banners
    }
  }
}
</script>

<style>
</style>
