
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS, MenuIcon, XIcon, DEFAULT_PROFILE_PIC } from '../constants';
import { Page } from '../types';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentProfilePic, setCurrentProfilePic] = useState<string>(DEFAULT_PROFILE_PIC);

  useEffect(() => {
    const updateProfilePic = () => {
      const storedPic = localStorage.getItem('profilePicture');
      setCurrentProfilePic(storedPic || DEFAULT_PROFILE_PIC);
    };

    updateProfilePic(); // Initial load

    window.addEventListener('profilePictureChanged', updateProfilePic);
    return () => {
      window.removeEventListener('profilePictureChanged', updateProfilePic);
    };
  }, []);

  return (
    <header className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center space-x-3 text-3xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
            <img 
              src={currentProfilePic} 
              alt="Profile" 
              className="w-10 h-10 rounded-full border-2 border-cyan-600 object-cover" 
            />
            <span>H. Aimable</span>
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-500 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 p-2 rounded-md"
              aria-label="Open main menu"
            >
              {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 inset-x-0 bg-slate-800 shadow-xl p-4 z-50">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-500 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
