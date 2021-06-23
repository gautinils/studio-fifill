<template>
  <div
    class="
      container
      flex flex-col-reverse
      md:flex-row
      p-5
      justify-around
      md:justify-start
    "
    :class="{ black }"
  >
    <section class="text md:w-1/3 md:p-5 md:pb-10 flex-1 md:flex-none">
      <div class="md:w-2/3 lg:w-2/5 flex flex-col h-full">
        <div class="text-3xl md:text-4xl flex-1">
          <p class="leading-none">We create experiences in the digital space</p>
        </div>
        <div
          class="
            flex flex-row
            md:flex-col
            flex-1
            md:py-8
            justify-between
            md:justify-around
            text-xl
            md:text-2xl
          "
        >
          <div
            class="md:mt-5 md:block absolute md:relative"
            :class="{ hidden: !showLetsWork }"
          >
            <p class="leading-none pb-1">Let's work together!</p>
            <svg
              :class="black && blackCount % 3 !== 2 ? 'visible' : 'invisible'"
              width="229"
              height="23"
              viewBox="0 0 229 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="height: 23px"
            >
              <path
                :class="
                  black && blackCount % 3 === 1 ? 'line-path' : 'line-path'
                "
                d="M2.39453 2.53179C44.6929 2.53179 86.9913 2.53179 129.29 2.53179C152.311 2.53179 179.53 -1.05851 201.896 6.19543C209.939 8.8039 223.264 12.6276 227.209 20.5169"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div
            class="md:mb-4 flex items-end md:items-center flex-1 md:flex-none"
          >
            <div>
              <p class="leading-none mb-6 md:mb-0">
                <a id="elsa" href="mailto:elsa@fifill.co">elsa@fifill.co</a>

                <a id="gauti" href="mailto:gauti@fifill.co">gauti@fifill.co</a>
              </p>
            </div>
            <svg
              class="md:pl-7 arrow w-32 md:w-44"
              :class="
                black && (blackCount % 3 === 2 || blackCount % 3 === 0)
                  ? 'visible'
                  : 'invisible'
              "
              width="177"
              height="96"
              viewBox="0 0 177 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="arrow-path"
                d="M175.225 15.7187C138.782 16.8943 102.887 29.3549 67.3146 36.7013C52.5862 39.7431 37.8289 41.0839 23.0178 43.3625C19.8419 43.8511 4.58638 50.5765 2.03517 48.0253C1.14861 47.1388 17.3066 36.1172 18.6881 35.0361C26.7756 28.7067 34.6487 22.1344 42.6683 15.7187C49.1846 10.5056 71.9448 1.14174 63.6509 2.06329C50.1574 3.56257 33.6474 25.067 23.684 33.0377C17.52 37.9689 9.07046 44.8248 5.03269 51.689C3.53424 54.2363 1.55784 54.6865 5.03269 54.6865C18.2577 54.6865 28.6487 57.1127 40.3369 63.6791C52.7244 70.6384 77.3801 78.888 82.3022 93.6543"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="transform w-32 leading-none self-start md:self-auto">
            <p>Based in Brussels & Reykjavík</p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="
        hero
        flex
        md:flex-col
        md:justify-center
        items-end
        md:items-start
        flex-1
      "
    >
      <h1
        class="text-8xl sm:text-9xl font-medium text-left md:text-center"
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
      showLetsWork: false,
    }
  },
  mounted() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      setTimeout(() => {
        this.blackCount = 1
        this.black = true
        this.showLetsWork = true
        setTimeout(() => {
          this.blackCount = 3
        }, 2000)
      }, 2000)
    }
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
  color: #f0eb26;
  font-family: antique-olive-compact, sans-serif;
  font-style: italic;
  h1 {
    -webkit-text-stroke: 1px #222;
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
  margin-right: -2em;
  @media (min-width: 768px) {
    transform-origin: 37px;
    margin-right: 0;
  }
}

.line-path {
  stroke-dasharray: 230;
  stroke-dashoffset: 0;
  .visible & {
    animation: line 0.2s linear alternate forwards;
  }
}

.arrow {
  min-width: 120px;
  @media (min-width: 768px) {
    min-width: 170px;
  }
}
.arrow-path {
  stroke-dasharray: 430;
  stroke-dashoffset: 0;
  .visible & {
    animation: arrow 0.5s linear alternate forwards;
  }
}

@keyframes line {
  from {
    stroke-dashoffset: 230;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes arrow {
  from {
    stroke-dashoffset: 430;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
