import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Navbar from './navbar.jsx';
import ThemeSlider from './ThemeSlider';

import RelatedProducts from './relatedProducts/RelatedProducts.jsx';
import ReviewsList from './ratingsAndReviews/ReviewsList.jsx';
import QuestionAndAnswer from './questionAndAnswer/QuestionAndAnswer.jsx';
import Overview from './overview/Overview.jsx';
import withClickLogger from './shared/withClickLogger.jsx';

const OverviewWithClickLogger = withClickLogger(Overview);
const RelatedProductsWithClickLogger = withClickLogger(RelatedProducts);
const QuestionAndAnswerWithClickLogger = withClickLogger(QuestionAndAnswer);
const ReviewsListWithClickLogger = withClickLogger(ReviewsList);

class ProductDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    const product_id = this.props.product_id;
    if (!product_id) {
      return console.error('product_id missing from root app state');
    }
    this.fetchProductData(product_id)
      .then((data) => {
        this.setState({
          product: data
        });
      })
      .catch((error) => {
        console.error('something went wrong fetching product data', error);
      });
  }

  /**
   * input: number id
   * return: Promise<product data>
   * does NOT handle errors, handle them in the calling function
   */
  fetchProductData(id) {
    const productUrl = `/api/products/${id}`;
    return axios.get(productUrl)
      .then((results) => {
        if (results && results.data) {
          return results.data;
        }
        throw Error('error fetching product data');
      });
  }

  render() {
    const id = this.props.product_id;
    return (
      <div>
        <ThemeSlider handleClick={this.props.toggleTheme} />
        <Navbar />
        <OverviewWithClickLogger
          key={'overview-module-' + id}
          product_id={id}
          product={this.state.product}/>
        <RelatedProductsWithClickLogger
          key={'related-module-' + id}
          product_id={id}
          product={this.state.product}/>
        <QuestionAndAnswerWithClickLogger
          key={'questions-module-' + id}
          product_id={id}
          product={this.state.product} />
        <ReviewsListWithClickLogger
          key={'reviews-module-' + id}
          product_id={this.props.product_id}
          product={this.state.product}/>
      </div>
    );
  }
}

const featureTuplePropType = PropTypes.arrayOf(
  PropTypes.shape({
    feature: PropTypes.string,
    value: PropTypes.string
  })
);



ProductDetailsPage.propTypes = {
  product_id: PropTypes.number,
  toggleTheme: PropTypes.func,
  product: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    features: PropTypes.arrayOf(featureTuplePropType)
  })
};

export default ProductDetailsPage;

