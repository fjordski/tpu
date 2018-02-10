<template lang="pug">
  #app
    .navigation
      ul.nav.nav-pills
        li
          router-link(to="/")
            | HOME
        li
          router-link(to='/about')
            | ABOUT US
        li
          router-link(to='/roster')
            | ROSTER
        li
          router-link(to='/schedule')
            | {{ getYear }} SCHEDULE
        li(v-if='!$store.getters.getUser')
          router-link(to='/login')
            | SIGN IN
        li(v-if='$store.getters.getUser')
          router-link(to='/profile')
            | PROFILE
    transition(name='fade')
      router-view
</template>

<script>
import moment from 'moment';
// import firebase from 'firebase';

// const config = {
//   apiKey: 'AIzaSyAesf5GKaCAlSThVoUYisdfvoKykCFCcHU',
//   authDomain: 'trash-pandas.firebaseapp.com',
//   databaseURL: 'https://trash-pandas.firebaseio.com',
//   projectId: 'trash-pandas',
//   storageBucket: 'trash-pandas.appspot.com',
//   messagingSenderId: '922063037348',
// };

// const application = firebase.initializeApp(config);
// let db = application.database();

// let rosterRef = db.ref('Roster');

export default {
  data: () => ({
    actionText: null,
    visible: false,
  }),
  // firebase: {
  //   roster: rosterRef,
  // },
  computed: {
    getYear() {
      const md = moment();
      const year = md.year();
      return year;
    },
  },
  methods: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  components: {

  },
};
</script>

<style lang="scss">
@import '../static/_variables.scss';

:root {
  --imgOpacity: 1;
  --imgFilter: 0px;
}

body, html {
  height: 100%;
}

#app {
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  &::after {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: url('./assets/team.jpg');
    background-size: cover;
    opacity: var(--imgOpacity);
    filter: blur(var(--imgFilter));
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .nav-pills {
    display: inline-block;
  }
  .tp-logo {
    max-width: 250px;
  }
  .navigation {
    h1, h2 {
    font-weight: normal;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 30px;
      letter-spacing: 2px;
    }
    a {
      &:hover {
        background: $nav-color;
      }
      &:active {
        color: $main-color;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
