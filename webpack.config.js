var webpack = require('webpack');

module.exports = {
  // entry: './js/entry.js',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './js/index.js' // Your appʼs entry point
  ],
  output: {
    path: __dirname + '/js/',
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      { test: /\.(css)$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader?importLoaders=1!less-loader' },
      { test: /\.jsx?$/, loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/ },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.less']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};