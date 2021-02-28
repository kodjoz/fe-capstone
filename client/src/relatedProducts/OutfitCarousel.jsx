import React from 'react';
import PropTypes from 'prop-types';
import StyledSlide from './Slide.jsx';


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
        <div>First Slide</div>
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

export default OutfitCarousel;
