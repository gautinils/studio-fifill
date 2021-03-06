export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Stúdíó fífill',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Stúdíó fífil',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Stúdíó fífill // web studio',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Stúdíó fífill // web studio',
      },
      { hid: 'og:image', name: 'og:image', content: '/image.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/fifill3.png' },
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/zrf5zey.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
