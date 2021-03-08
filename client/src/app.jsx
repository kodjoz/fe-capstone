/* eslint-disable react/prop-types */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { GlobalStyle } from './globalStyles.js';
import ProductDetailsPage from './productDetailsPage.jsx';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { useTheme } from './useTheme.js';

let App = () => {
  const [theme, toggleTheme] = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Router>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
            <h3>
              <Link to="/products/19378">Alberto Romper (19378)</Link>
            </h3>
            <h3>
              <Link to="/products/19089">Camo Onesie (19089)</Link>
            </h3>
            <h3>
              <Link to="/products/19090">Bright Future Sunglasses (19090)</Link>
            </h3>
            <h3>
              <Link to="/products/19091">Morning Joggers (19091)</Link>
            </h3>
            <h3>
              <Link to="/products/19191">Jarred Shirt (19191)</Link>
            </h3>
          </Route>
          <Route exact path="/products/:id" render={(props) => {
            const id = props.match.params.id;
            return (
              <ProductDetailsPage
                toggleTheme={toggleTheme}
                key={'product-details-' + id}
                product_id={parseInt(id)} />
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
      </ThemeProvider>
    </Router>
  );

};

export default App;
