<template>
  <div class="productTiles">
    <div class="items">
      <div class="tile" v-for="(p, i) in allProducts" :key="i">
        <img :src="p.productIconURL" :alt="p.productIconURL" class="image" />
        <div class="content">
          <div class="text">
            {{ p.summary }}
          </div>
          <div class="button">
            Get Now
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { IProduct } from "../../../Common/IProducts";

@Component
export default class ProductTiles extends Vue {
  get allProducts(): IProduct[] {
    return this.$store.getters.allProducts;
  }
}
</script>

<style lang="scss" scoped>
.productTiles {
  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    .tile {
      position: relative;
      display: grid;
      align-items: center;
      justify-content: center;
      padding: 80px;
      .image {
        opacity: 1;
        display: block;
        width: 100%;
        max-width: 300px;
        height: auto;
        transition: 0.5s ease;
        backface-visibility: hidden;
        border-radius: 50%;
      }
      .content {
        transition: 0.5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
        z-index: 2;
      }

      // &:hover .image {
      //   opacity: 0.3;
      // }

      // &:hover .content {
      //   opacity: 1;
      // }

      .text {
        background-color: #888888;
        color: white;
        font-size: 16px;
        padding: 16px 32px;
      }
      .button {
        color: white;
        background: black;
        padding: 20px;
        border: 2px solid black;
        transition-duration: 0.4s;

        &:hover {
          color: black;
          background: white;
        }
      }

      &:nth-child(1) {
        background-color: rgb(227, 244, 255);
      }
      &:nth-child(2) {
        background-color: rgb(232, 236, 252);
      }
      &:nth-child(3) {
        background-color: rgb(233, 254, 255);
      }
      &:nth-child(4) {
        background-color: rgb(205, 225, 228);
      }
      &:nth-child(5) {
        background-color: rgb(232, 221, 255);
        grid-row: 2;
        grid-column: 2 / span 2;
      }
    }
  }
}
</style>
