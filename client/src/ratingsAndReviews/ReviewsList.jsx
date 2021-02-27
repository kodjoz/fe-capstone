import React from 'react';
import IndividualReview from './IndividualReview.jsx';
import axios from 'axios';
import PropTypes from 'prop-types';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: props.product_id,
      reviews: null,
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
        //console.log('GET REQ: ', res.data.results);
        this.setState({reviews: res.data.results});
      });
  }

  render() {
    if (!this.state.reviews) {
      return (<div></div>);
    } else {
      return (
        <div>
          <p>#### reviews, sorted by this.state.sortOrder</p>
          {/* {this.state.reviews.map((review) => {
            <IndividualReview review={review} />
          })} */}
          <IndividualReview review={this.state.reviews[0]}/>
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

