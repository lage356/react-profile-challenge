import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid justify-content-between">
        <h1 className="navbar-brand font-weight-bold text-primary">Fernando Lage Portafolio</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
