
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: "Claudia Benito | Front-end Developer",
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'google-site-verification', content: 'hMvPTPU_1B3OvsDWBBV0g0ySj9V0sIrZPASB-6BWDmk'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'decription', content: 'Claudia Benito is a Front End Developer based in Madrid. Technologies: HTML5, CSS3, SCSS, Angular, Vue, Node, Koa, Mongo.' },
      { name: 'twitter:title', content: 'Claudia Benito | Front-end Developer' },
      { name: 'twitter:decription', content: 'Claudia Benito is a Front End Developer based in Madrid. Technologies: HTML5, CSS3, SCSS, Angular, Vue, Node, Koa, Mongo.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/styles.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/visible-onscroll.ts',
    { src: '@/plugins/smooth-scroll-polyfill', ssr: false }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
