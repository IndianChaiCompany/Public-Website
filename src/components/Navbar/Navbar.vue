<template>
  <div class="navbar flex big">
    <div class="branding navItem flex">
      <span>INDIAN</span>
      <div>CHAI COMPANY</div>
    </div>
    <ul class="navLinks navItem flex">
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
export default class Navbar extends Vue {
  mounted() {
    document.addEventListener("scroll", () => {
      const scrollPosition = document.documentElement!.scrollTop;

      if (scrollPosition > 50) {
        document.querySelector(".navbar")!.classList.remove("big");
      } else {
        document.querySelector(".navbar")!.classList.add("big");
      }
    });
  }
}
</script>

<style scoped lang="scss">
.big {
  background: #fdf8f3 !important;
  padding: 30px !important;
  padding-bottom: 0 !important;
  .branding {
    font-size: 2em !important;
  }
  .navLinks {
    font-size: 1.5em !important;
    .counter {
      transform: translateY(3px);
    }
    img {
      height: 22px !important;
      transform: translateY(3px);
    }
  }
}
.navbar {
  position: fixed;
  padding: 0 30px;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;
  font-family: "PT Sans Narrow", Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(248, 248, 248);
  transition: 0.5s;

  .branding {
    font-size: 1.3rem;
    padding-left: 10px;
    span {
      font-weight: bold;
    }
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
