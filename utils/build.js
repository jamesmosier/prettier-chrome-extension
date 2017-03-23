var webpack = require('webpack');
var config = require('../webpack.config');

require('./prepare');

webpack(config, function(err) {
  if (err) throw err;
});
