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

  newFilter(filter) {
    //if filter exists within this.state.filters, remove from filters (indexOf !== -1)
    //else, add to filters
    //re-render renderedList with new filters
    if(filter === null) {
      this.setState({filters: []});
      console.log('filtering reviews based on: ', this.state.filters);
    } else {
      let filterLocation = this.state.filters.indexOf(filter)
      let newFilters = this.state.filters;
      if(filterLocation !== -1) {
        newFilters.splice(filterLocation, 1);
      } else {
        newFilters.push(filter);
      }
      this.setState({filters: newFilters})
      console.log('filtering reviews based on: ', this.state.filters); //setState is async, so this won't be accurate
    }
  }

  sortAndFilter(sortOrder, filters) {
    console.log('sortOrder: ', sortOrder, 'filters: ', filters);
  }

  render() {
    if (!this.state.reviews) {
      return (<div></div>);
    } else {
      return (
        <div>
          <h3>Ratings &amp; Reviews</h3>
          <p>#### reviews, sorted by this.state.sortOrder</p>
          <div><Ratings reviews={this.state.reviews} filters={this.state.filters} newFilter={this.newFilter.bind(this)}/></div>
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

