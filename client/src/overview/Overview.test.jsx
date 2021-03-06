import React from 'react';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Overview from './Overview';
import { BrowserRouter } from 'react-router-dom';
import handlers from './../mocks/products';

const productData = require('../mocks/products/19089.json');

// import all the mock handlers we created
const server = setupServer(
  ...handlers
);

beforeAll(() => {
  // start the server before the tests run
  server.listen({
    // error if there is a network request that isn't covered by the mocks
    onUnhandledRequest: 'error'
  });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

it('renders the Overview module', async () => {
  render(
    <BrowserRouter>
      <Overview product_id={19089} product={productData} />
    </BrowserRouter>
  );
  // wait for appearance inside an assertion
  // test that the API call in componentDidMount succeeds and updates link to "Read all 2 reviews"
  await waitFor(() => {
    expect(screen.getByText('Read all 2 reviews')).toBeTruthy();
  });
});
