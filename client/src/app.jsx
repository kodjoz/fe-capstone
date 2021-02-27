import React from 'react';
import RelatedProducts from './relatedProducts/RelatedProducts.jsx';
import ReviewsList from './ratingsAndReviews/ReviewsList.jsx';
import QuestionAndAnswer from './questionAndAnswer/QuestionModule.jsx';
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
        <h1>Hello, world!</h1>
        <Overview product_id={this.state.product_id}/>
        <RelatedProducts product_id={this.state.product_id}/>
        <ReviewsList product_id={this.state.product_id}/>
        <QuestionAndAnswer product_id={this.state.product_id}/>
      </div>
    );
  }

}

export default App;

