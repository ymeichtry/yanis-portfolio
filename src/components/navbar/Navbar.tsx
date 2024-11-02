import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
      <Link to="/">
        <h1> &lt; ymeichtry /&gt;</h1>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <button id="nightlightmode" onClick={nightLightMode}>
            <svg
              id="moon"
              className="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>

            <svg
              id="sun"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
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
            stroke={`${Theme === "dark" ? "#ffffff" : "#000000"} `}
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
            stroke={`${Theme === "dark" ? "#ffffff" : "#000000"} `}
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
