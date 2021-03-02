import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import IndividualReview from './IndividualReview.jsx';
import Ratings from './Ratings.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: props.product_id,
      reviews: null,
      renderedReviews: null,
      filters: [],
      sortOrder: 'relevance'
    };
  }

  componentDidMount() {
    //get reviews
    this.getReviews(this.state.sortOrder);
  }

  getReviews(sortOrder) {
    //if(!sortOrder){sort order = 'newest';}
    axios.get('/api/reviews', {
      params: {
        product_id: this.state.product_id,
        sort: sortOrder
      }
    })
      .then((res) => {
        // console.log('GET REQ: ', res.data.results);
        this.setState({reviews: res.data.results, renderedReviews: res.data.results});
      });
  }

  filterReviews(filter) {
    //if filter exists within this.state.filters, remove from filters
      //indexOf !== -1
    //else, add to filters
    //re-render renderedList with new filters

    let filters = this.state.filters;
    this.state.filters.push(filter);
    console.log('filtering reviews');
  }

  sortAndFilter(sortOrder, filters) {

  };

  render() {
    if (!this.state.reviews) {
      return (<div></div>);
    } else {
      return (
        <div>
          <p>#### reviews, sorted by this.state.sortOrder</p>
          <div><Ratings reviews={this.state.reviews} filter={this.filterReviews.bind(this)}/></div>
          {this.state.renderedReviews.map((review) => {
            return (<IndividualReview key={review.review_id} review={review} />);
          })}
          <button>MORE REVIEWS</button>
          <button>ADD A REVIEW  +</button>
          {/* First two reviews should render plus if more reviews exist a button should render to expand ReviewsList w two add'l reviews */}
        </div>
      );
    }
  }
}

ReviewsList.propTypes = {
  product_id: PropTypes.number
};

export default ReviewsList;

