<template lang="pug">
.signup
  h1 {{ name }}
  .container.well
    RosterList(:roster='roster')
</template>
<script>
import RosterList from './RosterList.vue';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAesf5GKaCAlSThVoUYisdfvoKykCFCcHU',
  authDomain: 'trash-pandas.firebaseapp.com',
  databaseURL: 'https://trash-pandas.firebaseio.com',
  projectId: 'trash-pandas',
  storageBucket: 'trash-pandas.appspot.com',
  messagingSenderId: '922063037348',
};

const application = firebase.initializeApp(config);
let db = application.database();

let rosterRef = db.ref('Roster');

export default {
  data: () => ({
    name: 'Roster ',
    // make computed
    actionText: 'Sign up',
  }),
  firebase: {
    roster: rosterRef,
  },
  computed: {

  },
  methods: {

  },
  mounted() {

  },
  components: {
    RosterList,
  },
};
</script>
<style lang="scss" scoped>
.signup {
  h1 {
    text-transform: uppercase;
    letter-spacing: 2px;
  }
}
</style>
