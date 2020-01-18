import axios from 'axios';

// eslint-disable-next-line
require('dotenv').config();

export default {
  mode: 'universal',

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

  loading: { color: '#fff' },

  css: [],

  plugins: [],

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',

    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',

    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',

    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    // Doc: https://github.com/nuxt-community/axios-module
    '@nuxtjs/axios',

    // Doc: https://github.com/nuxt-community/apollo-module
    '@nuxtjs/apollo',
  ],

  axios: {
    // proxyHeaders: false
  },

  apollo: {
    clientConfigs: {
      default: '~/plugins/default-apollo-config.js',
    },
  },

  build: {
    extractCSS: {
      allChunks: true,
    },

    transpile: ['gitter-overlay'],

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
