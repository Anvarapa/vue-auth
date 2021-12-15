<template>
  <div>
    <div v-if="user">
      <h3 v-for="(item) in user" :key="item.name">hi, {{ item.domain }}</h3>
    </div>

    <h3 v-if="!user">YOU ARE NOT LOGGED IN</h3>
  </div>
</template>

<script>

console.log("home page");
import {mapGetters} from 'vuex'
export default {
  name: "Home",
  computed:{
    ...mapGetters(['user'])
  }
}
</script>

<style scoped>

</style>
