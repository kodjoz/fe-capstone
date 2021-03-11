import React from 'react';
import PropTypes from 'prop-types';
import { Thumbnail, Button, ModalBackground} from './globalStyles.js';
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
        <Border>
          <ImageWrapper>
            <PositionedButton
              ref={this.ref}>X</PositionedButton>
            <FullImage
              src={this.props.src}
              alt="Customer image upload full-size"
            />
          </ImageWrapper>
        </Border>
      </ModalWindow>
    );
  }
}

const ModalWindow = styled(ModalBackground)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const ImageWrapper = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;

  max-height: 50vh;
  max-width: 65vw;
  border: solid 15px ${({ theme }) => theme.midLayer};
  border-radius: 5px;
`;

const FullImage = styled.img`
  border-radius: 0;
  display: inline;
  height: 50vh;
  width:
  object-fit: cover;
`;

const PositionedButton = styled(Button)`
  display: inline;
  position: absolute;
  opacity: 75%;
  cursor: pointer;
  align-self: flex-end;
`;

const Border = styled.div`
  border: solid 1px white;
  margin: 1px;
`;

ModalImage.propTypes = {
  src: PropTypes.string
};

export default ModalImage;
