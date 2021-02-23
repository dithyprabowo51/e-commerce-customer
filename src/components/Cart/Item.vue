<template>
  <tr>
    <td>
    <i @click.prevent="deleteItem" class="fas fa-trash" style="font-size: 16px"></i>
    <img :src="cartItem.image_url" alt="" width="100px" height="100px">
    </td>
    <td>{{cartItem.name}}</td>
    <td>Rp. {{cartItem.price}}</td>
    <td>
      <div class="row justify-content-center">
        <div class="col-2">
          <i @click.prevent="reduceQuantity" class="fas fa-minus-square m-auto" style="font-size: 20px"></i>
        </div>
        <div class="col-3" style="margin-top: -2px;">
          <span>{{cartItem.OrderProduct.quantity}}</span>
        </div>
        <div class="col-2">
          <i @click.prevent="addQuantity" class="fas fa-plus-square" style="font-size: 20px; margin-top: -10px; margin-left: -2px"></i>
        </div>
      </div>
    </td>
    <td>Rp.{{getTotal}}</td>
  </tr>
</template>

<script>
export default {
  props: ['cartItem'],
  computed: {
    getTotal () {
      const price = this.cartItem.price
      const quantity = this.cartItem.OrderProduct.quantity
      return price * quantity
    }
  },
  methods: {
    reduceQuantity () {
      if (!localStorage.getItem('access_token')) return this.$router.push('/login')
      this.$store.dispatch('reduceQuantity', {
        ProductId: this.cartItem.id
      })
    },
    addQuantity () {
      if (!localStorage.getItem('access_token')) return this.$router.push('/login')
      this.$store.dispatch('addQuantity', {
        ProductId: this.cartItem.id
      })
    },
    deleteItem () {
      if (!localStorage.getItem('access_token')) return this.$router.push('/login')
      this.$store.dispatch('deleteCartItem', {
        ProductId: this.cartItem.id
      })
    }
  }
}
</script>

<style>
td {
  vertical-align: middle;
}
.fa-minus-square, .fa-plus-square, .fa-trash {
  cursor: pointer;
}
</style>
