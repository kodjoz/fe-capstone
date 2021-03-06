import products from './products';
import reviews from './reviews';
import qa from './qa';

const handlers = [
  ...products,
  ...reviews,
  ...qa
];

export default handlers;