<template>
  <div class="scrolling-text m-4">
    <div class="scroll">
      <span class="text-4xl">{{ text }}&nbsp;</span>
      <span class="text-4xl">{{ text }}&nbsp;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    left: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.scrolling-text {
  display: flex;
  position: relative;
  height: 50px;
  overflow: hidden;
}
.scroll {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  transform: scale(2);
  span {
    display: flex;
    animation: scroll-left 8s infinite linear;
  }
}

@keyframes scroll-left {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
