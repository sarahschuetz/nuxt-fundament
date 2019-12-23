import axios from 'axios';

// eslint-disable-next-line
require('dotenv').config();

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',

    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',

    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    // proxyHeaders: false
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend() {},
  },

  generate: {
    routes: async () => {
      const { data } = await axios.post(
        process.env.BACKEND_URL + process.env.GRAPHQL_PATH,
        {
          query: '{ entries(section: []) { uri }}',
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
          },
        },
      );

      return data.data.entries
        .filter((entry) => entry.uri !== null)
        .map((entry) => {
          if (entry.uri === '__home__') {
            return '/';
          }
          return `/${entry.uri}`;
        });
    },
  },
};
