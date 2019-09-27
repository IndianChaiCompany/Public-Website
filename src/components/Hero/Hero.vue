<template>
  <div class="hero">
    <div class="brandTitle">
      Indian Chai Company
      <p>Cause that makes us Indian</p>
    </div>
    <div class="image">
      <div class="back">
        <img src="assets/hero-back.svg" />
      </div>
      <div class="front">
        <img src="assets/hero-front.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@font-face {
  font-family: tomato;
  src: url(/assets/tomato.otf);
}
.hero {
  padding-top: 100px;
  background: #fdf8f3;
  display: grid;
  .brandTitle {
    align-self: flex-end;
    padding-bottom: 50px;
    position: relative;
    font-family: tomato;
    font-size: 7em;
    font-weight: 600;
    z-index: 100;
    p {
      font-size: 3rem;
      margin: 0;
    }
  }
  .image {
    .back {
      z-index: -1;
      img {
        position: absolute;
        transform: translateX(-50%) translateY(-35%);
        width: 70%;
        height: auto;
      }
    }
    .front {
      position: relative;
      transform: translateX(120%) translateY(0%);
      //   z-index: 20;
      width: 30%;
      height: auto;
    }
  }
}
</style>
