<template lang="pug">
.signup
  h1 {{ name }}
  .container.well
    RosterList(:roster='roster')
    input(v-model='player', placeholder='Add an item')
    button(@click='addItem') Add item
</template>
<script>
import firebase from 'firebase';
import RosterList from './RosterList';

const config = {
  apiKey: 'AIzaSyAesf5GKaCAlSThVoUYisdfvoKykCFCcHU',
  authDomain: 'trash-pandas.firebaseapp.com',
  databaseURL: 'https://trash-pandas.firebaseio.com',
  projectId: 'trash-pandas',
  storageBucket: 'trash-pandas.appspot.com',
  messagingSenderId: '922063037348',
};

const application = firebase.initializeApp(config);
const db = application.database();

const rosterRef = db.ref('Roster');

export default {
  data: () => ({
    name: 'Roster ',
    // make computed
    actionText: 'Sign up',
    player: '',
  }),
  firebase: {
    roster: rosterRef,
  },
  computed: {

  },
  methods: {
    addItem() {
      alert(this.player)
      console.log(this.$firebaseRefs);
      this.$firebaseRefs.roster.push({
        name: this.player,
      });
    },
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
