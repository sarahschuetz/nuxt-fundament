module.exports = {
  borderRadius: {
    none: '0',
  },

  borderWidth: {
    default: '1px',
    0: '0',
  },

  boxShadow: {
    default: 'none',
    none: 'none',
  },

  breakpoints: {
    xs: '320px', // Extra small devices (small phones)
    sm: '576px', // Small devices (large phones)
    md: '768px', // Medium devices (tablets)
    lg: '992px', // Large devices (laptops & small desktops, 992px and up)
    xl: '1200px', // Extra large devices (large desktops, 1200px and up)
  },

  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
  },

  easings: {},

  fontFamily: {
    sans: ['sans-serif'],
    serif: ['serif'],
  },

  schrift: {
    minFontSize: '16px',
    maxFontSize: '18px',
    minRatio: 1.1,
    maxRatio: 1.15,
    scales: [-2, -1, 0, 1, 2, 3, 4, 5, 6],
    minBreakpoint: '320px',
    maxBreakpoint: '1200px',
  },

  fontWeight: {
    normal: '400',
  },

  gitter: {
    cols: 12,
    responsiveCols: {
      xs: '6',
      lg: '12',
    },
    gutterMin: '8px',
    gutterMax: '16px',
    outerGutter: '1rem',
    sectionMaxWidth: false,
  },

  letterSpacing: {
    normal: '0',
  },

  lineHeight: {
    none: '1',
  },

  opacity: {
    0: '0',
    100: '1',
  },
};
