import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2024 Fernando Lage. All rights reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="/contact" className="text-white">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
