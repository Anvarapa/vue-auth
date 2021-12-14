<template>
  <nav class="navbar navbar-expand navbar-light fixed-top">
    <div class="container">
      <router-link :to="{name:'Home'}"><a href="#" class="navbar-brand">HOME</a></router-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link :to="{name:'Login'}"><a href="#" class="nav-link">Login</a></router-link>

          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Sign out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>

</style>
