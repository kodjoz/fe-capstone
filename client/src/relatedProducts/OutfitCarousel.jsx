import React from 'react';
import PropTypes from 'prop-types';
import StyledSlide from './Slide.jsx';
import styled from 'styled-components';


class OutfitCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.cardButtonClick = this.cardButtonClick.bind(this);
  }

  cardButtonClick() {
    console.log('outfit click');
  }

  render() {
    return (
      <>
        <FirstSlide>
          First Slide
          <button onClick={() => { console.log('add to outfit'); }}>add to outfit</button>
        </FirstSlide>
        {Object.values(this.props.data).map((product) => {
          return <StyledSlide data={product}
            cardButtonClick={this.cardButtonClick}
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
