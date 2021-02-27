import React from 'react';
import StyledSlide from './Slide.jsx';
import StarButton from './StarButton.jsx';
import PropTypes from 'prop-types';


class RelatedCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {Object.values(this.props.data).map((product) => {
          return <StyledSlide data={product}
            key={product.id}
            render={onClick => (
              <StarButton onClick={onClick}/>
            )}>
          </StyledSlide>;
        })}
      </>
    );
  }
}

RelatedCarousel.propTypes = {
  data: PropTypes.object.isRequired
};

export default RelatedCarousel;
