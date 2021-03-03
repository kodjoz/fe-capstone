/* eslint-disable no-eval */
module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
    'jest/globals': true
  },
  'extends': [
    'eslint:recommended',
    'hackreactor',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'jest',
    'testing-library'
  ],
  'rules': {
    'camelcase': ['error', { 'allow': ['product_id', 'default_price', 'created_at', 'updated_at', 'style_id', 'sale_price', 'original_price', 'thumbnail_url', 'review_id', 'reviewer_name', 'question_id', 'question_body', 'question_date', 'asker_name', 'question_helpfulness', 'answerer_name', 'sku_id']} ],
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  },
  'settings': {
    'react': {
      'pragma': 'React',
      'fragment': 'Fragment',
      'version': 'detect'
    }
  }
};
