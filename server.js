const express = require('express');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.senFile(path.join(__dirname, 'dist/index.html'));
  });
}

  app.listen(process.env.POST || 3050, () => console.log('Listening'));