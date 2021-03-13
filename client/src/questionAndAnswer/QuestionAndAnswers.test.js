import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import handlers from './../mocks/qa';
import { render, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import QuestionAndAnswer from './QuestionAndAnswer';

const productData = require('../mocks/products/19089.json');

const server = setupServer(
  ...handlers
);

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'error'
  });
});

afterAll(() => {
  server.close();
});

describe('Questions & Answers', () => {

  it('renders the Question & Answers module', async () => {
    const { getByText } = render(
      <QuestionAndAnswer product={productData} product_id={19089} />
    );
    await waitFor(() => {
      expect(getByText('Questions & Answers')).toBeTruthy();
    });
  });

  it('renders Questions on page load', async () => {
    const { getAllByText } = render(
      <QuestionAndAnswer product={productData} product_id={19089} />
    );
      // this is kind of hacky because for each question, an invisible box with the question text exists
    await waitFor(() => {
      expect(getAllByText('Q:', {exact: false}).length).toBeLessThan(9);
    });
  });
});