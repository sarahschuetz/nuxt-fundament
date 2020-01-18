const resolve = require('path').resolve;

module.exports = {

  root: true,

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 9,
    sourceType: 'module',
  },

  extends: [
    'airbnb/base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
  ],

  plugins: [
    'vue',
  ],

  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~': __dirname,
              '~static': resolve(__dirname, 'static'),
              '~assets': resolve(__dirname, 'assets'),
              '~plugins': resolve(__dirname, 'plugins'),
              '~store': resolve(__dirname, '.nuxt/store'),
              '~router': resolve(__dirname, '.nuxt/router'),
              '~pages': resolve(__dirname, 'pages'),
              '~components': resolve(__dirname, 'components'),
            },
          },
        },
      },
    },
  },

  rules: {
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never',
    }],

    'max-len': ['error', {
      'comments': 160,
      'ignoreTemplateLiterals': true,
      'ignoreStrings': true,
      'ignorePattern': 'd=\".*\"', // ignore long svg path descriptions
    }],

    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
}
