import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


let compareFeatures = (data, currentProduct) => {
  let combinedFeatures = {};
  //loop through clicked product's features
  for (var i = 0; i < data.features.length; i++) {
    let feature = {
      featureName: data.features[i].feature,
      clickedValue: data.features[i].value
    };
    //if current value has that feature, add it to the object
    currentProduct.features.forEach((currChar) => {
      if (currChar.feature === feature.featureName) {
        feature['currentValue'] = currChar.value;
      }
    });
    //if current value doesn't have that feature, leave blank
    feature['currentValue'] = feature['currentValue'] || '';
    combinedFeatures[feature.featureName] = feature;
  }
  //add features in the current product not shared by the clicked one
  currentProduct.features.map((feature) => {
    combinedFeatures[feature.feature] = combinedFeatures[feature.feature] ||
    {
      featureName: feature.feature,
      currentValue: feature.value,
      clickedValue: ''
    };
  });
  return Object.values(combinedFeatures);
};

const Modal = (props) => {
  const { handleClose, data, currentProduct } = props;
  if (!props.show) {
    return <div></div>;
  }
  return (
    <div className={props.className}>
      <section>
        <Table>
          <thead>
            <Row>
              <th>comparing</th>
            </Row>
            <tr>
              <th>{data.name}</th>
              <th></th>
              <th>{currentProduct.name}</th>
            </tr>
          </thead>
          <tbody>
            {
              compareFeatures(data, currentProduct).map((row) => {
                return (<Row key={row.featureName}>
                  <Field>{row.clickedValue}</Field>
                  <Field>{row.featureName}</Field>
                  <Field>{row.currentValue}</Field>
                </Row>);
              })
            }
          </tbody>
        </Table>
      </section>
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
  data: PropTypes.object.isRequired,
  currentProduct: PropTypes.object.isRequired,

};

const Row = styled.tr`
  padding: 0.5rem;
`;

const Field = styled.td`
  border: 1px solid black;
  padding: 0.5rem;
`;

const Table = styled.table`
  padding: 0.5rem;
`;

const StyledModal = styled(Modal)`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;
  z-index: 1;
  width: auto;
  height: auto;
  top: 50%;
  left: 50%;
  background: #f2f2f2;
`;



export {StyledModal as default, compareFeatures};

