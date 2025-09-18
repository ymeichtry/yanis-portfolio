import React, { useEffect } from "react";
import "./Navbar.css";

interface NavbarProps {
  nightLightMode: () => void;
  Theme: string;
  navbarClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  nightLightMode,
  Theme,
  navbarClick
}) => {
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    document.body.classList.toggle("scroll", window.scrollY > 130);
  };

  

  return (
    <nav className="navbar nav">
      <a href="#profile">
        <h1> &lt; ymeichtry /&gt;</h1>
      </a>
      <ul>
        <li>
          <a href="#profile">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li className="theme-toggle">
          <button 
            onClick={nightLightMode}
            aria-label={`Switch to ${Theme === 'light' ? 'dark' : 'light'} mode`}
            className="theme-button"
          >
            {Theme === 'light' ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 1V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 21V23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.21997 4.21997L5.63997 5.63997" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12H23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.21997 19.78L5.63997 18.36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.36 5.63997L19.78 4.21997" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </li>

      </ul>
      <div className="navbar-btn">
        <button onClick={navbarClick}>
          <svg
            id="navopen"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke={`${Theme === "dark" ? '#ffffff' : '#000000'} `}
            strokeWidth="2"
            strokeLinecap="butt"
            strokeLinejoin="bevel"
          >
            <line x1="12" y1="40" x2="12" y2="10"></line>
            <line x1="18" y1="40" x2="18" y2="4"></line>
            <line x1="6" y1="40" x2="6" y2="16"></line>
          </svg>

          <svg
            id="navclose"
            className="none"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke={`${Theme === "dark" ? '#ffffff' : '#000000'} `}
            strokeWidth="2"
            strokeLinecap="butt"
            strokeLinejoin="bevel"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
