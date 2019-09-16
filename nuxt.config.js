import { headConfig }  from "./plugins/head";

export default {
  mode: "universal",

  head: headConfig,

  layoutTransition: "intro",

  loading: { color: "#e3e3e3", height: "5px" },

  css: ["@/assets/scss/main.scss"],

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/sitemap",
    "nuxt-webfontloader"
  ],

  webfontloader: {
    google: {
      families: ["Roboto:400&display=swap", "Crimson+Text&display=swap"]
    }
  },

  sitemap: {
    hostname: "https://leoseyers.com"
  }
};