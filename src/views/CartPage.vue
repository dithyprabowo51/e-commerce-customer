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
                <Item></Item>
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
                  <td>Rp. 300.000</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Diskon</th>
                  <td>-</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>Rp 300.000</td>
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
  components: { Item }
}
</script>

<style>
#cart-page {
  margin-bottom: 200px;
  margin-top: 50px;
}
</style>
