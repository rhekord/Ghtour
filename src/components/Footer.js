import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h4>Contact Information</h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:info@example.com">info@ghtour.com</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+1234567890">(+233) 030-890-355-8675</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
