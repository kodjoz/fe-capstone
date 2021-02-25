import React from 'react';
import Carousel from './Carousel.jsx';


const RelatedProductsWrapper = () => {
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