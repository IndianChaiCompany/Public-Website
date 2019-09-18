import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {} as firebase.User
  },
  mutations: {
    userUpdated: function(state, newUser) {
      state.user = newUser;
    }
  },
  getters: {
    currentUser: function(state) {
      return state.user;
    }
  },
  actions: {}
});
