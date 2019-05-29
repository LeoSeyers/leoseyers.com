import pkg from './package'

export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:400&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Crimson+Text&display=swap"
      }
    ]
  },

  layoutTransition: "intro",

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#e3e3e3", height: "5px" },

  /*
   ** Global CSS
   */
  css: ["@/assets/scss/main.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~plugins/ga.js", ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa", "@nuxtjs/sitemap"],

  // styleResources: {
  //   scss: [
  //     'assets/scss/main.scss'
  //   ]
  // },

  sitemap: {
    hostname: "https://leoseyers.com"
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
