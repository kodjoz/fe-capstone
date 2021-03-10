import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor,
  fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RelatedProducts from './RelatedProducts';
import { BrowserRouter } from 'react-router-dom';
import handlers from './../mocks/products';


const productData = require('../mocks/products/19089.json');
const relatedData = require('../mocks/products/19089-related.json');

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

it('renders a loading message', async () => {

  render(
    <BrowserRouter>
      <RelatedProducts product_id={19089} product={productData} />
    </BrowserRouter>
  );
  // test that the API call in componentDidMount succeeds and updates link to "Read all 2 reviews"
  await waitFor(() => {
    expect(screen.getByText('RELATED LOADING')).toBeTruthy();
  });
});

it('renders a related products module', async () => {
  server.use(
    rest.get('/api/products/19089/related', (req, res, ctx) => {
      return res(
        ctx.json(relatedData)
      );
    }),
    rest.get('/api/products/:product_id', (req, res, ctx) => {
      return res(
        ctx.json(productData)
      );
    }),
  );
  render(
    <BrowserRouter>
      <RelatedProducts product_id={19089} product={productData} />
    </BrowserRouter>
  );
  // waitFor(() => screen.findByText('Related Loading')).then(( => {

  // }));
  // test that the loading screen disappears
  await waitFor(() => {
    expect(screen.queryByText('RELATED LOADING')).not.toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.queryByText('Related Products')).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.queryByText('Your Outfit')).toBeInTheDocument();
  });
});

it('shows a modal when star buttons are clicked', async () => {
  server.use(
    rest.get('/api/products/19089/related', (req, res, ctx) => {
      return res(
        ctx.json(relatedData)
      );
    }),
    rest.get('/api/products/:product_id', (req, res, ctx) => {
      return res(
        ctx.json(productData)
      );
    }),
  );
  render(
    <BrowserRouter>
      <RelatedProducts product_id={19089} product={productData} />
    </BrowserRouter>
  );
  await waitFor(() => {
    expect(screen.queryByText('RELATED LOADING')).not.toBeInTheDocument();
  });

  fireEvent.click(screen.getByText('x'));
  await waitFor(() => {
    expect(screen.getByText('Comparing')).toBeTruthy();
  });
});
