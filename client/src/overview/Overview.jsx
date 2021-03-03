import React from 'react';
import PropTypes from 'prop-types';
import { ProductType } from './types.js';
import axios from 'axios';
import AddToCart from './AddToCart';
import ImageGallery from './ImageGallery';
import ProductDescription from './ProductDescription';
import ProductDetail from './ProductDetail';
import PriceDisplay from './PriceDisplay';
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
      styles: [],
      selectedStyle: null
    };
    this.setSelectedStyle = this.setSelectedStyle.bind(this);
  }

  componentDidMount() {
    this.fetchStylesDataFromApi()
      .then((data) => {
        // if there are styles associated with the product
        if (!data.results) {
          throw Error('no styles found for product');
        }
        const styles = data.results;
        // find the one style marked as default
        const defaultStyle = styles.find(style => style['default?']);
        this.setState({
          styles: styles,
          selectedStyle: defaultStyle
        });
      })
      .catch((error) => {
        console.error('Overview Error:', error);
      });
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

  setSelectedStyle(styleId) {
    let newStyle = this.state.styles.find(style => style.style_id === styleId);
    this.setState({
      selectedStyle: newStyle
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
          <PriceDisplay selectedStyle={this.state.selectedStyle} />
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
  product: ProductType
};

export default OverviewContainer;

