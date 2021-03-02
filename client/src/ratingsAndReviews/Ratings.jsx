import React from 'react';

import StarRow from '../starRow.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      renderedReviews: this.props.renderedReviews,
      avg: 0,
      breakdown: [],
    };
  }
  componentDidMount() {
    this.reviewsBreakdown(this.state.reviews);
  }

  reviewsBreakdown(reviews) {
    var avg = 0;
    var breakdown = [0,0,0,0,0,0];
    for(let i = 0; i < reviews.length; i++){
      avg += reviews[i].rating;
      breakdown[reviews[i].rating]++;
    }
    avg /= reviews.length;
    this.setState({avg: avg, breakdown: breakdown});
  }

  filter(filters) {

  }

  render() {
    return (
      <div>
        <p>Avg: {this.state.avg}</p>
        <p onClick={()=>{this.props.filter()}}>Breakdown: {JSON.stringify(this.state.breakdown)}</p>
      </div>
    );
  }
}

export default Ratings;
