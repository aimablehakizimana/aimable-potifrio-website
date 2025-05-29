import React from 'react';
// FileUpload import removed
import { ABOUT_ME_TEXT_PARAGRAPHS, DEFAULT_PROFILE_PIC } from '../constants';

const AboutMePage: React.FC = () => {
  // State and handlers for profile picture upload have been removed.
  // The profile picture is now constant.

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">About Me</h2>
      <div className="max-w-4xl mx-auto bg-slate-800 p-8 md:p-12 rounded-xl shadow-2xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <img 
              src={DEFAULT_PROFILE_PIC} 
              alt="H. Aimable" 
              className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-cyan-500 shadow-xl"
            />
            {/* FileUpload component removed */}
          </div>
          <div className="text-slate-300 space-y-4 leading-relaxed">
            {ABOUT_ME_TEXT_PARAGRAPHS.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "text-2xl font-semibold text-cyan-300" : "text-md"}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
