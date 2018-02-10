<template lang="pug">
.login
  h3 Sign In
  .container.well
    input(v-model='email', type='text' placeholder='Email')
    input(v-model='password', type='password' placeholder='Password', @keyup.enter='signIn')
    button.btn.btn-primary(@click='signIn', @keyup.enter='signIn') Log In
    p
    | Don't have an account?  You can&nbsp;
    router-link(to='/sign-up') create one.
</template>
<script>
import firebase from 'firebase';

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: '',
  }),
  computed: {

  },
  methods: {
    login() {
      this.$router.replace('/about');
    },
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace('profile');
        })
        .then(() => {
          this.$store.commit('setUser');
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
  },
  mounted() {

  },
  components: {

  },
};
</script>
<style lang="scss" scoped>
.login {
  margin-top: 40px;
  input {
    display: block;
    margin: 10px auto;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
    a {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
