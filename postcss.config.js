module.exports = {
  plugins: [
    require('postcss-custom-media')({
      importFrom: './src/styles/breakpoints.css',
    }),
    require('postcss-nesting'),
    require('autoprefixer'),
    require('postcss-easings'),
    require('postcss-preset-env'),
    require('./postcss/resolveLocalCustomProperties'),
    require('postcss-color-mod-function'),
  ],
};
