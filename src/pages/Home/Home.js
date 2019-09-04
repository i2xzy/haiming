import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import products from '../../data/products.js';

import { Header, ProductName } from '../../Components';

import stone from '../../img/stone.png';
import './Home.scss';

const Home = () => (
  <div className="Home">
    <Header />
    <img className="Home-image" src={stone} alt="stone" />

    <div className="Home-products" id="products">
      {products.map(product => (
        <Link to={`/product/${product.slug}`}>
          <div className={classnames(['Home-product', product.colour])}>
            <div
              className="Home-product-bg"
              style={{
                background: `url(${product.image})`,
                backgroundSize: 'cover'
              }}
            >
              <ProductName
                name={product.name}
                chineseName={product.chineseName}
                isCentered={product.isCentered}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default Home;
