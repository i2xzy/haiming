import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import products from './data/products.js';
import { Landing, Home, About, Product } from './pages';

import './App.scss';

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />

        <Route path="/about" component={About} />
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
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </div>
);

export default App;
