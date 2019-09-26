<template>
  <div class="home">
    <ProductList class="section"></ProductList>
    <ProductTiles class="section"></ProductTiles>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import ProductList from "@/components/ProductList/ProductList.vue";
import ProductTiles from "@/components/ProductTiles/ProductTiles.vue";

@Component({
  components: {
    HelloWorld,
    ProductList,
    ProductTiles
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.section {
  height: 80vh;
}
</style>
