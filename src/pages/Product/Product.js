import React from 'react';
import classnames from 'classnames';

import { Header, ScrollToTop } from '../../Components';

import './Product.scss';

const Product = ({ product }) => (
  <ScrollToTop>
    <div
      className={classnames([
        'Product',
        product.colour === 'Pink/Black' && 'pink',
        product.colour === 'Black/White' && 'red'
      ])}
    >
      <Header />
      <div
        className="Product-bg"
        style={{
          background: `url(${product.image})`,
          backgroundSize: 'cover',
          backgroundPosition: product.imagePosition || 'top'
        }}
      ></div>
      <div className="Product-info">
        <div className="Product-info-description">{product.description}</div>
        <div className="Product-info-details">
          <span>Colour: {product.colour}</span>
          <span>Material: {product.details.material}</span>
          <span>Size: {product.details.size}</span>
        </div>
      </div>
      <div className="Product-images">
        {console.log(product.additionalImages)}
        {product.additionalImages.map((image, i) => (
          <img
            key={i}
            className="Product-image"
            src={image}
            alt={`${product.name} ${i + 1}`}
          />
        ))}
      </div>
    </div>
  </ScrollToTop>
);

export default Product;
