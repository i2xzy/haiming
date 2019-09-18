import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { logo } from '../../img';

import './Landing.scss';

const ScrollToTop = ({ history }) => {
  useEffect(() => {
    setTimeout(() => {
      console.log(history);
      history.push('/home');
    }, 2000);
  }, [history]);

  return (
    <div className="Landing">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default withRouter(ScrollToTop);
