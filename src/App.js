import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import products from './data/products.js';
import { Home, About, Product } from './pages';

import './App.scss';

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={About} />

      <Route
        path="/product/:slug"
        render={props => {
          const product = products.find(
            p => p.slug === props.match.params.slug
          );

          if (!product) {
            return <Redirect to="/" />;
          }
          return <Product {...props} product={product} />;
        }}
      />
    </div>
  </Router>
);

export default App;
