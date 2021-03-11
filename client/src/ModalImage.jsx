import React from 'react';
import PropTypes from 'prop-types';
import { Thumbnail, Button, ModalBackground, Palette } from './globalStyles.js';
import styled from 'styled-components';

class ModalImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };

    this.ref = React.createRef();
  }

  displayModal() {
    this.setState({active: !this.state.active});
  }

  componentDidUpdate() {
    if (this.state.active) {
      this.ref.current.focus();
    }
  }

  render() {
    if (!this.state.active) {
      return (
        <Thumbnail
          src={this.props.src}
          alt="Customer image upload thumbnail"
          onClick={this.displayModal.bind(this)}
        />
      );
    }
    return (
      <ModalWindow onClick={this.displayModal.bind(this)}>
        <ImageWrapper>
          <PositionedButton
            ref={this.ref}>X</PositionedButton>
          <FullImage
            src={this.props.src}
            alt="Customer image upload full-size"
          />
        </ImageWrapper>
      </ModalWindow>
    );
  }
}

const ModalWindow = styled(ModalBackground)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const ImageWrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 25%;
  left: 25%;
  max-height: 60vh;
  max-width: 60vh;
  border: solid 15px ${Palette.foreground};
  border-radius: 5px;
`;

const PositionedButton = styled(Button)`
  display: inline;
  position: absolute;
  margin-left: 91%;
  opacity: 75%;
  cursor: pointer;
`;


const FullImage = styled.img`
  border-radius: 0;
  display: inline;
  height: 100%;
  width: 100%;
`;

ModalImage.propTypes = {
  src: PropTypes.string
};

export default ModalImage;
