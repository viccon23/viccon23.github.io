import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/viccon23" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="mailto:victor.contreras23@aol.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-envelope"></i>
          </a>
          <a href="https://github.com/viccon23" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;