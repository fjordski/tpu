<template lang="pug">
.profile
  h1 {{ name }}
  .container.well
    p {{ getUser }}
    button(@click='logout') logout
</template>
<script>
import firebase from 'firebase';


export default {
  data: () => ({
    name: 'Welcome to Your Profile!',
  }),
  computed: {
    getUser() {
      return firebase.auth().currentUser.email;
    },
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login');
        this.$store.commit('setUser');
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
@import './static/_variables.scss';

.profile {
  h1 {
    text-transform: uppercase;
    letter-spacing: 2px;
  }
}
</style>
