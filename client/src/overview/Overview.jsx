import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AddToCart from './AddToCart';
import ImageGallery from './ImageGallery';
import ProductDescription from './ProductDescription';
import ProductDetail from './ProductDetail';
import StyleSelector from './StyleSelector';
import styled from 'styled-components';

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

class OverviewContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: props.product
    };
  }

  fetchStylesDataFromApi() {
    const url = `/api/products/${this.props.product_id}/styles`;
    return axios.get(url)
      .then((response) => {
        if (response && response.data) {
          return response.data;
        }
        throw Error('fetching styles data failed');
      });
  }

  render() {
    return (
      <Grid>
        <LeftContainer>
          <ImageGallery />
        </LeftContainer>
        <RightContainer>
          <ProductDetail product={this.props.product} />
          <StyleSelector />
          <AddToCart />
        </RightContainer>
        <ProductDescription product={this.props.product}/>
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

