import { rest } from 'msw';

const products = [];
let prefix = 'http://localhost/api/products';

// API endpoint:
// /api/products/:id
// pull in the saved JSON response from file
const product19089 = require('./19089.json');
// what is the path of the request? (not including query params)
// do not do this: `${prefix}/19089?param=value
let path = `${prefix}/19089`;
// create a handler for that path
// similar to Express style routes
// first argument is the path, second is callback
let handler = rest.get(path, (req, res, ctx) => {
  // this simply sends the data in this variable as the response in JSON format
  return res(ctx.json(product19089));
});
// add this handler to the list of registered handlers
products.push(handler);

// same process, with a different file for a different product id
const product19378 = require('./19378.json');
path = `${prefix}/19378`;
handler = rest.get(path, (req, res, ctx) => {
  return res(ctx.json(product19378));
});
products.push(handler);

// API endpoint:
// /api/products/:id/styles
const product19089styles = require('./19089-styles.json');
path = `${prefix}/19089/styles`;
handler = rest.get(path, (req, res, ctx) => {
  return res(ctx.json(product19089styles));
});
products.push(handler);

const product19378styles = require('./19378-styles.json');
path = `${prefix}/19378/styles`;
handler = rest.get(path, (req, res, ctx) => {
  return res(ctx.json(product19378styles));
});
products.push(handler);

// API endpoint:
// /api/products/:id/related
const related19089 = require('./19089-related.json');
path = `${prefix}/19089/related`;
handler = rest.get(path, (req, res, ctx) => {
  return res(ctx.json(related19089));
});
products.push(handler);


const related19378 = require('./19378-related.json');
path = `${prefix}/19378/related`;
handler = rest.get(path, (req, res, ctx) => {
  return res(ctx.json(related19378));
});
products.push(handler);

// API endpoint:
// /api/qa/questions?product_id=:id&page=:page&count=:count
const questions19089p1c4 = require('../qa/19089-page-1-count-4.json');
const questions19089p1c999 = require('../qa/19089-page-1-count-999.json');
const questions19378p1c4 = require('../qa/19378-page-1-count-4.json');
const questions19378p1c999 = require('../qa/19378-page-1-count-999.json');

// dealing with query params
// do NOT include query params in the path for the route
products.push(
  rest.get(`${prefix}/questions`, (req, res, ctx) => {
    // handle query params INSIDE the handler
    const id = req.url.searchParams.get('product_id');
    // comment out page variable - not used for now
    // const page = req.url.searchParams.get('page');
    const count = req.url.searchParams.get('count');
    // query params are STRINGS - '4', not 4
    let data;
    switch (id) {
    case '19089':
      data = count === '4' ? questions19089p1c4 : questions19089p1c999;
      return res(ctx.json(data));
    case '19378':
      data = count === '4' ? questions19378p1c4 : questions19378p1c999;
      return res(ctx.json(data));
    default:
      throw Error(`params "id: ${id}, count: ${count}" do not match those known to msw mock server`);
    }
  })
);



prefix = 'http://localhost/api/reviews';

// API endpoint:
// /api/reviews?product_id=:id&sort=:sort
const relevant19089 = require('../reviews/19089-sort-relevant.json');
const helpful19089 = require('../reviews/19089-sort-helpful.json');
const newest19089 = require('../reviews/19089-sort-newest.json');
const relevant19090 = require('../reviews/19090-sort-relevant.json');
const helpful19090 = require('../reviews/19090-sort-helpful.json');
const newest19090 = require('../reviews/19090-sort-newest.json');
const relevant19378 = require('../reviews/19378-sort-relevant.json');
products.push(
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
const meta19089 = require('../reviews/19089-meta.json');
const meta19387 = require('../reviews/19378-meta.json');
products.push(
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


export default products;
