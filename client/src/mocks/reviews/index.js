import { rest } from 'msw';

const reviews = [];
const prefix = 'http://localhost/api/reviews';

// API endpoint:
// /api/reviews?product_id=:id&sort=:sort
const relevant19089 = require('./19089-sort-relevant.json');
const helpful19089 = require('./19089-sort-helpful.json');
const newest19089 = require('./19089-sort-newest.json');
const relevant19090 = require('./19090-sort-relevant.json');
const helpful19090 = require('./19090-sort-helpful.json');
const newest19090 = require('./19090-sort-newest.json');
const relevant19378 = require('./19378-sort-relevant.json');
reviews.push(
  rest.get(`${prefix}`, (req, res, ctx) => {
    const id = req.url.searchParams.get('product_id');
    const sort = req.url.searchParams.get('sort');
    // const page = req.url.searchParams.get('page');
    // const count = req.url.searchParams.get('count');
    if (sort === 'helpful') {
      switch (id) {
      case '19089':
        return res(ctx.json(helpful19089));
      case '19090':
        return res(ctx.json(helpful19090));
      case '19378':
        return res(ctx.json(relevant19378));
      default:
        throw Error('unknown params passed to msw mock server');
      }
    } else if (sort === 'newest') {
      switch (id) {
      case '19089':
        return res(ctx.json(newest19089));
      case '19090':
        return res(ctx.json(newest19090));
      case '19378':
        return res(ctx.json(relevant19378));
      default:
        throw Error('unknown params passed to msw mock server');
      }
    } else {
      // sort = 'relevant'
      switch (id) {
      case '19089':
        return res(ctx.json(relevant19089));
      case '19090':
        return res(ctx.json(relevant19090));
      case '19378':
        return res(ctx.json(relevant19378));
      default:
        throw Error('unknown params passed to msw mock server');
      }
    }
  })
);

// API endpoint:
// /api/reviews/meta?product_id=:id
const meta19089 = require('./19089-meta.json');
const meta19387 = require('./19378-meta.json');
reviews.push(
  rest.get(`${prefix}/meta`, (req, res, ctx) => {
    const id = req.url.searchParams.get('product_id');
    if (id === '19089') {
      return res(ctx.json(meta19089));
    } else if (id === '19378') {
      return res(ctx.json(meta19387));
    } else {
      throw Error(`product_id ${id} unknown to msw mock server`);
    }
  })
);



export default reviews;
