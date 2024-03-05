import React from 'react';
import './Header.css'; 

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo">        
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <b>YANIS MEICHTRY</b>
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;