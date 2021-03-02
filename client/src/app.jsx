import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ProductDetailsPage from './productDetailsPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
            <h3>
              <Link to="/products/19378">Product 19378</Link>
            </h3>
            <h3>
              <Link to="/products/19089">Product 19089</Link>
            </h3>
          </Route>
          <Route exact path="/products/:id" render={(props) => {
            return (
              <ProductDetailsPage product_id={parseInt(props.match.params.id)} />
            );
          }} />
          <Route path="*">
            <div>
              <h1>Wildcard Route - No route matched</h1>
              <p>ToDo: Refactor this as a 404 page with links to what they might be looking for</p>
              <Link to="/home">Home</Link>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;