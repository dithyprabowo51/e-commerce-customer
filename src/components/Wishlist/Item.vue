<template>
  <div class="item-wishlist my-4">
    <div class="row align-items-center">
      <div class="col-3">
        <img src="../../assets/no_image.png" width="100px" height="100px" alt="">
      </div>
      <div class="col-5" style="margin-left: 50px;">
        <p>Product Name</p>
        <p>Rp. 500000</p>
        <p>Stock: 100</p>
        <button class="btn btn-sm btn-secondary">Add to Cart</button>
      </div>
      <div>
        <i class="fas fa-times-circle"></i>
      </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.item-wishlist {
  border: 1px solid rgb(194, 191, 191);
  border-radius: 5px;
  padding: 15px;
  position: relative;
  width: 30vw;
}

.fa-times-circle {
  position: absolute;
  right: -25px;
  top: -25px;
  font-size: 30px;
  cursor: pointer;
  transition: .2s;
}

.fa-times-circle:hover {
  transform: scale(1.1);
  color: red;
}
</style>
