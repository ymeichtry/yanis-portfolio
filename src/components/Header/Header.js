import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">ymeichtry</div>
      <nav>
        <ul>
          <li><a href="/experience">Experience</a></li>
          <li><a href="/work">Work</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;