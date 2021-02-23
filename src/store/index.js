import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    banners: [],
    categories: []
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
    }
  },
  actions: {
    setIsLoading (context, payload) {
      context.commit('setIsLoading', payload)
    },
    fetchAllBanners (context) {
      axios({
        url: '/banners',
        method: 'GET',
        headers: { access_token: localStorage.getItem('access_token') }
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
        method: 'GET',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          context.commit('setBanners', data.data)
        })
        .catch(err => {
          const obj = [{
            image_url: false
          }]
          context.commit('setBanners', obj)
          console.log(err)
        })
    },
    fetchAllCategories (context) {
      axios({
        url: '/categories',
        method: 'GET',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          context.commit('setCategories', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
