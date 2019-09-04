<template>
  <div>{{ data }}</div>
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

<style></style>
