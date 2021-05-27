<template>
  <div class="container" :class="{ black }">
    <h1
      class="text-9xl font-medium"
      @mouseover="() => (black = true)"
      @mouseout="() => (black = false)"
    >
      Stúdíó fífill
    </h1>
    <div class="text p-5">
      <p>Design studio based in</p>
      <p>Brussels & Reykjavík</p>
      <p>elsa@fifill.co</p>
      <p>gauti@fifill.co</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      black: false,
    }
  },
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  background: linear-gradient(#f0eb269c, #fff);
  min-width: 100vw;
}
.black {
  background: black;
}
h1 {
  color: #f0eb26;
  text-align: center;
  margin-top: 20%;
  -webkit-text-stroke: 1px black;
  font-family: antique-olive-compact, sans-serif;
  font-style: italic;
  cursor: pointer;
}
</style>
