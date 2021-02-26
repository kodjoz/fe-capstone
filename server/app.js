const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const github = require('./config');

const app = express();

// create an options variable for the proxy
// whenever you send a request to the '/api' endpoint it automatically gets routed to the API server
const options = {
  target: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe',
  changeOrigin: 'true',
  headers: {
    'Authorization': github.token
  },
  pathRewrite: {
    '^/api/': '/'
  },
  logLevel: 'debug',
};
// create the proxy
app.use(cors());
const proxy = createProxyMiddleware(options);
// middleware
// use the proxy and create the '/api' endpoint that communicates with our actual API
app.use('/api/**', proxy);
// set up body-parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, '/../client/dist/')), (req, res, next) => {
  // This is needed, couldn't find any docs supporting the status that express.static is sending to the client
  res.status(200).send('OK');
  next();
});
//console.log('Path to static files', path.join(__dirname, '/../client/dist/'))

module.exports = app;
