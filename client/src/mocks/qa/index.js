import { rest } from 'msw';

const qa = [];
const prefix = 'http://localhost/api/qa';

// API endpoint:
// /api/qa/questions?product_id=:id&page=:page&count=:count
const questions19089p1c4 = require('./19089-page-1-count-4.json');
const questions19089p1c999 = require('./19089-page-1-count-999.json');
const questions19378p1c4 = require('./19378-page-1-count-4.json');
const questions19378p1c999 = require('./19378-page-1-count-999.json');

// dealing with query params
// do NOT include query params in the path for the route
qa.push(
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

export default qa;