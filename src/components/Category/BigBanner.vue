<template>
  <div class="big-banner container">
    <div class="row d-flex align-items-center">
      <div class="col text-center" :class="orderImg">
          <img :src="banner.image_url" alt="" width="300px" height="380px">
      </div>
      <div class="col" :class="orderText">
        <h1>{{banner.Category.name}}</h1>
        <p class="my-3 text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ad voluptatem soluta earum amet harum quibusdam praesentium sapiente? Accusantium at vitae consequatur recusandae ut voluptates doloremque asperiores ratione magnam quidem!</p>
        <button class="btn btn-primary mt-2">Shop Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['index', 'banner'],
  computed: {
    orderImg () {
      if (this.index % 2 === 0) {
        return 'order-2'
      }
      return 'order-1'
    },
    orderText () {
      if (this.index % 2 === 0) {
        return 'order-1'
      }
      return 'order-2'
    }
  }
}
</script>

<style>
.big-banner {
    height: 70vh;
    display: flex;
    align-items: center;
}
</style>
