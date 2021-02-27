import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart';
import ImageGallery from './ImageGallery';
import ProductDescription from './ProductDescription';
import ProductDetail from './ProductDetail';
import StyleSelector from './StyleSelector';
import styled from 'styled-components';

class OverviewContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product_id: props.product_id,
      product: null
    };
  }

  render() {
    const Grid = styled.div`
      border: 1px solid #ddd;
      display: grid;
      grid-column-gap: 1rem;
    `;

    const LeftContainer = styled.div`
      grid-column-start: 1;
      grid-column-end: 2;
    `;

    const RightContainer = styled.div`
      grid-column-start: 2;
      grid-column-end: 3;
    `;

    return (
      <Grid>
        <LeftContainer>
          <ImageGallery />
        </LeftContainer>
        <RightContainer>
          <ProductDetail />
          <StyleSelector />
          <AddToCart />
        </RightContainer>
        <ProductDescription />
      </Grid>
    );
  }
}

OverviewContainer.propTypes = {
  product_id: PropTypes.number,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string
  })
};

export default OverviewContainer;

