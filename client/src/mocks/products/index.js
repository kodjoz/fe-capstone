import { rest } from 'msw';

const products = [];
const prefix = 'http://localhost/api/products';

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
products.push(product19089styles);

const product19378styles = require('./19378-styles.json');
path = `${prefix}/19378/styles`;
handler = rest.get(path, (req, res, ctx) => {
  return res(ctx.json(product19378styles));
});
products.push(product19378styles);

// API endpoint:
// /api/products/:id/related
const related19089 = require('./19089-related.json');
path = `${prefix}/19089/related`;
handler = rest.get(path, (req, res, ctx) => {
  return res(ctx.json(related19089));
});
products.push(related19089);


const related19378 = require('./19378-related.json');
path = `${prefix}/19378/related`;
handler = rest.get(path, (req, res, ctx) => {
  return res(ctx.json(related19378));
});

export default products;
