import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: false,
  state: {
    user: null,
    // bought items
    cart: [],
    // ajax loader
    showLoader: false,
    // selected product
    product: {},
    // all products
    products: [],
    // all manufacturers
    manufacturers: [],
  },
  getters: {
    getUser: state => state.user,
  },
  mutations: {
    setUser: (state) => { state.user = firebase.auth().currentUser; },
  },
});
