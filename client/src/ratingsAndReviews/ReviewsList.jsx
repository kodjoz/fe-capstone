import React from 'react';
import IndividualReview from './IndividualReview.jsx';

const ReviewsList = (props) => {
  return (
  <div>
    <IndividualReview />
    <IndividualReview />
    <button>Load More...</button>
    {/* First two reviews should render plus if more reviews exist a button should render to expand ReviewsList w two add'l reviews */}
  </div>
  );
};

export default ReviewsList;

