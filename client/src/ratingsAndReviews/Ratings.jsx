import React from 'react';
import PropTypes from 'prop-types';

import StarRow from '../starRow.jsx';
import RatingBar from './RatingBar.jsx';
import RatingFilters from './RatingFilters.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avg: 0,
      recAvg: 0,
      breakdown: [],
    };
  }
  componentDidMount() {
    this.reviewsBreakdown(this.props.reviews);
  }

  reviewsBreakdown(reviews) {
    var avg = 0;
    var recAvg = 0;
    var breakdown = [0, 0, 0, 0, 0];
    for (let i = 0; i < reviews.length; i++) {
      avg += reviews[i].rating;
      breakdown[reviews[i].rating - 1]++;
      if (reviews[i].recommend) {
        recAvg++;
      }
    }
    avg /= reviews.length;
    recAvg = (recAvg * 100) / reviews.length;
    this.setState({avg: avg, recAvg: recAvg, breakdown: breakdown});
  }

  render() {
    let avg = this.state.avg.toString();
    avg = avg.slice(0, 3);
    let ratingFilters = null;
    if(this.props.filters.length !== 0){
      ratingFilters = <RatingFilters newFilter={this.props.newFilter} filters={this.props.filters} />
    }

    return (
      <div>
        <span>Avg: {avg}<StarRow size={20} rating={this.state.avg * 20}/></span>
        <p>{Math.round(this.state.recAvg)}% of reviewers recommend this product</p>
        <RatingBar newFilter={this.props.newFilter} stars={1} percent={(this.state.breakdown[0] * 100) / this.props.reviews.length}/>
        <RatingBar newFilter={this.props.newFilter} stars={2} percent={(this.state.breakdown[1] * 100) / this.props.reviews.length}/>
        <RatingBar newFilter={this.props.newFilter} stars={3} percent={(this.state.breakdown[2] * 100) / this.props.reviews.length}/>
        <RatingBar newFilter={this.props.newFilter} stars={4} percent={(this.state.breakdown[3] * 100) / this.props.reviews.length}/>
        <RatingBar newFilter={this.props.newFilter} stars={5} percent={(this.state.breakdown[4] * 100) / this.props.reviews.length}/>
        {ratingFilters}
      </div>
    );
  }
}

Ratings.propTypes = {
  reviews: PropTypes.array,
  newFilter: PropTypes.func
};

export default Ratings;
