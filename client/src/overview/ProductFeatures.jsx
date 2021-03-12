import React from 'react';
import ProductType from './types';
import { Tile } from '../globalStyles';
import styled from 'styled-components';

const PaddedTile = styled(Tile)`
  padding: 2rem;
`;

const ProductFeatures = (props) => {

  if (!props.product || props.product.features.lenth === 0) {
    return <PaddedTile />;
  }

  const lines = props.product.features.map(({feature, value}) => {
    if (value) {
      return <p key={feature}>{feature}: {value}</p>;
    }
    return <p key={feature}>{feature}</p>;
  });

  return (
    <PaddedTile>
      <h3>Features</h3>
      {lines}
    </PaddedTile>
  );
};

ProductFeatures.propTypes = {
  product: ProductType
};

export default ProductFeatures;
