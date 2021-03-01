import React from 'react';
import PropTypes from 'prop-types';
import StyledSlide from './Slide.jsx';
import styled from 'styled-components';


class OutfitCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
    this.removeProductClickHandler = this.removeProductClickHandler.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
    this.addProductClickHandler = this.addProductClickHandler.bind(this);

    this.state = {
      yourOutfit: {}
    };
  }

  componentDidMount() {
    var localStorage = JSON.parse(window.localStorage.getItem('relatedProducts'));
    if (localStorage && localStorage.yourOutfit) {
      this.setState({
        yourOutfit: localStorage.yourOutfit
      });
    }
  }
  componentDidUpdate() {
    console.log('update');
    window.localStorage.setItem('relatedProducts', JSON.stringify(this.state));
  }

  removeFromOutfit(product) {
    console.log('remove from Outfit', product);
    let currentOutfit = this.state.yourOutfit;
    delete currentOutfit[product.id];
    this.setState({
      yourOutfit: currentOutfit
    });
  }

  addToOutfit(newProduct) {
    let currentOutfit = this.state.yourOutfit;
    currentOutfit[newProduct['id']] = newProduct;
    this.setState({
      yourOutfit: currentOutfit
    });
  }

  addProductClickHandler(event) {
    event.preventDefault();
    this.addToOutfit(this.props.currentProduct);
  }

  removeProductClickHandler(event, data) {
    this.removeFromOutfit(data);
  }

  render() {
    return (
      <>
        <FirstSlide>
          First Slide
          <button onClick={this.addProductClickHandler}>add to outfit</button>
        </FirstSlide>
        {/* change to use this.state.yourOutfit once add button adds productData */}
        {Object.values(this.state.yourOutfit).map((product) => {
          return <StyledSlide data={product}
            cardButtonClick={this.removeProductClickHandler}
            key={product.id}
            render={onClick => (
              <button onClick={onClick}>x</button>
            )}>
          </StyledSlide>;
        })}
      </>
    );
  }
}

OutfitCarousel.propTypes = {
  data: PropTypes.object.isRequired,
  currentProduct: PropTypes.object
};

const FirstSlide = styled.div`
  width: 150px;
  height: 200px;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


export default OutfitCarousel;
