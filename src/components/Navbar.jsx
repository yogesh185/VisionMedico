// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Import your social icons from the assets folder
import fbIcon from '../assets/fb.png';
import igIcon from '../assets/ig.png';

const baseLink = 'text-sm tracking-wide px-3 py-1 transition-colors duration-200';
const navClass = ({ isActive }) =>
  [baseLink, isActive ? 'text-red-600 border-b-2 border-red-600' : 'text-slate-800 hover:text-red-600'].join(' ');

// Mobile link styles
const mobileNavClass = ({ isActive }) =>
  [
    'block py-3 text-center text-gray-700 transition-colors',
    isActive ? 'font-semibold text-red-600' : 'hover:bg-red-50',
  ].join(' ');

const FACEBOOK_URL = 'https://www.facebook.com/your-page';
const INSTAGRAM_URL = 'https://www.instagram.com/your-profile';

// Hamburger and Close Icon components
const MenuIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    // Add relative positioning for the dropdown
    <header className="relative bg-[#fdf5f5]/90 backdrop-blur border-b border-red-100 sticky top-0 z-30">
      {/* Main Navbar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Left: Logo + text */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 shadow-md">
            <span className="text-lg font-semibold text-white">VB</span>
          </div>
          <div className="leading-tight">
            <p className="text-xs font-semibold tracking-[0.25em] text-red-700 uppercase">
              Vision
            </p>
            <p className="text-sm font-semibold text-slate-900">
              Blood Centre
            </p>
          </div>
        </div>

        {/* Center: nav links (desktop) */}
        <nav className="hidden md:flex items-center gap-4">
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/blood-groups" className={navClass}>Info</NavLink>
          <NavLink to="/gallery" className={navClass}>Gallery</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
        </nav>

        {/* Right: website + social icons (desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <a href="https://www.visionmedico.com" target="_blank" rel="noopener noreferrer" className="text-xs font-medium tracking-wide text-slate-700 hover:text-red-600">
            www.visionmedico.com
          </a>
          <div className="flex items-center gap-4">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-transform hover:scale-110">
              <img src={fbIcon} alt="Facebook" className="h-5 w-5" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-transform hover:scale-110">
              <img src={igIcon} alt="Instagram" className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          absolute top-full left-0 w-full overflow-hidden bg-white shadow-md transition-all duration-300 ease-in-out md:hidden
          ${isMenuOpen ? 'max-h-96' : 'max-h-0'}
        `}
      >
        <nav className="flex flex-col border-t border-gray-100">
          <NavLink to="/" end className={mobileNavClass} onClick={handleLinkClick}>Home</NavLink>
          <NavLink to="/blood-groups" className={mobileNavClass} onClick={handleLinkClick}>Info</NavLink>
          <NavLink to="/gallery" className={mobileNavClass} onClick={handleLinkClick}>Gallery</NavLink>
          <NavLink to="/contact" className={mobileNavClass} onClick={handleLinkClick}>Contact</NavLink>

          {/* Social links in mobile menu */}
          <div className="flex justify-center gap-6 py-4">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={fbIcon} alt="Facebook" className="h-6 w-6" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={igIcon} alt="Instagram" className="h-6 w-6" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
