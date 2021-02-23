<template>
  <div id="cart-page" class="container">
    <h2>Cart</h2>
    <div class="row">
      <div class="col-9">
        <div class="row">
          <div class="col">
            <table class="table text-center">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <Item v-for="cartItem in cartItems" :key="cartItem.id" :cartItem="cartItem"></Item>
              </tbody>
            </table>
          </div>
        </div>

        <div class="row justify-content-end mt-5">
          <div class="col-4">
            <h3 class="mb-3">Cart Totals</h3>
            <table class="table text-center table-bordered">
              <thead>
                <tr>
                  <th scope="col">Subtotal</th>
                  <td>Rp. {{getTotal}}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Diskon</th>
                  <td>-</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>Rp {{getTotal}}</td>
                </tr>
              </tbody>
            </table>
            <button class="btn btn-success">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from '../components/Cart/Item.vue'
export default {
  components: { Item },
  computed: {
    cartItems () {
      return this.$store.state.cartItems
    },
    getTotal () {
      let total = 0
      this.$store.state.cartItems.forEach(e => {
        const subTotal = e.price * e.OrderProduct.quantity
        total += subTotal
      })
      return total
    }
  },
  created () {
    this.$store.dispatch('fetchCartItems')
  }
}
</script>

<style>
#cart-page {
  margin-bottom: 200px;
  margin-top: 50px;
}
</style>
