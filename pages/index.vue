<template>
  <div class="container" :class="{ black }" @scroll="handleScroll">
    <section class="hero">
      <h1 class="text-6xl md:text-9xl font-medium">
        <span
          @mouseover="() => (black = true)"
          @mouseout="() => (black = false)"
        >
          Stúdíó fífill
        </span>
      </h1>
      <div class="work-with-us w-full mt-5" :class="!black ? 'invisible' : ''">
        <scrolling-text text="Let's work together // Let's work together //" />
        <scrolling-text
          text="Send us a line // Send us a line // Send us a line // Send us a line //"
        />
      </div>
    </section>

    <section class="text text-xl p-5" :class="{ visible: showText }">
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
    background: #000;
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
    -webkit-text-stroke: 1px black;
    cursor: pointer;
  }
}
.text {
  transform: translateX(-500px);
  opacity: 0;
  transition: all 0.95s cubic-bezier(0.475, 0.425, 0, 0.99) 0s;
  display: flex;
  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
