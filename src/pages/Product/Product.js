import React from 'react';
import classnames from 'classnames';
import { Header, ProductName } from '../../Components';

import './Product.scss';

const Product = ({ product }) => (
  <div className={classnames(['Product', product.colour])}>
    <Header />
    <div
      className="Product-bg"
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
    <div className="Product-info">
      <div className="Product-info-description">{product.description}</div>
      <div className="Product-info-details">
        <span>Colour: {product.colour}</span>
        <span>Material: {product.details.material}</span>
        <span>Size: {product.details.size}</span>
      </div>
    </div>
  </div>
);

export default Product;
