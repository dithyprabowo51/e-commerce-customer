<template>
  <div id="app">
    <Nav v-if="showNav"></Nav>
    <router-view/>
    <Footer v-if="showFooter"></Footer>
    <Loading v-if="isLoading"></Loading>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import Loading from './components/Loading.vue'
export default {
  components: { Nav, Footer, Loading },
  computed: {
    showNav () {
      return this.$route.path !== '/login' && this.$route.path !== '/register'
    },
    showFooter () {
      return this.$route.path !== '/login' && this.$route.path !== '/register'
    },
    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style>
</style>
