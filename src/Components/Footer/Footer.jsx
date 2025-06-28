import React from 'react';
import './Footer.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo1 from '../../assets/ft-logo1.svg';
import logo2 from '../../assets/ft-logo2.svg';
import logo3 from '../../assets/ft-logo3.svg';
import logo4 from '../../assets/ft-logo4.svg';
import logo5 from '../../assets/ft-logo5.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer-top-logos">
      {[logo1, logo2, logo3, logo4, logo5].map((src, index) => (
        <img key={index} src={src} alt={`logo-${index}`} />
      ))}
    </div>
    <div className="footer-main">
      <div className="footer-left">
        <h4>Suchitwa Mission</h4>
        <p>
          4th Floor, Revenue Tower Public<br />
          Office Compound, Trivandrum,<br />
          Kerala, India. PIN - 695 033
        </p>
        <div className="footer-social-icons">
          {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, idx) => (
            <a key={idx} href="#"><Icon /></a>
          ))}
        </div>
      </div>
      <div className="footer-right">
        <h4>About GLR</h4>
        <p>
          For ease of making the GLR process, the state has prepared an online system for
          performing the self-assessment where hospitality facilities can register and create
          an account of their-own to take part in self-assessment process.
        </p>
        <div className="footer-links">
          {["Disclaimer", "Privacy Policy", "Cookies Policy", "Sitemap", "General Terms & Conditions*", "Suchitwa Mission"].map((text, idx) => (
            <a key={idx} href="#">{text}</a>
          ))}
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 Suchitwa Mission. All Rights Reserved</p>
      <p>Powered by <strong>SRV InfoTech</strong></p>
    </div>
    <div className="footer-gap"></div>
  </footer>
);

export default Footer;