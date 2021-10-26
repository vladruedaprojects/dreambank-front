import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - DreamBank',
    title: 'DreamBank',
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
    '@fortawesome/fontawesome-free/css/all.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/ui.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  router: {
    middleware: ['auth']
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/css/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      options: {
        customProperties: true
      },
      themes: {
        light: {
          primary: '#0147cb', // #0147cb // #0949cd // #0b4ecd
          accent: colors.grey.darken3,
          secondary: '#022a5b', // #022a5b
          menuDarkColor: '#184b7e',
          disabledColor: '#ccdaf5',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.red.lighten1,
          success: '#00f2e6' // #00f2e6 // #00bdc0
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/login'
    },
    localStorage: true, // REALLY not secure, so nah
    resetOnError: true, // kick the user if any error happens w/ the auth
    strategies: {
      local: {
        cookie: false,
        user: {
          property: 'user'
        },
        token: {
          property: 'token'
        },
        endpoints: {
          login: {
            url: '/user/signin',
            method: 'post'
          },
          logout: {
            url: '/user/logout',
            method: 'post'
          },
          user: false
          /* ,
          user: {
            url: '/user/auth',
            method: 'get',
            propertyName: 'user'
          } */
        },
        rewriteRedirects: true,
        fullPathRedirect: true
      }
    }
  },

  axios: {
    baseURL: process.env.API_URI, // Used as fallback if no runtime config is provided
    credentials: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
