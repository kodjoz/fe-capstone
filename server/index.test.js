const axios = require('axios');
const app = require('./app')


const port = 3001;


app.listen(port);


test('Expect the server to respond with success when connecting to root', () => {
  return axios.get('http://localhost:3001/')
    .then((response) => {
      expect(response.status).toBe(200);
    });
});