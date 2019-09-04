import React from 'react';
import classnames from 'classnames';

import './ProductName.scss';

const ProductName = ({ name, chineseName, isCentered }) => (
  <div className={classnames(['ProductName', isCentered && 'centered'])}>
    <span>{name.replace(/ /g, '\n')}</span>
    <br />
    <span className="ProductName-chineseName">{chineseName}</span>
  </div>
);

export default ProductName;
