import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Modal = (props) => {
  var { handleClose } = props;
  return (
    <div className={props.className}>
      <h3>Comparing</h3>
      <section>
        <button type="button" onClick={handleClose}>
          close
        </button>
      </section>
    </div>
  );
};

Modal.propTypes = {
  className: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
};


const StyledModal = styled(Modal)`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;
  z-index: 1;
  width: 30%;
  height: auto;
  top: 50%;
  left: 50%;
  background: #f2f2f2;
`;

export default StyledModal;
