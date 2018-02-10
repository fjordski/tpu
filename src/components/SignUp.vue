<template lang="pug">
.sign-up
  h3 So you want to be a trash panda, huh?
  .container.well
    input(v-model='email', type='text' placeholder='Email')
    input(v-model='password', type='password' placeholder='Password')
    button.btn.btn-primary(@click='signUp') Sign Up
    p
    | or go back to&nbsp;
    router-link(to='/login') login.
</template>
<script>
import firebase from 'firebase';

export default {
  name: 'signUp',
  data: () => ({
    email: '',
    password: '',
  }),
  computed: {

  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace('profile');
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === 'auth/weak-password') {
            alert('The password is too weak.');
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
.sign-up {
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
