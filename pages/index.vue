<template>
  <div class="container p-3" :class="{ black }">
    <div></div>
    <section class="hero">
      <h1
        class="text-7xl md:text-8xl lg:text-9xl font-medium"
        @mouseover="() => (black = !black)"
        @mouseout="() => (black = !black)"
      >
        <a href="mailto:elsa@fifill.co; gauti@fifill.co"> Stúdíó fífill </a>
      </h1>
      <h3
        class="text-3xl md:text-4xl lg:text-5xl font-medium"
        :class="{ invisible: !black }"
      >
        <p>Sendu okkur línu</p>
        <p>Drop us a line</p>
        <p>Rendez-vous nous</p>
      </h3>
    </section>
    <section class="text text-lg md:text-xl p-5">
      <div>
        <p>Design studio based in</p>
        <p>Brussels & Reykjavík</p>
      </div>
      <div class="pl-20">
        <p><a href="mailto:elsa@fifill.co">elsa@fifill.co</a></p>
        <p><a href="mailto:gauti@fifill.co">gauti@fifill.co</a></p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      black: false,
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    title() {
      return this.black
        ? 'contact us // rendez-vous nous // sendu okkur línu'
        : 'Stúdíó fífill'
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  cursor: url('/fifill2.png'), pointer;
}
.container {
  display: flex;
  justify-content: space-between;
  height: 100vh;
  flex-direction: column;
  background: linear-gradient(#f0eb26, #fff);
  min-width: 100%;
  &.black {
    background: #222;
    overflow: hidden;
  }
}
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #f0eb26;
  font-family: antique-olive-compact, sans-serif;
  font-style: italic;
  h1 {
    -webkit-text-stroke: 1px #222;
    text-align: center;
  }
  h3 {
    position: absolute;
    bottom: 5%;
  }
}
.text {
  display: flex;
  color: #222;
}
</style>
