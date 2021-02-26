const axios = require('axios');
//const expect = require('chai').expect;
var server = 'http://localhost:3000';

// The first test block tests we can connect to the live server environment
describe('Node API Proxy is connected to HackReactor API Server', () => {
  test('Expect the server to respond with Success 200 on a GET request', () => {
    return axios.get(server)
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
      });
  });

  // adds /api to the server endpoint sow e can do some real tests
  server = server + '/api';

  test('Expect the server to connect to the products endpoint', () => {
    return axios.get(`${server}/products`, {
      params: {
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
  // this will fail until interactions is written
  xtest('Expect the server to connect to the Interactions endpoint', () => {
    return axios.post(`${server}/interactions`)
      .then((response) => {
        expect(response.status).toBe(201);
      });
  });
});
