
import React from 'react';
import { SOCIAL_LINKS, LocationIcon, STATIC_PROFILE_PIC_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950/50 border-t border-slate-700 text-slate-400 py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center mb-6">
          <img 
            src={STATIC_PROFILE_PIC_URL} 
            alt="H. Aimable Profile Picture" 
            className="w-16 h-16 rounded-full mb-4 border-2 border-cyan-700 shadow-md"
          />
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Connect with me</h3>
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
