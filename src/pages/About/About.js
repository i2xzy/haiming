import React from 'react';
import { Header } from '../../Components';

import stone from '../../img/stone.png';
import './About.scss';

const About = props => (
  <div className="About">
    <Header />
    <div className="About-bio">
      Taking the concept design issued by Lynne Hunt interiors, we developed a
      door and wayfinding signage solution. Each unit was supplied with a wall
      mounting bracket for ease of maintenance and installation, was
      individually LED illuminated and featured a bronze frame and bronze laser
      cut, raised lettering.
    </div>
    <img className="About-image" src={stone} alt="stone" />
    <div className="About-contact" id="contact">
      <div className="About-contact-address">
        Haiming Li
        <br />
        Studio 35, The Silk Mill
        <br />
        Brook Street, Tring
        <br />
        Hertfordshire, HP23 5EF
        <br />
      </div>
      <div className="About-contact-info">
        Call +44 (0)1525 222 364 Email
        <br />
        info@hoadandmore.com Instagram:
        <br />
        @haimingdesign
        <br />
      </div>
      <div className="About-contact-copyright">© 2019 Haiming Li</div>
    </div>
  </div>
);

export default About;
