<template>
  <div class="home">
    <Hero class="section" />
    <ProductTiles class="section"></ProductTiles>
    <ProductList class="section"></ProductList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import ProductList from "@/components/ProductList/ProductList.vue";
import ProductTiles from "@/components/ProductTiles/ProductTiles.vue";
import Hero from "@/components/Hero/Hero.vue";

@Component({
  components: {
    HelloWorld,
    ProductList,
    ProductTiles,
    Hero
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.section {
  min-height: 90vh;
}
</style>
