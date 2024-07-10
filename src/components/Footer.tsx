import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Local Mart Hub</h5>
            <p>Your one-stop solution for finding and connecting with local shops.</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/" className="text-dark">Home</Link>
              </li>
              <li>
                <Link to="/about-us" className="text-dark">About Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-dark">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-dark">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-light">
        &copy; 2024 Local Mart Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
