<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign Up</h3>
    <div class="form-group">
      <label>User Name</label>
      <input type="text" class="form-control" v-model="user_name" placeholder="User Name">
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="email" placeholder="Email">
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password">
    </div>

    <div class="form-group">
      <label>Reaped Password</label>
      <input type="password" class="form-control" :class="{reapet: validation === true}" v-model="reapet_password"
             placeholder="Reaped Password">
      <span v-if="validation===true" style="color:red" >Wrong password</span>
    </div>

    <button class="btn btn-primary btn-block">Sign Up</button>
  </form>
</template>

<script>

import axios from 'axios'

export default {
  name: "Register",
  data() {
    return {
      validation: false,
      user_name: '',
      email: '',
      password: '',
      reapet_password: '',
    }
  },
  methods: {
    async handleSubmit() {
      if (this.reapet_password !== this.password) {
        this.validation = true
      } else {
        await axios.post('signup', {
          username: this.user_name,
          password: this.password,
          email: this.email,
        });
        this.$router.push('/login')
        this.validation = false
      }
    }
  }
}
</script>

<style scoped>
.reapet {
  border-color: red;
}
</style>
