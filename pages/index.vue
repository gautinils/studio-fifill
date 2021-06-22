<template>
  <div
    class="container flex flex-col-reverse md:flex-row p-3"
    :class="{ black }"
  >
    <section class="text md:w-1/3 md:p-5 md:pb-10">
      <div class="md:w-2/3 lg:w-2/5 flex flex-col h-full">
        <div class="text-2xl md:text-4xl md:py-6 flex-1 pb-5">
          <p class="leading-none">We create experiences in the digital space</p>
        </div>
        <div
          class="
            flex flex-row
            md:flex-col md:flex-1
            md:py-8
            md:justify-around
            text-xl
            md:text-2xl
          "
        >
          <div class="md:mt-5 md:block hidden">
            <p class="leading-none">Let's work together!</p>
            <img
              :class="black && blackCount >= 2 ? 'visible' : 'invisible'"
              src="/line.png"
              style="height: 13.3px"
            />
          </div>
          <div class="md:mb-4 flex md:items-center">
            <div>
              <p class="leading-none">
                <a id="elsa" href="mailto:elsa@fifill.co">elsa@fifill.co</a>

                <a id="gauti" href="mailto:gauti@fifill.co">gauti@fifill.co</a>
              </p>
            </div>
            <img
              class="pl-7"
              :class="black && blackCount >= 3 ? 'visible' : 'invisible'"
              src="/arrow.png"
            />
          </div>
          <div class="transform md:w-32 md:block hidden leading-none">
            <p>Based in Brussels & Reykjavík</p>
          </div>
        </div>
      </div>
    </section>
    <section class="hero">
      <h1
        class="text-7xl md:text-9xl lg:text-10xl font-medium"
        @mouseover="setBlack()"
        @mouseout="() => (black = !black)"
      >
        <a href="mailto:elsa@fifill.co; gauti@fifill.co"> Stúdíó fífill </a>
      </h1>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      black: false,
      blackCount: 0,
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
  methods: {
    setBlack() {
      this.black = true
      this.blackCount = this.blackCount + 1
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  cursor: url('/fifill2.png'), pointer;
  cursor: -webkit-image-set(url('/fifill2.png') 1x, url('/fifill2.png') 2x),
    auto;

  &#elsa {
    cursor: url('/elsa.png'), pointer;
  }
  &#gauti {
    cursor: url('/gauti.png'), pointer;
  }
}
.container {
  height: 100vh;
  background: linear-gradient(270deg, rgb(240, 235, 38) 0%, #fff 125%);
  min-width: 100%;
  overflow: hidden;
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
  height: 100%;
  h1 {
    -webkit-text-stroke: 1px #222;
    text-align: center;
  }
}
.text {
  color: #222;
  .black & {
    color: #fff;
  }
}
.transform {
  transform: rotate(90deg);
  transform-origin: 33px;
}
</style>
