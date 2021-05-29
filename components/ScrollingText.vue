<template>
  <div class="scroll">
    <span class="text-5xl">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.scroll {
  overflow: hidden;
  position: relative;
  height: 50px;
}
span {
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  line-height: 50px;

  /* Starting position */
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);

  /* Apply animation to this element */
  -moz-animation: scroll-left 10s linear infinite;
  -webkit-animation: scroll-left 10s linear infinite;
  animation: scroll-left 10s linear infinite;
}

/* Move it (define the animation) */
@-moz-keyframes scroll-left {
  0% {
    -moz-transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-30%);
  }
}
@-webkit-keyframes scroll-left {
  0% {
    -webkit-transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-30%);
  }
}
@keyframes scroll-left {
  0% {
    -moz-transform: translateX(100%); /* Browser bug fix */
    -webkit-transform: translateX(100%); /* Browser bug fix */
    transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-30%); /* Browser bug fix */
    -webkit-transform: translateX(-30%); /* Browser bug fix */
    transform: translateX(-30%);
  }
}
</style>
