import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import products from '../../data/products.js';
import { exhibition } from '../../img/';

import { Header } from '../../Components';

import images from '../../img';
import './Home.scss';

const Home = () => (
  <div className="Home">
    <Header />
    <img className="Home-image" src={images.stone[2]} alt="stone" />

    <div className="Home-products" id="products">
      {products.map(product => (
        <Link to={`/product/${product.slug}`}>
          <div
            className={classnames([
              'Home-product',
              product.colour === 'Pink/Black' && 'pink'
            ])}
          >
            <div
              className="Home-product-bg"
              style={{
                background: `url(${product.homeImage || product.image})`,
                backgroundSize: 'cover',
                backgroundPosition:
                  product.homeImagePosition || product.imagePosition || 'center'
              }}
            />
          </div>
        </Link>
      ))}
    </div>

    <h2 className="Home-heading" id="exhibitions">
      Exhibitions
    </h2>
    <div className="Home-exhibitions">
      {exhibition.map((img, i) => (
        <img key={i} className="Home-exhibitions-image" src={img} alt={i + 1} />
      ))}
    </div>
  </div>
);

export default Home;
