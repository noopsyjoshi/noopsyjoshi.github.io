module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
        .use('babel-loader')
        .loader('babel-loader')
        .end()
        .use('vue-svg-loader')
        .loader('vue-svg-loader');
  },
  css: {
    // loaderOptions: {
    //   // pass options to sass-loader
    //   // @/ is an alias to src/
    //   // so this assumes you have a file named `src/variables.sass`
    //   // Note: this option is named as "prependData" in sass-loader v8
    //   sass: { additionalData: '@import "~@/assets/scss/core/base.scss"' },
    //   // by default the `sass` option will apply to both syntaxes
    //   // because `scss` syntax is also processed by sass-loader underlyingly
    //   // but when configuring the `prependData` option
    //   // `scss` syntaxrequiresan semcolo } the end of a statement, while `sass` syntax requires none
    //   // in that case, we can target the `scss` syntax separately using the `scss` option
    //   scss: {
    //     additionalData: '@import "~@/assets/scss/core/base.scss";',
    //   },
    // },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
