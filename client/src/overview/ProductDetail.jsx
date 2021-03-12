import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NameHeader = styled.h1`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

const CategoryHeader = styled.h2`
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 0.5rem;
`;

const ProductDetail = (props) => {
  if (!props || !props.product) {
    return '';
  }
  return (
    <div>
      <NameHeader>{props.product.name}</NameHeader>
      <CategoryHeader>{props.product.category}</CategoryHeader>
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
