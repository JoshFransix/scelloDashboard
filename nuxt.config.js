
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - scelloDashboard',
    title: 'scelloDashboard',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
  ],

  purgeCSS: {
    whitelistPatterns: [/fa.*/]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Google Fonts
    '@nuxtjs/google-fonts',
    // Vuetify
    ['@nuxtjs/vuetify', { optionsPath: '~/vuetify.options.js' }],
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],
  // Port
  server: {
    port: process.env.PORT || 2500
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.APP_BASE_URL
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
  },

  googleFonts: {
    families: {
      Poppins: true,
      Lato: true,
      Inter: true,
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    extractCSS: {
      ignoreOrder: true
    },
  },
  loading: {
    color: '#00237b',
    height: '5px'
  }
}
