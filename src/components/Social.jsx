import React from 'react';
import gitHub from '../img/Social_Github.png';
import linkedIn from '../img/Social_Linkedin.png';
import twitter from '../img/Social_Twitter.png';
import medium from '../img/Social_Medium.png';
import angelList from '../img/Social_AngelList.png';

const Social = () => (
  <ul className="socialMedia">
    <li><a href="https://github.com/Retky"><img src={gitHub} alt="GitHub" /></a></li>
    <li><a href="https://www.linkedin.com/in/retky/"><img src={linkedIn} alt="LinkedIn" /></a></li>
    <li><a href="https://twitter.com/retkyFox"><img src={twitter} alt="Twitter" /></a></li>
    <li><a href="https://medium.com/@retky"><img src={medium} alt="Medium" /></a></li>
    <li><a href="https://angel.co/u/retky"><img src={angelList} alt="AngelList" /></a></li>
  </ul>
);

export default Social;
