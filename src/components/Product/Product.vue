<template>
  <div id="category" class="m-5">
    <div class="card" style="width: 10rem; border: none;">
      <img :src="product.image_url" class="card-img-top" height="150px" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title text-center">{{product.name}}</h5>
        <h6 class="card-text text-center">Rp. {{product.price}}</h6>
        <h6 class="card-text text-center">Stock: {{product.stock}}</h6>
        <a @click.prevent="addCartItem" href="" class="btn btn-primary btn-sm mt-3">Add to Cart</a>
        <a @click.prevent="addToWishlist" href="" class="btn btn-secondary btn-sm mt-2">Add to Wishlist</a>
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
        CategoryId: this.$route.params.CategoryId
      })
        .then(() => {
          this.$swal({
            icon: 'success',
            title: 'SUCCESS',
            text: `Added ${this.product.name} to cart`,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    addToWishlist () {
      if (!localStorage.getItem('access_token')) return this.$router.push('/login')
      this.$store.dispatch('addWishlist', {
        ProductId: this.product.id
      })
        .then(() => {
          this.$swal({
            icon: 'success',
            title: 'SUCCESS',
            text: `Added ${this.product.name} to wishlist`,
            showConfirmButton: false,
            timer: 1500
          })
        })
    }
  }
}
</script>

<style>
</style>
