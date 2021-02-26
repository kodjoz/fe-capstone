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
    'plugin:react/recommended'
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
    'jest'
  ],
  'rules': {
    'camelcase': ['error', { 'allow': ['product_id']} ],
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
