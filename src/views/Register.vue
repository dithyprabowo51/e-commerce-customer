<template>
  <div id="register-page">
    <div class="row justify-content-center">
      <div class="col-3 img-login">
        <img src="../assets/login.jpg" alt="">
      </div>
      <div class="col-4 form-login">
        <h2 class="text-center mt-5">Sign Up</h2>
        <form @submit.prevent="register" class="mt-4 text-center">
          <input v-model="email" type="email" placeholder="Email">
          <br>
          <small v-if="errEmail" class="text-danger">{{errEmail}}</small>
          <br>
          <input v-model="password" type="password" placeholder="Password">
          <br>
          <small v-if="errPassword" class="text-danger">{{errPassword}}</small>
          <br>
          <input v-model="confirmPassword" type="password" placeholder="Confirm Password">
          <br>
          <button type="submit" class="bg-primary mb-4">Register</button>
          <div class="mb-3">
            <a @click.prevent="changePage('/login')" href="">Already an account ?</a>
          </div>
          <div>
            <a @click.prevent="changePage('/')" href="">Back to Home</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/index.js'
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      errorValidate: {
        email: [],
        password: []
      }
    }
  },
  computed: {
    errPassword () {
      return this.errorValidate.password.join('. ')
    },
    errEmail () {
      return this.errorValidate.email.join('. ')
    }
  },
  methods: {
    changePage (val) {
      this.$router.push(val)
    },
    register () {
      if (this.password !== this.confirmPassword) return this.errorValidate.password.push('Password doesnt match')
      this.$store.dispatch('setIsLoading', true)
      axios({
        url: '/register',
        method: 'POST',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(() => {
          this.email = ''
          this.password = ''
          this.confirmPassword = ''
          this.errorValidate.email = []
          this.errorValidate.password = []
          this.$router.push('/login')
          this.$store.dispatch('setIsLoading', false)
        })
        .catch(err => {
          this.confirmPassword = ''
          this.password = ''
          this.$store.dispatch('setIsLoading', false)
          err.response.data.errors.forEach(e => {
            if (e === 'Email has been used' || e === 'Email cant be empty' || e === 'Invalid format email') {
              this.errorValidate.email.push(e)
            }
          })
        })
    }
  }
}
</script>

<style>
#register-page {
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

#register-page a {
  color: black;
  transition: .2s;
}
#register-page a:hover {
  color: rgba(0, 0, 0, 0.5);
}
</style>
