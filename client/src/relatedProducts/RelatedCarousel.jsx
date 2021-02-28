import React from 'react';
import PropTypes from 'prop-types';
import StyledSlide from './Slide.jsx';
import StyledModal from './Modal.jsx';


class RelatedCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
    this.show = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.cardButtonClick = this.cardButtonClick.bind(this);
  }

  showModal() {
    this.setState({
      showModal: true
    });
  }

  hideModal() {
    this.setState({
      showModal: false
    });
  }

  cardButtonClick() {
    console.log('clicked');
    this.showModal();
  }

  render() {
    return (
      <>
        {Object.values(this.props.data).map((product) => {
          return <StyledSlide data={product}
            cardButtonClick={this.cardButtonClick}
            key={product.id}
            render={onClick => (
              <button onClick={onClick}>x</button>
            )}>
          </StyledSlide>;
        })}
        <StyledModal show={this.state.showModal}
          handleClose={this.hideModal}
          data={this.props.data}>
          <p>Modal</p>
        </StyledModal>
      </>
    );
  }
}

RelatedCarousel.propTypes = {
  data: PropTypes.object.isRequired
};

export default RelatedCarousel;
