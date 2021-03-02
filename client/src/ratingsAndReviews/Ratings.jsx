import React from 'react';
import PropTypes from 'prop-types';

import StarRow from '../starRow.jsx';
import RatingBar from './RatingBar.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      avg: 0,
      recAvg: 0,
      breakdown: [],
    };
  }
  componentDidMount() {
    this.reviewsBreakdown(this.state.reviews);
  }

  reviewsBreakdown(reviews) {
    var avg = 0;
    var recAvg = 0;
    var breakdown = [0, 0, 0, 0, 0];
    for (let i = 0; i < reviews.length; i++) {
      avg += reviews[i].rating;
      breakdown[reviews[i].rating - 1]++;
      if(reviews[i].recommend) {
        recAvg++;
      }
    }
    avg /= reviews.length;
    recAvg = (recAvg * 100) / reviews.length
    this.setState({avg: avg, recAvg: recAvg, breakdown: breakdown});
  }

  render() {
    let avg = this.state.avg.toString();
    avg = avg.slice(0,3);

    return (
      <div>
        <span>Avg: {avg}<StarRow size={20} rating={this.state.avg * 20}/></span>
        <p>{Math.round(this.state.recAvg)}% of reviewers recommend this product</p>
        <RatingBar filter={this.props.filter} stars={1} percent={(this.state.breakdown[0] * 100) / this.state.reviews.length}/>
        <RatingBar filter={this.props.filter} stars={2} percent={(this.state.breakdown[1] * 100) / this.state.reviews.length}/>
        <RatingBar filter={this.props.filter} stars={3} percent={(this.state.breakdown[2] * 100) / this.state.reviews.length}/>
        <RatingBar filter={this.props.filter} stars={4} percent={(this.state.breakdown[3] * 100) / this.state.reviews.length}/>
        <RatingBar filter={this.props.filter} stars={5} percent={(this.state.breakdown[4] * 100) / this.state.reviews.length}/>
        <p onClick={()=>{ this.props.filter(); }}>Breakdown: { JSON.stringify(this.state.breakdown) }</p>
      </div>
    );
  }
}

Ratings.propTypes = {
  reviews: PropTypes.array,
  filter: PropTypes.func
};

export default Ratings;
