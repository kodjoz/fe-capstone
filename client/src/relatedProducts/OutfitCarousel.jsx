import React from 'react';
import StyledSlide from './Slide.jsx';
import PropTypes from 'prop-types';

class OutfitCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>First Slide</div>
        {Object.values(this.props.data).map((product) => {
          return <StyledSlide data={product}
            key={product.id}
            render={onClick => (
              <button onClick={onClick}>Button</button>
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
