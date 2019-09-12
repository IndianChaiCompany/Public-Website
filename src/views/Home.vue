<template>
  <div class="home">
    <h1>INDIAN CHAI COMPANY</h1>
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
