const pkg = require('./package');


module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'ACNL Modding Info',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css'},
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bulma-tooltip@2.0.2/dist/css/bulma-tooltip.min.css'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  // css: [
  //   // {src: "~/assets/style.css"}
  // ],
  css: [
    '~/css/main.css',
    '~/css/mystyles.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-discord-messages'
    // '~plugins/scrollmenu.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-buefy',
    ['@nuxtjs/google-analytics', {
      id: 'UA-132792196-3'
    }]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
