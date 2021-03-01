import React from 'react';
import PropTypes from 'prop-types';
import StyledSlide from './Slide.jsx';
import styled from 'styled-components';


class OutfitCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);

    this.state = {
      yourOutfit: JSON.parse(
        window.localStorage.getItem('yourOutfit')
      ) || {}
    };
  }

  componentDidUpdate() {
    window.localStorage.setItem('yourOutfit', JSON.stringify(this.state));
  }

  removeFromOutfit() {
    this.setState({
      yourOutfit: 'bye'
    });
    console.log('remove from Outfit');
  }

  addToOutfit() {
    this.setState({
      yourOutfit: 'hi'
    });
    console.log('add to outfit');
  }

  render() {
    return (
      <>
        <FirstSlide>
          First Slide
          <button onClick={this.addToOutfit}>add to outfit</button>
        </FirstSlide>
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
