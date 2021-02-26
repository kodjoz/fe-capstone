import React from 'react';
import RelatedProducts from './relatedProducts/RelatedProducts.jsx';
import ReviewsList from './ratingsAndReviews/ReviewsList.jsx';
import QuestionList from './questionAndAnswer/QuestionList.jsx';
import Overview from './overview/Overview.jsx';

const App = () => {

  return (
    <div>
      <h1>Hello, world!</h1>
      <Overview/>
      <RelatedProducts/>
      {/* <ReviewsList/> */}
      <QuestionList/>
    </div>
  );
};

export default App;

