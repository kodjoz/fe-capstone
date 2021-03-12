const app = require('./app.js');
const port = 3000;
const fs = require('fs');
const https = require('https');

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/zaphcast.com/privkey.pem', 'utf8');
// const certificate = fs.readFileSync('/etc/letsencrypt/live/zaphcast.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/zaphcast.com/chain.pem', 'utf8');

app.listen(port, () => {
  console.log(`Atelier client is listening on ${port}`);
});

https.createServer({
  key: privateKey,
  cert: ca
}, app).listen(port);
