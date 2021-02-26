const axios = require('axios');

var server = 'http://localhost:3000';

describe('Connect to the API Proxy Server', () => {
  test('Expect the server to respond with Success 200 on a GET request', () => {
    return axios.get(server)
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
      });
  });

  var apiParams = {
    params: {
      page: 1,
      count: 5
    }
  };

  server = server + '/api';

  test('Expect the server to connect to the products endpoint', () => {
    return axios.get(`${server}/products`, apiParams)
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.data).toBeDefined();
      });
  });

  test('Expect the server to connect to the reviews endpoint', () => {
    return axios.get(`${server}/reviews/`, {
      params: {
        page: 1,
        count: 1,
        sort: 'newest',
        product_id: 19089
      }
    })
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.data).toBeDefined();
      });
  });

  test('Expect the server to connect to the Q & A endpoint', () => {
    return axios.get(`${server}/reviews`, {
      params: {
        product_id: 19089,
        page: 1,
        count: 1
      }
    })
    .then((response) => {
      expect(response.status).toBe(200);
      expect(response.statusText).toBe('OK');
      expect(response.data).toBeDefined();
    });
  });

  test('Expect the server to connect to the cart endpoint', () => {
    return axios.get(`${server}/cart`)
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.data).toBeDefined();
      });
  });

  test('Expect the server to connect to the Interactions endpoint', () => {
    return axios.post(`${server}/interactions`)
      .then((response) => {
        expect(response.status).toBe(201);
      })
  });
});
