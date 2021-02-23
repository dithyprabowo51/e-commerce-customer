import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListCategory from '../views/ListCategory.vue'
import ListProduct from '../views/ListProduct.vue'
import CartPage from '../views/CartPage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/categories',
    name: 'Categories',
    component: ListCategory
  },
  {
    path: '/categories/:CategoryId',
    name: 'Products',
    component: ListProduct
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
