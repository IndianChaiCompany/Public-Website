<template>
  <div class="box">
    <div class="futureImage">
      <img
        :src="data.productIconURL"
        alt="data.productIconURL"
        srcset
        v-if="data.productIconURL"
      />
    </div>
    <div class="details">
      <p>{{ data.name }}</p>
      <p>{{ data.summary }}</p>
      <div class="callToAction">Get Now</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { IProduct } from "../../../Common/IProducts";

@Component
export default class Product extends Vue {
  @Prop({ type: Object as () => IProduct }) readonly data!: IProduct;
}
</script>

<style lang="scss">
.box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 20px;
  height: 100%;
  align-items: center;

  .details {
    padding: 0 20px;
    .callToAction {
      padding: 20px;
      border: black 3px solid;
      color: white;
      background: black;
      transition-duration: 0.5s;

      &:hover {
        color: black;
        background: white;
      }
    }
  }
}
.futureImage {
  margin: 0;
  display: inline-block;
  background: gray;
  height: 100%;
  width: 100%;
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
