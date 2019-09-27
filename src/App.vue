<template>
  <div id="app">
    <Navbar class="navbar" />
    <div>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap");
#app {
  font-family: "PT Sans Narrow", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
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
