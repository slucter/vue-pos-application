<template>
    <div>
        <h1 @click="loginBtn">Login Page</h1><br>
        <p>The requested URL for login was found on this server.</p>
        <hr>
        <p> <i>Apache/2.4.29 (Ubuntu) Server at localhost Port 8080</i></p>
        <br><br><br><br><br>
        <input type="text" v-model="du.username">
        <input type="text" v-model="du.password">
    </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'nf',
  data() {
    return {
      du: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    loginBtn() {
      const dataUser = this.du;
      this.$store.dispatch('actionLogin', dataUser)
        .then((result) => {
          // eslint-disable-next-line no-console
          localStorage.setItem('token', result.data.token);
          this.$router.push('/dashboard');
        });
    },
  },
};
</script>

<style scoped>
input{
    outline: none;
    border: none;
}
</style>
