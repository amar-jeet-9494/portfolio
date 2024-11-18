import React from 'react';
// import './Footer.css'; // Optional: If you want to add some CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content text-center">
        <h4>
          Copyright © 2024 All rights reserved | This portfolio website is created
          by Amarjeet Pandey.
        </h4>
        <div className="social-links">
          <div className="footer-menu">
            <ul className="footer-menu-list">
              <li className="footer-list-items">
                <a className="footer-links" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="footer-list-items">
                <a className="footer-links" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="footer-list-items">
                <a className="footer-links" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="footer-list-items">
                <a className="footer-links" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
