import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
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

  componentDidMount() {
    if (this.state.product_id !== undefined) {
      this.fetchProductData(this.state.product_id)
        .then((productData) => {
          this.setState({
            product: productData
          });
        })
        .catch((error) => {
          console.log('error fetching data', error);
        });
    }
  }

  fetchProductData(id) {
    const productUrl = `/api/products/${id}`;
    return axios.get(productUrl)
      .then((results) => {
        if (results && results.data) {
          return results.data;
        }
        throw Error('fetchProductData failed');
      });
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
          <ProductDetail product={this.state.product} />
          <StyleSelector />
          <AddToCart />
        </RightContainer>
        <ProductDescription product={this.state.product}/>
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

