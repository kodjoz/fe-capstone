import React from 'react';
import PropTypes from 'prop-types';
import StyledSlide from './Slide.jsx';
import styled from 'styled-components';

let fakeProduct = {'id': 19090, 'campus': 'hr-rfe', 'name': 'Bright Future Sunglasses', 'slogan': 'You\'ve got to wear shades', 'description': 'Where you\'re going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.', 'category': 'Accessories', 'default_price': '69.00', 'created_at': '2021-02-23T19:24:34.450Z', 'updated_at': '2021-02-23T19:24:34.450Z', 'features': [{'feature': 'Lenses', 'value': 'Ultrasheen'}, {'feature': 'UV Protection', 'value': null}, {'feature': 'Frames', 'value': 'LightCompose'}]};


class OutfitCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
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
    console.log(this.state.yourOutfit);
    window.localStorage.setItem('relatedProducts', JSON.stringify(this.state));
    //window.localStorage.setItem('relatedProducts', 'hi');
  }

  removeFromOutfit() {
    this.setState({
      yourOutfit: 'bye'
    });
    console.log('remove from Outfit');
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
    //get product data from app
    //pass to addToOutfit as parameter
    this.addToOutfit(fakeProduct);
  }

  render() {
    return (
      <>
        <FirstSlide>
          First Slide
          <button onClick={this.addProductClickHandler}>add to outfit</button>
        </FirstSlide>
        {/* change to use this.state.yourOutfit once add button adds productData */}
        {Object.values(this.props.data).map((product) => {
          return <StyledSlide data={product}
            cardButtonClick={this.removeFromOutfit}
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
  data: PropTypes.object.isRequired
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
