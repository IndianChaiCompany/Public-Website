<template>
  <div id="app">
    <Navbar class="navbar" />
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
.navbar {
  position: fixed;
  width: 100%;
  z-index: 500;
}
</style>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Navbar from "./components/Navbar/Navbar.vue";

@Component({
  components: { Navbar }
})
export default class App extends Vue {}
</script>
