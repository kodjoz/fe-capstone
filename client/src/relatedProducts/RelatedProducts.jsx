import React from 'react';
import Carousel from './Carousel.jsx';
import axios from 'axios';

const RelatedProductsWrapper = (props) => {
    //get list of related products using productId prop
    getRelatedProducts() {
      axios.get(`/api/products/${/*prodid*/}/related`, {
      params: {
        product_id: props.product_id,
      }
    })
    }
  return (
    <div>
      <h4>Related Products</h4>
      <Carousel/>
      <h4>Your outfit</h4>
      <Carousel />
    </div>
  );
};



export default RelatedProductsWrapper;
