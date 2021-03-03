import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IndividualReview from './IndividualReview.jsx';
import Ratings from './Ratings.jsx';
import FactorsBreakdown from './FactorsBreakdown.jsx';

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
    if (filter === null) {
      this.setState({filters: []});
      console.log('filtering reviews based on: ', this.state.filters);
    } else {
      let filterLocation = this.state.filters.indexOf(filter);
      let newFilters = this.state.filters;
      if (filterLocation !== -1) {
        newFilters.splice(filterLocation, 1);
      } else {
        newFilters.push(filter);
      }
      this.setState({filters: newFilters}, () => {
        this.sortAndFilter(this.state.sortOrder, this.state.filters);
      });
    }
  }

  sortAndFilter(sortOrder, filters) {
    let renderedReviews = [];
    if (filters.length === 0) {
      renderedReviews = this.state.reviews;
    } else {
      for (let i = 0; i < this.state.reviews.length; i++) {
        let rev = this.state.reviews[i];
        for (let j = 0; j < filters.length; j++) {
          if (Math.floor(rev.rating) === filters[j]) {
            renderedReviews.push(rev);
            break;
          }
        }
      }
    }
    this.setState({renderedReviews: renderedReviews});
  }

  render() {
    if (!this.state.reviews) {
      return (<div></div>);
    } else {
      return (
        <div>
          <h3>Ratings &amp; Reviews</h3>
          <p>#### reviews, sorted by this.state.sortOrder</p>
          <MasterComponent>
            <RatingComponent>
              <Ratings reviews={this.state.reviews} filters={this.state.filters} newFilter={this.newFilter.bind(this)}/>
              <FactorsBreakdown />
            </RatingComponent>
            <ReviewsComponent>
              {this.state.renderedReviews.map((review) => {
                return (<IndividualReview key={review.review_id} review={review} />);
              })}
              <button>MORE REVIEWS</button>
              <button>ADD A REVIEW  +</button>
              {/* First two reviews should render plus if more reviews exist a button should render to expand ReviewsList w two add'l reviews */}
            </ReviewsComponent>
          </MasterComponent>
        </div>
      );
    }
  }
}

//flex-box goes here
const MasterComponent = styled.div`
  display: flex;
`;

const RatingComponent = styled.div`
  display: flex;
  flex-direction: column;
  order: 1;
  width: 25%;
  margin-top: 7px;
  margin-right: 7px;
  border-bottom: 1px solid #f0f0f5;
  background-color: hsl(0, 10%, 99%);
  color: hsl(0, 5%, 30%);
  border: solid 1px #f2f2f2;
  padding: 0px 10px;
`;

const ReviewsComponent = styled.div`
  order: 2;
`;

ReviewsList.propTypes = {
  product_id: PropTypes.number
};

export default ReviewsList;

