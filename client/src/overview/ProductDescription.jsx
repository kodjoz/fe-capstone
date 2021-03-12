import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tile } from '../globalStyles';

const Container = styled(Tile)`
  padding: 2rem;
`;

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
    <Container>
      {slogan}
      {description}
    </Container>
  );
};

ProductDescription.propTypes = {
  product: PropTypes.shape({
    slogan: PropTypes.string,
    description: PropTypes.string
  })
};

export default ProductDescription;
