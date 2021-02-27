import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Modal = (props) => {
  var { handleClose, children } = props;
  return (
    <div className={props.className}>
      <h3>Comparing</h3>
      <section>
        {children}
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
  children: PropTypes.object
};


const StyledModal = styled(Modal)`
  display: ${props => props.show ? 'block' : 'none'};
  position: fixed;
  width: 30%;
  height: auto;
  top: 50%;
  left: 50%;
  background: #f2f2f2;
`;

export default StyledModal;
