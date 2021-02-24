<template>
  <div class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/banner-home.jpg" class="d-block w-100" height="600px" alt="...">
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
