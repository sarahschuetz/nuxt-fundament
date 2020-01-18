/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

const gitterPlugin = require('tailwindcss-gitter');
const schriftPlugin = require('tailwindcss-schrift');
const fundamentConfig = require('./fundament.config');

module.exports = {
  corePlugins: {
    container: false,
    fontSize: false,
  },
  theme: {
    screens: fundamentConfig.breakpoints,
    colors: fundamentConfig.colors,
    borderRadius: fundamentConfig.borderRadius,
    borderWidth: fundamentConfig.borderWidth,
    boxShadow: fundamentConfig.boxShadow,
    fontFamily: fundamentConfig.fontFamily,
    fontWeight: fundamentConfig.fontWeight,
    gitter: fundamentConfig.gitter,
    schrift: fundamentConfig.schrift,
    letterSpacing: fundamentConfig.letterSpacing,
    lineHeight: fundamentConfig.lineHeight,
    opacity: fundamentConfig.opacity,
    width: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '1/10': '10%',
      full: '100%',
      screen: '100vw',
    }),
  },
  variants: {},
  plugins: [
    gitterPlugin(),
    schriftPlugin(),
  ],
};
