const modal = require('./Modal.jsx');

let currentProduct = {
  'id': 19089,
  'campus': 'hr-rfe',
  'name': 'Camo Onesie',
  'features': [{ 'feature': 'Fabric', 'value': 'Canvas' }, { 'feature': 'Buttons', 'value': 'Brass' }] };
let data = { 'id': 19091,
  'campus': 'hr-rfe',
  'name': 'Morning Joggers',
  'features': [{ 'feature': 'Fabric', 'value': '100% Cotton' }, { 'feature': 'Cut', 'value': 'Skinny' }] };


it('returns an array', () => {
  expect(Array.isArray(modal.compareFeatures(data, currentProduct))).toBe(true);
});

it('retrieves feature names', () => {
  expect(modal.compareFeatures(data, currentProduct)[0].featureName).toBe('Fabric');
  expect(modal.compareFeatures(data, currentProduct)[1].featureName).toBe('Cut');
});

it('returns an array containing shared and unique features', () => {
  expect(modal.compareFeatures(data, currentProduct)[2].featureName).toBe('Buttons');
});

it('returns an array containing feature values', () => {
  expect(modal.compareFeatures(data, currentProduct)[2].currentValue).toBe('Brass');
  expect(modal.compareFeatures(data, currentProduct)[0].currentValue).toBe('Canvas');
});
