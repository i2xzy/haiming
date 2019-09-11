import React from 'react';
import { Header } from '../../Components';

import images from '../../img';
import './About.scss';

const About = props => (
  <div className="About">
    <Header />
    <div className="About-bio">
      Haiming mainly focuses on exploring different traditional cultures and
      combining modern language to design contemporary furniture. He is
      committed to using a combination of craft and mechanical methods to create
      different visual effects with different materials.
    </div>
    <img className="About-image" src={images.stone[1]} alt="stone" />
    <div className="About-contact" id="contact">
      <div className="About-contact-address">
        Haiming Li
        <br />
        56 Bemerton Street
        <br />
        London N1 0BN
      </div>
      <div className="About-contact-info">
        Call: +44 (0)7517 603 821
        <br />
        Email: lihaiming2018@gmail.com / haiming2018@126.com
        <br />
        Instagram: @hemming2810
        <br />
        Facebook: Haiming Li
        <br />
        Wechat: w532485162
      </div>
      <div className="About-contact-copyright">© 2019 Haiming Li</div>
    </div>
  </div>
);

export default About;
