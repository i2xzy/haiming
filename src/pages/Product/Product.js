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
      <div
        className="Product-info-details"
        dangerouslySetInnerHTML={{ __html: product.details }}
      ></div>
    </div>
  </div>
);

export default Product;
