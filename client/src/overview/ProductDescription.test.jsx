import React from 'react';
import {cleanup, render} from '@testing-library/react';
import ProductDescription from './ProductDescription';

afterEach(cleanup);

it('renders a product slogan and description', () => {

  const dummyData = {
    slogan: 'Only you can prevent forest fires!',
    description: 'This is the description.'
  };
  const { getByText } = render(<ProductDescription product={dummyData} />);

  const sloganResult = getByText(dummyData.slogan);
  expect(sloganResult).toBeTruthy();

  const descriptionResult = getByText(dummyData.description);
  expect(descriptionResult).toBeTruthy();
});

