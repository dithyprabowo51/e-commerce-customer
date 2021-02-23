<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div v-for="(banner, index) in banners" :key="banner.id" class="carousel-item" :class="{active: index === 0}">
        <img v-if="banner.image_url" :src="banner.image_url" class="d-block w-100" height="500px" alt="...">
        <img v-else src="../../assets/no_image.png" class="d-block w-100" height="500px" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  props: ['banners']
}
</script>

<style>
</style>
