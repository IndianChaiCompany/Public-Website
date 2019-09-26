import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase/app";
import "firebase/auth";
import { IProduct } from "Common/IProducts";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {} as firebase.User,
    allProducts: [] as IProduct[],
    product: {} as IProduct
  },
  mutations: {
    userUpdated: function(state, newUser) {
      state.user = newUser;
    },
    allProductsUpdated: function(state, productList) {
      state.allProducts = productList;
    }
  },
  getters: {
    currentUser: function(state) {
      return state.user;
    },
    allProducts: function(state) {
      return state.allProducts;
    }
  },
  actions: {}
});
