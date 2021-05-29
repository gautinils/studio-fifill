<template>
  <div class="container" :class="{ black }" @scroll="handleScroll">
    <section class="hero">
      <h1 class="text-9xl font-medium">
        <span
          @mouseover="() => (black = true)"
          @mouseout="() => (black = false)"
        >
          Stúdíó fífill
        </span>
      </h1>
      <div class="work-with-us" :class="!black ? 'invisible' : ''">
        <scrolling-text text="Let's work together" />
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
}
.hero {
  min-height: 100vh;
}
.black {
  background: black;
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
.work-with-us {
  color: #f0eb26;
  font-family: antique-olive-compact, sans-serif;
  font-style: italic;
}
h1 {
  color: #f0eb26;
  text-align: center;
  margin-top: 20%;
  -webkit-text-stroke: 1px black;
  font-family: antique-olive-compact, sans-serif;
  font-style: italic;
  span {
    cursor: pointer;
  }
}
</style>
