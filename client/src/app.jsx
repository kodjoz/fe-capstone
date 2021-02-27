import React from 'react';
import RelatedProducts from './relatedProducts/RelatedProducts.jsx';
import ReviewsList from './ratingsAndReviews/ReviewsList.jsx';
import QuestionAndAnswer from './questionAndAnswer/QuestionAndAnswer.jsx';
import Overview from './overview/Overview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 19089
    };
  }

  render() {
    return (
      <div>
        <Overview product_id={this.state.product_id}/>
        <RelatedProducts product_id={this.state.product_id}/>
        <QuestionModule product_id={this.state.product_id}/>
        <ReviewsList product_id={this.state.product_id}/>
      </div>
    );
  }

}

export default App;

