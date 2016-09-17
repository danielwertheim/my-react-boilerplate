var path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  env = require('./env.config');

console.log(env);

var bundles = {
  'react': ['react', 'react-dom', 'react-router'],
  'vendors': ['bootstrap'],
  'app': ['./app.js']
};

var plugins = [
  new webpack.DefinePlugin({
    __DEV__: !env.isProduction,
    'process.env': {
      'NODE_ENV': JSON.stringify(env.name)
    }
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jQuery'
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: ['app', 'react', 'vendors']
  }),
  new ExtractTextPlugin(env.isProduction ? '[name].[hash].css' : '[name].css', { allChunks: true }),
  new HtmlWebpackPlugin({
    template: 'index.html',
    favicon: 'favicon.ico'
  })
];

if (env.isProduction) {
  plugins.push(new webpack.NoErrorsPlugin());
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true
    },
    sourcemap: false
  }));
}

if (env.isServing) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
  target: 'web', //https://webpack.github.io/docs/testing.html#compile-and-test
  context: env.paths.srcDir,
  watch: env.isServing,
  bail: !env.isServing,
  debug: env.isServing, //Switch loaders to debug mode
  devtool: env.isServing
    ? '#eval-source-map' //less source maps only works with source-map or inline 
    : '#source-map',
  devServer: {
    colors: true,
    noInfo: true,
    hot: false, //do not touch. Breakes react hot-reloading
    inline: true,
    historyApiFallback: true,
    port: 3000,
    open: true
  },
  entry: bundles,

  resolve: {
    extensions: ['', '.js']
  },

  output: {
    filename: env.isProduction ? '[name].[hash].js' : '[name].js',
    chunkFilename: env.isProduction ? '[id].[hash].chunk.js' : '[id].chunk.js',
    path: env.paths.distDir,
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        exclude: /node_modules/,
        loader: 'file?name=grpx/[name].[hash].[ext]'
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?name=fonts/[name].[hash].[ext]'
      },
      {
        test: /(\.css|\.less)$/,
        // exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(['css-loader?sourceMap', 'less-loader?sourceMap']) //https://github.com/webpack/less-loader#source-maps
      }
    ]
  },

  plugins: plugins
};