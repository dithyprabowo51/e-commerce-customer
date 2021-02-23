<template>
  <div id="nav" class="bg-light">
    <div class="row justify-content-around">
      <div class="col-4 d-flex align-items-center">
        <div class="row m-auto">
          <div class="col m-1">
            <a @click.prevent="changePage('/')" href="">Home</a>
          </div>
          <div class="col m-1">
            <a @click.prevent="changePage('/categories')" href="">Products</a>
          </div>
          <div class="col m-1">
            <a @click.prevent href="">About</a>
          </div>
          <div class="col m-1">
            <a @click.prevent href="">Contact</a>
          </div>
        </div>
      </div>
      <div class="col-2">
        <img src="../assets/logo.png" alt="" width="100px" height="70px" />
      </div>
      <div class="col-4 d-flex align-items-center">
        <div class="row m-auto">
          <div class="col m-1">
            <a @click.prevent="changePage('/wishlist')" href="">Wishlist</a>
          </div>
          <div class="col m-1">
            <a @click.prevent="changePage('/cart')" href="">Cart</a>
          </div>
          <div v-if="showLogout" class="col m-1">
            <a @click.prevent="logout" href="">Logout</a>
          </div>
          <div v-if="showLogin" class="col m-1">
            <a @click.prevent="changePage('/login')" href="">Login</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showLogin () {
      if (localStorage.getItem('access_token')) {
        return false
      }
      return true
    },
    showLogout () {
      if (localStorage.getItem('access_token')) {
        return true
      }
      return false
    }
  },
  methods: {
    changePage (val) {
      this.$router.push(val)
    },
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
#nav {
  padding: 0 10px;
}

a {
  color: black;
  transition: 0.2s;
}

a:hover {
  color: rgba(0, 0, 0, 0.425);
}
</style>
