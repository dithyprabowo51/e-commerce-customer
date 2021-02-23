<template>
  <div id="category" class="m-5">
    <div class="card" style="width: 10rem; border: none;">
      <img :src="product.image_url" class="card-img-top" height="150px" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title text-center">{{product.name}}</h5>
        <p class="card-text text-center">Rp. {{product.price}}</p>
        <p class="card-text text-center">Stock: {{product.stock}}</p>
        <a @click.prevent="addCartItem" href="" class="btn btn-secondary btn-sm">Add To Cart</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    addCartItem () {
      if (!localStorage.getItem('access_token')) return this.$router.push('/login')
      this.$store.dispatch('addCartItem', {
        ProductId: this.product.id,
        CategoryId: this.product.Categories[0].id
      })
    }
  }
}
</script>

<style>
</style>
