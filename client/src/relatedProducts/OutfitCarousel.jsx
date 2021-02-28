import React from 'react';
import PropTypes from 'prop-types';

class OutfitCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>First Slide</div>
      </>
    );
  }
}

OutfitCarousel.propTypes = {
  data: PropTypes.object.isRequired
};

export default OutfitCarousel;
