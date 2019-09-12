<template>
  <div class="box">
    <div class="futureImage">
      <img
        :src="data.productIconURL"
        alt="data.productIconURL"
        srcset=""
        v-if="data.productIconURL"
      />
    </div>
    <h1>{{ data.name }}</h1>
    <h4>{{ data.summary }}</h4>
    <a href="#"><h1 class="price">Rs.499</h1></a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { IProduct } from "../../../../Common/IProducts";

@Component
export default class Product extends Vue {
  @Prop({ type: Object as () => IProduct }) readonly data!: IProduct;
}
</script>

<style lang="scss">
.box {
  border: solid 5px black;
  padding: 20px;
  margin: 20px;
  /* height: 250px; */
  height: 100%;
}
.price {
  margin-top: 40px;
  background: black;
  color: white;
}
.futureImage {
  margin: 0;
  display: inline-block;
  background: gray;
  height: 50px;
  width: 50px;
  img {
    width: 100%;
    height: 100%;
  }
}
h1 {
  margin: 0;
}
a {
  text-decoration: none;
  color: white;
}
</style>
