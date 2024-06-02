import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2024 Fernando Lage. All rights reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="/contact" className="text-white">Contact Us</a></li>
          <li className="list-inline-item"><a href="https://github.com/lage356" className="text-white"><FaGithub /></a></li>
          <li className="list-inline-item"><a href="https://linkedin.com/in/fernando-lage-pena" className="text-white"><FaLinkedin /></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
