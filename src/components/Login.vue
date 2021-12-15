<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <div class="form-group">
      <label>User Name</label>
      <input type="text" class="form-control" placeholder="user name"  v-model="username">
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" placeholder="Password"  v-model="password">
    </div>
    <span v-if="validation===true">не правильно набрен логин или пароль</span>
    <button class="btn btn-primary btn-block">Login</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: "Login",
  data() {
    return {
      validation: false,
      username: '',
      password: '',
    }
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post('auth/signin', {
        username: this.username,
        password: this.password,

      });
      localStorage.setItem('token', response.data.accessToken)
      this.$store.dispatch('user', response.data.user)
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.wrongPassword{
  color: red;
}
</style>
