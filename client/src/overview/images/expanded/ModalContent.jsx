import React from 'react';
import { Palette } from '../../../globalStyles';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContentDiv = styled.div`
  position: fixed;
  top: 10%;
  left: 20%;
  width: 60%;
  height: 80%;
  // border: solid 15px ${Palette.foreground};
  border: none;
  // border-radius: 1px;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  z-index: 101;
`;

const ModalContent = (props) => {

  const closeModal = () => {
    props.setExpandedView(false);
  };

  return (
    <ContentDiv>
      <CloseButton onClick={closeModal}>
        Close
      </CloseButton>
      {props.children}
    </ContentDiv>
  );
};

ModalContent.propTypes = {
  children: PropTypes.element,
  setExpandedView: PropTypes.func,
};

export default ModalContent;