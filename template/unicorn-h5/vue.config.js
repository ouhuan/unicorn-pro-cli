module.exports = {
  lintOnSave: false,
  publicPath: '/',
  assetsDir: 'static',
  filenameHashing: true,
  productionSourceMap: false,

  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'stage') {
      config.devtool('source-map');
      config.optimization.minimize(true);
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [],
      },
    },
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false,
    },
  },
};
