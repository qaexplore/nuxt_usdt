export default {
  mode: 'universal',
  server: {
    host: 'usdt.test.58ex.com',
    port: '8080'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: '~/plugins/element-ui'
    },
    {
      src: '~/plugins/i18n.js'
    }, {
      src: '~/plugins/strow'
    }, {
      src: '~/plugins/language'
    }, {
      src: '~/plugins/dictionary'
    }, {
      src: '~/plugins/filter'
    }, {
      src: '~/plugins/getcarrucy'
    }, {
      src: '~/plugins/scrollbar'
    }
  ],
  router: {
    middleware: 'i18n'
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    'cookie-universal-nuxt',
    ['@nuxtjs/router', {
      keepDefaultRouter: true
    }]
  ],
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
