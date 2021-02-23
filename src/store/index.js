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
      axios({
        url: '/banners?status=true',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('setBanners', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchBannersByCategory (context, payload) {
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
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchAllCategories (context) {
      axios({
        url: '/categories',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('setCategories', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProducts (context, payload) {
      axios({
        url: '/products?CategoryId=' + payload.CategoryId,
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCartItems (context) {
      axios({
        url: '/orders',
        method: 'GET',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          context.commit('setCartItems', data.data.Products)
        })
        .catch(err => {
          context.commit('setCartItems', [])
          console.log(err)
        })
    },
    addCartItem (context, payload) {
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
        })
        .catch(err => {
          console.log(err)
        })
    },
    reduceQuantity (context, payload) {
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
          console.log(err)
        })
    },
    addQuantity (context, payload) {
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
          console.log(err)
        })
    },
    deleteCartItem (context, payload) {
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
          console.log(err)
        })
    },
    fetchWishlists (context) {
      axios({
        url: '/wishlists',
        method: 'GET',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          context.commit('setWishlists', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addWishlist (context, payload) {
      axios({
        url: '/wishlists',
        method: 'POST',
        headers: { access_token: localStorage.getItem('access_token') },
        data: {
          ProductId: payload.ProductId
        }
      })
    },
    deleteWishlist (context, payload) {
      axios({
        url: '/wishlists/' + payload.WishlistId,
        method: 'DELETE',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(() => {
          context.dispatch('fetchWishlists')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
