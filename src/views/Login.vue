<template>
  <div id="login-page">
    <div class="row justify-content-center">
      <div class="col-3 img-login">
        <img src="../assets/login.jpg" alt="">
      </div>
      <div class="col-4 form-login">
        <h2 class="text-center mt-5">Sign In</h2>
        <p v-if="errorValidate" class="text-danger text-center">{{errorValidate}}</p>
        <form @submit.prevent="login" class="text-center mt-4">
          <input v-model="email" type="email" placeholder="Email">
          <input v-model="password" type="password" placeholder="Password">
          <br>
          <button type="submit" class="bg-success mb-4">Login</button>
          <div class="mb-3">
            <a @click.prevent="changePage('/register')" href="">Dont have an account ?</a>
          </div>
          <div class="mb-3">
            <a @click.prevent="changePage('/')" href="">Back to Home</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: '',
      errorValidate: ''
    }
  },
  methods: {
    changePage (val) {
      this.$router.push(val)
    },
    login () {
      this.$store.dispatch('setIsLoading', true)
      axios({
        url: 'http://localhost:3000/login',
        method: 'POST',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          this.errorValidate = ''
          this.email = ''
          this.password = ''
          localStorage.setItem('access_token', data.access_token)
          this.$router.push('/')
          this.$store.dispatch('setIsLoading', false)
        })
        .catch(err => {
          this.email = ''
          this.password = ''
          if (err.response.status === 401) {
            this.errorValidate = 'Invalid email or password'
          }
          this.$store.dispatch('setIsLoading', false)
        })
    }
  }
}
</script>

<style>
#login-page {
  background-image: url('https://coloredbrain.com/wp-content/uploads/2016/07/login-background.jpg');
  height: 98vh;
  width: 99.5vw;
  background-size: cover;
}

.img-login {
  margin-top: 50px;
  height: 500px;
}
.img-login img {
  height: 500px;
  width: 365px;
  margin-left: -11px;
}

.form-login {
  height: 500px;
  margin-top: 50px;
  background-color: white;
}

.form-login input {
  width: 250px;
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 10px;
}
.form-login input:focus {
  outline: none;
}

.form-login button {
  margin-top: 35px;
  border: none;
  width: 250px;
  padding: 5px;
  border-radius: 10px;
  transition: .2s;
}

.form-login button:hover {
  opacity: .7;
}

#login-page a {
  color: black;
  transition: .2s;
}
#login-page a:hover {
  color: rgba(0, 0, 0, 0.5);
}
</style>
