const app = require('./app.js')
const port = 3000;

app.listen(port, () => {
  console.log(`Atelier client is listening on ${port}`);
});