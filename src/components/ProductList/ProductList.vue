<template>
  <div class="myGrid">
    <div v-for="(product, key) in ProductList" :key="key">
      <Product :data="product"></Product>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { IProduct } from "../../../../Common/IProducts";
import Product from "./Product.vue";

@Component({
  components: {
    Product
  }
})
export default class ProductList extends Vue {
  ProductList: IProduct[] = [] as IProduct[];

  getAllProducts() {
    let db = firebase.firestore();
    db.collection("Product").onSnapshot(snapshot => {
      this.ProductList = [];
      snapshot.forEach(product => {
        this.ProductList.push(product.data() as IProduct);
      });
    });
  }

  mounted() {
    this.getAllProducts();
  }
}
</script>

<style>
.myGrid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
