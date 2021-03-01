import React from 'react';
import PropTypes from 'prop-types';
import RelatedProducts from './relatedProducts/RelatedProducts.jsx';
import ReviewsList from './ratingsAndReviews/ReviewsList.jsx';
import QuestionAndAnswer from './questionAndAnswer/QuestionAndAnswer.jsx';
import Overview from './overview/Overview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 19089,
      product: null
    };
  }

  render() {
    return (
      <div>
        <Overview product_id={this.state.product_id}/>
        <RelatedProducts product_id={this.state.product_id}/>
        <QuestionAndAnswer product_id={this.state.product_id}/>
        <ReviewsList product_id={this.state.product_id}/>
      </div>
    );
  }

}

const featureTuplePropType = PropTypes.arrayOf(
  PropTypes.shape({
    feature: PropTypes.string,
    value: PropTypes.string
  })
);

App.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    features: PropTypes.arrayOf(featureTuplePropType)
  })
};

export default App;

