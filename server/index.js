const app = require('./app.js');
const fs = require('fs');
const https = require('https');
const config = require('./config');

// set default config values
const defaultConfig = {
  certificateKey: '',
  certificateChain: '',
  httpPort: 3000,
  httpsPort: 3001
};

// no default for Github API token - throw error if not present
// we want to fail early and loud if not present
if (!config.token) {
  console.error('No Github API token present in config.js!');
  throw Error('Missing Github token');
}

// make changes non breaking if config hasn't been updated
let keys = Object.keys(defaultConfig);
keys.forEach((key) => {
  if (!config[key]) {
    console.log(`key "${key}" missing from config file; using default: ${defaultConfig[key] === '' ? 'empty string' : `"${defaultConfig[key]}"` }`);
  }
});


const certificateKey = config['certificateKey'] || defaultConfig['certificateKey'];
const certificateChain = config['certificateChain'] || defaultConfig['certificateChain'];
const httpPort = config['httpPort'] || defaultConfig['httpPort'];
const httpsPort = config['httpsPort'] || defaultConfig['httpsPort'];


app.listen(httpPort, () => {
  console.log(`HTTP client: ACTIVE on port ${httpPort}`);
});

//
try {
  // to run https we need to load the certificate data
  // if it is not present or inaccessible it will throw an error
  const privateKey = fs.readFileSync(certificateKey, 'utf8');
  const ca = fs.readFileSync(certificateChain, 'utf8');
  // create https server if no error has occurred
  https.createServer({
    key: privateKey,
    cert: ca
  }, app).listen(httpsPort, () => {
    console.log(`HTTP client: ACTIVE on port ${httpsPort}`);
  });
} catch (error) {
  console.log(`HTTPS client: NOT ACTIVE on port ${httpsPort}`);
}
