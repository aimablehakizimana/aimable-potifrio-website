
import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS, LocationIcon, DEFAULT_PROFILE_PIC } from '../constants';

const Footer: React.FC = () => {
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
    <footer className="bg-slate-950/50 border-t border-slate-700 text-slate-400 py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img 
          src={currentProfilePic} 
          alt="Profile" 
          className="w-20 h-20 rounded-full border-2 border-cyan-500 object-cover mx-auto mb-6 shadow-lg" 
        />
        <h3 className="text-xl font-semibold text-cyan-400 mb-6">Connect with me</h3>
        <div className="flex justify-center space-x-6 mb-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="mb-4 text-sm">
          <LocationIcon />
          Karizinge Village, Kabuye Cell, Gashora Sector, Bugesera District, Eastern Province, Rwanda
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} HAKIZIMANA Aimable. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
