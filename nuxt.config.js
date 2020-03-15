module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ComGo - The Common Good Chain',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description',
        name: 'ComGo - The Common Good Chain',
        content: 'Blockchain para el bien común. Una plataforma única para un responsabilidad social transparente, eficiente y con impacto',
        keywords: 'blockchain, cryptocoins, ong, responsabilidad, transparencia, donativos, español'
      },
      {property: 'og:title', content: 'ComGo - The Common Good Chain.'},
      {property: 'og:description', content: 'Blockchain para el bien común. Una plataforma única para un responsabilidad social transparente, eficiente y con impacto.'},
      {property: 'og:image', content: '../static/management.png'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Mono' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  router: {
    middleware: 'i18n',   // middleware all pages of the application
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        if (to.matched.length < 2) {
          position = { x: 0, y: 0 }
        } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
          position = { x: 0, y: 0 }
        }
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    }
  },
  build: {
    vendor: ['vue-i18n'], // webpack vue-i18n.bundle.js
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faLinkedin', 'faGithub', 'faMediumM']
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far']
      }
    ]
  },
  modules: [
    ['nuxt-buefy', {
      materialDesignIcons: false}],
    ['nuxt-fontawesome'],
    ['@nuxtjs/google-analytics', {
      id: 'UA-96149906-1'
    }]
  ],
  plugins: [
    {src: '~/plugins/vue-typer', ssr: false},
    {src: '~/plugins/vue-smooth-scroll', ssr: false},
    {src: '~/plugins/aos', ssr: false},
    {src: '~/plugins/i18n'}
  ],
  generate: {
    routes: [
      '/',
      '/es',
      '/en',
      '/es/corporate-donors',
      '/en/corporate-donors',
      '/es/host-a-project',
      '/en/host-a-project',
      '/es/blockchain4good/letters',
      '/en/blockchain4good/letters',
      '/es/stop-covid19',
      '/en/stop-covid19'
    ]
  }

}
