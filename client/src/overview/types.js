import PropTypes from 'prop-types';

const PhotoType = PropTypes.shape({
  thumbnail_url: PropTypes.string,
  url: PropTypes.string
});

const StyleType = PropTypes.shape({
  style_id: PropTypes.number,
  name: PropTypes.string,
  original_price: PropTypes.string,
  sale_price: PropTypes.string,
  'default?': PropTypes.boolean,
  photos: PropTypes.arrayOf(PhotoType)
});

const FeatureType = PropTypes.shape({
  feature: PropTypes.string,
  value: PropTypes.string
});

const ProductType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  slogan: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  default_price: PropTypes.string,
  features: PropTypes.arrayOf(FeatureType)
});

export {
  PhotoType,
  StyleType,
  FeatureType,
  ProductType
};