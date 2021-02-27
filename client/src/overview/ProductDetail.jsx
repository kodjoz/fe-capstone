import React from 'react';
import PropTypes from 'prop-types';

const ProductDetail = (props) => {
  if (!props || !props.product) {
    return '';
  }
  return (
    <div>
      <h4>Stars</h4>
      <h4>{props.product.category}</h4>
      <h1>{props.product.name}</h1>
      <h4>{props.product.default_price}</h4>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string
  })
};

export default ProductDetail;
