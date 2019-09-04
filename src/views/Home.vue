<template>
  <div class="home">
    <ProductList></ProductList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import ProductList from "@/components/ProductList/ProductList.vue";

@Component({
  components: {
    HelloWorld,
    ProductList
  }
})
export default class Home extends Vue {}
</script>
