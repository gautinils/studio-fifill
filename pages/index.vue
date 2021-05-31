<template>
  <div class="container" :class="{ black }" @scroll="handleScroll">
    <section class="hero">
      <div
        class="w-full"
        @mouseover="() => (black = !black)"
        @mouseout="() => (black = !black)"
      >
        <h1 class="text-7xl md:text-9xl font-medium">
          <a href="mailto:elsa@fifill.co; gauti@fifill.co"> Stúdíó fífill </a>
        </h1>
        <div
          class="work-with-us w-full mt-5 md:block hidden"
          :class="!black ? 'invisible' : ''"
        >
          <a href="mailto:elsa@fifill.co; gauti@fifill.co">
            <scrolling-text
              text="Gerum eitthvað saman // Let's work together // Gerum eitthvað saman // Let's work together //"
            />
          </a>
          <a href="mailto:elsa@fifill.co; gauti@fifill.co">
            <scrolling-text
              text="Drop us a line // Sendu okkur línu // Drop us a line // Sendu okkur línu //"
            />
          </a>
        </div>
      </div>
    </section>

    <section class="text text-lg md:text-xl p-5" :class="{ visible: showText }">
      <div>
        <p>Design studio based in</p>
        <p>Brussels & Reykjavík</p>
      </div>
      <div class="pl-20">
        <p>elsa@fifill.co</p>
        <p>gauti@fifill.co</p>
      </div>
    </section>
  </div>
</template>

<script>
import ScrollingText from '~/components/ScrollingText.vue'
export default {
  components: { ScrollingText },
  data() {
    return {
      black: false,
      showText: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.showText = true
        window.removeEventListener('scroll', this.handleScroll)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: linear-gradient(#f0eb26, #fff);
  min-width: 100vw;
  &.black {
    background: #222;
    overflow: hidden;
  }
}
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f0eb26;
  font-family: antique-olive-compact, sans-serif;
  font-style: italic;
  h1 {
    -webkit-text-stroke: 1px #222;
    text-align: center;
  }
}
.text {
  transform: translateX(-500px);
  opacity: 0;
  transition: all 0.95s cubic-bezier(0.475, 0.425, 0, 0.99) 0s;
  display: flex;
  color: #222;
  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
