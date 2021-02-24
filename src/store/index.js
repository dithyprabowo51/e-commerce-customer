import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    banners: [],
    categories: [],
    products: [],
    cartItems: [],
    wishlists: []
  },
  mutations: {
    setIsLoading (state, payload) {
      state.isLoading = payload
    },
    setBanners (state, payload) {
      state.banners = payload
    },
    setCategories (state, payload) {
      state.categories = payload
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setCartItems (state, payload) {
      state.cartItems = payload
    },
    setWishlists (state, payload) {
      state.wishlists = payload
    }
  },
  actions: {
    setIsLoading (context, payload) {
      context.commit('setIsLoading', payload)
    },
    fetchAllBanners (context) {
      context.dispatch('setIsLoading', true)
      axios({
        url: '/banners?status=true',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('setBanners', data.data)
          context.dispatch('setIsLoading', false)
        })
        .catch(err => {
          context.dispatch('setIsLoading', false)
          console.log(err)
        })
    },
    fetchBannersByCategory (context, payload) {
      context.dispatch('setIsLoading', true)
      axios({
        url: '/banners/?CategoryId=' + payload.CategoryId,
        method: 'GET'
      })
        .then(({ data }) => {
          if (data.data.length > 0) {
            context.commit('setBanners', data.data)
          } else {
            const obj = [{
              image_url: false
            }]
            context.commit('setBanners', obj)
          }
          context.dispatch('setIsLoading', false)
        })
        .catch(err => {
          context.dispatch('setIsLoading', false)
          console.log(err)
        })
    },
    fetchAllCategories (context) {
      context.dispatch('setIsLoading', true)
      axios({
        url: '/categories',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('setCategories', data.data)
          context.dispatch('setIsLoading', false)
        })
        .catch(err => {
          context.dispatch('setIsLoading', false)
          console.log(err)
        })
    },
    fetchProducts (context, payload) {
      context.dispatch('setIsLoading', true)
      axios({
        url: '/products?CategoryId=' + payload.CategoryId,
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
          context.dispatch('setIsLoading', false)
        })
        .catch(err => {
          context.dispatch('setIsLoading', false)
          console.log(err)
        })
    },
    fetchCartItems (context) {
      context.dispatch('setIsLoading', true)
      axios({
        url: '/orders',
        method: 'GET',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          context.commit('setCartItems', data.data.Products)
          context.dispatch('setIsLoading', false)
        })
        .catch(err => {
          context.commit('setCartItems', [])
          console.log(err)
          context.dispatch('setIsLoading', false)
        })
    },
    addCartItem (context, payload) {
      context.dispatch('setIsLoading', true)
      axios({
        url: '/orders',
        method: 'POST',
        headers: { access_token: localStorage.getItem('access_token') },
        data: {
          ProductId: payload.ProductId
        }
      })
        .then(() => {
          context.dispatch('fetchCartItems')
          context.dispatch('fetchWishlists')
          context.dispatch('fetchProducts', {
            CategoryId: payload.CategoryId
          })
          Vue.swal({
            icon: 'success',
            title: 'SUCCESS',
            text: 'Added product to cart successfully',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          context.dispatch('setIsLoading', false)
          Vue.swal({
            icon: 'error',
            title: 'Oops',
            text: 'Stock was empty',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(err)
        })
    },
    reduceQuantity (context, payload) {
      context.dispatch('setIsLoading', true)
      axios({
        url: '/orders/reduceQuantity',
        method: 'PATCH',
        headers: { access_token: localStorage.getItem('access_token') },
        data: {
          ProductId: payload.ProductId
        }
      })
        .then(() => {
          context.dispatch('fetchCartItems')
        })
        .catch(err => {
          context.dispatch('setIsLoading', false)
          console.log(err)
        })
    },
    addQuantity (context, payload) {
      context.dispatch('setIsLoading', true)
      axios({
        url: '/orders/addQuantity',
        method: 'PATCH',
        headers: { access_token: localStorage.getItem('access_token') },
        data: {
          ProductId: payload.ProductId
        }
      })
        .then(() => {
          context.dispatch('fetchCartItems')
        })
        .catch(err => {
          context.dispatch('setIsLoading', false)
          Vue.swal({
            icon: 'error',
            title: 'Oops',
            text: 'Stock was empty',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(err)
        })
    },
    deleteCartItem (context, payload) {
      context.dispatch('setIsLoading', true)
      axios({
        url: 'orders/deleteItem',
        method: 'DELETE',
        headers: { access_token: localStorage.getItem('access_token') },
        data: {
          ProductId: payload.ProductId
        }
      })
        .then(() => {
          context.dispatch('fetchCartItems')
        })
        .catch(err => {
          context.dispatch('setIsLoading', false)
          console.log(err)
        })
    },
    fetchWishlists (context) {
      context.dispatch('setIsLoading', true)
      axios({
        url: '/wishlists',
        method: 'GET',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          context.commit('setWishlists', data.data)
          context.dispatch('setIsLoading', false)
        })
        .catch(err => {
          context.dispatch('setIsLoading', false)
          console.log(err)
        })
    },
    addWishlist (context, payload) {
      context.dispatch('setIsLoading', true)
      axios({
        url: '/wishlists',
        method: 'POST',
        headers: { access_token: localStorage.getItem('access_token') },
        data: {
          ProductId: payload.ProductId
        }
      })
        .then(() => {
          context.dispatch('setIsLoading', false)
        })
        .catch(err => {
          context.dispatch('setIsLoading', false)
          console.log(err)
        })
    },
    deleteWishlist (context, payload) {
      context.dispatch('setIsLoading', true)
      axios({
        url: '/wishlists/' + payload.WishlistId,
        method: 'DELETE',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(() => {
          context.dispatch('fetchWishlists')
        })
        .catch(err => {
          context.dispatch('setIsLoading', false)
          console.log(err)
        })
    }
  }
})
