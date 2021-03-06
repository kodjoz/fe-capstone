module.exports = {
  'testPathIgnorePatterns': [
    '<rootDir>/client/src/relatedProducts/relProd.test.js',
    '<rootDir>/client/src/relatedProducts/Modal.test.js',
    '<rootDir>/tests',
    '<rootDir>/server',
    '<rootDir>/node_modules',
    '<rootDir>/coverage'
  ],
  'collectCoverageFrom': [
    'client/src/**',
    '!client/src/mocks/**'
  ]
};