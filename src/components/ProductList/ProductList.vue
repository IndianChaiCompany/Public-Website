<template>
  <div class="myGrid">
    <div class="list">
      <div
        v-for="(product, key) in ProductList"
        :key="key"
        @click="setSelectedItemIndex(key)"
        v-bind:class="{ selected: selectedIndex == key }"
      >
        {{ product.name }}
      </div>
    </div>
    <div>
      <Product :data="selectedProduct"></Product>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { IProduct } from "../../../Common/IProducts";
import Product from "./Product.vue";

@Component({
  components: {
    Product
  }
})
export default class ProductList extends Vue {
  ProductList: IProduct[] = [] as IProduct[];
  selectedProduct: IProduct = {} as IProduct;
  selectedIndex = 0;

  getAllProducts() {
    let db = firebase.firestore();
    db.collection("Product").onSnapshot(snapshot => {
      this.ProductList = [];
      snapshot.forEach(product => {
        this.ProductList.push(product.data() as IProduct);
      });
      this.setSelectedItemIndex(0);
    });
  }

  mounted() {
    this.getAllProducts();
  }

  setSelectedItemIndex(index: number) {
    this.selectedProduct = this.ProductList[index];
    this.selectedIndex = index;
  }
}
</script>

<style lang="scss">
.myGrid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 2vh;
}
.list {
  $selectedColor: rgb(146, 146, 146);
  padding: 40px;
  padding-right: 0;
  // padding-top: 100px;
  line-height: 2em;
  font-size: 1.8em;

  div {
    transition-duration: 0.5s;
    &:hover {
      color: $selectedColor;
    }
  }
  .selected {
    color: $selectedColor;
  }
}
</style>
