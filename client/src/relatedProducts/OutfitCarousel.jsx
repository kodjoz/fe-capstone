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
      outfit: {}
    };
  }

  componentDidMount() {
    //set state to user's outfit data from local storage if present
    var localStorage = JSON.parse(window.localStorage.getItem('relatedProducts'));
    if (localStorage && localStorage.yourOutfit) {
      this.setState({
        outfit: localStorage.yourOutfit
      });
    }
  }

  componentDidUpdate() {
    //update local storage to reflect changed outfit
    window.localStorage.setItem('relatedProducts', JSON.stringify(this.state));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  removeFromOutfit(product) {
    let currentOutfit = this.state.outfit;
    delete currentOutfit[product.id];
    this.setState({
      outfit: currentOutfit
    });
  }

  addToOutfit(newProduct) {
    let currentOutfit = this.state.outfit;
    currentOutfit[newProduct['id']] = newProduct;
    this.setState({
      outfit: currentOutfit
    });
  }

  addProductClickHandler(event) {
    event.preventDefault();
    //current product can only be added once
    event.target.setAttribute('disabled', true);
    this.addToOutfit(this.props.currentProduct);
  }

  removeProductClickHandler(event, data) {
    this.removeFromOutfit(data);
  }

  render() {
    return (
      <>
        <FirstSlide onClick={this.addProductClickHandler}>
          <p>Add Product to Outfit</p>
        </FirstSlide>
        {Object.values(this.state.outfit).map((product) => {
          return <StyledSlide data={product}
            cardButtonClick={this.removeProductClickHandler}
            key={product.id}
            buttonText='x'>
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
  width: 200px;
  height: 300px;
  background-color: ${props => props.theme.accentTile};
  margin: 0.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;

  p {
    ${props => props.theme.primaryText};
    font-size: 1em;
  }

   &:hover {
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
   }
`;




export default OutfitCarousel;
