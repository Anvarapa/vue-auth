<template>
  <nav class="navbar navbar-expand navbar-light fixed-top">
    <div class="container">
      <router-link class="navbar-brand" :to="{name:'Home'}">HOME</router-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto" v-if="!user">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'Login'}">login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'Register'}">sign up</router-link>
          </li>
        </ul>



        <ul class="navbar-nav ml-auto" v-if="user">
          <li class="nav-item">
            <a href="javascript:void(0)" @click="handleClick()" class="nav-link">logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "Nav",

  methods: {
    handleClick() {
      localStorage.removeItem('token')
      this.$store.dispatch('user', null)
    }
  },
  computed:{
    ...mapGetters(['user'])
  }
}
</script>

<style scoped>

</style>
