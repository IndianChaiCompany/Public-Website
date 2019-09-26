<template>
  <div class="product">
    {{ product.name }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class ProductDetails extends Vue {
  get product() {
    return this.$store.getters.currentProduct;
  }
}
</script>

<style lang="scss" scoped></style>
