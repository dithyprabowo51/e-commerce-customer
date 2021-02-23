<template>
  <div id="footer" class="py-5">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-3">
          <h1 class="text-light">LOREM</h1>
          <p class="text-secondary text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium molestias quaerat est velit sapiente non laudantium praesentium voluptas odit corrupti! Assumenda fuga ex quod dolor at ab nam velit inventore.</p>
        </div>
        <div class="col-2">
          <h3 class="text-light">Service</h3>
            <ul>
              <li><a href="">lorem</a></li>
              <li><a href="">lorem</a></li>
              <li><a href="">lorem</a></li>
              <li><a href="">lorem</a></li>
              <li><a href="">lorem</a></li>
              <li><a href="">lorem</a></li>
            </ul>
        </div>
        <div class="col-2">
          <h3 class="text-light">About Us</h3>
          <ul>
              <li><a href="">lorem</a></li>
              <li><a href="">lorem</a></li>
              <li><a href="">lorem</a></li>
              <li><a href="">lorem</a></li>
              <li><a href="">lorem</a></li>
              <li><a href="">lorem</a></li>
            </ul>
        </div>
        <div class="col-3">
          <h3 class="text-light">Find Us</h3>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <h4 class="text-light mt-4">Download App</h4>
          <div class="row">
            <div class="col-4">
              <img src="../assets/googleplay.png" alt="" width="100px" height="50px">
            </div>
            <div class="col mt-2">
              <img src="../assets/appstore.png" alt="" width="100px" height="35px">
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
