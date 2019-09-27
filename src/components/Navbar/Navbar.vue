<template>
  <div class="navbar flex">
    <div class="branding flex">
      <span>INDIAN</span>
      <div>CHAI COMPANY</div>
    </div>
    <ul class="navLinks flex">
      <li>HOME</li>
      <li>STORE</li>
      <li>BLOGS</li>
      <li>CONTACT</li>
      <li><Login /></li>
      <li class="flex">
        <div class="counter">4</div>
        <img src="../../../public/assets/cartIcon.png" alt="" />
      </li>
      <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
            </div> -->
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Login from "@/components/Login/Login.vue";

@Component({
  components: {
    Login
  }
})
export default class Navbar extends Vue {}
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  z-index: 500;
  width: 100%;
  font-family: "PT Sans Narrow", Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(248, 248, 248);
  .branding {
    font-size: 1.3rem;
    padding-left: 10px;
  }
  span {
    font-weight: bold;
  }
  .navLinks {
    list-style-type: none;
    li {
      font-weight: 100;
      margin: 0 7px;
      padding: 0 0 2px 0;
      animation-duration: 0.5s;
      transition-duration: 0.5s;
      cursor: pointer;
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid black;
      }

      img {
        height: 16px;
      }
      .counter {
        display: flex;
        font-size: 0.8rem;
        margin: 0 5px 0 0;
        background: black;
        color: white;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        text-align: center;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

.flex {
  display: flex;
}
</style>
