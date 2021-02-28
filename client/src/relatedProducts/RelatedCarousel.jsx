import React from 'react';
import PropTypes from 'prop-types';
import StyledSlide from './Slide.jsx';
import StyledModal from './Modal.jsx';
import styled from 'styled-components';


class RelatedCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
    this.showModal = this.showModal.bind(this);
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
            value={product}
            cardButtonClick={this.cardButtonClick}
            key={product.id}
            render={onClick => (
              <Button onClick={onClick}>★</Button>
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

const Button = styled.button `
  font-size: 1em;
  color: white;
  background: none;
  border-radius: 3px;
  border: none;
  width: 25%;
  position: absolute;
  top: 0%;
  left: 80%;
`;

RelatedCarousel.propTypes = {
  data: PropTypes.object.isRequired
};

export default RelatedCarousel;
