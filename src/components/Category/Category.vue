<template>
  <div @click.prevent="detail(category.id)" id="category" class="m-5">
    <div class="card" style="width: 10rem; border: none;">
      <img v-if="image" :src="image" class="card-img-top" width="100px" height="150px" alt="...">
      <img v-else src="../../assets/no_image.png" class="card-img-top" width="100px" height="150px" alt="...">
      <div class="card-body mt-3">
        <h5 class="card-title text-center">{{category.name}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['category'],
  computed: {
    image () {
      if (this.category.Banners.length === 0) {
        return false
      }
      const activeBanner = []
      this.category.Banners.forEach(e => {
        if (e.status === true) {
          activeBanner.push(e)
        }
      })
      if (activeBanner.length === 0) {
        return false
      }
      return activeBanner[0].image_url
    }
  },
  methods: {
    detail (CategoryId) {
      this.$router.push(`/categories/${CategoryId}`)
    }
  }
}
</script>

<style>
#category {
  cursor: pointer;
  transition: .3s;
}

#category:hover {
  transform: scale(1.1);
}
</style>
