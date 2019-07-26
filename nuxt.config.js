export default {
  mode: 'universal',
  server: {
    host: 'usdtlocal.test.58ex.com',
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
    }],
    script: [{
      src: '/js/jquery-3.2.1.min.js'
    },
    {
      src: '/js/charting_library/charting_library.min.js'
    }, {
      src: '/js/zlib.pretty.js'
    }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3c8e75'
  },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    './assets/css/icon/iconfont.css',
    './assets/icon/iconfont.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
    src: '~/plugins/element-ui',
    ssr: true
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
    src: '~/plugins/scrollbar'
  }, {
    src: '~/plugins/stslider'
  }, {
    src: '~/plugins/toast'
  }, {
    src: '~/plugins/emerge'
  }, {
    src: '~/plugins/qrcode',
    ssr: false
  }, {
    src: '~/plugins/history_list',
    ssr: false
  }
    , {
    src: '~/plugins/regular',
    ssr: false
  }, {
    src: '~/plugins/swap',
    ssr: false
  }],
  router: {
    middleware: ['i18n']
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
    extend(config, ctx) { }
  }
}
