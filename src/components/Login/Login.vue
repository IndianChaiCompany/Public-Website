<template>
  <div class="login">
    <!-- {{user}} -->
    <div @click="loginOrLogout">
      <div v-if="user">{{ user.displayName }}</div>
      <div v-else>LOGIN</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import * as firebase from "firebase/app";
import "firebase/auth";
import undefined from "firebase/auth";
const provider = new firebase.auth.GoogleAuthProvider();

@Component
export default class Login extends Vue {
  get user() {
    return this.$store.getters.currentUser;
  }

  loginOrLogout() {
    if (this.isLoggedIn()) {
      this.logout();
    } else {
      this.login();
    }
  }
  logout() {
    firebase.auth().signOut();
  }
  login() {
    const that = this;
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        if (result != null && result.user != null) {
          // The signed-in user info.
          // that.user = result.user;
          // console.log(that.user.displayName);
        }
      });
  }

  isLoggedIn() {
    let user = this.$store.getters.currentUser;
    // this.user = user;
    if (user && user.displayName) {
      return true;
    }
    return false;
  }

  mounted() {
    const that = this;
    firebase.auth().onAuthStateChanged(function(user) {
      that.$store.commit("userUpdated", user);
      // if (user && user.displayName) {
      //   console.log(user.displayName);
      // }
    });
  }
}
</script>

<style scoped lang="scss">
.login {
  text-transform: uppercase;
}
</style>
