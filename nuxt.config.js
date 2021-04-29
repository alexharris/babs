export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/babs/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'California Birding Hotspots',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable="yes' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles.scss'

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/vue-select'},
    { src: '~plugins/axios'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://i18n.nuxtjs.org/setup
    'nuxt-i18n',
    // Simple usage
    'nuxt-vue-select', 
    // Leaflet
    'nuxt-leaflet'   
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'zh',
        name: 'Chinese'
      },
      {
        code: 'es',
        name: 'Spanish'
      },
      {
        code: 'ru',
        name: 'Russian'
      },
      {
        code: 'fr',
        name: 'French'
      },
      {
        code: 'ko',
        name: 'Korean'
      },                                    
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          title: 'California Birding Hotspots'
        },
        es: {
          title: 'búsqueda de aves en el área de la bahía'
        },
        zh: {
          title: '湾区鸟类搜索'
        },
        ru: {
          title: 'бухта поиск птиц'
        },
        fr: {
          title: 'recherche d\'oiseaux dans la région de la baie'
        },
        ko: {
          title: '베이 지역 조류 검색'
        }
      }
    }
  }  ,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate: {
    dir: 'docs'
  }  
}
