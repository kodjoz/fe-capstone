import React from 'react';
import PropTypes from 'prop-types';

const ProductDescription = (props) => {

  // if no product data is loaded, return empty div
  if (!props.product) {
    return (
      <div>
      </div>
    );
  }

  const slogan = <h3>{props.product.slogan}</h3>;
  const description = props.product.description ? <p>{props.product.description}</p> : '';

  return (
    <div>
      {slogan}
      {description}
    </div>
  );
};

ProductDescription.propTypes = {
  product: PropTypes.shape({
    slogan: PropTypes.string,
    description: PropTypes.string
  })
};

export default ProductDescription;
