<template>
  <div id="footer" class="py-5">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-3">
          <h1 class="text-light">E-Commerce</h1>
          <p class="text-secondary text-justify">My E-Commerce has given us the power to create unique, and engaging customer shopping experience. There are many rich, out-of-the-box features and seamless third-party integrations we can utilize. --Adityo Prabowo, owner this E-Commerce.</p>
        </div>
        <div class="col-2">
          <h3 class="text-light">Service</h3>
            <ul>
              <li><a @click.prevent href="">Products</a></li>
              <li><a @click.prevent href="">Promo</a></li>
              <li><a @click.prevent href="">Shopping</a></li>
              <li><a @click.prevent href="">Ekspedisi</a></li>
            </ul>
        </div>
        <div class="col-2">
          <h3 class="text-light">About Us</h3>
          <ul>
              <li><a @click.prevent href="">Profile</a></li>
              <li><a @click.prevent href="">Owner</a></li>
              <li><a @click.prevent href="">Contact Us</a></li>
            </ul>
        </div>
        <div class="col-3">
          <h3 class="text-light">Find Us</h3>
          <a target="_blank" href="https://www.instagram.com/adityo_prabowo51/"><i class="fab fa-instagram"></i></a>
          <h4 class="text-light mt-4">Download App</h4>
          <div class="row">
            <div class="col-4">
              <img src="../assets/googleplay.png" alt="" width="100px" height="50px">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
#footer {
  background-color: black;
}

.text-justify {
  text-align: justify;
}

li {
  list-style: none;
  margin-left: -30px;
}

a {
  text-decoration: none;
  color: white;
}

i {
  font-size: 23px;
  margin: 10px;
  color: rgb(133, 127, 127);
}
</style>
