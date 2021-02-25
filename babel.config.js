module.exports = require('babel-jest').createTransformer({
  rootMode: 'upward',
});

module.exports = (api) => {
  const isTest = api.env('test');
}